/**
 * @file util.ts
 * @description General utility types for the scientific database schema, including metadata structures
 * and specialized groups for localized strings to ensure multi-language data integrity.
 */

import type { Expand } from 'devtypes/types/util';
import type { LangCode } from '../../enum/util';
import type { Distinct, Group } from '../abstract/collection';

/**
 * Defines the root metadata structure for the schema.
 * This ensures that every high-level entity or collection can be tracked for versioning and integrity.
 */
export type MetaData = Distinct< {
  /** Internal metadata object for administrative tracking */
  '@metadata': {
    /** The version of the schema used for this data object */
    schemaVersion: 1;
    /** ISO 8601 timestamp of the last modification */
    lastModified: string;
    /** Cryptographic hash for data integrity verification */
    hash: string;
  };
} >;

/**
 * A specialized group for localized strings or values.
 * It enforces at least one primary language (usually English) and allows optional translations.
 * @template L The primary language code(s) required for this group.
 * @template T The type of the value being localized (defaults to string).
 */
export type LangGroup< L extends LangCode = LangCode.ENGLISH, T = string > = Group< Expand<
  /** Mandatory entries for the primary language(s) */
  Required< { [ K in L ]: Distinct< T > } > &
  /** Optional entries for all other supported languages */
  Partial< { [ K in Exclude< LangCode, L > ]: Distinct< T > } >
> >;
