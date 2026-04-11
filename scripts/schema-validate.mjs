#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import Ajv from 'ajv';

const require = createRequire( import.meta.url );
const draft7MetaSchema = require( 'ajv/dist/refs/json-schema-draft-07.json' );

const SCHEMA_FILE = 'src/schema.json';

( async () => {
    console.log( '[schema-validate] Reading schema ...' );
    const schema = JSON.parse( await readFile( SCHEMA_FILE, 'utf8' ) );
    const ajv = new Ajv( { allErrors: true, strict: false, logger: false } );

    if ( ! ajv.getSchema( 'http://json-schema.org/draft-07/schema#' ) ) ajv.addMetaSchema( draft7MetaSchema );

    console.log( '[schema-validate] Validating schema against Draft-07 ...' );
    const isValid = ajv.validateSchema( schema );

    if ( ! isValid ) {
        console.error( '[schema-validate] Schema is invalid!' );
        console.error( ajv.errorsText( ajv.errors ) );
        process.exit( 1 );
    }

    console.log( '[schema-validate] Schema is valid JSON Schema Draft-07.' );
} )().catch( ( error ) => {
    console.error( '[schema-validate] Error:', error.message );
    process.exit( 1 );
} );
