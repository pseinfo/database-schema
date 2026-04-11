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

    log ( message ) {
        const date = new Date().toISOString().split( '.' )[ 0 ].replace( 'T', ' ' );
        console.log( `[${ date }] ${ message }` );
    }
    
    async readSchema () {
        this.log( `Reading schema from ${ this.INPUT_FILE } ...` );
        this.schema = JSON.parse( await readFile( this.INPUT_FILE, 'utf8' ) );
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
        if ( Array.isArray( node ) ) content = '[' + node.map( this.stableHash ).join( ',' ) + ']';
        else {
            const keys = Object.keys( node ).sort();
            content = '{' + keys.map( ( key ) => `${ JSON.stringify( key ) }:${ this.stableHash( node[ key ] ) }` ).join( ',' ) + '}';
        }

        const hash = createHash( 'sha1' ).update( content ).digest( 'hex' );
        this.hashMemo.set( node, hash );
        return hash;
    }

    isPlainRef ( node ) {
        return node && typeof node === 'object' && ! Array.isArray( node ) &&
            Object.keys( node ).length === 1 && typeof node.$ref === 'string';
    }

    async writeSchema () {
        await writeFile( this.OUTPUT_FILE, JSON.stringify( this.schema, null, 2 ), 'utf8' );
        await unlink( this.INPUT_FILE );
    }

    async run () {
        await this.readSchema();
        this.setDefinitions();

        await this.writeSchema();
    }

}

const processor = new SchemaPostProcessor();
processor.run().catch( ( error ) => {
    console.error( error );
    process.exit( 1 );
} );
