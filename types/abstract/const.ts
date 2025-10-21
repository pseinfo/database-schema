/**
 * Constants
 * Defines constant values and enumerations used across the database schema.
 */

// Phase of matter
export const Phase = [ 'solid', 'gaseous', 'liquid', 'plasma', 'unknown' ] as const;
export type Phase = ( typeof Phase )[ number ];

// Element blocks
export const ElementBlock = [ 's', 'p', 'd', 'f' ] as const;
export type ElementBlock = ( typeof ElementBlock )[ number ];

// Element blocks
export const ShellModel = [ 'k', 'l', 'm', 'n', 'o', 'p', 'q' ] as const;
export type ShellModel = ( typeof ShellModel )[ number ];

// Element sets
export const ElementSet = [
    'nonMetal', 'nobleGas', 'alkaliMetal', 'alkalineEarthMetal', 'metalloid', 'halogen',
    'metal', 'transitionMetal', 'lanthanoide', 'actinoide'
] as const;

export type ElementSet = ( typeof ElementSet )[ number ];

// Element groups
export const ElementGroup = [
    'alkaliMetal', 'alkalineEarthMetal', 'scandiumGroup', 'titaniumGroup', 'vanadiumGroup',
    'chromiumGroup', 'manganeseGroup', 'ironGroup', 'cobaltGroup', 'nickelGroup',
    'copperGroup', 'zincGroup', 'boronGroup', 'carbonGroup', 'pnictogen', 'chalcogen',
    'halogen', 'nobleGas', 'lanthanoidSeries', 'actinoidSeries'
] as const;

export type ElementGroup = ( typeof ElementGroup )[ number ];

// Element properties
export const ElementProperty = [
    'antiquity', 'artificial', 'heavyMetal', 'lightMetal', 'mononuclide', 'native',
    'natural', 'noble', 'platinumMetal', 'radioactive', 'rareEarths', 'refractorMetal',
    'semiconductor', 'stable', 'synthetic', 'vital'
] as const;

export type ElementProperty = ( typeof ElementProperty )[ number ];

// Natural occurrence types
export const NaturalOccurrence = [ 'primordial', 'decayProduct', 'synthetic' ] as const;
export type NaturalOccurrence = ( typeof NaturalOccurrence )[ number ];

// Superconductivity types
export const Superconductivity = [ 'none', 'normal', 'special' ] as const;
export type Superconductivity = ( typeof Superconductivity )[ number ];

// Goldschmidt classification types
export const Goldschmidt = [ 'atmophile', 'chalcophile', 'lithophile', 'siderophile', 'synthetic' ] as const;
export type Goldschmidt = ( typeof Goldschmidt )[ number ];

// Crystal structure types
export const CrystalStructure = [
    'hexagonal', 'hexagonalClosePacked', 'bodyCenteredCubic', 'rhombohedral', 'simpleCubic',
    'faceCenteredCubic', 'diamondCubic', 'orthorhombic', 'tetragonal', 'doubleHexagonalClosePacked',
    'monoclinic', 'triclinic'
] as const;

export type CrystalStructure = ( typeof CrystalStructure )[ number ];

// Magnetic ordering
export const MagneticOrdering = [
    'diamagnetic', 'paramagnetic', 'ferromagnetic', 'antiferromagnetic',
    'ferrimagnetic', 'superparamagnetic'
] as const;

export type MagneticOrdering = ( typeof MagneticOrdering )[ number ];

// Basicity character
export const BasicityCharacter = [
    'strongAcidic', 'acidic', 'moderateAcidic', 'weakAcidic', 'amphoteric', 'weakBasic',
    'moderateBasic', 'basic', 'strongBasic', 'neutral'
] as const;

export type BasicityCharacter = ( typeof BasicityCharacter )[ number ];

// Lewis module
export const LewisModule = [ 'strong', 'moderate', 'weak', 'none' ] as const;
export type LewisModule = ( typeof LewisModule )[ number ];
