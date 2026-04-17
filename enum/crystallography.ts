/**
 * @file crystallography.ts
 * @description Defines enums for crystal systems, symmetries, habits, and twinning mechanisms.
 * This module covers the structural and geometric properties of solid-state matter.
 */

/**
 * High-level grouping of crystal systems based on their axial and angular constraints.
 */
export enum CrystalFamily {
  /** Three unequal axes with all angles non-perpendicular. */
  TRICLINIC = 'triclinic',
  /** Three unequal axes, two of which are perpendicular. */
  MONOCLINIC = 'monoclinic',
  /** Three unequal axes that are all mutually perpendicular. */
  ORTHORHOMBIC = 'orthorhombic',
  /** Single three-fold rotation axis. */
  TRIGONAL = 'trigonal',
  /** Single six-fold rotation axis. */
  HEXAGONAL = 'hexagonal',
  /** Single four-fold rotation axis. */
  TETRAGONAL = 'tetragonal',
  /** Three equal axes that are all mutually perpendicular. */
  CUBIC = 'cubic'
};

/**
 * Comprehensive classification of unit cell geometries and specific packing symmetries.
 */
export enum CrystalSystem {
  /** Sixfold symmetry with axes at 120° and 90°. */
  HEXAGONAL = 'hexagonal',
  /** Most dense packing of equal spheres with ABAB stacking. */
  HEXAGONAL_CLOSE_PACKED = 'hexagonalClosePacked',
  /** Atoms at the eight corners and one in the center of a cube. */
  BODY_CENTERED_CUBIC = 'bodyCenteredCubic',
  /** Three equal axes at identical non-right angles. */
  RHOMBOHEDRAL = 'rhombohedral',
  /** Primitive cubic lattice with atoms only at the corners. */
  SIMPLE_CUBIC = 'simpleCubic',
  /** Atoms at the corners and in the center of each face. */
  FACE_CENTERED_CUBIC = 'faceCenteredCubic',
  /** Interlocking tetrahedral structure typical of carbon. */
  DIAMOND_CUBIC = 'diamondCubic',
  /** Three unequal orthogonal axes. */
  ORTHORHOMBIC = 'orthorhombic',
  /** Two equal orthogonal axes and one different axis. */
  TETRAGONAL = 'tetragonal',
  /** Hexagonal packing with ABAC stacking sequence. */
  DOUBLE_HEXAGONAL_CLOSE_PACKED = 'doubleHexagonalClosePacked',
  /** Single non-orthogonal axis angle. */
  MONOCLINIC = 'monoclinic',
  /** No orthogonal axes or equal axis lengths. */
  TRICLINIC = 'triclinic'
};

/**
 * Qualitative description of the external shape and morphology of a crystal especimen.
 */
export enum CrystalHabit {
  /** Needle-like crystals. */
  ACICULAR = 'acicular',
  /** Branching, tree-like formation. */
  ARBORESCENT = 'arborescent',
  /** Extremely thin, hair-like fibers. */
  CAPILLARY = 'capillary',
  /** Smooth, spherical or rounded surfaces. */
  COLLOFORM = 'colloform',
  /** Layered growth around a central point. */
  CONCENTRIC = 'concentric',
  /** Random, plant-like branching branching (e.g., Manganese oxides). */
  DENDRITIC = 'dendritic',
  /** Crust of tiny crystals on a surface. */
  DRUSE = 'druse',
  /** Parallel thread-like units. */
  FIBROUS = 'fibrous',
  /** Leaves or flakes that can be separated. */
  FOLIATED = 'foliated',
  /** Mass of aggregate, non-interlocking grains. */
  GRANULAR = 'granular',
  /** Face-centered growth where edges grow faster than faces. */
  HOPPER = 'hopper',
  /** Aggregate of small, egg-like concentric spheres. */
  OOLITHIC = 'oolithic',
  /** Similar to oolithic but with larger, pea-sized grains. */
  PISOLITIC = 'pisolitic',
  /** Thin, plate-like crystals. */
  PLATY = 'platy',
  /** Feather-like radiating structures. */
  PLUMOSE = 'plumose',
  /** Diverging outward from a single center. */
  RADIAL = 'radial',
  /** Interlaced into a net-like structure. */
  RETICULATED = 'reticulated',
  /** Clustered like the petals of a flower. */
  ROSETTE = 'rosette',
  /** Formed like icicles on a cave roof. */
  STALACTITIC = 'stalactitic',
  /** Star-shaped radiating arrangement. */
  STELLATE = 'stellate',
  /** Result of fluid filling gas bubbles in volcanic rock. */
  AMYGDALOIDAL = 'amygdaloidal',
  /** Development of different faces at opposite ends of the crystal. */
  HEMIMORPHIC = 'hemimorphic',
  /** Lacks any recognizable individual crystal faces. */
  MASSIVE = 'massive',
  /** A small crystal perched on the tip of a larger, stalk-like crystal. */
  SCEPTERED = 'sceptered',
  /** Six equal square faces. */
  CUBIC = 'cubic',
  /** Twelve rhombic faces. */
  DODECAHEDRAL = 'dodecahedral',
  /** Non-superimposable mirror image forms. */
  ENANTIOMORPHIC = 'enantiomorphic',
  /** Six-sided prisms or pyramids. */
  HEXAGONAL = 'hexagonal',
  /** Twenty-four faced solid. */
  ICOSITETRAHEDRAL = 'icositetrahedral',
  /** Eight equilateral triangular faces. */
  OCTAHEDRAL = 'octahedral',
  /** Elongated faces parallel to the c-axis. */
  PRISMATIC = 'prismatic',
  /** Six faces that are rhombi. */
  RHOMBOHEDRAL = 'rhombohedral',
  /** Twelve faces that are scalene triangles. */
  SCALENOEHEDRAL = 'scalenohedral',
  /** Four triangular faces. */
  TETRAHEDRAL = 'tetrahedral',
  /** Grape-like clusters of rounded masses. */
  BOTRYOIDAL = 'botryoidal',
  /** Spherical rounded masses, smaller than botryoidal. */
  GLOBULAR = 'globular',
  /** Large breast-like rounded masses. */
  MAMMILLARY = 'mammillary',
  /** Reddish-brown, kidney-shaped clusters. */
  RENIFORM = 'reniform'
};

/**
 * Orientation of the standard cleavage planes in a crystal structure.
 */
export enum CleavageType {
  /** Parallel to the base of the crystal (e.g., Micas). */
  BASAL = 'basal',
  /** Parallel to vertical prism faces. */
  PRISMATIC = 'prismatic',
  /** Three planes mutually perpendicular (e.g., Halite). */
  CUBIC = 'cubic',
  /** Three planes at non-right angles. */
  RHOMBOHEDRAL = 'rhombohedral',
  /** Four planes at angles to the axes. */
  OCTAHEDRAL = 'octahedral',
  /** Six planes parallel to the faces of a dodecahedron. */
  DODECAHEDRAL = 'dodecahedral'
};

/**
 * Symmetrical intergrowth of two or more crystals of the same substance.
 */
export enum TwinningType {
  /** Two crystals joined along a single plane. */
  CONTACT = 'contact',
  /** Two crystals intertwined through each other (e.g., Staurolite). */
  PENETRATION = 'penetration',
  /** Repeated contact twins resulting in parallel lamellae. */
  POLYSYNTHETIC = 'polysynthetic',
  /** Twins arranged in a ring-like circular pattern. */
  CYCLIC = 'cyclic'
};

/**
 * Geological or thermal process that induced the twinning.
 */
export enum TwinningMode {
  /** Occurs während crystal formation from a melt or solution. */
  GROWTH = 'growth',
  /** Occurs when a crystal is cooled and changes symmetry. */
  TRANSFORMATION = 'transformation',
  /** Occurs due to mechanical stress or pressure (slip twinning). */
  DEFORMATION = 'deformation'
};

/**
 * Quality and ease of achieving a smooth cleavage surface.
 */
export enum CleavageQuality {
  /** Excellent, flat surfaces with no irregularities. */
  PERFECT = 'perfect',
  /** Predictable surfaces with some stepping. */
  GOOD = 'good',
  /** Rough surface that still follows a plane. */
  IMPERFECT = 'imperfect',
  /** Barely recognizable plane. */
  INDISTINCT = 'indistinct',
  /** No predictable cleavage. */
  NONE = 'none'
};

/**
 * Non-planar breakage pattern of a mineral when stressed.
 */
export enum FractureType {
  /** Smooth, shell-like curved surface (e.g., Obsidian). */
  CONCHOIDAL = 'conchoidal',
  /** Rough or irregular breakage. */
  UNEVEN = 'uneven',
  /** Relatively flat but not a cleavage plane. */
  SMOOTH = 'smooth',
  /** Splintery or thread-like breakage. */
  FIBROUS = 'fibrous',
  /** Jagged, sharp-edged surface (typical of native metals). */
  HACKLY = 'hackly',
  /** Sharp, pointed splinters. */
  SPLINTERY = 'splintery',
  /** Crumbles easily like soil or clay. */
  EARTHY = 'earthy'
};

/**
 * Resistance of a material to breaking, bending, or crushing.
 */
export enum Tenacity {
  /** Crumbles or powders under stress. */
  BRITTLE = 'brittle',
  /** Can be hammered into thin sheets. */
  MALLEABLE = 'malleable',
  /** Can be drawn out into thin wires. */
  DUCTILE = 'ductile',
  /** Can be cut smoothly with a knife to form shavings. */
  SECTILE = 'sectile',
  /** Bends but returns to its original shape. */
  ELASTIC = 'elastic',
  /** Bends and stays in its new shape. */
  PLASTIC = 'plastic'
};
