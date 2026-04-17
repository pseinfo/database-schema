/**
 * @file chemistry.ts
 * @description Defines enums for chemical behavior, classification, and structural properties.
 * This module covers acid-base character, chemical bonding, molecular geometry,
 * and solubility qualifiers.
 */

/**
 * Qualitative scale for the pH-dependent reactivity of a substance.
 */
export enum AcidBaseCharacter {
  /** Neither acidic nor basic at standard conditions. */
  NEUTRAL = 'neutral',
  /** Highly ionized in aqueous solution, exhibiting extreme acidity. */
  STRONG_ACIDIC = 'strongAcidic',
  /** General classification for substances with a low pH. */
  ACIDIC = 'acidic',
  /** Exhibits significant but non-extreme acidic behavior. */
  MODERATE_ACIDIC = 'moderateAcidic',
  /** Partially dissociates in solution, resulting in low concentration of H+ ions. */
  WEAK_ACIDIC = 'weakAcidic',
  /** Capable of reacting as both an acid and a base. */
  AMPHOTERIC = 'amphoteric',
  /** Partially dissociates in solution, resulting in low concentration of OH- ions. */
  WEAK_BASIC = 'weakBasic',
  /** Exhibits significant but non-extreme basic behavior. */
  MODERATE_BASIC = 'moderateBasic',
  /** General classification for substances with a high pH. */
  BASIC = 'basic',
  /** Highly ionized in aqueous solution, exhibiting extreme alkalinity. */
  STRONG_BASIC = 'strongBasic'
};

/**
 * Functional role of a substance in an acid-base reaction.
 */
export enum BasicityType {
  /** Proton donor or electron pair acceptor. */
  ACID = 'acid',
  /** Proton acceptor or electron pair donor. */
  BASE = 'base'
};

/**
 * Pearson's Hard and Soft Acids and Bases (HSAB) classification for chemical stability.
 */
export enum HSAB {
  /** Small, high-charge, non-polarizable species that prefer similar partners. */
  HARD = 'hard',
  /** Species with intermediate characteristics between hard and soft. */
  EDGE = 'edge',
  /** Large, low-charge, highly polarizable species that prefer similar partners. */
  SOFT = 'soft'
};

/**
 * Geochemical classification of elements according to their preferred host phase.
 */
export enum Goldschmidt {
  /** Elements that occur in the gaseous phase or in planetary atmospheres. */
  ATMOPHILE = 'atmophile',
  /** Elements that combine with sulfur to form sulfide minerals. */
  CHALCOPHILE = 'chalcophile',
  /** Elements that occur in silicate minerals or the Earth's crust. */
  LITHOPHILE = 'lithophile',
  /** Elements that occur as native metals or alloyed with iron in planetary cores. */
  SIDEROPHILE = 'siderophile',
  /** Artificially produced elements not naturally occurring in geochemical cycles. */
  SYNTHETIC = 'synthetic'
};

/**
 * Relative strength of donors/acceptors based on the electronic structure model.
 */
export enum LewisModel {
  /** High affinity for sharing or accepting electron pairs. */
  STRONG = 'strong',
  /** Moderate affinity for sharing or accepting electron pairs. */
  MODERATE = 'moderate',
  /** Low affinity for sharing or accepting electron pairs. */
  WEAK = 'weak',
  /** Does not exhibit significant Lewis acidic/basic behavior. */
  NONE = 'none'
};

/**
 * Chemical character of an oxide based on its reaction with water or acids/bases.
 */
export enum OxideCharacter {
  /** Reacts with water to form an acid or with a base to form a salt. */
  ACIDIC = 'acidic',
  /** Reacts with both acids and bases. */
  AMPHOTERIC = 'amphoteric',
  /** Reacts with water to form a base or with an acid to form a salt. */
  BASIC = 'basic'
};

/**
 * Degrees of solubility for a solute in a solvent at a specific temperature.
 */
export enum SolubilityQualifier {
  /** High capacity to dissolve (usually > 1000 mg/mL). */
  VERY_SOLUBLE = 'verySoluble',
  /** Dissolves easily in standard solvent volumes. */
  FREELY_SOLUBLE = 'freelySoluble',
  /** Requires reasonable amount of solvent to dissolve. */
  SOLUBLE = 'soluble',
  /** Limited dissolution in large volumes (typically 10-30 mg/mL). */
  SPARINGLY_SOLUBLE = 'sparinglySoluble',
  /** Very low solubility (typically 1-10 mg/mL). */
  SLIGHTLY_SOLUBLE = 'slightlySoluble',
  /** Extremely low dissolution (typically 0.1-1 mg/mL). */
  VERY_SLIGHTLY_SOLUBLE = 'verySlightlySoluble',
  /** Effectively does not dissolve (< 0.1 mg/mL). */
  PRACTICALLY_INSOLUBLE = 'practicallyInsoluble'
};

/**
 * Three-dimensional arrangement of atoms within a molecule as predicted by VSEPR theory.
 */
export enum MolecularShape {
  /** Atoms in a straight line at 180° angles. */
  LINEAR = 'linear',
  /** Three atoms at the corners of an equilateral triangle around a center. */
  TRIGONAL_PLANAR = 'trigonalPlanar',
  /** Non-linear arrangement typical of molecules with lone pairs. */
  BENT = 'bent',
  /** Central atom with four substituents at the corners of a tetrahedron. */
  TETRAHEDRAL = 'tetrahedral',
  /** Pyramid with a triangular base and a central atom at the apex. */
  TRIGONAL_PYRAMIDAL = 'trigonalPyramidal',
  /** Two pyramids joined at their triangular base. */
  TRIGONAL_BIPYRAMIDAL = 'trigonalBipyramidal',
  /** Derived from trigonal bipyramidal with one lone pair. */
  SEESAW = 'seesaw',
  /** Three substituents forming a 'T' shape around a central atom. */
  T_SHAPED = 'tShaped',
  /** Eight-faced structure with six substituents at the vertices. */
  OCTAHEDRAL = 'octahedral',
  /** Pyramid with a square base. */
  SQUARE_PYRAMIDAL = 'squarePyramidal',
  /** Four substituents at the corners of a square in a single plane. */
  SQUARE_PLANAR = 'squarePlanar',
  /** Two pyramids joined at their pentagonal base. */
  PENTAGONAL_BIPYRAMIDAL = 'pentagonalBipyramidal',
  /** Pyramid with a pentagonal base. */
  PENTAGONAL_PYRAMIDAL = 'pentagonalPyramidal',
  /** Five substituents at the corners of a pentagon in a single plane. */
  PENTAGONAL_PLANAR = 'pentagonalPlanar',
  /** Geometry in which eight atoms lie at the vertices of a square antiprism. */
  SQUARE_ANTIPRISMATIC = 'squareAntiprismatic',
  /** Nine-coordinate geometry in which nine atoms surround a central atom. */
  TRICAPPED_TRIGONAL_PRISMATIC = 'tricappedTrigonalPrismatic'
};

/**
 * Primary types of chemical attraction and bonding between atoms or molecules.
 */
export enum BondType {
  /** Electrostatic attraction between oppositely charged ions. */
  IONIC = 'ionic',
  /** Sharing of electron pairs between atoms. */
  COVALENT = 'covalent',
  /** Delocalized sharing of valence electrons across a lattice of metal cations. */
  METALLIC = 'metallic',
  /** Weak attractive forces between molecules due to dipole fluctuations. */
  VDW = 'vdw',
  /** Specific dipole-dipole attraction between hydrogen and highly electronegative atoms. */
  HYDROGEN = 'hydrogen'
};

/**
 * Mixing of atomic orbitals to form new hybrid orbitals for chemical bonding.
 */
export enum Hybridization {
  /** Transition metal hybridization involving s and two d orbitals. */
  SD2 = 'sd2',
  /** Transition metal hybridization involving s and three d orbitals. */
  SD3 = 'sd3',
  /** Transition metal hybridization involving s and four d orbitals. */
  SD4 = 'sd4',
  /** Transition metal hybridization involving s and five d orbitals. */
  SD5 = 'sd5',
  /** Linear combination of s and p orbitals. */
  SP = 'sp',
  /** Planar combination of s and two p orbitals. */
  SP2 = 'sp2',
  /** Tetrahedral combination of s and three p orbitals. */
  SP3 = 'sp3',
  /** Planar combination involving s, two p, and one d orbital. */
  SP2D = 'sp2d',
  /** Combination involving s, three p, and one d orbital. */
  SP3D = 'sp3d',
  /** Octahedral combination involving s, three p, and two d orbitals. */
  SP3D2 = 'sp3d2',
  /** Combination involving s, three p, and three d orbitals. */
  SP3D3 = 'sp3d3',
  /** Combination involving s, three p, and four d orbitals. */
  SP3D4 = 'sp3d4',
  /** Combination involving s, three p, and five d orbitals. */
  SP3D5 = 'sp3d5'
};

/**
 * Specific roles of chemical constituents within a substance or mixture.
 */
export enum ComponentRole {
  /** Positively charged ion. */
  CATION = 'cation',
  /** Negatively charged ion. */
  ANION = 'anion',
  /** Uncharged molecular unit. */
  NEUTRAL = 'neutral',
  /** Atom or molecule with an unpaired valence electron. */
  RADICAL = 'radical',
  /** Coordination entity consisting of a central atom and surrounding ligands. */
  COMPLEX = 'complex',
  /** Minor constituent that is not part of the intended substance. */
  IMPURITY = 'impurity',
  /** Deliberately added trace element used to modify material properties. */
  DOPANT = 'dopant',
  /** Distinct material trapped inside the crystal structure of another mineral. */
  INCLUSION = 'inclusion',
  /** The primary medium in which other components are embedded or dissolved. */
  MATRIX = 'matrix',
  /** Liquid phase in which a solute is dissolved to form a solution. */
  SOLVENT = 'solvent'
};
