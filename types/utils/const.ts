/**
 * Constants
 * Defines constant values and enumerations used across the database schema.
 */

/** Phase of matter */
export const Phase = [ 'solid', 'gaseous', 'liquid', 'plasma', 'unknown' ] as const;
export type Phase = ( typeof Phase )[ number ];

/** Natural occurrence types */
export const NaturalOccurrence = [ 'primordial', 'decayProduct', 'synthetic' ] as const;
export type NaturalOccurrence = ( typeof NaturalOccurrence )[ number ];

/** Shell model */
export const ShellModel = [ 'k', 'l', 'm', 'n', 'o', 'p', 'q' ] as const;
export type ShellModel = ( typeof ShellModel )[ number ];

/** Element symbols */
export const ElementSymbol = [
    'h', 'he', 'li', 'be', 'b', 'c', 'n', 'o', 'f', 'ne', 'na', 'mg', 'al', 'si', 'p', 's',
    'cl', 'ar', 'k', 'ca', 'sc', 'ti', 'v', 'cr', 'mn', 'fe', 'co', 'ni', 'cu', 'zn', 'ga',
    'ge', 'as', 'se', 'br', 'kr', 'rb', 'sr', 'y', 'zr', 'nb', 'mo', 'tc', 'ru', 'rh', 'pd',
    'ag', 'cd', 'in', 'sn', 'sb', 'te', 'i', 'xe', 'cs', 'ba', 'la', 'ce', 'pr', 'nd', 'pm',
    'sm', 'eu', 'gd', 'tb', 'dy', 'ho', 'er', 'tm', 'yb', 'lu', 'hf', 'ta', 'w', 're', 'os',
    'ir', 'pt', 'au', 'hg', 'tl', 'pb', 'bi', 'po', 'at', 'rn', 'fr', 'ra', 'ac', 'th', 'pa',
    'u', 'np', 'pu', 'am', 'cm', 'bk', 'cf', 'es', 'fm', 'md', 'no', 'lr', 'rf', 'db', 'sg',
    'bh', 'hs', 'mt', 'ds', 'rg', 'cn', 'nh', 'fl', 'mc', 'lv', 'ts', 'og'
] as const;

export type ElementSymbol = ( typeof ElementSymbol )[ number ];

/** Element blocks */
export const ElementBlock = [ 's', 'p', 'd', 'f' ] as const;
export type ElementBlock = ( typeof ElementBlock )[ number ];

/** Element sets */
export const ElementSet = [
    'nonMetal', 'nobleGas', 'alkaliMetal', 'alkalineEarthMetal', 'metalloid', 'halogen',
    'metal', 'transitionMetal', 'lanthanoide', 'actinoide'
] as const;

export type ElementSet = ( typeof ElementSet )[ number ];

/** Element groups */
export const ElementGroup = [
    'alkaliMetal', 'alkalineEarthMetal', 'scandiumGroup', 'titaniumGroup', 'vanadiumGroup',
    'chromiumGroup', 'manganeseGroup', 'ironGroup', 'cobaltGroup', 'nickelGroup',
    'copperGroup', 'zincGroup', 'boronGroup', 'carbonGroup', 'pnictogen', 'chalcogen',
    'halogen', 'nobleGas', 'lanthanoidSeries', 'actinoidSeries'
] as const;

export type ElementGroup = ( typeof ElementGroup )[ number ];

/** Element properties */
export const ElementProperty = [
    'antiquity', 'artificial', 'heavyMetal', 'lightMetal', 'mononuclide', 'native',
    'natural', 'noble', 'platinumMetal', 'radioactive', 'rareEarths', 'refractorMetal',
    'semiconductor', 'stable', 'synthetic', 'vital'
] as const;

export type ElementProperty = ( typeof ElementProperty )[ number ];

/** Crystal structure */
export const CrystalStructure = [
    'hexagonal', 'hexagonalClosePacked', 'bodyCenteredCubic', 'rhombohedral',
    'simpleCubic', 'faceCenteredCubic', 'diamondCubic', 'orthorhombic', 'tetragonal',
    'doubleHexagonalClosePacked', 'monoclinic', 'triclinic'
] as const;

export type CrystalStructure = ( typeof CrystalStructure )[ number ];
