/**
 * @file enum/system/domain.ts
 * @description Defines enums for the primary architectural domains and registries of the database.
 */

/**
 * Core scientific entities that represent the primary focus of the database.
 */
export enum DomainType {
  /** Chemical elements as defined by their atomic number. */
  ELEMENT = 'element',
  /** Specific isotopes or nuclear isomers of chemical elements. */
  NUCLIDE = 'nuclide',
  /** Substances composed of multiple atoms in fixed stoichiometric ratios. */
  COMPOUND = 'compound',
  /** Naturally occurring inorganic solids with defined crystal structures. */
  MINERAL = 'mineral',
  /** Physical blends of multiple chemical species. */
  MIXTURE = 'mixture'
};

/**
 * Supporting system-level registries used to manage metadata and shared resources.
 */
export enum RegistryType {
  /** Storage for binary assets such as images and structural files. */
  BLOB = 'blob',
  /** Scientific or administrative bodies and institutions. */
  ORGANIZATION = 'organization',
  /** Individual contributors, researchers, or scientists. */
  PERSON = 'person',
  /** Bibliographic data and scientific citations. */
  REFERENCE = 'reference',
  /** Definitions and conversions for physical quantities and units. */
  UNIT = 'unit'
};
