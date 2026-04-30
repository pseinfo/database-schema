/**
 * @file enum/science/nuclide.ts
 * @description Defines enums for characterizing atomic nuclei (nuclides) and their stability.
 */

/**
 * Energy levels of a nuclide, distinguishing between the lowest energy state and excited isomers.
 */
export enum NuclideState {
  /** The lowest energy state of an atomic nucleus. */
  GROUND = 'ground',
  /** First long-lived excited state (nuclear isomer). */
  M1 = 'm1',
  /** Second long-lived excited state. */
  M2 = 'm2',
  /** Third long-lived excited state. */
  M3 = 'm3',
  /** Fourth long-lived excited state. */
  M4 = 'm4'
};

/**
 * Classification of nuclides based on their propensity for radioactive decay.
 */
export enum NuclideStability {
  /** Nuclides that have not been observed to decay over the age of the universe. */
  STABLE = 'stable',
  /** Radioactive nuclides that undergo spontaneous transformation into other species. */
  UNSTABLE = 'unstable'
};

/**
 * The source or evolutionary history of a nuclide's presence in the universe.
 */
export enum NuclideOrigin {
  /** Present since the formation of the Earth or earlier stellar nucleosynthesis. */
  PRIMORDIAL = 'primordial',
  /** Formed through natural processes such as cosmic ray spallation or decay chains. */
  NATURAL = 'natural',
  /** Created exclusively through anthropogenic nuclear reactions. */
  SYNTHETIC = 'synthetic'
};

/**
 * Unique characteristics or classifications of specific nuclides.
 */
export enum NuclideProperty {
  /** Elements consisting of only one stable nuclide occurring in nature. */
  MONONUCLIDE = 'mononuclide'
};
