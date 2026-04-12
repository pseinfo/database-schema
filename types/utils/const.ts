/**
 * Constants
 * Defines constant values and enumerations used across the database schema.
 */

/** Phase of matter */
export type Phase = ( typeof Phase )[ number ];
export const Phase = [ 'solid', 'gaseous', 'liquid', 'plasma', 'unknown' ] as const;

/** Natural occurrence types */
export type NaturalOccurrence = ( typeof NaturalOccurrence )[ number ];
export const NaturalOccurrence = [ 'primordial', 'decayProduct', 'synthetic' ] as const;

/** Shell model */
export type ShellModel = ( typeof ShellModel )[ number ];
export const ShellModel = [ 'k', 'l', 'm', 'n', 'o', 'p', 'q' ] as const;

/** Element symbols */
export type ElementSymbol = ( typeof ElementSymbol )[ number ];
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

/** Element blocks */
export type ElementBlock = ( typeof ElementBlock )[ number ];
export const ElementBlock = [ 's', 'p', 'd', 'f' ] as const;

/** Element sets */
export type ElementSet = ( typeof ElementSet )[ number ];
export const ElementSet = [
    'nonMetal', 'nobleGas', 'alkaliMetal', 'alkalineEarthMetal', 'metalloid', 'halogen',
    'metal', 'transitionMetal', 'lanthanoide', 'actinoide'
] as const;

/** Element groups */
export type ElementGroup = ( typeof ElementGroup )[ number ];
export const ElementGroup = [
    'alkaliMetal', 'alkalineEarthMetal', 'scandiumGroup', 'titaniumGroup', 'vanadiumGroup',
    'chromiumGroup', 'manganeseGroup', 'ironGroup', 'cobaltGroup', 'nickelGroup',
    'copperGroup', 'zincGroup', 'boronGroup', 'carbonGroup', 'pnictogen', 'chalcogen',
    'halogen', 'nobleGas', 'lanthanoidSeries', 'actinoidSeries'
] as const;

/** Element properties */
export type ElementProperty = ( typeof ElementProperty )[ number ];
export const ElementProperty = [
    'antiquity', 'artificial', 'heavyMetal', 'lightMetal', 'mononuclide', 'native',
    'natural', 'noble', 'platinumMetal', 'radioactive', 'rareEarths', 'refractorMetal',
    'semiconductor', 'stable', 'synthetic', 'vital'
] as const;

/** Component roles */
export type ComponentRole = ( typeof ComponentRole )[ number ];
export const ComponentRole = [
    'cation', 'anion', 'neutral', 'radical', 'complex', 'impurity', 'dopant', 'inclusion',
    'matrix', 'solvent'
] as const;

/** Radioactive decay modes */
export type DecayMode = ( typeof DecayMode )[ number ];
export const DecayMode = [
    '2B+', '2B-', '2EC', '2N', '2P', 'A', 'B+', 'B+2P', 'B+A', 'B+P', 'B-', 'B-2N',
    'B-3N', 'B-4N', 'B-5N', 'B-6N', 'B-7N', 'B-A', 'B-N', 'B-P', 'B-SF', 'EC', 'EC+B+',
    'EC2P', 'ECA', 'ECP', 'ECSF', 'IT', 'N', 'P', 'SF', 'SF+EC+B+', 'unknown'
] as const;

/** Radiation emission types */
export type RadiationType = ( typeof RadiationType )[ number ];
export const RadiationType = [
    'alpha', 'beta', 'gamma', 'xray', 'conversionElectron', 'positron',
    'neutron', 'proton', 'cluster'
] as const;

/** Nuclide state identifiers */
export type NuclideState = ( typeof NuclideState )[ number ];
export const NuclideState = [
    'ground', 'metastable', 'm', 'm1', 'm2', 'm3', 'm4', 'unknown'
] as const;

/** Nuclide stability */
export type NuclideStability = ( typeof NuclideStability )[ number ];
export const NuclideStability = [
    'stable', 'unstable', 'primordial', 'synthetic', 'artificial'
] as const;

/** Nuclide Properties */
export type NuclideProperty = ( typeof NuclideProperty )[ number ];
export const NuclideProperty = [
    'stable', 'unstable', 'primordial', 'synthetic', 'artificial', 'mononuclide',
    'radioactive', 'naturallyOccurring', 'metastable'
] as const;

/** Nuclide index layers */
export type NuclideLayer = ( typeof NuclideLayer )[ number ];
export const NuclideLayer = [
    'halfLife', 'mainDecayMode', 'nuclearRadius', 'massExcess', 'atomicMass', 'bindingEnergy'
] as const;

/** Crystal structure */
export type CrystalStructure = ( typeof CrystalStructure )[ number ];
export const CrystalStructure = [
    'hexagonal', 'hexagonalClosePacked', 'bodyCenteredCubic', 'rhombohedral',
    'simpleCubic', 'faceCenteredCubic', 'diamondCubic', 'orthorhombic', 'tetragonal',
    'doubleHexagonalClosePacked', 'monoclinic', 'triclinic'
] as const;

/** Compound categories */
export type CompoundCategory = ( typeof CompoundCategory )[ number ];
export const CompoundCategory = [
    'organic', 'inorganic', 'organometallic', 'biochemical', 'polymer', 'coordination',
    'salt', 'acid', 'base', 'oxide', 'hydride', 'alloy', 'intermetallic', 'complex',
    'supramolecular', 'natural', 'synthetic', 'unknown'
] as const;

/** Compound Properties */
export type CompoundProperty = ( typeof CompoundProperty )[ number ];
export const CompoundProperty = [
    'organic', 'inorganic', 'organometallic', 'biochemical', 'polymer', 'coordination',
    'salt', 'acidic', 'basic', 'amphoteric', 'aromatic', 'radical', 'natural', 'synthetic',
    'colorless', 'colored', 'corrosive', 'explosive', 'flammable', 'highlyToxic',
    'radioactive', 'toxic', 'volatile'
] as const;

/** Mineral classes */
export type MineralClass = ( typeof MineralClass )[ number ];
export const MineralClass = [
    'elements', 'sulfides', 'halides', 'oxides', 'carbonates', 'borates',
    'sulfates', 'phosphates', 'silicates', 'organic'
] as const;

/** Mineral properties */
export type MineralProperty = ( typeof MineralProperty )[ number ];
export const MineralProperty = [
    'radioactive', 'luminescent', 'fluorescent', 'phosphorescent', 'magnetic',
    'piezoelectric', 'pyroelectric', 'toxic', 'synthetic', 'streak', 'pleochroism'
] as const;

/** IMA Status */
export type IMAStatus = ( typeof IMAStatus )[ number ];
export const IMAStatus = [
    'approved', 'grandfathered', 'questionable', 'rejected', 'pending',
    'published', 'redefined', 'discredited', 'unnamed', 'groupName'
] as const;
