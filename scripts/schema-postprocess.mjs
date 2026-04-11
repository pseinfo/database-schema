#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { readFile, unlink, writeFile } from 'node:fs/promises';

class SchemaPostProcessor {

    HASH_PREFIX = 'pseinfo@';
    HASH_LENGTH = 16;
    INPUT_FILE = 'src/schema.raw.json';
    OUTPUT_FILE = 'src/schema.json';

    schema = null;
    definitions = null;

    forbiddenParentKeys = new Set( [ 'definitions', '$defs', 'properties', 'patternProperties', 'dependencies' ] );
    hashMemo = new WeakMap();
    nodesByHash = new Map();
    hashByOriginalName = new Map();
    sharedMap = new Map();
    replacedRefs = 0;

    async readSchema () {
        this.schema = JSON.parse( await readFile( this.INPUT_FILE, 'utf8' ) );
        this.original = JSON.parse( JSON.stringify( this.schema ) );
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

    /** Create a stable hash of a node. */
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

    /** Check if a node is a plain ref. */
    isPlainRef ( node ) {
        return node && typeof node === 'object' && ! Array.isArray( node ) &&
            Object.keys( node ).length === 1 && typeof node.$ref === 'string';
    }

    /** Collect nodes and their hashes. */
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

    /** Estimate savings of sharing a node. */
    estimateSavings ( entry, refName ) {
        const refText = JSON.stringify( { $ref: `#/definitions/${ refName }` } ).length;
        const defText = JSON.stringify( { [ refName ]: entry.node } ).length;
        return entry.count * entry.size - entry.count * refText - defText;
    }

    createSharedName ( hash ) {
        return `${ this.HASH_PREFIX }${ hash.slice( 0, this.HASH_LENGTH ) }`;
    }

    /** Collect existing definitions by hash. */
    collectExistingDefinitions () {
        for ( const [ name, def ] of Object.entries( this.definitions ) ) {
            this.hashByOriginalName.set( name, this.stableHash( def ) );
        }
    }

    /** Determine if a node should be shared. */
    shouldShare ( entry ) {
        if ( entry.count < 3 || entry.size < 20 || ! entry.allowed ) return false;
        if ( this.isPlainRef( entry.node ) ) return false;

        const savings = this.estimateSavings( entry, `${ this.HASH_PREFIX }${ 'X'.repeat( this.HASH_LENGTH ) }` );
        return savings > 20;
    }

    /** Build definition map to use for replacing nodes. */
    buildDefinitionMap () {
        const map = new Map();

        // 1. Any node that was previously a definition MUST remain one (just renamed)
        for ( const hash of this.hashByOriginalName.values() )
            if ( ! map.has( hash ) ) map.set( hash, this.createSharedName( hash ) );

        // 2. Add extra shared nodes based on criteria
        for ( const [ hash, entry ] of this.nodesByHash.entries() )
            if ( ! map.has( hash ) && this.shouldShare( entry ) )
                map.set( hash, this.createSharedName( hash ) );

        return map;
    }

    /** Normalize a ref to a canonical form. */
    normalizeRef ( ref ) {
        if ( typeof ref !== 'string' || ! ref.startsWith( '#/' ) ) return ref;

        const internalRef = ref.match( /^#\/(definitions|\$defs)\/(.+)$/ );
        if ( internalRef ) {
            const oldToken = internalRef[ 2 ];
            let oldName = oldToken;
            try { oldName = decodeURIComponent( oldToken ).replace( /~1/g, '/' ).replace( /~0/g, '~' ) }
            catch { /* keep raw */ }

            const hash = this.hashByOriginalName.get( oldName );
            if ( hash && this.sharedMap.has( hash ) ) return `#/definitions/${ this.sharedMap.get( hash ) }`;

            // If it's an internal ref but not mapped, it might be pointing to a new name already
            if ( oldName.startsWith( this.HASH_PREFIX ) ) return `#/definitions/${ oldName }`;
        }

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

    /** Normalize all refs in a node. */
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

    /** Determine if a node can be replaced. */
    canReplace ( node, parentKey, parentIsDefinitionValue, hash, sharedMap ) {
        if ( node === null || typeof node !== 'object' || Array.isArray( node ) || this.isPlainRef( node ) ) return false;
        if ( ! sharedMap.has( hash ) ) return false;
        if ( this.forbiddenParentKeys.has( parentKey ) ) return false;
        if ( parentIsDefinitionValue && parentKey && sharedMap.get( hash ) === parentKey ) return false;
        return true;
    }

    /** Replace nodes with shared definitions. */
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
        console.log( '[schema-postprocess] Reading raw schema ...' );
        await this.readSchema();
        this.setDefinitions();

        console.log( '[schema-postprocess] Collecting nodes ...' );
        this.collect( this.schema, null );

        console.log( '[schema-postprocess] Collecting existing definitions ...' );
        this.collectExistingDefinitions();

        console.log( `[schema-postprocess] Collected ${ this.nodesByHash.size } unique node hashes` );

        console.log( '[schema-postprocess] Building shared definition map ...' );
        this.sharedMap = this.buildDefinitionMap();

        console.log( `[schema-postprocess] Shared definition map size: ${ this.sharedMap.size }` );

        // 1. Rebuild definitions with the new stable names
        const nextDefinitions = {};
        for ( const [ hash, name ] of this.sharedMap.entries() ) {
            const entry = this.nodesByHash.get( hash );
            if ( entry ) nextDefinitions[ name ] = entry.node;
        }
        this.schema.definitions = nextDefinitions;

        console.log( '[schema-postprocess] Replacing duplicate subtrees with $ref pointers ...' );
        const reduced = this.replace( this.schema, null, this.sharedMap );
        console.log( `[schema-postprocess] Replaced ${ this.replacedRefs } duplicate subtrees` );

        console.log( '[schema-postprocess] Normalizing all $ref values ...' );
        this.schema = this.normalizeRefs( reduced );

        console.log( '[schema-postprocess] Writing normalized schema ...' );
        await this.writeSchema();
        console.log( `[schema-postprocess] Processed schema saved to ${ this.OUTPUT_FILE }` );
    }

}

const processor = new SchemaPostProcessor();
processor.run().catch( ( error ) => {
    console.error( '[schema-postprocess] Error:', error.message );
    process.exit( 1 );
} );
