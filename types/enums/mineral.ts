/**
 * Mineral Enumerations
 * This module contains mineral-specific enumerations used throughout the database schema.
 * 
 * @module enums/mineral
 */


/** Enumeration of mineral classes. */
export enum MineralClass {
    /** Elements */
    ELEMENTS = 'elements',
    /** Sulfides */
    SULFIDES = 'sulfides',
    /** Halides */
    HALIDES = 'halides',
    /** Oxides */
    OXIDES = 'oxides',
    /** Carbonates */
    CARBONATES = 'carbonates',
    /** Borates */
    BORATES = 'borates',
    /** Sulfates */
    SULFATES = 'sulfates',
    /** Phosphates */
    PHOSPHATES = 'phosphates',
    /** Silicates */
    SILICATES = 'silicates',
    /** Organic */
    ORGANIC = 'organic'
};

/** Enumeration of mineral properties. */
export enum MineralProperty {
    /** Radioactive */
    RADIOACTIVE = 'radioactive',
    /** Luminescent */
    LUMINESCENT = 'luminescent',
    /** Fluorescent */
    FLUORESCENT = 'fluorescent',
    /** Phosphorescent */
    PHOSPHORESCENT = 'phosphorescent',
    /** Magnetic */
    MAGNETIC = 'magnetic',
    /** Piezoelectric */
    PIEZOELECTRIC = 'piezoelectric',
    /** Pyroelectric */
    PYROELECTRIC = 'pyroelectric',
    /** Toxic */
    TOXIC = 'toxic',
    /** Synthetic */
    SYNTHETIC = 'synthetic',
    /** Streak */
    STREAK = 'streak',
    /** Pleochroism */
    PLEOCHROISM = 'pleochroism'
};

/** Enumeration of IMA status. */
export enum IMAStatus {
    /** Approved */
    APPROVED = 'approved',
    /** Grandfathered */
    GRANDFATHERED = 'grandfathered',
    /** Questionable */
    QUESTIONABLE = 'questionable',
    /** Rejected */
    REJECTED = 'rejected',
    /** Pending */
    PENDING = 'pending',
    /** Published */
    PUBLISHED = 'published',
    /** Redefined */
    REDEFINED = 'redefined',
    /** Discredited */
    DISCREDITED = 'discredited'
};

/** Enumeration of cleavage quality. */
export enum CleavageQuality {
    /** Perfect */
    PERFECT = 'perfect',
    /** Very good */
    VERY_GOOD = 'veryGood',
    /** Good */
    GOOD = 'good',
    /** Fair */
    FAIR = 'fair',
    /** Distinct */
    DISTINCT = 'distinct',
    /** Poor */
    POOR = 'poor',
    /** Indistinct */
    INDISTINCT = 'indistinct'
};

/** Enumeration of fracture types. */
export enum FractureType {
    /** Conchoidal */
    CONCHOIDAL = 'conchoidal',
    /** Subconchoidal */
    SUBCONCHOIDAL = 'subConchoidal',
    /** Uneven */
    UNEVEN = 'uneven',
    /** Splintery */
    SPLINTERY = 'splintery',
    /** Fibrous */
    FIBROUS = 'fibrous',
    /** Hackly */
    HACKLY = 'hackly',
    /** Earthy */
    EARTHY = 'earthy',
    /** Granular */
    GRANULAR = 'granular'
};

/** Enumeration of tenacity types. */
export enum TenacityType {
    /** Brittle */
    BRITTLE = 'brittle',
    /** Sectile */
    SECTILE = 'sectile',
    /** Malleable */
    MALLEABLE = 'malleable',
    /** Ductile */
    DUCTILE = 'ductile',
    /** Flexible */
    FLEXIBLE = 'flexible',
    /** Elastic */
    ELASTIC = 'elastic'
};
