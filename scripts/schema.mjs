#!/usr/bin/env node

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
    this.hashMemo = new WeakMap();
    this.nodesByHash = new Map();
    this.hashByOriginalName = new Map();
    this.sharedMap = new Map();
    this.replacedRefs = 0;
  }

}

// Global runner
( new SchemaGenerator() ).run( process.argv[ 2 ] || 'full' ).catch( ( err ) => {
  console.error( `[schema] FAILED: ${ err.message }` );
  process.exit( 1 );
} );
