/**
 * @file meta.ts
 * @description Provides the structural definitions for the database root metadata
 * and administrative statistics. This module enables tracking of repository-wide
 * metrics, contributor impact, and schema versioning.
 */

import type { Expand } from 'devtypes/types/util';
import type { EntityType } from '../../enum/util';
import type { Collection, Distinct } from './collection';
import type { ISO8601Date } from './util';

/**
 * Basic biographical and contact information for an individual or organization
 * contributing to the scientific database.
 * 
 * Will have GitHub username and public email or website if available.
 */
export interface Contributor {
  /** The primary name or alias of the contributor. */
  name: string;
  /** The primary communication channel or professional URI for the contributor. */
  contact?: string;
}

/**
 * Root metadata structure for the entire scientific repository.
 * Contains legal, versioning, and administrative information necessary for
 * distribution and academic citation.
 */
export type DBMeta = Collection< {
  /** The constant version of the database schema for structural compatibility. */
  readonly schemaVersion: 1;
  /** The MIT license for the database. */
  readonly license: 'MIT';
  /** The current semantic version of the data collection. */
  version: Distinct< string >;
  /** The unique repository revision or commit hash representing the data state. */
  revision: Distinct< string >;
  /** The official title of the data repository. */
  title: Distinct< string >;
  /** A concise abstract describing the scope and purpose of the database. */
  description?: Distinct< string >;
  /** ISO 8601 timestamp of the global database build or last verified modification. */
  lastModified: Distinct< ISO8601Date >;
  /** The collective list of all individuals who have contributed to the current database state. */
  contributors: Distinct< Contributor[] >;
  /** The permalink to the current version of the database. */
  permalink: `https://github.com/pseinfo/database/releases/tag/v${string}`;
} >;

/**
 * Detailed metrics regarding the distribution of scientific data, repository scale,
 * and contributor activity. Designed for automated generation via repository scripts.
 */
export type DBStats = Collection< {
  /** Total cumulative size in bytes. */
  size: Distinct< number >;
  /** Total number of data points in the database. */
  count: Distinct< number >;
  /** Total number of edits. */
  edits: Distinct< number >;
  /** Distribution metrics for each scientific entity type. */
  entities: Distinct< {
    [ E in EntityType ]: {
      /** Count of discrete entities of this type. */
      count: number;
      /** Binary size of all entities of this type. */
      bytes: number;
    }
  } >;
  /** Analysis of contributor impact on the database content. */
  contributors: Distinct< Expand< Contributor & {
    /** ISO 8601 timestamp of the contributor's most recent valid commit. */
    lastModified: ISO8601Date;
    /** The count of edits made by the individual. */
    edits: number;
    /** The total volume of data (in bytes) introduced by this contributor. */
    bytes: number;
  } > [] >;
} >;
