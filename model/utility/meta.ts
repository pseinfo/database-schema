/**
 * @file model/utility/meta.ts
 * @description System-level metadata for versioning, tracking modifications, and ensuring database integrity.
 */

import type { Expand } from 'devtypes/types/util';
import type { Collection, Distinct } from '../base/modifier';
import type { IsoDate, RepoBase } from '../base/primitive';

/**
 * Structural wrapper that enriches a data collection with administrative tracking information.
 * 
 * @template T The collection structure being enriched with metadata.
 */
export type Metadata< T extends Collection< unknown > > = Expand< T & {
  /** Internal administrative tracking data. */
  '@metadata': Distinct< {
    /** The version of the database schema used to define the entity. */
    readonly schemaVersion: 1;
    /** Timestamp of the most recent modification to the entity's source file. */
    lastModified: IsoDate;
    /** A stable URI pointing to the specific version of the entity in the source repository. */
    permalink: `${ RepoBase }/blob/${ string }/data/${ string }.ts`
    /** The unique identifier of the version control commit that last modified the file. */
    commit: string;
    /** Cryptographic fingerprint of the file's content to ensure data integrity. */
    hash: string;
  } >;
} >;

/**
 * High-level descriptive and administrative metadata for the entire database instance.
 */
export type DBMeta = Distinct< {
  /** The version of the database schema used for the overall structure. */
  readonly schemaVersion: 1;
  /** The general license governing the use of the database. */
  readonly license: 'MIT';
  /** Concise name of the database instance. */
  title: Distinct< string >;
  /** Detailed summary of the database's scientific scope and purpose. */
  description: Distinct< string >;
  /** Semantic version of the database release. */
  version: string;
  /** Internal tracking identifier for the current database state. */
  revision: string;
  /** Timestamp of the last database-wide update. */
  lastModified: IsoDate;
  /** List of individuals who have provided data or technical maintenance. */
  contributors: Array< {
    /** GitHub username of the contributor. */
    name: string;
    /** Public email address or website URL of the contributor. */
    contact?: string;
  } >;
  /** Stable URI pointing to the specific release version of the database. */
  permalink: `${ RepoBase }/releases/tag/v${ string }`
} >;
