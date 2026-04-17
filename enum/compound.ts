/**
 * @file compound.ts
 * @description Defines enums for chemical compounds, their categories, and reactive properties.
 * This module covers bonding-based classification and structural qualifiers.
 */

/**
 * High-level grouping of substances based on their predominant bonding and structure.
 */
export enum CompoundCategory {
  /** Discrete groups of atoms held together by covalent bonds. */
  MOLECULE = 'molecule',
  /** Arranged in a rigid crystal lattice of alternating cations and anions. */
  IONIC = 'ionic',
  /** Formed from two or more metallic elements in a fixed ratio. */
  INTERMETALLIC = 'intermetallic',
  /** Coordination compounds involving a central metal atom and ligands. */
  COMPLEX = 'complex'
};

/**
 * Classification based on the number of distinct elements present in the compound.
 */
export enum CompoundUnion {
  /** Consisting of exactly two different elements (e.g., NaCl). */
  BINARY = 'binary',
  /** Consisting of exactly three different elements (e.g., Na2CO3). */
  TERNARY = 'ternary',
  /** Consisting of exactly four different elements. */
  QUATERNARY = 'quaternary'
};

/**
 * Functional and descriptive traits associated with chemical compounds.
 */
export enum CompoundProperty {
  /** Based on carbon-hydrogen frameworks, often containing O, N, S, P. */
  ORGANIC = 'organic',
  /** General classification for non-carbon based mineral-like compounds. */
  INORGANIC = 'inorganic',
  /** Substances containing at least one bond between carbon and a metal. */
  ORGANOMETALLIC = 'organometallic',
  /** Chemically involved in the metabolic processes of living organisms. */
  BIOCHEMICAL = 'biochemical',
  /** Large molecule consisting of many repeating structural subunits. */
  POLYMER = 'polymer',
  /** Product of a neutralization reaction between an acid and a base. */
  SALT = 'salt',
  /** Exhibits low pH behavior or proton donor characteristics. */
  ACIDIC = 'acidic',
  /** Exhibits high pH behavior or proton acceptor characteristics. */
  BASIC = 'basic',
  /** Combinations of oxygen with one or more other elements. */
  OXIDE = 'oxide',
  /** Binary compounds of hydrogen with another element. */
  HYDRIDE = 'hydride',
  /** Complexes held together by non-covalent intermolecular forces. */
  SUPRAMOLECULAR = 'supramolecular',
  /** Occurring in nature without human intervention. */
  NATURAL = 'natural',
  /** Produced through intentional chemical synthesis. */
  SYNTHETIC = 'synthetic',
  /** Capable of behaving as both an acid and a base. */
  AMPHOTERIC = 'amphoteric',
  /** Cyclic planar molecule with delocalized pi-electrons (e.g., Benzene). */
  AROMATIC = 'aromatic',
  /** Highly reactive species with an unpaired valence electron. */
  RADICAL = 'radical',
  /** Lacking any observable color in the visible spectrum. */
  COLORLESS = 'colorless',
  /** Absorbing specific wavelengths of light to exhibit visual color. */
  COLORED = 'colored',
  /** Destructive to living tissue or metals upon contact. */
  CORROSIVE = 'corrosive',
  /** Rapidly decomposing with significant release of energy and gas. */
  EXPLOSIVE = 'explosive',
  /** Capable of catching fire and burning easily. */
  FLAMMABLE = 'flammable',
  /** Potentially fatal in very small doses. */
  HIGHLY_TOXIC = 'highlyToxic',
  /** Containing unstable nuclei that emit radiation. */
  RADIOACTIVE = 'radioactive',
  /** Harmful if ingested, inhaled, or absorbed by the skin. */
  TOXIC = 'toxic',
  /** Easily evaporated at normal temperatures. */
  VOLATILE = 'volatile',
  /** Essential for life. */
  VITAL = 'vital'
};
