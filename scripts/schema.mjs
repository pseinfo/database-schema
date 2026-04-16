#!/usr/bin/env node

import { resolve } from 'node:path';
import { createGenerator } from 'ts-json-schema-generator';

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
    this.log( `Process ${ mode.toUpperCase() } completed successfully` );
  }

  // ---- Generate ----

  async generate () {
    this.log( 'Generating schema from TypeScript types ...' );
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
      this.log( 'Generation successful.' );
    } catch ( err ) {
      this.error( `Generation failed: ${ err.message }` );
      throw err;
    }
  }

}

( new SchemaGenerator() ).run( process.argv[ 2 ] || 'make' ).catch( ( err ) => {
  console.error( `[schema] Failed: ${ err.message }` );
  process.exit( 1 );
} );
