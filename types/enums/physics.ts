/**
 * Physics Enumerations
 * This module contains physics-related enumerations used throughout the database schema.
 * 
 * @module enums/physics
 */


/** Enumeration of magnetic ordering types. */
export enum MagneticOrdering {
    /** Diamagnetic */
    DIAMAGNETIC = 'diamagnetic',
    /** Paramagnetic */
    PARAMAGNETIC = 'paramagnetic',
    /** Ferromagnetic */
    FERROMAGNETIC = 'ferromagnetic',
    /** Antiferromagnetic */
    ANTIFERROMAGNETIC = 'antiferromagnetic',
    /** Ferrimagnetic */
    FERRIMAGNETIC = 'ferrimagnetic',
    /** Superparamagnetic */
    SUPERPARAMAGNETIC = 'superparamagnetic'
};

/** Enumeration of luster types. */
export enum Luster {
    /** Metallic luster */
    METALLIC = 'metallic',
    /** Vitreous luster */
    VITREOUS = 'vitreous',
    /** Pearly luster */
    PEARLY = 'pearly',
    /** Dull luster */
    DULL = 'dull',
    /** Adamantine luster */
    ADAMANTINE = 'adamantine',
    /** Greasy luster */
    GREASY = 'greasy',
    /** Silky luster */
    SILKY = 'silky'
};

/** Enumeration of optical rotation types. */
export enum OpticalRotation {
    /** Dextrorotatory (+) */
    DEXTROROTATORY = 'dextrorotatory',
    /** Levorotatory (-) */
    LEVOROTATORY = 'levorotatory',
    /** Racemic (±) */
    RACEMIC = 'racemic'
};
