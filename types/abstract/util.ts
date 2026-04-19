/**
 * @file util.ts
 * @description General utility types for the scientific database schema, including metadata structures
 * and specialized groups for localized strings to ensure multi-language data integrity.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { EntityType, LangCode } from '../../enum/util';
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
 * A robust factory utility type designed to facilitate the construction of the database repository.
 * These types are used as build-time "contracts" for individual data files, ensuring that the file
 * structure, identifiers, and underlying data collections are perfectly aligned.
 * 
 * This enables strict template validation within the IDE and CI/CD pipelines when creating new
 * entities (Elements, Nuclides, etc.) or registries (Units, References).
 * 
 * @template E The entity type or specialized registry category.
 * @template K A set of primary keys or identifiers that define the specific record (e.g., symbol, id).
 * @template C The raw scientific data collection associated with the entity.
 */
export type Factory<
  E extends EntityType | 'unit' | 'ref',
  K extends Record< string, string | number >,
  C extends Collection< unknown >
> = Expand< Brand< K & { data: C }, E, 'type', true > >;
