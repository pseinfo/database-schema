#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
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
    FORBIDDEN_KEYS: new Set( [ 'definitions', '$defs', 'properties', 'patternProperties', 'dependencies' ] ),
    MIN_SAVINGS_TH: 40,
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

  async run ( mode ) {
    const start = process.hrtime();

    switch ( mode ) {
      case 'generate':
        await this.generate();
        await this.save();
        break;

      case 'optimize':
        await this.load();
        await this.optimize();
        await this.save();
        break;

      case 'validate':
        await this.load();
        await this.validate();
        break;

      default:
        await this.generate();
        await this.optimize();
        await this.validate();
        await this.save();
        break;
    }

    const end = process.hrtime( start );
    const seconds = ( end[ 0 ] + end[ 1 ] / 1e9 ).toFixed( 2 );
    this.log( `Finished in ${ seconds } seconds.` );
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
    this.log( `Normalizing definitions ...` );
    const definitions = this.schema.definitions || this.schema.$defs || {};
    this.schema.definitions = definitions;
    delete this.schema.$defs;

    // 2. Perform Merkle-Tree analysis
    this.log( `Analyzing schema structures ...` );
    this.analyzeNode( this.schema, null );

    for ( const [ name, def ] of Object.entries( definitions ) )
      this.hashByOriginalName.set( name, this.analyzeNode( def, 'definitions' ).hash );

    this.log( `Found ${ this.nodesByHash.size } unique structures across the schema.` );

    // 3. Rebuild with shared definitions
    this.log( `Identifying shared structures for optimization ...` );
    this.sharedMap = this.buildSharedMap();
    const nextDefinitions = {};

    for ( const [ hash, name ] of this.sharedMap.entries() ) {
      const entry = this.nodesByHash.get( hash );
      if ( entry ) nextDefinitions[ name ] = this.performReplacement( entry.node, name, true );
    }

    this.log( `Replacing ${ this.replacedRefs } occurrences with $ref pointers to shared definitions ...` );

    this.schema = {
      ...this.performReplacement( this.schema, null, false ),
      definitions: nextDefinitions
    };

    // 4. Enhance metadata
    this.log( `Enhancing metadata ...` );
    await this.enhanceMetadata();
  }

  analyzeNode ( node, parentKey = null ) {
    if ( node === null || typeof node !== 'object' ) {
      const str = JSON.stringify( node );
      return { hash: str, size: str.length };
    }

    if ( this.hashMemo.has( node ) ) return this.hashMemo.get( node );

    let hash, size;
    if ( Array.isArray( node ) ) {
      const children = node.map( item => this.analyzeNode( item, parentKey ) );
      hash = createHash( 'sha1' ).update( `[${ children.map( c => c.hash ).join( ',' ) }]` ).digest( 'hex' );
      size = 2 + ( children.length > 1 ? children.length - 1 : 0 ) + children.reduce( ( s, c ) => s + c.size, 0 );
    } else {
      const keys = Object.keys( node ).sort();
      const children = keys.map( key => ( { key, res: this.analyzeNode( node[ key ], key ) } ) );
      hash = createHash( 'sha1' ).update( `{${ children.map( c => `"${ c.key }":${ c.res.hash }` ).join( ',' ) }}` ).digest( 'hex' );
      size = 2 + ( keys.length > 1 ? keys.length - 1 : 0 ) + children.reduce( ( s, c ) => s + c.key.length + 3 + c.res.size, 0 );
    }

    const result = { hash, size };
    this.hashMemo.set( node, result );

    if ( ! Array.isArray( node ) ) {
      const entry = this.nodesByHash.get( hash ) || { count: 0, size, node, allowed: false };
      entry.count++;

      if ( ! this.CONFIG.FORBIDDEN_KEYS.has( parentKey ) ) entry.allowed = true;
      this.nodesByHash.set( hash, entry );
    }

    return result;
  }

  buildSharedMap () {
    const map = new Map();
    for ( const hash of this.hashByOriginalName.values() )
      if ( ! map.has( hash ) ) map.set( hash, this.getSharedName( hash ) );

    const refTextLen = 22 + this.CONFIG.HASH_PREFIX.length + this.CONFIG.HASH_LENGTH;
    for ( const [ hash, e ] of this.nodesByHash.entries() ) {
      if ( map.has( hash ) || e.count < this.CONFIG.MIN_OCCURRENCES || e.size < this.CONFIG.MIN_NODE_SIZE || ! e.allowed ) continue;
      if ( e.node.$ref && Object.keys( e.node ).length === 1 ) continue;

      const name = this.getSharedName( hash );
      if ( ( e.count * e.size - e.count * refTextLen - ( name.length + 5 + e.size ) ) > this.CONFIG.MIN_SAVINGS_TH ) map.set( hash, name );
    }

    return map;
  }

  getSharedName ( hash ) {
    return `${ this.CONFIG.HASH_PREFIX }${ hash.slice( 0, this.CONFIG.HASH_LENGTH ) }`;
  }

  performReplacement ( node, parentKey, isDefValue = false ) {
    if ( node === null || typeof node !== 'object' ) return node;

    if ( node.$ref && typeof node.$ref === 'string' ) {
      const normalized = this.normalizeRef( node.$ref );
      if ( Object.keys( node ).length === 1 ) return { $ref: normalized };
      node = { ...node, $ref: normalized };
    }

    if ( Array.isArray( node ) ) return node.map( i => this.performReplacement( i, parentKey, false ) );

    const memo = this.hashMemo.get( node );
    if ( memo && this.sharedMap.has( memo.hash ) ) {
      const sharedName = this.sharedMap.get( memo.hash );

      if ( ! this.CONFIG.FORBIDDEN_KEYS.has( parentKey ) && ( ! isDefValue || sharedName !== parentKey ) ) {
        this.replacedRefs++;
        return { $ref: `#/definitions/${ sharedName }` };
      }
    }

    const out = {};
    const isChildOfDefs = parentKey === 'definitions' || parentKey === '$defs';
    for ( const [ key, value ] of Object.entries( node ) )
      out[ key ] = this.performReplacement( value, key, isChildOfDefs );

    return out;
  }

  normalizeRef ( ref ) {
    if ( ! ref.startsWith( '#/' ) ) return ref;

    const parts = ref.split( '/' );
    if ( parts[ 1 ] === 'definitions' || parts[ 1 ] === '$defs' ) {
      const oldName = decodeURIComponent( parts[ 2 ].replace( /~1/g, '/' ).replace( /~0/g, '~' ) );
      const hash = this.hashByOriginalName.get( oldName );

      if ( hash && this.sharedMap.has( hash ) ) return `#/definitions/${ this.sharedMap.get( hash ) }`;
    }

    return ref.replace( '#/$defs/', '#/definitions/' );
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

  // ---- Metadata ----

  async enhanceMetadata () {
    const pkg = JSON.parse( await readFile( this.FILES.PACKAGE, 'utf8' ) );
    const meta = {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: `https://unpkg.com/@pseinfo/database-schema@${ pkg.version }/src/schema.json`,
      title: pkg.description || 'PSEInfo Database Schema',
      description: 'Comprehensive schema for elements, compounds, minerals, and nuclides.',
      version: pkg.version,
      license: pkg.license || '',
      author: pkg.author?.name || pkg.author || '',
      build: { date: new Date().toISOString(), commit: this.getGitCommit() }
    };

    this.schema = { ...meta, ...this.schema };
  }

  getGitCommit () {
    try { return execSync( 'git rev-parse --short HEAD', { stdio: 'pipe' } ).toString().trim() }
    catch { return 'unknown' }
  }

  // ---- Analysis ----

  captureStats () {
    const content = stableStringify( this.schema, { space: 2 } );
    this.originalStats = {
      bytes: Buffer.byteLength( content, 'utf8' ),
      lines: content.split( '\n' ).length
    };
  }

  logAnalysis ( finalContent ) {
    if ( ! this.originalStats ) return;

    const finalBytes = Buffer.byteLength( finalContent, 'utf8' );
    const byteSaving = ( this.originalStats.bytes - finalBytes ) / this.originalStats.bytes * 100;
    const finalLines = finalContent.split( '\n' ).length;
    const lineSaving = ( this.originalStats.lines - finalLines ) / this.originalStats.lines * 100;

    this.log( `Final Analysis:` );
    this.log( `- Version: ${ this.schema.version }` );
    this.log( `- Build:   ${ this.schema.build.date } (${ this.schema.build.commit })` );
    this.log( `- Lines:   ${ this.originalStats.lines } -> ${ finalLines } (${ lineSaving.toFixed( 1 ) }% saved)` );
    this.log( `- Size:    ${ ( this.originalStats.bytes / 1024 ).toFixed( 1 ) } KB -> ${ ( finalBytes / 1024 ).toFixed( 1 ) } KB (${ byteSaving.toFixed( 1 ) }% saved)` );
    this.log( `- Nodes:   ${ this.nodesByHash.size } unique structures, ${ this.replacedRefs } replaced with $ref pointers` );
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

    await writeFile( resolve( this.FILES.FINAL ), content, 'utf8' );
    this.log( `Done.` );
    this.logAnalysis( content );
  }

  async load () {
    this.log( `Reading ${ this.FILES.FINAL } ...` );
    this.schema = JSON.parse( await readFile( resolve( this.FILES.FINAL ), 'utf8' ) );
    this.log( `Done.` );
  }

}

( new SchemaGenerator() ).run( process.argv[ 2 ] ).catch( ( err ) => {
  console.error( `[schema] Failed: ${ err.message }` );
  process.exit( 1 );
} );
