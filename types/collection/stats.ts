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
    /** Total number of unique chemical elements documented. */
    elements: Distinct< number >;
    /** Total number of unique isotopes (nuclides) and isomers documented. */
    nuclides: Distinct< number >;
    /** Total number of chemical compounds in the registry. */
    compounds: Distinct< number >;
    /** Total number of distinct mineral species and varieties. */
    minerals: Distinct< number >;
    /** Total number of documented chemical mixtures and solutions. */
    mixtures: Distinct< number >;
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
    /** The primary communication channel or professional URI for the contributor. */
    contact?: Distinct< string >;
  }[] >;
} >;
