/**
 * @file enum/science/mixture.ts
 * @description Defines enums for classifying physical mixtures and their thermodynamic properties.
 */

/**
 * Fundamental categories of physical mixtures based on particle size and distribution.
 */
export enum MixtureType {
  /** Homogeneous mixture where the solute is dispersed at the molecular or ionic level. */
  SOLUTION = 'solution',
  /** Mixture with particle sizes between solutions and suspensions, exhibiting the Tyndall effect. */
  COLLOID = 'colloid',
  /** Heterogeneous mixture containing large solid particles that will eventually settle. */
  SUSPENSION = 'suspension',
  /** A colloid of two or more immiscible liquids where one is dispersed in the other. */
  EMULSION = 'emulsion'
};

/**
 * Degree of uniformity in the distribution of components within a mixture.
 */
export enum MixtureHomogeneity {
  /** Mixture with a uniform composition and properties throughout its entire volume. */
  HOMOGENEOUS = 'homogeneous',
  /** Mixture consisting of physically distinct phases with non-uniform properties. */
  HETEROGENEOUS = 'heterogeneous'
};

/**
 * Specific physical systems and states of matter combinations in mixtures.
 */
export enum MixtureSystem {
  /** A blend of two or more gases, always forming a homogeneous phase. */
  GAS_MIXTURE = 'gasMixture',
  /** A blend of two or more liquids, which may be miscible or immiscible. */
  LIQUID_MIXTURE = 'liquidMixture',
  /** A blend of two or more solids, often requiring thermal processing to mix. */
  SOLID_MIXTURE = 'solidMixture',
  /** A suspension of fine solid particles or liquid droplets in a gas. */
  AEROSOL = 'aerosol',
  /** A system formed by trapping pockets of gas in a liquid or solid. */
  FOAM = 'foam',
  /** A stable dispersion of one liquid in another immiscible liquid. */
  EMULSION = 'emulsion',
  /** A colloidal suspension of very small solid particles in a continuous liquid medium. */
  SOL = 'sol',
  /** A semi-solid colloidal system consisting of a liquid phase trapped in a solid matrix. */
  GEL = 'gel',
  /** A solid solution of two or more metals or a metal and another element. */
  ALLOY = 'alloy',
  /** A specific alloy of mercury with another metal. */
  AMALGAM = 'amalgam',
  /** A mixture of liquids that maintains its composition and boiling point during distillation. */
  AZEOTROPE = 'azeotrope',
  /** Mixture system not defined or characterized. */
  UNKNOWN = 'unknown'
};

/**
 * Thermodynamic and structural characteristics of complex mixtures.
 */
export enum MixtureProperty {
  /** Formation of a constant-boiling mixture that cannot be separated by simple distillation. */
  AZEOTROPIC = 'azeotropic',
  /** A liquid mixture that can be separated by distillation because its vapor has a different composition. */
  ZEOTROPIC = 'zeotropic',
  /** A mixture of substances that solidifies at a single temperature lower than that of any component. */
  EUTECTIC = 'eutectic',
  /** The inability of two liquids to mix to form a homogeneous solution (e.g., oil and water). */
  IMMISCIBLE = 'immiscible',
  /** Lack of a defined crystalline structure or long-range order in a solid mixture. */
  AMORPHOUS = 'amorphous',
  /** Capable of being separated by physical means such as filtration or centrifugation. */
  SEPARABLE_MECHANICALLY = 'separableMechanically',
  /** Capable of being separated by processes involving heat, such as distillation or evaporation. */
  SEPARABLE_THERMALLY = 'separableThermally',
  /** Formed into a network structure, often seen in polymers or gels. */
  RETICULATED = 'reticulated',
  /** Structure consisting of discrete, non-interconnecting gas pockets (e.g., closed-cell foam). */
  CLOSED_CELL = 'closedCell'
};
