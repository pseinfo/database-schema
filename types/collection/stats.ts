/**
 * @file stats.ts
 * @description Defines the schema for database metrics, contributor activity, and
 * entity distribution statistics.
 */

import type { Collection, Distinct, Group } from '../abstract/collection';

/**
 * Registry of database-wide metrics and administrative statistics.
 */
export type StatsCollection = Collection< {
  /** The total storage size or relative scale of the data set. */
  size: Distinct< number >;

  /** Metrics regarding the distribution of scientific entities in the repository. */
  entities: Group< {
    /** Stats for chemical elements. */
    elements: Distinct< {
      /** The total number of unique chemical elements documented. */
      count: number;
      /** The size of the chemical elements data in bytes. */
      bytes: number;
    } >;
    /** Stats for nuclides. */
    nuclides: Distinct< {
      /** The total number of unique nuclides documented. */
      count: number;
      /** The size of the nuclides data in bytes. */
      bytes: number;
    } >;
    /** Stats for compounds. */
    compounds: Distinct< {
      /** The total number of unique compounds documented. */
      count: number;
      /** The size of the compounds data in bytes. */
      bytes: number;
    } >;
    /** Stats for minerals. */
    minerals: Distinct< {
      /** The total number of unique minerals documented. */
      count: number;
      /** The size of the minerals data in bytes. */
      bytes: number;
    } >;
    /** Stats for mixtures. */
    mixtures: Distinct< {
      /** The total number of unique mixtures documented. */
      count: number;
      /** The size of the mixtures data in bytes. */
      bytes: number;
    } >;
  } >;

  /**
   * List of individuals or organizations who have provided data or structural updates.
   * The command "git shortlog -snc" will generate this list.
   */
  contributors: Distinct< {
    /** The official name or alias of the contributor. */
    name: Distinct< string >;
    /** The ISO 8601 timestamp of the contributor's most recent change. */
    lastModified: Distinct< string >;
    /** The cumulative count of verified data points or structural edits made. */
    edits: Distinct< number >;
    /** The size of the contributor's data in bytes. */
    bytes: Distinct< number >;
    /** The primary communication channel or professional URI for the contributor. */
    contact?: Distinct< string >;
  }[] >;
} >;
