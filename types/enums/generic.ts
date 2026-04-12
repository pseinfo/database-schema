/**
 * Generic Enumerations
 * This module contains generic enumerations used throughout the database schema.
 * 
 * @module enums/generic
 */


/** Enumeration of phases of matter. */
export enum Phase {
    /** Solid phase */
    SOLID = 'solid',
    /** Gaseous phase */
    GASEOUS = 'gaseous',
    /** Liquid phase */
    LIQUID = 'liquid',
    /** Plasma phase */
    PLASMA = 'plasma',
    /** Unknown phase */
    UNKNOWN = 'unknown'
};

/** Enumeration of periodic table columns. */
export enum PTColumn {
    COL_1 = 1,
    COL_2 = 2,
    COL_3 = 3,
    COL_4 = 4,
    COL_5 = 5,
    COL_6 = 6,
    COL_7 = 7,
    COL_8 = 8,
    COL_9 = 9,
    COL_10 = 10,
    COL_11 = 11,
    COL_12 = 12,
    COL_13 = 13,
    COL_14 = 14,
    COL_15 = 15,
    COL_16 = 16,
    COL_17 = 17,
    COL_18 = 18
};

/** Enumeration of periodic table periods. */
export enum PTPeriod {
    PERIOD_1 = 1,
    PERIOD_2 = 2,
    PERIOD_3 = 3,
    PERIOD_4 = 4,
    PERIOD_5 = 5,
    PERIOD_6 = 6,
    PERIOD_7 = 7
};

/** Enumeration of natural occurrence types. */
export enum NaturalOccurrence {
    /** Primordial */
    PRIMORDIAL = 'primordial',
    /** Decay product */
    DECAY_PRODUCT = 'decayProduct',
    /** Synthetic */
    SYNTHETIC = 'synthetic'
};

/** Enumeration of Goldschmidt classification. */
export enum Goldschmidt {
    /** Atmophile */
    ATMOPHILE = 'atmophile',
    /** Chalcophile */
    CHALCOPHILE = 'chalcophile',
    /** Lithophile */
    LITHOPHILE = 'lithophile',
    /** Siderophile */
    SIDEROPHILE = 'siderophile',
    /** Synthetic */
    SYNTHETIC = 'synthetic'
};

/** Enumeration of superconductivity types. */
export enum Superconductivity {
    /** Normal */
    NORMAL = 'normal',
    /** Special */
    SPECIAL = 'special',
    /** None */
    NONE = 'none'
};

/** Enumeration of crystal structures. */
export enum CrystalStructure {
    /** Hexagonal crystal system */
    HEXAGONAL = 'hexagonal',
    /** Hexagonal close-packed structure */
    HEXAGONAL_CLOSE_PACKED = 'hexagonalClosePacked',
    /** Body-centered cubic structure */
    BODY_CENTERED_CUBIC = 'bodyCenteredCubic',
    /** Rhombohedral crystal system */
    RHOMBOHEDRAL = 'rhombohedral',
    /** Simple cubic structure */
    SIMPLE_CUBIC = 'simpleCubic',
    /** Face-centered cubic structure */
    FACE_CENTERED_CUBIC = 'faceCenteredCubic',
    /** Diamond cubic structure */
    DIAMOND_CUBIC = 'diamondCubic',
    /** Orthorhombic crystal system */
    ORTHORHOMBIC = 'orthorhombic',
    /** Tetragonal crystal system */
    TETRAGONAL = 'tetragonal',
    /** Double hexagonal close-packed structure */
    DOUBLE_HEXAGONAL_CLOSE_PACKED = 'doubleHexagonalClosePacked',
    /** Monoclinic crystal system */
    MONOCLINIC = 'monoclinic',
    /** Triclinic crystal system */
    TRICLINIC = 'triclinic'
};

/** Enumeration of image formats. */
export enum ImageFormat {
    /** JPG format */
    JPG = 'jpg',
    /** PNG format */
    PNG = 'png',
    /** SVG format */
    SVG = 'svg',
    /** WebP format */
    WEBP = 'webp'
};

/** Enumeration of 3D structure formats. */
export enum D3Format {
    /** PDB format */
    PDB = 'pdb',
    /** MOL format */
    MOL = 'mol',
    /** SDF format */
    SDF = 'sdf',
    /** XYZ format */
    XYZ = 'xyz',
    /** CIF format */
    CIF = 'cif'
};
