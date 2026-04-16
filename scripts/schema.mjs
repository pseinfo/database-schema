#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import Ajv from 'ajv';
import stableStringify from 'json-stable-stringify';
import { createGenerator } from 'ts-json-schema-generator';

const require = createRequire( import.meta.url );
const draft7MetaSchema = require( 'ajv/dist/refs/json-schema-draft-07.json' );

class SchemaGenerator {

  FILES = {
    FINAL: 'src/schema.json',
    TSCONFIG: 'tsconfig.json',
    PACKAGE: 'package.json',
    TYPES_ENTRY: 'types/index.ts'
  };

  CONFIG = {
    HASH_PREFIX: 'pseinfo@',
    HASH_LENGTH: 8,
    FORBIDDEN_PARENT_KEYS: new Set( [ 'definitions', '$defs', 'properties', 'patternProperties', 'dependencies' ] ),
    MIN_SAVINGS_THRESHOLD: 40,
    MIN_OCCURRENCES: 3,
    MIN_NODE_SIZE: 30
  };

  constructor () {
    this.init();
  }

  init () {
    this.schema = null;
    this.originalStats = null;
    this.replacedRefs = 0;

    this.hashMemo = new WeakMap();
    this.nodesByHash = new Map();
    this.hashByOriginalName = new Map();
    this.sharedMap = new Map();
  }

  async run ( mode = 'make' ) {
    const actions = {
      generate: async () => await this.generate(),
      optimize: async () => { if ( ! this.schema ) await this.load(), await this.optimize() },
      validate: async () => { if ( ! this.schema ) await this.load(), await this.validate() }
    };

    if ( mode === 'make' ) {
      await actions.generate();
      await actions.optimize();
      await actions.validate();
    } else if ( actions[ mode ] ) {
      await actions[ mode ]();
    }

    if ( mode !== 'validate' ) await this.save();
    this.log( `Process ${ mode.toUpperCase() } completed successfully.` );
  }

  // ---- Generate ----

  async generate () {
    this.log( `Generating schema from TypeScript types ...` );

    const generator = createGenerator( {
      path: resolve( this.FILES.TYPES_ENTRY ),
      tsconfig: resolve( this.FILES.TSCONFIG ),
      type: 'Database',
      expose: 'all',
      jsDoc: 'extended',
      skipTypeCheck: false,
      sortProps: true,
      strictTuples: false,
      encodeRefs: true
    } );

    try {
      this.schema = generator.createSchema( 'Database' );
      this.log( `Generation successful.` );
    } catch ( err ) {
      this.error( `Generation failed: ${ err.message }` );
      throw err;
    }
  }

  // ---- Optimize ----

  async optimize () {
    if ( ! this.schema ) throw new Error( `No schema loaded to optimize.` );
    this.log( `Optimizing schema structure ...` );

    // 0. Capture baseline stats before optimization
    this.captureStats();

    // 1. Normalize definitions
    const definitions = this.schema.definitions || this.schema.$defs || {};
    this.schema.definitions = definitions;
    delete this.schema.$defs;

    // 2. Perform Merkle-Tree analysis
    this.log( 'Analyzing schema structures ...' );
    this.analyzeNode( this.schema, null );

    for ( const [ name, def ] of Object.entries( definitions ) )
      this.hashByOriginalName.set( name, this.analyzeNode( def, 'definitions' ).hash );

    // 3. Rebuild with shared definitions
    this.sharedMap = this.buildSharedMap();
    const nextDefinitions = {};

    for ( const [ hash, name ] of this.sharedMap.entries() ) {
      const entry = this.nodesByHash.get( hash );
      if ( entry ) nextDefinitions[ name ] = this.performReplacement( entry.node, name, true );
    }

    this.schema = {
      ...this.performReplacement( this.schema, null, false ),
      definitions: nextDefinitions
    };

    // 4. Enhance metadata
    await this.enhanceMetadata();
  }

  // ---- Validate ----

  async validate () {
    if ( ! this.schema ) throw new Error( `No schema loaded to validate.` );
    this.log( `Validating schema against JSON Schema Draft-07 ...` );

    const ajv = new Ajv( { allErrors: true, strict: false, logger: false } );
    if ( ! ajv.getSchema( 'http://json-schema.org/draft-07/schema#' ) ) ajv.addMetaSchema( draft7MetaSchema );

    if ( ! ajv.validateSchema( this.schema ) ) {
      this.error( `Validation failed: ${ ajv.errorsText( ajv.errors ) }` );
      throw new Error( `Schema is invalid.` );
    }

    this.log( `Validation successful.` );
  }

  // ---- IO ----

  log ( msg ) {
    console.log( `[schema] ${ msg }` );
  }

  error ( msg ) {
    console.error( `[schema] ERROR: ${ msg }` );
  }

  async save () {
    this.log( `Writing results to ${ this.FILES.FINAL } ...` );

    const topOrder = [ '$schema', '$id', 'title', 'description', 'version', 'license', 'author', 'build', 'definitions' ];
    const content = stableStringify( this.schema, { space: 2, cmp: ( a, b ) =>
      topOrder.indexOf( a.key ) - topOrder.indexOf( b.key ) || a.key.localeCompare( b.key )
    } );

    await writeFile( this.FILES.FINAL, content, 'utf8' );
    this.log( `Done.` );
    this.logAnalysis( content );
  }

  async load () {
    this.log( `Reading ${ this.FILES.FINAL } ...` );
    this.schema = JSON.parse( await readFile( this.FILES.FINAL, 'utf8' ) );
    this.log( `Done.` );
  }

}

( new SchemaGenerator() ).run( process.argv[ 2 ] || 'make' ).catch( ( err ) => {
  console.error( `[schema] Failed: ${ err.message }` );
  process.exit( 1 );
} );
