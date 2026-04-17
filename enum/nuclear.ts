/**
 * @file nuclear.ts
 * @description Defines enums for nuclear properties, decay modes, and stability.
 * This module covers atomic nuclide states, radiation types, and radioactive decay paths.
 */

/**
 * Energy state of an atomic nucleus relative to its lowest potential.
 */
export enum NuclideState {
  /** Lowest energy state of the nucleus. */
  GROUND = 'ground',
  /** Long-lived excited state with a measurable half-life. */
  METASTABLE = 'metastable',
  /** Discrete energetic nuclear state above the ground state (level 1). */
  M1 = 'm1',
  /** Discrete energetic nuclear state above the ground state (level 2). */
  M2 = 'm2',
  /** Discrete energetic nuclear state above the ground state (level 3). */
  M3 = 'm3',
  /** Discrete energetic nuclear state above the ground state (level 4). */
  M4 = 'm4'
};

/**
 * Classification of nuclear stability and environmental persistence.
 */
export enum NuclideStability {
  /** Does not undergo radioactive decay within the age of the universe. */
  STABLE = 'stable',
  /** Susceptible to spontaneous radioactive decay. */
  UNSTABLE = 'unstable',
  /** Radioactive isotope that existed since the formation of the Earth. */
  PRIMORDIAL = 'primordial',
  /** Produced in reactors or particle accelerators, not found naturally. */
  SYNTHETIC = 'synthetic',
  /** Specifically created through human nuclear processes or synthesis. */
  ARTIFICIAL = 'artificial'
};

/**
 * Intrinsic angular momentum (spin) and spatial symmetry (parity) of a nucleus.
 */
export enum SpinParity {
  /** Even symmetry under spatial inversion. */
  POSITIVE = 'positive',
  /** Odd symmetry under spatial inversion. */
  NEGATIVE = 'negative',
  /** Nuclear symmetry properties are currently undetermined. */
  UNKNOWN = 'unknown'
};

/**
 * Spontaneous transformation of an unstable atomic nucleus into a different entity.
 * Notation follows common nuclear physics shorthand for emission processes.
 */
export enum DecayMode {
  /** Simultaneous conversion of two protons to neutrons with positron emission. */
  DOUBLE_BETA_PLUS = '2B+',
  /** Simultaneous conversion of two neutrons to protons with electron emission. */
  DOUBLE_BETA_MINUS = '2B-',
  /** Capture of two inner-shell electrons by the nucleus. */
  DOUBLE_ELECTRON_CAPTURE = '2EC',
  /** Spontaneous emission of two neutrons from an unstable nucleus. */
  DOUBLE_NEUTRON_EMISSION = '2N',
  /** Spontaneous emission of two protons from an unstable nucleus. */
  DOUBLE_PROTON_EMISSION = '2P',
  /** Helium-4 nucleus emission, reducing atomic number by 2 and mass by 4. */
  ALPHA = 'A',
  /** Positron emission through the conversion of a proton to a neutron. */
  BETA_PLUS = 'B+',
  /** Positron emission followed by the emission of two protons. */
  BETA_PLUS_TWO_PROTON = 'B+2P',
  /** Beta-plus decay resulting in an excited state that emits an alpha particle. */
  BETA_PLUS_ALPHA = 'B+A',
  /** Beta-plus decay followed by the emission of one proton. */
  BETA_PLUS_PROTON = 'B+P',
  /** Electron emission through the conversion of a neutron to a proton. */
  BETA_MINUS = 'B-',
  /** Beta-minus decay followed by the emission of two neutrons. */
  BETA_MINUS_TWO_NEUTRON = 'B-2N',
  /** Beta-minus decay followed by the emission of three neutrons. */
  BETA_MINUS_THREE_NEUTRON = 'B-3N',
  /** Beta-minus decay followed by the emission of four neutrons. */
  BETA_MINUS_FOUR_NEUTRON = 'B-4N',
  /** Beta-minus decay followed by the emission of five neutrons. */
  BETA_MINUS_FIVE_NEUTRON = 'B-5N',
  /** Beta-minus decay followed by the emission of six neutrons. */
  BETA_MINUS_SIX_NEUTRON = 'B-6N',
  /** Beta-minus decay followed by the emission of seven neutrons. */
  BETA_MINUS_SEVEN_NEUTRON = 'B-7N',
  /** Beta-minus decay resulting in an excited state that emits an alpha particle. */
  BETA_MINUS_ALPHA = 'B-A',
  /** Beta-minus decay followed by the emission of one neutron. */
  BETA_MINUS_NEUTRON = 'B-N',
  /** Beta-minus decay followed by the emission of one proton. */
  BETA_MINUS_PROTON = 'B-P',
  /** Beta-minus decay followed by spontaneous fission of the daughter nucleus. */
  BETA_MINUS_SPONTANEOUS_FISSION = 'B-SF',
  /** Capture of an orbital electron by a proton in the nucleus. */
  ELECTRON_CAPTURE = 'EC',
  /** Competition between electron capture and positron emission. */
  ELECTRON_CAPTURE_BETA_PLUS = 'EC+B+',
  /** Electron capture followed by the emission of two protons. */
  ELECTRON_CAPTURE_TWO_PROTON = 'EC2P',
  /** Electron capture results in an excited state that emits an alpha particle. */
  ELECTRON_CAPTURE_ALPHA = 'ECA',
  /** Electron capture followed by the emission of one proton. */
  ELECTRON_CAPTURE_PROTON = 'ECP',
  /** Electron capture followed by spontaneous fission. */
  ELECTRON_CAPTURE_SPONTANEOUS_FISSION = 'ECSF',
  /** Transition from an excited nuclear isomorphism to the ground state. */
  ISOMERIC_TRANSITION = 'IT',
  /** Release of a single neutron to achieve greater stability. */
  NEUTRON_EMISSION = 'N',
  /** Release of a single proton to achieve greater stability. */
  PROTON_EMISSION = 'P',
  /** Splitting of a heavy nucleus into two smaller nuclei without external interaction. */
  SPONTANEOUS_FISSION = 'SF',
  /** Spontaneous fission accompanied by positron emission or electron capture. */
  SPONTANEOUS_FISSION_EC_BPLUS = 'SF+EC+B+'
};

/**
 * Types of ionizing and non-ionizing particles or waves emitted by radionuclides.
 */
export enum RadiationType {
  /** Flux of helium nuclei. */
  ALPHA = 'alpha',
  /** Flux of high-speed electrons or positrons. */
  BETA = 'beta',
  /** High-energy electromagnetic waves emitted from the nucleus. */
  GAMMA = 'gamma',
  /** High-energy electromagnetic waves originating from electron transitions. */
  XRAY = 'xray',
  /** Interaction of nucleus with an orbital electron, causing its emission. */
  CONVERSION_ELECTRON = 'conversionElectron',
  /** Antimatter particle with the same mass as an electron but positive charge. */
  POSITRON = 'positron',
  /** Uncharged subatomic particles with high penetrating power. */
  NEUTRON = 'neutron',
  /** Positively charged subatomic particles consisting of one hydrogen nucleus. */
  PROTON = 'proton',
  /** Rare emission of particles larger than alpha particles (e.g., carbon-14). */
  CLUSTER = 'cluster'
};

/**
 * Qualitative attributes describing the nuclear or environmental behavior of a nuclide.
 */
export enum NuclideProperty {
  /** Non-decaying nuclear configuration. */
  STABLE = 'stable',
  /** Subject to nuclear transmutation over time. */
  UNSTABLE = 'unstable',
  /** Originating from before the formation of the Earth. */
  PRIMORDIAL = 'primordial',
  /** Result of human nuclear synthesis in reactors. */
  SYNTHETIC = 'synthetic',
  /** Produced through artificial bombardment or fission. */
  ARTIFICIAL = 'artificial',
  /** Occurring as a single stable isotope for a given element. */
  MONONUCLEIDE = 'mononuclide',
  /** Spontaneously emitting radiation. */
  RADIOACTIVE = 'radioactive',
  /** Occurring naturally on Earth though natural cycles. */
  NATUREAL = 'natural',
  /** Existing in a long-lived nuclear excited state. */
  METASTABLE = 'metastable'
};
