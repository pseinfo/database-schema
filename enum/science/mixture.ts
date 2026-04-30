export enum MixtureType {
  SOLUTION = 'solution',
  COLLOID = 'colloid',
  SUSPENSION = 'suspension',
  EMULSION = 'emulsion'
};

export enum MixtureHomogeneity {
  HOMOGENEOUS = 'homogeneous',
  HETEROGENEOUS = 'heterogeneous'
};

export enum MixtureSystem {
  GAS_MIXTURE = 'gasMixture',
  LIQUID_MIXTURE = 'liquidMixture',
  SOLID_MIXTURE = 'solidMixture',
  AEROSOL = 'aerosol',
  FOAM = 'foam',
  EMULSION = 'emulsion',
  SOL = 'sol',
  GEL = 'gel',
  ALLOY = 'alloy',
  AMALGAM = 'amalgam',
  AZEOTROPE = 'azeotrope',
  UNKNOWN = 'unknown'
};

export enum MixtureProperty {
  AZEOTROPIC = 'azeotropic',
  ZEOTROPIC = 'zeotropic',
  EUTECTIC = 'eutectic',
  IMMISCIBLE = 'immiscible',
  AMORPHOUS = 'amorphous',
  SEPARABLE_MECHANICALLY = 'separableMechanically',
  SEPARABLE_THERMALLY = 'separableThermally',
  RETICULATED = 'reticulated',
  CLOSED_CELL = 'closedCell'
};
