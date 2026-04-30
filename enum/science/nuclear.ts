/**
 * @file enum/science/nuclear.ts
 * @description Defines enums for nuclear physics, including decay modes, radiation types, and quantum states.
 */

/**
 * Quantum property describing the symmetry of a wave function under spatial inversion.
 */
export enum SpinParity {
  /** Wave function remains unchanged under spatial inversion (π = +1). */
  POSITIVE = 'positive',
  /** Wave function changes sign under spatial inversion (π = -1). */
  NEGATIVE = 'negative',
  /** Spin-parity state not yet experimentally determined. */
  UNKNOWN = 'unknown'
};

/**
 * Mechanisms by which an unstable atomic nucleus loses energy by emitting radiation.
 */
export enum DecayMode {
  /** Simultaneous conversion of two protons into two neutrons with emission of two positrons. */
  DOUBLE_BETA_PLUS = '2B+',
  /** Simultaneous conversion of two neutrons into two protons with emission of two electrons. */
  DOUBLE_BETA_MINUS = '2B-',
  /** Capture of two orbital electrons by the nucleus, typically resulting in two-neutrino emission. */
  DOUBLE_ELECTRON_CAPTURE = '2EC',
  /** Simultaneous emission of two neutrons from a highly neutron-rich nucleus. */
  DOUBLE_NEUTRON_EMISSION = '2N',
  /** Simultaneous emission of two protons from a highly proton-rich nucleus. */
  DOUBLE_PROTON_EMISSION = '2P',
  /** Emission of a helium-4 nucleus (alpha particle), reducing atomic mass by 4. */
  ALPHA = 'A',
  /** Emission of a positron (anti-electron) as a proton converts into a neutron. */
  BETA_PLUS = 'B+',
  /** Positron emission followed by the immediate release of two protons. */
  BETA_PLUS_TWO_PROTON = 'B+2P',
  /** Positron emission followed by the immediate release of an alpha particle. */
  BETA_PLUS_ALPHA = 'B+A',
  /** Positron emission followed by the immediate release of a proton. */
  BETA_PLUS_PROTON = 'B+P',
  /** Emission of an electron as a neutron converts into a proton. */
  BETA_MINUS = 'B-',
  /** Electron emission followed by the immediate release of two neutrons. */
  BETA_MINUS_TWO_NEUTRON = 'B-2N',
  /** Electron emission followed by the immediate release of three neutrons. */
  BETA_MINUS_THREE_NEUTRON = 'B-3N',
  /** Electron emission followed by the immediate release of four neutrons. */
  BETA_MINUS_FOUR_NEUTRON = 'B-4N',
  /** Electron emission followed by the immediate release of five neutrons. */
  BETA_MINUS_FIVE_NEUTRON = 'B-5N',
  /** Electron emission followed by the immediate release of six neutrons. */
  BETA_MINUS_SIX_NEUTRON = 'B-6N',
  /** Electron emission followed by the immediate release of seven neutrons. */
  BETA_MINUS_SEVEN_NEUTRON = 'B-7N',
  /** Electron emission followed by the immediate release of an alpha particle. */
  BETA_MINUS_ALPHA = 'B-A',
  /** Electron emission followed by the immediate release of a neutron. */
  BETA_MINUS_NEUTRON = 'B-N',
  /** Electron emission followed by the immediate release of a proton. */
  BETA_MINUS_PROTON = 'B-P',
  /** Beta decay followed by the spontaneous fission of the daughter nucleus. */
  BETA_MINUS_SPONTANEOUS_FISSION = 'B-SF',
  /** Capture of an inner-shell orbital electron by the nucleus. */
  ELECTRON_CAPTURE = 'EC',
  /** Competition between electron capture and positron emission. */
  ELECTRON_CAPTURE_BETA_PLUS = 'EC+B+',
  /** Electron capture followed by the emission of two protons. */
  ELECTRON_CAPTURE_TWO_PROTON = 'EC2P',
  /** Electron capture followed by the emission of an alpha particle. */
  ELECTRON_CAPTURE_ALPHA = 'ECA',
  /** Electron capture followed by the emission of a proton. */
  ELECTRON_CAPTURE_PROTON = 'ECP',
  /** Electron capture followed by the spontaneous fission of the daughter nucleus. */
  ELECTRON_CAPTURE_SPONTANEOUS_FISSION = 'ECSF',
  /** De-excitation of a metastable nuclear state via gamma emission or internal conversion. */
  ISOMERIC_TRANSITION = 'IT',
  /** Direct emission of a neutron from a nucleus, typically in neutron-rich isotopes. */
  NEUTRON_EMISSION = 'N',
  /** Direct emission of a proton from a nucleus, typically in proton-rich isotopes. */
  PROTON_EMISSION = 'P',
  /** Splitting of a heavy nucleus into two or more lighter nuclei without external provocation. */
  SPONTANEOUS_FISSION = 'SF',
  /** Complex decay chain involving fission combined with beta/capture processes. */
  SPONTANEOUS_FISSION_EC_BPLUS = 'SF+EC+B+'
};

/**
 * Types of ionizing or non-ionizing particles and waves emitted during nuclear processes.
 */
export enum RadiationType {
  /** Helium-4 nuclei consisting of two protons and two neutrons. */
  ALPHA = 'alpha',
  /** High-speed electrons or positrons emitted by certain types of radioactive nuclei. */
  BETA = 'beta',
  /** High-energy electromagnetic radiation (photons) originating from the nucleus. */
  GAMMA = 'gamma',
  /** Electromagnetic radiation typically originating from electron transitions in the shell. */
  XRAY = 'xray',
  /** Electrons ejected from the atom as a result of energy transfer from the nucleus. */
  CONVERSION_ELECTRON = 'conversionElectron',
  /** The antiparticle of the electron, having a positive charge. */
  POSITRON = 'positron',
  /** Subatomic particles with no net electric charge, vital for fission chain reactions. */
  NEUTRON = 'neutron',
  /** Positively charged subatomic particles found in the nucleus. */
  PROTON = 'proton',
  /** Emission of nuclear fragments larger than an alpha particle (e.g., C-14, O-20). */
  CLUSTER = 'cluster'
};

/**
 * Sub-classification of beta radiation based on the charge of the emitted lepton.
 */
export enum BetaRadiationType {
  /** Emission of an electron (e-) and an antineutrino. */
  BETA_MINUS = 'betaMinus',
  /** Emission of a positron (e+) and a neutrino. */
  BETA_PLUS = 'betaPlus'
};

/**
 * Classification of beta decay transitions based on selection rules (spin and parity changes).
 */
export enum BetaTransitionType {
  /** Transitions where spin change is 0 or 1 and parity is conserved. */
  ALLOWED = 'allowed',
  /** Transitions with a spin change of 2 and a parity change. */
  FIRST_FORBIDDEN_UNIQUE = '1U',
  /** Transitions with a spin change of 3 and no parity change. */
  SECOND_FORBIDDEN_UNIQUE = '2U',
  /** Transitions with a spin change of 4 and a parity change. */
  THIRD_FORBIDDEN_UNIQUE = '3U',
  /** Transitions with a spin change of 0 or 1 and a parity change. */
  FIRST_FORBIDDEN_NON_UNIQUE = '1NU',
  /** Transitions with a spin change of 2 and no parity change. */
  SECOND_FORBIDDEN_NON_UNIQUE = '2NU',
  /** Transitions with a spin change of 3 and a parity change. */
  THIRD_FORBIDDEN_NON_UNIQUE = '3NU'
};

/**
 * Particles emitted from a daughter nucleus following a preceding beta decay.
 */
export enum DelayedParticle {
  /** Neutrons emitted by fission products, crucial for nuclear reactor control. */
  NEUTRON = 'neutron',
  /** Protons emitted from highly excited states following beta decay. */
  PROTON = 'proton',
  /** Alpha particles emitted following a preceding beta transition. */
  ALPHA = 'alpha'
};

/**
 * Reference frames for measuring nuclear electromagnetic moments.
 */
export enum MomentMeasurementRef {
  /** Measurement relative to a specific nuclear energy level. */
  LEVEL = 'level',
  /** Measurement within a specific experimental or environmental context. */
  CONTEXT = 'context'
};

/**
 * Experimental techniques for determining nuclear magnetic and quadrupole moments.
 */
export enum MomentMeasurementMethod {
  /** Transient Field method for measuring moments of short-lived states. */
  TF = 'TF',
  /** Beta-detected Nuclear Magnetic Resonance. */
  b_NMR = 'b-NMR',
  /** Beta-detected Nuclear Quadrupole Resonance. */
  b_NQR = 'b-NQR',
  /** Collinear Laser Spectroscopy for ground and isomeric states. */
  CLS = 'CLS',
  /** Recoil into Vacuum/Distance method. */
  RIV_D = 'RIV/D'
};

/**
 * Kinetic energy categories for neutrons initiating nuclear reactions.
 */
export enum IncidentNeutronEnergy {
  /** Neutrons in thermal equilibrium with their surroundings (approx. 0.025 eV). */
  THERMAL = 'thermal',
  /** Neutrons with kinetic energies above 1 MeV, produced directly by fission. */
  FAST = 'fast',
  /** Neutrons with a specific energy of 14 MeV, characteristic of D-T fusion. */
  MEV_14 = '14MeV'
};
