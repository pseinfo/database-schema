import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';

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
        this.schema = JSON.parse( await readFile( this.INPUT_FILE, 'utf8' ) );
    }

    async writeSchema () {
        await writeFile( this.OUTPUT_FILE, JSON.stringify( this.schema, null, 2 ), 'utf8' );
    }

    async run () {
        await this.readSchema();
        this.definitions = this.schema.definitions || this.schema.$defs || {};

        if ( ! this.schema.definitions ) {
            this.schema.definitions = this.definitions;
            delete this.schema.$defs;
        }
    }

}
