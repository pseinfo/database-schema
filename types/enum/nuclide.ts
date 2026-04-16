export enum NuclideState {
  GROUND = 'ground',
  METASTABLE = 'metastable',
  M1 = 'm1',
  M2 = 'm2',
  M3 = 'm3',
  M4 = 'm4'
};

export enum NuclideStability {
  STABLE = 'stable',
  UNSTABLE = 'unstable',
  PRIMORDIAL = 'primordial',
  SYNTHETIC = 'synthetic',
  ARTIFICIAL = 'artificial'
};

export enum SpinParity {
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
  UNKNOWN = 'unknown'
};

export enum DecayMode {
  DOUBLE_BETA_PLUS = '2B+',
  DOUBLE_BETA_MINUS = '2B-',
  DOUBLE_ELECTRON_CAPTURE = '2EC',
  DOUBLE_NEUTRON_EMISSION = '2N',
  DOUBLE_PROTON_EMISSION = '2P',
  ALPHA = 'A',
  BETA_PLUS = 'B+',
  BETA_PLUS_TWO_PROTON = 'B+2P',
  BETA_PLUS_ALPHA = 'B+A',
  BETA_PLUS_PROTON = 'B+P',
  BETA_MINUS = 'B-',
  BETA_MINUS_TWO_NEUTRON = 'B-2N',
  BETA_MINUS_THREE_NEUTRON = 'B-3N',
  BETA_MINUS_FOUR_NEUTRON = 'B-4N',
  BETA_MINUS_FIVE_NEUTRON = 'B-5N',
  BETA_MINUS_SIX_NEUTRON = 'B-6N',
  BETA_MINUS_SEVEN_NEUTRON = 'B-7N',
  BETA_MINUS_ALPHA = 'B-A',
  BETA_MINUS_NEUTRON = 'B-N',
  BETA_MINUS_PROTON = 'B-P',
  BETA_MINUS_SPONTANEOUS_FISSION = 'B-SF',
  ELECTRON_CAPTURE = 'EC',
  ELECTRON_CAPTURE_BETA_PLUS = 'EC+B+',
  ELECTRON_CAPTURE_TWO_PROTON = 'EC2P',
  ELECTRON_CAPTURE_ALPHA = 'ECA',
  ELECTRON_CAPTURE_PROTON = 'ECP',
  ELECTRON_CAPTURE_SPONTANEOUS_FISSION = 'ECSF',
  ISOMERIC_TRANSITION = 'IT',
  NEUTRON_EMISSION = 'N',
  PROTON_EMISSION = 'P',
  SPONTANEOUS_FISSION = 'SF',
  SPONTANEOUS_FISSION_EC_BPLUS = 'SF+EC+B+'
};

export enum RadiationType {
  ALPHA = 'alpha',
  BETA = 'beta',
  GAMMA = 'gamma',
  XRAY = 'xray',
  CONVERSION_ELECTRON = 'conversionElectron',
  POSITRON = 'positron',
  NEUTRON = 'neutron',
  PROTON = 'proton',
  CLUSTER = 'cluster'
};

export enum NuclideProperty {
  STABLE = 'stable',
  UNSTABLE = 'unstable',
  PRIMORDIAL = 'primordial',
  SYNTHETIC = 'synthetic',
  ARTIFICIAL = 'artificial',
  MONONUCLEIDE = 'mononuclide',
  RADIOACTIVE = 'radioactive',
  NATUREAL = 'natural',
  METASTABLE = 'metastable'
};
