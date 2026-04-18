/**
 * @file util.ts
 * @description General utility types for the scientific database schema, including metadata structures
 * and specialized groups for localized strings to ensure multi-language data integrity.
 */

import type { Expand } from 'devtypes/types/util';
import type { LangCode } from '../../enum/util';
import type { Collection, Distinct, Group } from '../abstract/collection';

/**
 * Defines the root metadata structure for the schema, supporting automated enrichment.
 * This generic wrapper ensures that every high-level entity or collection can be tracked for
 * versioning, integrity, and source information.
 * @template T The underlying data structure to be enriched with metadata.
 */
export type MetaData< T extends Collection< unknown > = Collection< unknown > > = Expand< T & {
  /** Internal metadata object for administrative and scientific tracking. */
  '@metadata': Distinct< {
    /** The version of the schema used for this data object. */
    schemaVersion: 1;
    /** ISO 8601 timestamp of the last modification. */
    lastModified: string;
    /** Unique commit hash or version identifier representing the data source state. */
    commit: string;
    /** Cryptographic hash for data integrity verification of the entire object. */
    hash: string;
  } >;
} >;

/**
 * A specialized group for localized strings or values.
 * It enforces at least one primary language (usually English) and allows optional translations.
 * @template L The primary language code(s) required for this group.
 * @template T The type of the value being localized (defaults to string).
 */
export type LangGroup< L extends LangCode = LangCode.ENGLISH, T = string > = Group< Expand<
  /** Mandatory entries for the primary language(s). */
  Required< { [ K in L ]: Distinct< T > } > &
  /** Optional entries for all other supported languages. */
  Partial< { [ K in Exclude< LangCode, L > ]: Distinct< T > } >
> >;

/**
 * Defines the structure for a factory, which is a collection of data organized by a primary key.
 * Used to safely construct data files for the database.
 * @template P The path to the data file.
 * @template K The key used to identify the data.
 * @template ID The type of the identifier.
 * @template C The type of the data.
 */
export type Factory<
  P extends string,
  K extends string,
  ID extends string,
  C extends Collection< unknown >
> = Expand< {
  /** The key used to identify the data. */
  readonly [ key in K ]: ID;
} & {
  /** The path to the data directory. */
  readonly path: P;
  /** The data collection. */
  readonly data: C;
} >;
