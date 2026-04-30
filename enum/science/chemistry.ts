/**
 * @file enum/science/chemistry.ts
 * @description Defines enums for chemical properties, structural arrangements, and mineralogical characteristics.
 * Covers acidity, bonding, crystallography, and mechanical properties of substances.
 */

/**
 * Classification of substances based on their pH behavior and proton donor/acceptor strength.
 */
export enum AcidBaseCharacter {
  /** Neither acidic nor basic; pH around 7.0 in aqueous solution. */
  NEUTRAL = 'neutral',
  /** Completely dissociates in water to release H+ ions (e.g., HCl). */
  STRONG_ACIDIC = 'strongAcidic',
  /** General term for substances with pH < 7. */
  ACIDIC = 'acidic',
  /** Significant acidity but not fully dissociated. */
  MODERATE_ACIDIC = 'moderateAcidic',
  /** Partially dissociates in water, maintaining an equilibrium (e.g., CH3COOH). */
  WEAK_ACIDIC = 'weakAcidic',
  /** Can react as both an acid and a base depending on conditions (e.g., H2O, Al2O3). */
  AMPHOTERIC = 'amphoteric',
  /** Partially reacts with water to release OH- ions or accept protons. */
  WEAK_BASIC = 'weakBasic',
  /** Significant basicity without full dissociation. */
  MODERATE_BASIC = 'moderateBasic',
  /** General term for substances with pH > 7. */
  BASIC = 'basic',
  /** Completely dissociates in water to release OH- ions (e.g., NaOH). */
  STRONG_BASIC = 'strongBasic'
};

/**
 * Fundamental roles in Brønsted-Lowry or Lewis acid-base theory.
 */
export enum BasicityType {
  /** Proton donor or electron pair acceptor. */
  ACID = 'acid',
  /** Proton acceptor or electron pair donor. */
  BASE = 'base'
};

/**
 * Pearson's Hard and Soft Acids and Bases (HSAB) theory for predicting reaction stability.
 */
export enum HSAB {
  /** Small, high-oxidation state, and weakly polarizable species. */
  HARD = 'hard',
  /** Species with intermediate size and polarizability. */
  EDGE = 'edge',
  /** Large, low-oxidation state, and highly polarizable species. */
  SOFT = 'soft'
};

/**
 * Goldschmidt classification of elements based on their preferred terrestrial host phases.
 */
export enum Goldschmidt {
  /** "Vapor-loving": elements that remain in the atmosphere or hydrosphere (e.g., H, N, Noble Gases). */
  ATMOPHILE = 'atmophile',
  /** "Sulfur-loving": elements that concentrate in sulfide minerals (e.g., Cu, Zn, Ag). */
  CHALCOPHILE = 'chalcophile',
  /** "Rock-loving": elements that concentrate in silicate minerals (e.g., Al, Mg, K). */
  LITHOPHILE = 'lithophile',
  /** "Iron-loving": elements that concentrate in metallic iron (e.g., Ni, Co, Au). */
  SIDEROPHILE = 'siderophile',
  /** Elements not found naturally in the Earth's crust, produced via nuclear synthesis. */
  SYNTHETIC = 'synthetic'
};

/**
 * Strength of Lewis acids/bases based on electron pair interaction.
 */
export enum LewisModel {
  /** High affinity for electron pair exchange. */
  STRONG = 'strong',
  /** Intermediate affinity for electron pair exchange. */
  MODERATE = 'moderate',
  /** Low affinity for electron pair exchange. */
  WEAK = 'weak',
  /** No significant Lewis acid/base interaction. */
  NONE = 'none'
};

/**
 * Acid-base behavior specifically defined by the Brønsted-Lowry proton transfer model.
 */
export enum BronstedCharacter {
  /** A species that can donate a hydrogen ion (proton). */
  ACID = 'acid',
  /** A species that can accept a hydrogen ion (proton). */
  BASE = 'base',
  /** A species that can either donate or accept a proton. */
  AMPHOTERIC = 'amphoteric',
  /** A species that neither donates nor accepts protons in the given context. */
  NEUTRAL = 'neutral'
};

/**
 * Chemical character of binary oxygen compounds.
 */
export enum OxideCharacter {
  /** Reacts with water to form acids or with bases to form salts. */
  ACIDIC = 'acidic',
  /** Can react with both acids and bases. */
  AMPHOTERIC = 'amphoteric',
  /** Reacts with water to form bases or with acids to form salts. */
  BASIC = 'basic'
};

/**
 * Descriptive terms for the degree to which a substance dissolves in a solvent.
 */
export enum SolubilityQualifier {
  /** Less than 1 part solvent needed per 1 part solute. */
  VERY_SOLUBLE = 'verySoluble',
  /** 1 to 10 parts solvent needed per 1 part solute. */
  FREELY_SOLUBLE = 'freelySoluble',
  /** 10 to 30 parts solvent needed per 1 part solute. */
  SOLUBLE = 'soluble',
  /** 30 to 100 parts solvent needed per 1 part solute. */
  SPARINGLY_SOLUBLE = 'sparinglySoluble',
  /** 100 to 1,000 parts solvent needed per 1 part solute. */
  SLIGHTLY_SOLUBLE = 'slightlySoluble',
  /** 1,000 to 10,000 parts solvent needed per 1 part solute. */
  VERY_SLIGHTLY_SOLUBLE = 'verySlightlySoluble',
  /** More than 10,000 parts solvent needed per 1 part solute. */
  PRACTICALLY_INSOLUBLE = 'practicallyInsoluble'
};

/**
 * Geometric arrangement of atoms in a molecule as predicted by VSEPR theory.
 */
export enum MolecularShape {
  /** Atoms arranged in a straight line (180° bond angle). */
  LINEAR = 'linear',
  /** Three atoms at the corners of an equilateral triangle around a central atom (120°). */
  TRIGONAL_PLANAR = 'trigonalPlanar',
  /** Non-linear arrangement caused by lone pairs (e.g., H2O). */
  BENT = 'bent',
  /** Central atom with four substituents at the corners of a tetrahedron (109.5°). */
  TETRAHEDRAL = 'tetrahedral',
  /** Central atom with three substituents and one lone pair forming a pyramid. */
  TRIGONAL_PYRAMIDAL = 'trigonalPyramidal',
  /** Central atom with five substituents; three in a plane and two at the poles. */
  TRIGONAL_BIPYRAMIDAL = 'trigonalBipyramidal',
  /** Derived from trigonal bipyramidal with one lone pair in the equatorial position. */
  SEESAW = 'seesaw',
  /** Central atom with three substituents and two lone pairs. */
  T_SHAPED = 'tShaped',
  /** Central atom with six substituents at the corners of an octahedron (90°). */
  OCTAHEDRAL = 'octahedral',
  /** Central atom with five substituents and one lone pair. */
  SQUARE_PYRAMIDAL = 'squarePyramidal',
  /** Central atom with four substituents and two lone pairs in a plane (90°). */
  SQUARE_PLANAR = 'squarePlanar',
  /** Central atom with seven substituents. */
  PENTAGONAL_BIPYRAMIDAL = 'pentagonalBipyramidal',
  /** Central atom with six substituents and one lone pair in a pentagonal arrangement. */
  PENTAGONAL_PYRAMIDAL = 'pentagonalPyramidal',
  /** Central atom with five substituents and two lone pairs in a plane. */
  PENTAGONAL_PLANAR = 'pentagonalPlanar',
  /** Eight substituents arranged around a central atom in a square antiprism. */
  SQUARE_ANTIPRISMATIC = 'squareAntiprismatic',
  /** Central atom with nine substituents. */
  TRICAPPED_TRIGONAL_PRISMATIC = 'tricappedTrigonalPrismatic'
};

/**
 * Primary types of chemical attraction holding atoms or molecules together.
 */
export enum BondType {
  /** Electrostatic attraction between oppositely charged ions. */
  IONIC = 'ionic',
  /** Sharing of electron pairs between atoms. */
  COVALENT = 'covalent',
  /** Sharing of delocalized electrons among a lattice of metal cations. */
  METALLIC = 'metallic',
  /** Weak intermolecular forces including London dispersion and dipole-dipole. */
  VDW = 'vdw',
  /** Strong dipole-dipole attraction between H and N, O, or F. */
  HYDROGEN = 'hydrogen'
};

/**
 * Mixing of atomic orbitals to form new hybrid orbitals suitable for bonding.
 */
export enum Hybridization {
  /** sd2 hybridization involving one s and two d orbitals. */
  SD2 = 'sd2',
  /** sd3 hybridization involving one s and three d orbitals. */
  SD3 = 'sd3',
  /** sd4 hybridization involving one s and four d orbitals. */
  SD4 = 'sd4',
  /** sd5 hybridization involving one s and five d orbitals. */
  SD5 = 'sd5',
  /** Mixing of one s and one p orbital (linear geometry). */
  SP = 'sp',
  /** Mixing of one s and two p orbitals (trigonal planar). */
  SP2 = 'sp2',
  /** Mixing of one s and three p orbitals (tetrahedral). */
  SP3 = 'sp3',
  /** Mixing of one s, two p, and one d orbital. */
  SP2D = 'sp2d',
  /** Mixing of one s, three p, and one d orbital. */
  SP3D = 'sp3d',
  /** Mixing of one s, three p, and two d orbitals. */
  SP3D2 = 'sp3d2',
  /** Mixing of one s, three p, and three d orbitals. */
  SP3D3 = 'sp3d3',
  /** Mixing of one s, three p, and four d orbitals. */
  SP3D4 = 'sp3d4',
  /** Mixing of one s, three p, and five d orbitals. */
  SP3D5 = 'sp3d5'
};

/**
 * Broadest classification of crystals based on the symmetry of their unit cells.
 */
export enum CrystalFamily {
  /** Three unequal axes, none at right angles. */
  TRICLINIC = 'triclinic',
  /** Three unequal axes, one at a right angle. */
  MONOCLINIC = 'monoclinic',
  /** Three unequal axes at right angles. */
  ORTHORHOMBIC = 'orthorhombic',
  /** Subtype of hexagonal with a three-fold axis of rotation. */
  TRIGONAL = 'trigonal',
  /** Two equal axes at 120°, third at a right angle. */
  HEXAGONAL = 'hexagonal',
  /** Two equal axes, all at right angles. */
  TETRAGONAL = 'tetragonal',
  /** Three equal axes at right angles. */
  CUBIC = 'cubic'
};

/**
 * Standard categories of crystal lattices and their packing arrangements.
 */
export enum CrystalSystem {
  /** Standard hexagonal lattice. */
  HEXAGONAL = 'hexagonal',
  /** Efficient packing of spheres in a hexagonal arrangement. */
  HEXAGONAL_CLOSE_PACKED = 'hexagonalClosePacked',
  /** Cubic lattice with an extra atom at the center. */
  BODY_CENTERED_CUBIC = 'bodyCenteredCubic',
  /** Primitive cell with three equal axes and three equal non-90° angles. */
  RHOMBOHEDRAL = 'rhombohedral',
  /** Simple cubic lattice with atoms only at the corners. */
  SIMPLE_CUBIC = 'simpleCubic',
  /** Cubic lattice with extra atoms at the centers of all faces. */
  FACE_CENTERED_CUBIC = 'faceCenteredCubic',
  /** Face-centered cubic with half of tetrahedral voids occupied (e.g., Diamond, Si). */
  DIAMOND_CUBIC = 'diamondCubic',
  /** Three unequal axes at 90°. */
  ORTHORHOMBIC = 'orthorhombic',
  /** Two equal axes at 90°. */
  TETRAGONAL = 'tetragonal',
  /** Complex hexagonal packing sequence (ABAC). */
  DOUBLE_HEXAGONAL_CLOSE_PACKED = 'doubleHexagonalClosePacked',
  /** One axis not at 90°. */
  MONOCLINIC = 'monoclinic',
  /** No axes at 90°, all axes unequal. */
  TRICLINIC = 'triclinic'
};

/**
 * The characteristic external shape of an individual crystal or aggregate of crystals.
 */
export enum CrystalHabit {
  /** Needle-like, long and slender. */
  ACICULAR = 'acicular',
  /** Tree-like, branching in three dimensions. */
  ARBORESCENT = 'arborescent',
  /** Hair-like or thread-like. */
  CAPILLARY = 'capillary',
  /** Rounded, spherical forms. */
  COLLOFORM = 'colloform',
  /** Layers arranged around a central point. */
  CONCENTRIC = 'concentric',
  /** Tree-like, branching in two dimensions. */
  DENDRITIC = 'dendritic',
  /** A surface covered in tiny, sparkling crystals. */
  DRUSE = 'druse',
  /** Composed of parallel or radiating fibers. */
  FIBROUS = 'fibrous',
  /** Composed of thin, separable sheets or lamellae. */
  FOLIATED = 'foliated',
  /** Composed of many small, equidimensional grains. */
  GRANULAR = 'granular',
  /** Crystal faces grow faster at edges than centers, creating hollows. */
  HOPPER = 'hopper',
  /** Small, rounded grains resembling fish roe (< 2mm). */
  OOLITHIC = 'oolithic',
  /** Pea-sized rounded grains (> 2mm). */
  PISOLITIC = 'pisolitic',
  /** Flat, tablet-like or plate-like. */
  PLATY = 'platy',
  /** Feathery or plume-like. */
  PLUMOSE = 'plumose',
  /** Radiating from a central point. */
  RADIAL = 'radial',
  /** Interwoven, net-like aggregate. */
  RETICULATED = 'reticulated',
  /** Petal-like arrangement resembling a rose. */
  ROSETTE = 'rosette',
  /** Cone-shaped or icicle-like (e.g., Stalactites). */
  STALACTITIC = 'stalactitic',
  /** Star-shaped radiating crystals. */
  STELLATE = 'stellate',
  /** Almond-shaped, often as gas bubble fillings in volcanic rocks. */
  AMYGDALOIDAL = 'amygdaloidal',
  /** Crystals with different forms at each end. */
  HEMIMORPHIC = 'hemimorphic',
  /** Large, shapeless aggregate. */
  MASSIVE = 'massive',
  /** Crystal growing on top of another like a scepter. */
  SCEPTERED = 'sceptered',
  /** Cube-shaped. */
  CUBIC = 'cubic',
  /** 12-sided form where each face is a rhombus. */
  DODECAHEDRAL = 'dodecahedral',
  /** Pair of crystals that are mirror images of each other. */
  ENANTIOMORPHIC = 'enantiomorphic',
  /** Six-sided prism or pyramid. */
  HEXAGONAL = 'hexagonal',
  /** 24-sided form. */
  ICOSITETRAHEDRAL = 'icositetrahedral',
  /** Eight-sided form. */
  OCTAHEDRAL = 'octahedral',
  /** Column-like with parallel faces. */
  PRISMATIC = 'prismatic',
  /** Six-sided form with leaning faces. */
  RHOMBOHEDRAL = 'rhombohedral',
  /** Form with scalene triangle faces. */
  SCALENOEHEDRAL = 'scalenohedral',
  /** Four-sided pyramid. */
  TETRAHEDRAL = 'tetrahedral',
  /** Resembling a bunch of grapes. */
  BOTRYOIDAL = 'botryoidal',
  /** Sphere-like. */
  GLOBULAR = 'globular',
  /** Large, breast-like rounded forms. */
  MAMMILLARY = 'mammillary',
  /** Kidney-shaped. */
  RENIFORM = 'reniform'
};

/**
 * The geometric orientation of planes along which a crystal tends to break.
 */
export enum CleavageType {
  /** Parallel to the base of the crystal (001). */
  BASAL = 'basal',
  /** Parallel to the faces of a prism. */
  PRISMATIC = 'prismatic',
  /** Parallel to the faces of a cube (e.g., Halite). */
  CUBIC = 'cubic',
  /** Parallel to the faces of a rhombohedron. */
  RHOMBOHEDRAL = 'rhombohedral',
  /** Parallel to the faces of an octahedron (e.g., Fluorite). */
  OCTAHEDRAL = 'octahedral',
  /** Parallel to the faces of a dodecahedron. */
  DODECAHEDRAL = 'dodecahedral'
};

/**
 * Geometric relationship between intergrown crystals of the same species.
 */
export enum TwinningType {
  /** Intergrown along a common plane. */
  CONTACT = 'contact',
  /** Intergrown such that they seem to pass through each other. */
  PENETRATION = 'penetration',
  /** Multiple parallel contact twins (e.g., Plagioclase). */
  POLYSYNTHETIC = 'polysynthetic',
  /** Radial arrangement of multiple twins. */
  CYCLIC = 'cyclic'
};

/**
 * The physical mechanism causing crystal twinning.
 */
export enum TwinningMode {
  /** Occurs during the initial crystallization from a melt or solution. */
  GROWTH = 'growth',
  /** Occurs when a high-temperature structure cools and rearranges. */
  TRANSFORMATION = 'transformation',
  /** Occurs due to mechanical stress applied to the crystal (e.g., Calcite). */
  DEFORMATION = 'deformation'
};

/**
 * Qualitative measure of how easily and cleanly a crystal breaks along its cleavage planes.
 */
export enum CleavageQuality {
  /** Breaks into smooth, mirror-like surfaces. */
  PERFECT = 'perfect',
  /** Breaks reliably but with slight irregularities. */
  GOOD = 'good',
  /** Breaks poorly with rough surfaces. */
  IMPERFECT = 'imperfect',
  /** Difficult to see or irregular. */
  INDISTINCT = 'indistinct',
  /** No tendency to break along planes; breaks by fracture only. */
  NONE = 'none'
};

/**
 * The appearance of a broken surface not along a cleavage plane.
 */
export enum FractureType {
  /** Shell-like, curved break (e.g., Quartz, Obsidian). */
  CONCHOIDAL = 'conchoidal',
  /** Irregular and rough. */
  UNEVEN = 'uneven',
  /** Relatively flat but not a cleavage plane. */
  SMOOTH = 'smooth',
  /** Breaks into fibers or strands. */
  FIBROUS = 'fibrous',
  /** Jagged with sharp edges (common in metals). */
  HACKLY = 'hackly',
  /** Breaks into sharp, elongated fragments. */
  SPLINTERY = 'splintery',
  /** Breaks like clods of earth or clay. */
  EARTHY = 'earthy'
};

/**
 * The resistance of a material to being broken, crushed, or bent.
 */
export enum Tenacity {
  /** Breaks or powders easily when hit. */
  BRITTLE = 'brittle',
  /** Can be hammered or rolled into thin sheets. */
  MALLEABLE = 'malleable',
  /** Can be drawn into thin wires. */
  DUCTILE = 'ductile',
  /** Can be cut into thin shavings with a knife. */
  SECTILE = 'sectile',
  /** Bends but returns to its original shape. */
  ELASTIC = 'elastic',
  /** Bends and stays in the new shape. */
  PLASTIC = 'plastic'
};
