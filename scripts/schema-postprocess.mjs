#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFile, unlink, writeFile } from 'node:fs/promises';

class SchemaPostProcessor {

    INPUT_FILE = 'src/schema.raw.json';
    OUTPUT_FILE = 'src/schema.json';

    schema = null;
    definitions = null;

    forbiddenParentKeys = new Set( [ 'definitions', '$defs', 'properties', 'patternProperties', 'dependencies' ] );
    hashMemo = new WeakMap();
    nodesByHash = new Map();
    existingDefByHash = new Map();
    sharedId = 0;
    replacedRefs = 0;

    log ( message ) {
        const date = new Date().toISOString().split( '.' )[ 0 ].replace( 'T', ' ' );
        console.log( `[${ date }] ${ message }` );
    }

    async readSchema () {
        this.schema = JSON.parse( await readFile( this.INPUT_FILE, 'utf8' ) );
    }

    async writeSchema () {
        await writeFile( this.OUTPUT_FILE, JSON.stringify( this.schema, null, 2 ), 'utf8' );
        await unlink( this.INPUT_FILE );
    }

    setDefinitions () {
        this.definitions = this.schema.definitions || this.schema.$defs || {};

        if ( ! this.schema.definitions ) {
            this.schema.definitions = this.definitions;
            delete this.schema.$defs;
        }
    }

    stableHash ( node ) {
        if ( node === null || typeof node !== 'object' ) return JSON.stringify( node );
        if ( this.hashMemo.has( node ) ) return this.hashMemo.get( node );

        let content;
        if ( Array.isArray( node ) ) content = '[' + node.map( i => this.stableHash( i ) ).join( ',' ) + ']';
        else {
            const keys = Object.keys( node ).sort();
            content = '{' + keys.map( k => `${ JSON.stringify( k ) }:${ this.stableHash( node[ k ] ) }` ).join( ',' ) + '}';
        }

        const hash = createHash( 'sha1' ).update( content ).digest( 'hex' );
        this.hashMemo.set( node, hash );
        return hash;
    }

    isPlainRef ( node ) {
        return node && typeof node === 'object' && ! Array.isArray( node ) &&
            Object.keys( node ).length === 1 && typeof node.$ref === 'string';
    }

    collect ( node, parentKey = null ) {
        if ( node === null || typeof node !== 'object' ) return;

        if ( ! Array.isArray( node ) ) {
            const hash = this.stableHash( node );
            const size = JSON.stringify( node ).length;
            const entry = this.nodesByHash.get( hash ) || { count: 0, size, node, allowed: false };
            entry.count += 1;

            if ( ! this.forbiddenParentKeys.has( parentKey ) ) entry.allowed = true;
            this.nodesByHash.set( hash, entry );
        }

        if ( Array.isArray( node ) ) node.forEach( ( item ) => this.collect( item, parentKey ) );
        else Object.entries( node ).forEach( ( [ key, value ] ) => this.collect( value, key ) );
    }
    
    estimateSavings ( entry, refName ) {
        const refText = JSON.stringify( { $ref: `#/definitions/${ refName }` } ).length;
        const defText = JSON.stringify( { [ refName ]: entry.node } ).length;
        return entry.count * entry.size - entry.count * refText - defText;
    }

    createSharedName () {
        return `Shared${ String( this.sharedId++ ).padStart( 4, '0' ) }`;
    }

    collectExistingDefinitions () {
        for ( const [ name, def ] of Object.entries( this.definitions ) ) {
            const hash = this.stableHash( def );
            if ( ! this.existingDefByHash.has( hash ) ) this.existingDefByHash.set( hash, name );
        }
    }
    
    shouldShare ( hash, entry ) {
        if ( entry.count < 3 || entry.size < 20 || ! entry.allowed ) return false;
        if ( this.isPlainRef( entry.node ) ) return false;
        if ( this.existingDefByHash.has( hash ) ) return false;

        const savings = this.estimateSavings( entry, 'SharedXXXX' );
        return savings > 20;
    }

    buildDefinitionMap () {
        const map = new Map( this.existingDefByHash );
        for ( const [ hash, entry ] of this.nodesByHash.entries() )
            if ( ! map.has( hash ) && this.shouldShare( hash, entry ) )
                map.set( hash, this.createSharedName() );

        return map;
    }
    
    normalizeRef ( ref ) {
        if ( typeof ref !== 'string' || ! ref.startsWith( '#/' ) ) return ref;

        const normalizeToken = ( token ) => {
            let decoded = token;
            try { decoded = decodeURIComponent( token ) }
            catch { /* keep raw */ }

            decoded = decoded.replace( /~1/g, '/' ).replace( /~0/g, '~' );
            const pointerSafe = decoded.replace( /~/g, '~0' ).replace( /\//g, '~1' );
            return encodeURIComponent( pointerSafe );
        };

        const definitionsPrefix = '#/definitions/';
        const defsPrefix = '#/$defs/';
        if ( ref.startsWith( definitionsPrefix ) || ref.startsWith( defsPrefix ) ) {
            const prefix = ref.startsWith( definitionsPrefix ) ? definitionsPrefix : defsPrefix;
            const token = ref.slice( prefix.length );
            return `${ prefix }${ normalizeToken( token ) }`;
        }

        const parts = ref.slice( 2 ).split( '/' );
        const normalized = parts.map( normalizeToken );
        return `#/${ normalized.join( '/' ) }`;
    }
    
    normalizeRefs ( node ) {
        if ( node === null || typeof node !== 'object' ) return node;
        if ( Array.isArray( node ) ) return node.map( i => this.normalizeRefs( i ) );

        if ( typeof node.$ref === 'string' ) {
            const normalizedRef = this.normalizeRef( node.$ref );
            if ( Object.keys( node ).length === 1 ) return { $ref: normalizedRef };
            node = { ...node, $ref: normalizedRef };
        }

        const out = {};
        for ( const [ key, value ] of Object.entries( node ) ) out[ key ] = this.normalizeRefs( value );
        return out;
    }
    
    canReplace ( node, parentKey, parentIsDefinitionValue, hash, sharedMap ) {
        if ( node === null || typeof node !== 'object' || Array.isArray( node ) || this.isPlainRef( node ) ) return false;
        if ( ! sharedMap.has( hash ) ) return false;
        if ( this.forbiddenParentKeys.has( parentKey ) ) return false;
        if ( parentIsDefinitionValue && parentKey && sharedMap.get( hash ) === parentKey ) return false;
        return true;
    }
    
    replace ( node, parentKey, sharedMap, parentIsDefinitionValue = false ) {
        if ( node === null || typeof node !== 'object' ) return node;

        if ( typeof node.$ref === 'string' ) {
            const normalizedRef = this.normalizeRef( node.$ref );
            if ( Object.keys( node ).length === 1 ) return { $ref: normalizedRef };
            node = { ...node, $ref: normalizedRef };
        }

        if ( Array.isArray( node ) ) return node.map( ( item ) => this.replace( item, parentKey, sharedMap, false ) );

        const hash = this.stableHash( node );
        if ( this.canReplace( node, parentKey, parentIsDefinitionValue, hash, sharedMap ) ) {
            this.replacedRefs += 1;
            return { $ref: `#/definitions/${ sharedMap.get( hash ) }` };
        }

        const replacement = {};
        for ( const [ key, value ] of Object.entries( node ) ) {
            const childIsDefinitionValue = parentKey === 'definitions' || parentKey === '$defs';
            replacement[ key ] = this.replace( value, key, sharedMap, childIsDefinitionValue );
        }

        return replacement;
    }

    async run () {
        this.log( 'Reading raw schema ...' );
        await this.readSchema();
        this.setDefinitions();

        this.log( 'Collecting nodes ...' );
        this.collect( this.schema, null );

        this.log( 'Collecting existing definitions ...' );
        this.collectExistingDefinitions();

        this.log( `Collected ${ this.nodesByHash.size } unique node hashes` );

        this.log( 'Building shared definition map ...' );
        const sharedMap = this.buildDefinitionMap();

        this.log( `Shared definition map size: ${ sharedMap.size }` );
        for ( const [ hash, name ] of sharedMap.entries() ) if ( ! this.schema.definitions[ name ] ) {
            const entry = this.nodesByHash.get( hash );
            if ( entry ) this.schema.definitions[ name ] = entry.node;
        }

        this.log( 'Replacing duplicate subtrees with $ref pointers ...' );
        const reduced = this.replace( this.schema, null, sharedMap );
        this.log( `Replaced ${ this.replacedRefs } duplicate subtrees` );

        this.log( 'Normalizing all $ref values ...' );
        this.schema = this.normalizeRefs( reduced );

        this.log( 'Writing normalized schema ...' );
        await this.writeSchema();
        this.log( `>> Processed schema saved to ${ this.OUTPUT_FILE }` );
    }

}

const processor = new SchemaPostProcessor();
processor.run().catch( ( error ) => {
    console.error( error );
    process.exit( 1 );
} );
