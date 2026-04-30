/**
 * @file enum/science/compound.ts
 * @description Defines enums for classifying and describing chemical compounds based on structure and bonding.
 */

/**
 * Classification based on the nature of chemical bonding and structural arrangement.
 */
export enum CompoundCategory {
  /** Discrete units held together by covalent bonds, typically with low melting points. */
  MOLECULAR = 'molecular',
  /** Three-dimensional lattices held by electrostatic forces between cations and anions. */
  IONIC = 'ionic',
  /** Solid phases containing two or more metallic elements with metallic bonding. */
  INTERMETALLIC = 'intermetallic',
  /** Coordination compounds consisting of a central metal atom bonded to surrounding ligands. */
  COMPLEX = 'complex',
  /** Extended structures held by continuous covalent bonds, such as diamond or quartz. */
  NETWORK = 'network'
};

/**
 * Classification based on the number of distinct elements present in the compound.
 */
export enum CompoundComposition {
  /** Compounds consisting of exactly two different elements. */
  BINARY = 'binary',
  /** Compounds consisting of exactly three different elements. */
  TERNARY = 'ternary',
  /** Compounds consisting of exactly four different elements. */
  QUATERNARY = 'quaternary',
  /** Complex compounds consisting of many different elemental components. */
  POLYCOMPONENT = 'polycomponent'
};

/**
 * Functional and structural groupings of chemical compounds.
 */
export enum CompoundClass {
  /** Neutral ionic compounds formed by the neutralization reaction of an acid and a base. */
  SALT = 'salt',
  /** Binary compounds of oxygen with another element. */
  OXIDE = 'oxide',
  /** Compounds of hydrogen with another element, ranging from ionic to covalent. */
  HYDRIDE = 'hydride',
  /** Binary compounds containing a halogen atom in the -1 oxidation state. */
  HALIDE = 'halide',
  /** Substances that can donate a proton (Brønsted-Lowry) or accept an electron pair (Lewis). */
  ACID = 'acid',
  /** Substances that can accept a proton or donate an electron pair. */
  BASE = 'base',
  /** Metallic substances composed of two or more elements in solid solution. */
  ALLOY = 'alloy'
};

/**
 * Specific chemical or structural characteristics of compounds.
 */
export enum CompoundProperty {
  /** Compounds primarily composed of carbon-hydrogen bonds, often including O, N, S. */
  ORGANIC = 'organic',
  /** Compounds that are not organic, typically including minerals and metals. */
  INORGANIC = 'inorganic',
  /** Compounds containing at least one chemical bond between a carbon atom and a metal. */
  ORGANOMETALLIC = 'organometallic',
  /** Chemical substances specifically relevant to biological processes and organisms. */
  BIOCHEMICAL = 'biochemical',
  /** Large molecules composed of many repeated subunits (monomers). */
  POLYMER = 'polymer',
  /** Molecular assemblies held together by non-covalent interactions like hydrogen bonding. */
  SUPRAMOLECULAR = 'supramolecular',
  /** Molecules with the same molecular formula but different structural arrangements. */
  ISOMERIC = 'isomeric',
  /** Molecules that lack an internal plane of symmetry and have non-superimposable mirror images. */
  CHIRAL = 'chiral',
  /** Cyclic, planar molecules with a ring of resonance bonds that exhibit enhanced stability. */
  AROMATIC = 'aromatic',
  /** Highly reactive species with one or more unpaired electrons. */
  RADICAL = 'radical'
};
