/**
 * Nuclide Enumerations
 * This module contains nuclide-specific enumerations used throughout the database schema.
 * 
 * @module enums/nuclide
 */


/** Enumeration of radioactive decay modes. */
export enum DecayMode {
    /** Double beta plus decay */
    DOUBLE_BETA_PLUS = '2B+',
    /** Double beta minus decay */
    DOUBLE_BETA_MINUS = '2B-',
    /** Double electron capture */
    DOUBLE_ELECTRON_CAPTURE = '2EC',
    /** Double neutron emission */
    DOUBLE_NEUTRON_EMISSION = '2N',
    /** Double proton emission */
    DOUBLE_PROTON_EMISSION = '2P',
    /** Alpha decay */
    ALPHA = 'A',
    /** Beta plus decay */
    BETA_PLUS = 'B+',
    /** Beta plus two proton emission */
    BETA_PLUS_TWO_PROTON = 'B+2P',
    /** Beta plus alpha decay */
    BETA_PLUS_ALPHA = 'B+A',
    /** Beta plus proton emission */
    BETA_PLUS_PROTON = 'B+P',
    /** Beta minus decay */
    BETA_MINUS = 'B-',
    /** Beta minus two neutron emission */
    BETA_MINUS_TWO_NEUTRON = 'B-2N',
    /** Beta minus three neutron emission */
    BETA_MINUS_THREE_NEUTRON = 'B-3N',
    /** Beta minus four neutron emission */
    BETA_MINUS_FOUR_NEUTRON = 'B-4N',
    /** Beta minus five neutron emission */
    BETA_MINUS_FIVE_NEUTRON = 'B-5N',
    /** Beta minus six neutron emission */
    BETA_MINUS_SIX_NEUTRON = 'B-6N',
    /** Beta minus seven neutron emission */
    BETA_MINUS_SEVEN_NEUTRON = 'B-7N',
    /** Beta minus alpha decay */
    BETA_MINUS_ALPHA = 'B-A',
    /** Beta minus neutron emission */
    BETA_MINUS_NEUTRON = 'B-N',
    /** Beta minus proton emission */
    BETA_MINUS_PROTON = 'B-P',
    /** Beta minus spontaneous fission */
    BETA_MINUS_SPONTANEOUS_FISSION = 'B-SF',
    /** Electron capture */
    ELECTRON_CAPTURE = 'EC',
    /** Electron capture with beta plus emission */
    ELECTRON_CAPTURE_BETA_PLUS = 'EC+B+',
    /** Electron capture with two proton emission */
    ELECTRON_CAPTURE_TWO_PROTON = 'EC2P',
    /** Electron capture with alpha emission */
    ELECTRON_CAPTURE_ALPHA = 'ECA',
    /** Electron capture with proton emission */
    ELECTRON_CAPTURE_PROTON = 'ECP',
    /** Electron capture with spontaneous fission */
    ELECTRON_CAPTURE_SPONTANEOUS_FISSION = 'ECSF',
    /** Isomeric transition */
    ISOMERIC_TRANSITION = 'IT',
    /** Neutron emission */
    NEUTRON_EMISSION = 'N',
    /** Proton emission */
    PROTON_EMISSION = 'P',
    /** Spontaneous fission */
    SPONTANEOUS_FISSION = 'SF',
    /** Spontaneous fission with electron capture and beta plus emission */
    SPONTANEOUS_FISSION_EC_BPLUS = 'SF+EC+B+'
};

/** Enumeration of radiation emission types. */
export enum RadiationType {
    /** Alpha radiation */
    ALPHA = 'alpha',
    /** Beta radiation */
    BETA = 'beta',
    /** Gamma radiation */
    GAMMA = 'gamma',
    /** X-ray radiation */
    XRAY = 'xray',
    /** Conversion electron radiation */
    CONVERSION_ELECTRON = 'conversionElectron',
    /** Positron radiation */
    POSITRON = 'positron',
    /** Neutron radiation */
    NEUTRON = 'neutron',
    /** Proton radiation */
    PROTON = 'proton',
    /** Cluster radiation */
    CLUSTER = 'cluster'
};

/** Enumeration of nuclide state identifiers. */
export enum NuclideState {
    /** Ground state */
    GROUND = 'ground',
    /** Metastable state */
    METASTABLE = 'metastable',
    /** Metastable state 1 */
    M1 = 'm1',
    /** Metastable state 2 */
    M2 = 'm2',
    /** Metastable state 3 */
    M3 = 'm3',
    /** Metastable state 4 */
    M4 = 'm4'
};

/** Enumeration of nuclide stability. */
export enum NuclideStability {
    /** Stable nuclide */
    STABLE = 'stable',
    /** Unstable nuclide */
    UNSTABLE = 'unstable',
    /** Primordial nuclide */
    PRIMORDIAL = 'primordial',
    /** Synthetic nuclide */
    SYNTHETIC = 'synthetic',
    /** Artificial nuclide */
    ARTIFICIAL = 'artificial'
};

/** Enumeration of nuclide parity classification. */
export enum NuclideParity {
    /** Positive parity */
    POSITIVE = 'positive',
    /** Negative parity */
    NEGATIVE = 'negative'
};

/** Enumeration of nuclide properties. */
export enum NuclideProperty {
    /** Stable nuclide */
    STABLE = 'stable',
    /** Unstable nuclide */
    UNSTABLE = 'unstable',
    /** Primordial nuclide */
    PRIMORDIAL = 'primordial',
    /** Synthetic nuclide */
    SYNTHETIC = 'synthetic',
    /** Artificial nuclide */
    ARTIFICIAL = 'artificial',
    /** Mononuclide */
    MONONUCLEIDE = 'mononuclide',
    /** Radioactive nuclide */
    RADIOACTIVE = 'radioactive',
    /** Naturally occurring nuclide */
    NATUREALLY_OCCURRING = 'naturallyOccurring',
    /** Metastable nuclide */
    METASTABLE = 'metastable'
};
