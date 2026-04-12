/**
 * Generic Enumerations
 * This module contains generic enumerations used throughout the database schema.
 * 
 * @module enums/generic
 */


/** Enumeration of value types. */
export enum ValueType {
    /** Primitive value */
    PRIMITIVE = 'primitive',
    /** Struct value */
    STRUCT = 'struct',
    /** Single value */
    SINGLE = 'single',
    /** Array value */
    ARRAY = 'array',
    /** Range value */
    RANGE = 'range',
    /** Coupled value */
    COUPLED = 'coupled'
};

/** Enumeration of value confidence levels. */
export enum ValueConfidence {
    /** Measured value */
    MEASURED = 'measured',
    /** Calculated value */
    CALCULATED = 'calculated',
    /** Estimated value */
    ESTIMATED = 'estimated',
    /** Theoretical value */
    THEORETICAL = 'theoretical',
    /** Experimental value */
    EXPERIMENTAL = 'experimental'
};

/** Enumeration of uncertainty types. */
export enum UncertaintyType {
    /** Absolute uncertainty */
    ABSOLUTE = 'absolute',
    /** Relative uncertainty */
    RELATIVE = 'relative',
    /** Asymmetrical uncertainty */
    ASYMMETRICAL = 'asymmetrical'
};

/** Enumeration of standard conditions for physical quantities. */
export enum StandardCondition {
    /** T=0     P=100       IUPAC (STP) since 1982 */
    STP = 'STP',
    /** T=0     P=101.325   NIST, ISO 10780, former IUPAC STP */
    STP_ATM = 'STP_ATM',
    /** T=20    P=101.325   EPA, NIST */
    NTP = 'NTP',
    /** T=15    P=101.325   ICAO ISA, ISO 13443, EEA, EGIA (SI) */
    ISA = 'ISA',
    /** T=22    P=101.325   American Association of Physicists in Medicine */
    AAPM = 'AAPM',
    /** T=25    P=101.325   SATP, EPA */
    SATP = 'SATP',
    /** T=20    P=100       CAGI */
    CAGI = 'CAGI',
    /** T=15    P=100       SPE */
    SPE = 'SPE',
    /** T=20    P=101.3     ISO 5011 */
    ISO_5011 = 'ISO_5011',
    /** T=20    P=101.33    GOST 2939-63 */
    GOST_2939_63 = 'GOST_2939_63',
    /** T=15.56 P=101.6     EGIA (Imperial System) */
    EGIA = 'EGIA',
    /** T=15.56 P=101.35    U.S. DOT (SCF) */
    SCF = 'SCF',
    /** T=21.11 P=101.3     AMCA */
    AMCA = 'AMCA',
    /** T=15    P=101.3     FAA */
    FAA = 'FAA',
    /** T=15    P=101.325   ISO 2533, ISO 13443, ISO 7504 */
    ISO_13443 = 'ISO_13443',
    /** T=0     P=101.325   DIN 1343:1990 */
    DIN_1343 = 'DIN_1343'
};

/** Enumeration of metric systems. */
export enum MetricSystem {
    /** Metric system */
    METRIC = 'metric',
    /** Imperial system */
    IMPERIAL = 'imperial',
    /** US system */
    US = 'us',
    /** Custom system */
    CUSTOM = 'custom',
    /** Unknown system */
    UNKNOWN = 'unknown'
};

/** Enumeration of SI base dimensions. */
export enum SIDimension {
    /** Time */
    TIME = 'time',
    /** Length */
    LENGTH = 'length',
    /** Mass */
    MASS = 'mass',
    /** Electric current */
    ELECTRIC_CURRENT = 'electricCurrent',
    /** Temperature */
    TEMPERATURE = 'temperature',
    /** Amount of substance */
    AMOUNT_OF_SUBSTANCE = 'amountOfSubstance',
    /** Luminous intensity */
    LUMINOUS_INTENSITY = 'luminousIntensity'
};  

/** Enumeration of reference types based on BibTeX. */
export enum ReferenceType {
    /** Article reference */
    ARTICLE = 'article',
    /** Book reference */
    BOOK = 'book',
    /** Booklet reference */
    BOOKLET = 'booklet',
    /** Conference reference */
    CONFERENCE = 'conference',
    /** Inbook reference */
    INBOOK = 'inbook',
    /** Incollection reference */
    INCOLLECTION = 'incollection',
    /** Inproceedings reference */
    INPROCEEDINGS = 'inproceedings',
    /** Manual reference */
    MANUAL = 'manual',
    /** Master's thesis reference */
    MASTERSTHESIS = 'mastersthesis',
    /** Thesis reference */
    THESIS = 'thesis',
    /** Miscellaneous reference */
    MISC = 'misc',
    /** PhD thesis reference */
    PHDTHESIS = 'phdthesis',
    /** Proceedings reference */
    PROCEEDINGS = 'proceedings',
    /** Technical report reference */
    TECHREPORT = 'techreport',
    /** Unpublished reference */
    UNPUBLISHED = 'unpublished'
};

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

/** Enumeration of form types for substances. */
export enum FormType {
    /** Allotropic form of an element */
    ALLOTROPE = 'allotrope',
    /** Molecular form of a substance */
    MOLECULAR = 'molecular',
    /** Phase of a substance */
    PHASE = 'phase',
    /** Polymorphic form of a substance */
    POLYMORPH = 'polymorph',
    /** Amorphous form of a substance */
    AMORPHOUS = 'amorphous',
    /** Other form of a substance */
    OTHER = 'other'
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
