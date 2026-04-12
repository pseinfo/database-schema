/**
 * Chemistry Enumerations
 * This module contains chemistry-related enumerations used throughout the database schema.
 * 
 * @module enums/chemistry
 */


/** Enumeration of acid/base character. */
export enum AcidBaseCharacter {
    /** Strong acidic */
    STRONG_ACIDIC = 'strongAcidic',
    /** Acidic */
    ACIDIC = 'acidic',
    /** Moderate acidic */
    MODERATE_ACIDIC = 'moderateAcidic',
    /** Weak acidic */
    WEAK_ACIDIC = 'weakAcidic',
    /** Amphoteric */
    AMPHOTERIC = 'amphoteric',
    /** Weak basic */
    WEAK_BASIC = 'weakBasic',
    /** Moderate basic */
    MODERATE_BASIC = 'moderateBasic',
    /** Basic */
    BASIC = 'basic',
    /** Strong basic */
    STRONG_BASIC = 'strongBasic',
    /** Neutral */
    NEUTRAL = 'neutral'
};

/** Enumeration of Lewis acidity levels. */
export enum LewisAcidity {
    /** Strong Lewis acidity */
    STRONG = 'strong',
    /** Moderate Lewis acidity */
    MODERATE = 'moderate',
    /** Weak Lewis acidity */
    WEAK = 'weak',
    /** No Lewis acidity */
    NONE = 'none'
};

/** Enumeration of Lewis basicity levels. */
export enum LewisBasicity {
    /** Strong Lewis basicity */
    STRONG = 'strong',
    /** Moderate Lewis basicity */
    MODERATE = 'moderate',
    /** Weak Lewis basicity */
    WEAK = 'weak',
    /** No Lewis basicity */
    NONE = 'none'
};

/** Enumeration of HSAB (Hard and Soft Acids and Bases) classifications. */
export enum HSAB {
    /** Hard */
    HARD = 'hard',
    /** Borderline */
    BORDERLINE = 'borderline',
    /** Soft */
    SOFT = 'soft'
};

/** Enumeration of oxide character. */
export enum OxideCharacter {
    /** Acidic oxide */
    ACIDIC = 'acidic',
    /** Amphoteric oxide */
    AMPHOTERIC = 'amphoteric',
    /** Basic oxide */
    BASIC = 'basic'
};

/** Enumeration of chemical bond types. */
export enum BondType {
    /** Ionic bond */
    IONIC = 'ionic',
    /** Covalent bond */
    COVALENT = 'covalent',
    /** Metallic bond */
    METALLIC = 'metallic',
    /** Van der Waals forces */
    VDW = 'vdw',
    /** Hydrogen bond */
    HYDROGEN = 'hydrogen'
};

/** Enumeration of orbital hybridization types. */
export enum Hybridization {
    /** sp hybridization */
    SP = 'sp',
    /** sp2 hybridization */
    SP2 = 'sp2',
    /** sp3 hybridization */
    SP3 = 'sp3',
    /** sp3d hybridization */
    SP3D = 'sp3d',
    /** sp3d2 hybridization */
    SP3D2 = 'sp3d2',
    /** sp3d3 hybridization */
    SP3D3 = 'sp3d3'
};
