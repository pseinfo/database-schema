/**
 * @file mixture.ts
 * @description Defines enums for chemical mixtures, their homogeneity, and physical states.
 * This module covers the classification of solutions, colloids, and heterogeneous mixtures.
 */

/**
 * Classification of mixtures based on the physical state of their components.
 */
export enum MixtureType {
  /** Homogeneous liquid phase with uniform distribution. */
  SOLUTION = 'solution',
  /** Dispersed particles in a medium that do not settle. */
  COLLOID = 'colloid',
  /** Large particles that eventually settle under gravity. */
  SUSPENSION = 'suspension'
};

/**
 * Degree of uniformity in the distribution of components within a mixture.
 */
export enum MixtureHomogeneity {
  /** Components are uniformly distributed at the molecular or atomic level. */
  HOMOGENEOUS = 'homogeneous',
  /** Components are not uniformly distributed and can often be visually distinguished. */
  HETEROGENEOUS = 'heterogeneous'
};

/**
 * Detailed categories of mixtures based on the dispersed and continuous phases.
 */
export enum MixtureCategory {
  /** Uniform mixture of gases. */
  GAS_MIXTURE = 'gasMixture',
  /** Liquid droplets dispersed in a gas. */
  LIQUID_AEROSOL = 'liquidAerosol',
  /** Solid particles dispersed in a gas. */
  SOLID_AEROSOL = 'solidAerosol',
  /** Gas bubbles dispersed in a liquid. */
  LIQUID_FOAM = 'liquidFoam',
  /** Gas bubbles dispersed in a solid. */
  SOLID_FOAM = 'solidFoam',
  /** Liquid droplets dispersed in another liquid. */
  EMULSION = 'emulsion',
  /** Solid particles dispersed in a liquid (e.g., Ink). */
  SOL = 'sol',
  /** Solid particles dispersed in a solid. */
  SOLID_SOL = 'solidSol',
  /** Semi-solid or jelly-like colloidal system. */
  GEL = 'gel',
  /** Homogeneous solid solution of two or more metals. */
  ALLOY = 'alloy',
  /** Specifically a mercury-based metal alloy. */
  AMALGAM = 'amalgam',
  /** Mixture of liquids with a constant boiling point. */
  AZEOTROPE = 'azeotrope',
  /** Large solid particles dispersed in a fluid. */
  SUSPENSION = 'suspension',
  /** Macroscopic mixture of distinct substances. */
  COARSE_MIXTURE = 'coarseMixture',
  /** Unspecified category. */
  UNKNOWN = 'unknown'
};

/**
 * Qualitative attributes describing the behavior and separation properties of a mixture.
 */
export enum MixtureProperty {
  /** Boiling at a constant temperature without change in composition. */
  AZEOTROPIC = 'azeotropic',
  /** Boiling over a range of temperatures with changing composition. */
  ZEOTROPIC = 'zeotropic',
  /** Having the lowest possible melting point for a mixture of specific components. */
  EUTECTIC = 'eutectic',
  /** Solid lacking long-range atomic order. */
  AMORPHOUS = 'amorphous',
  /** Structured into a network or grid-like pattern. */
  RETICULATED = 'reticulated',
  /** Containing discrete pores that do not communicate. */
  CLOSED_CELL = 'closedCell',
  /** Two phases intertwined in a three-dimensional network. */
  BICONTINUOUS = 'bicontinuous',
  /** Components are unable to mix to form a homogeneous phase. */
  IMMISCIBLE = 'immiscible',
  /** Ratio of components varies across samples. */
  VARIABLE_COMPOSITION = 'variableComposition',
  /** Every part of the sample contains the same ratio of components. */
  UNIFORM_COMPOSITION = 'uniformComposition',
  /** Parts of the sample differ significantly in composition. */
  NON_UNIFORM_COMPOSITION = 'nonUniformComposition',
  /** Connected network allowing movement through the sample. */
  PERCOLATING = 'percolating',
  /** Containing extraneous substances not part of the base mixture. */
  IMPURE = 'impure',
  /** Components can be separated by filtration or sorting. */
  MECHANICALLY_SEPARABLE = 'mechanicallySeparable',
  /** Components can be separated by distillation or sublimation. */
  THERMALLY_SEPARABLE = 'thermallySeparable',
  /** Emitting radiation from radioactive isotopes. */
  RADIOACTIVE = 'radioactive',
  /** Produced in a laboratory or factory. */
  SYNTHETIC = 'synthetic',
  /** Found in nature. */
  NATURAL = 'natural'
};
