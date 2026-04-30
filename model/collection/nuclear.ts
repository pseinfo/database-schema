/**
 * @file model/collection/nuclear.ts
 * @description Nuclear structure and behavior, including ground states, excited levels,
 * radioactive decay, and interactions with particles.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type {
  BetaRadiationType, BetaTransitionType, DecayMode, DelayedParticle,
  IncidentNeutronEnergy, MomentMeasurementMethod, MomentMeasurementRef,
  RadiationType, SpinParity
} from '../../enum/science/nuclear';
import type { Collection, Many, Mapping, One } from '../base/modifier';
import type { StructProperty } from '../base/property';
import type { NumberValue } from '../base/value';
import type { NuclideId } from '../domain/nuclide';
import type { NoUnit } from '../registry/unit';

/** Structural model for the intrinsic angular momentum and parity of a nuclear state. */
export type Spin = {
  /** Symmetry property of the nuclear wave function under spatial inversion. */
  parity: SpinParity;
  /** Calculated numerical spin value. */
  calculatedValue: number;
  /** Typographic representation of the spin (e.g., '1/2+'). */
  value: string;
};

/** Reference to a specific nuclear state by its energy and characteristics. */
export type NuclearRef = {
  /** Excitation energy of the nuclear state relative to the ground state. */
  energy: NumberValue< 'energy' >;
  /** Angular momentum and parity of the state. */
  spinParity?: Spin;
  /** Time required for half of the population in this state to decay. */
  halfLife?: NumberValue< 'time' >;
};

/** Quantitative description of a radioactive decay mode. */
export type DecayChannel = {
  /** The specific physical mode of radioactive decay. */
  mode: DecayMode;
  /** The probability of the parent nucleus decaying via this specific mode. */
  branchingRatio?: NumberValue< 'quantity' >;
  /** Total energy released during the decay process (Q-value). */
  energy?: NumberValue< 'energy' >;
  /** Types of radiation emitted during the decay. */
  radiation?: RadiationType[];
};

/** Shared base properties for excited and ground nuclear levels. */
type NuclearBaseLevel = NuclearRef & {
  /** Documented radioactive decay channels from this state. */
  decayChannel?: DecayChannel[];
  /** Quantum number relating to the proton and neutron content of the nucleus. */
  isospin?: Spin;
  /** Measure of the interaction between the nucleus and an external magnetic field. */
  magneticMoment?: NumberValue< 'magneticMoment' >;
  /** Measure of the deviation of the nuclear charge distribution from spherical symmetry. */
  quadrupoleMoment?: NumberValue< 'area' >;
};


/** Properties of the nuclide's most stable nuclear configuration. */
export type NuclearGroundState = Expand< NuclearBaseLevel & {
  /** Relative prevalence of the nuclide in a natural sample of the element. */
  abundance?: NumberValue< 'moleFraction' >;
  /** Root-mean-square radius of the nuclear charge distribution. */
  radius?: NumberValue< 'length' >;
  /** Energy released in various radioactive decay modes of the ground state. */
  qValues?: {
    /** Q-value for beta-minus decay. */
    betaMinus?: NumberValue< 'energy'>;
    /** Q-value for alpha decay. */
    alpha?: NumberValue< 'energy' >;
    /** Q-value for electron capture. */
    ec?: NumberValue< 'energy' >;
    /** Q-value for beta-delayed neutron emission. */
    betaDelayedNeutron?: NumberValue< 'energy' >;
  };
  /** Minimum energy required to remove a nucleon from the ground state. */
  separationEnergy?: {
    /** Energy required to remove a single neutron. */
    neutron?: NumberValue< 'energy' >;
    /** Energy required to remove a single proton. */
    proton?: NumberValue< 'energy' >;
  };
  /** Average energy required to separate a nucleon from the nucleus. */
  bindingEnergyPerNucleon?: NumberValue< 'energy' >;
  /** The mass of the neutral atom in its nuclear ground state. */
  atomicMass?: NumberValue< 'mass' >;
  /** The difference between the actual atomic mass and the mass number in energy units. */
  massExcess?: NumberValue< 'energy' >;
} >;


/** Unique identifier for a specific excited nuclear level. */
export type NuclearLevelId = Brand< number, 'nuclearLevelId' >;

/** Properties of a nuclide in an excited energy state. */
export type NuclearLevel = Expand< NuclearBaseLevel & {
  /** Classification of the level within a rotational or vibrational band. */
  band?: number;
} >;


/** Description of a electromagnetic transition (gamma-ray) between nuclear levels. */
export type NuclearGamma = {
  /** The initial excited nuclear state. */
  fromLevel: NuclearLevelId;
  /** The final nuclear state after transition. */
  toLevel: NuclearLevelId;
  /** Energy of the emitted gamma-ray photon. */
  gammaEnergy?: NumberValue< 'energy' >;
  /** Relative frequency of this transition. */
  intensity?: NumberValue< NoUnit >;
  /** Classification of the radiation field (e.g., E1, M2). */
  multipolarity?: string;
  /** Ratio of the intensities of different multipolarity components. */
  mixingRatio?: NumberValue< NoUnit >;
  /** Ratio of the rate of internal conversion to the rate of gamma emission. */
  conversionCoefficient?: NumberValue< NoUnit >;
  /** Mathematical probability of transition normalized by the phase space. */
  reducedTransitionProbability?: {
    /** Electric component of the transition probability. */
    electric?: NumberValue< NoUnit >;
    /** Magnetic component of the transition probability. */
    magnetic?: NumberValue< NoUnit >;
  };
};


/** Administrative and energy balance data for a decay sequence. */
export type DecayRadiationDataset = {
  /** The nuclide resulting from the radioactive decay. */
  daughterNuclide: NuclideId;
  /** The specific nuclear level of the parent from which decay originates. */
  parentLevel?: NuclearLevelId;
  /** Effective half-life for this specific decay branch. */
  halfLife?: NumberValue< 'time' >;
  /** The specific mode of radioactive decay. */
  decayMode?: DecayChannel;
  /** Total energy released in the decay dataset. */
  qValue?: NumberValue< 'energy' >;
  /** Distribution of the released energy across various particles. */
  energyBalance?: {
    /** Energy carried by alpha particles. */
    alpha?: NumberValue< 'energy' >;
    /** Energy carried by beta particles. */
    beta?: NumberValue< 'energy' >;
    /** Energy carried by conversion and Auger electrons. */
    electronConversionAuger?: NumberValue< 'energy' >;
    /** Energy carried by gamma and X-ray photons. */
    gammaXray?: NumberValue< 'energy' >;
    /** Energy carried by the recoiling daughter nucleus. */
    recoil?: NumberValue< 'energy' >;
    /** Energy carried by neutrinos or antineutrinos. */
    neutrino?: NumberValue< 'energy' >;
    /** Total energy accounted for in the balance. */
    total?: NumberValue< 'energy' >;
    /** Weighted average Q-value per decay. */
    qBranching?: NumberValue< 'energy' >;
    /** Measure of the energy balance completeness. */
    delta?: NumberValue< 'quantity' >;
    /** Energy released but not yet attributed to specific particles. */
    unplaced?: NumberValue< 'energy' >;
  };
};

/** Shared base for quantitative radiation data. */
type RadiationBase = {
  /** Mean or discrete energy of the emitted radiation. */
  energy?: NumberValue< 'energy' >;
  /** Number of particles or photons emitted per decay. */
  intensity?: NumberValue< 'quantity' >;
  /** The resulting level of the daughter nucleus. */
  daughterLevel?: NuclearLevelId;
};

/** Properties of beta (minus or plus) or electron capture radiation. */
export type BetaRadiation = Expand< RadiationBase & {
  /** Classification as beta minus, beta plus, or EC. */
  type: BetaRadiationType;
  /** Average energy of the continuous beta spectrum. */
  meanEnergy?: NumberValue< 'energy' >;
  /** Maximum energy (endpoint) of the beta spectrum. */
  maxEnergy?: NumberValue< 'energy' >;
  /** Total energy released in an electron capture process. */
  electronCaptureEnergy?: NumberValue< 'energy' >;
  /** Relative intensity of associated conversion electrons. */
  conversionElectronIntensity?: NumberValue< 'quantity' >;
  /** Logarithm of the comparative half-life (measure of transition probability). */
  logFt?: NumberValue< NoUnit >;
  /** Classification based on the selection rules of the transition. */
  transitionType?: BetaTransitionType;
} >;

/** Properties of alpha particle emission. */
export type AlphaRadiation = Expand< RadiationBase & {
  /** Ratio of the experimental half-life to the theoretically calculated one. */
  hindranceFactor?: NumberValue< NoUnit >;
} >;

/** Properties of photon emission during nuclear transitions. */
export type GammaRadiation = Expand< RadiationBase & {
  /** Intensity of the gamma emission relative to beta-plus decay. */
  intensityBetaPlus?: NumberValue< 'quantity' >;
  /** Initial nuclear level of the transition. */
  fromLevel?: NuclearLevelId;
  /** Final nuclear level of the transition. */
  toLevel?: NuclearLevelId;
  /** Multipolarity of the electromagnetic radiation field. */
  multipolarity?: string;
  /** Mixing ratio between different multipolarities. */
  mixingRatio?: NumberValue< NoUnit >;
  /** Internal conversion coefficient for the transition. */
  conversionCoefficient?: NumberValue< NoUnit >;
} >;

/** Emission of particles from excited states following a primary radioactive decay. */
export type DelayedParticleRadiation = Expand< RadiationBase & {
  /** The type of delayed particle emitted (e.g., Neutron, Proton). */
  particle: DelayedParticle;
  /** Energy of the excited state in the intermediate nucleus. */
  intermediateEnergy?: NumberValue< 'energy' >;
  /** Energy width of the emitting state. */
  width?: NumberValue< 'energy' >;
  /** Change in orbital angular momentum during emission. */
  angularMomentumTransfer?: NumberValue< NoUnit >;
  /** Spin and parity of the emitting state. */
  spinParity?: Spin;
} >;

/** Emission of photons or electrons resulting from atomic shell processes. */
export type AtomicRadiation = Expand< RadiationBase & {
  /** The atomic shell or subshell where the process originates. */
  originShell?: string;
  /** X-ray nomenclature or line identifier (e.g., 'K-alpha'). */
  line?: string;
  /** Energy of the initiating process (e.g., binding energy). */
  sourceEnergy?: NumberValue< 'energy' >;
  /** Probability of electron capture from this specific shell. */
  electronCaptureProbability?: NumberValue< 'quantity' >;
  /** Internal conversion coefficient for the specific shell. */
  conversionCoefficientShell?: NumberValue< NoUnit >;
} >;

/** Grouping of radiation data for a specific decay dataset. */
export type DecayRadiation = {
  /** Administrative and energy balance context. */
  dataset: DecayRadiationDataset;
  /** Categorized lists of emitted radiation. */
  radiation?: {
    /** Beta radiation data. */
    beta?: BetaRadiation[];
    /** Alpha radiation data. */
    alpha?: AlphaRadiation[];
    /** Gamma radiation data. */
    gamma?: GammaRadiation[];
    /** Delayed particle emission data. */
    delayed?: DelayedParticleRadiation[];
    /** Atomic shell radiation data. */
    atomic?: AtomicRadiation[];
  };
};


/** Experimental data regarding magnetic and quadrupole moments. */
export type NuclearMomentMeasurement = {
  /** The nuclear state or context being measured. */
  ref:
    | { type: MomentMeasurementRef.LEVEL, level: NuclearLevelId }
    | { type: MomentMeasurementRef.CONTEXT, context: NuclearRef };
  /** Measured magnetic dipole moment. */
  magneticMoment?: NumberValue< 'magneticMoment' >;
  /** Measured electric quadrupole moment. */
  quadrupoleMoment?: NumberValue< 'area' >;
  /** The experimental method used for the measurement. */
  method?: MomentMeasurementMethod;
  /** The reference nuclide used for calibration. */
  referenceStandard?: NuclideId;
  /** Identifier in the International Network of Nuclear Structure and Decay Data. */
  indcTable?: string;
  /** Key for the Nuclear Science References (NSR) database. */
  nsrKey?: string;
};

/** Collection of documented nuclear moments. */
export type NuclearMoments = Collection< {
  /** Officially recommended moment values. */
  recommended?: Many< StructProperty< NuclearMomentMeasurement > >;
  /** Chronological or alternative compiled measurements. */
  compiled?: Many< StructProperty< NuclearMomentMeasurement > >;
} >;


/** Quantitative distribution of fission products. */
export type NuclearFissionYield = {
  /** Indicates if the yield is for a metastable state. */
  metastable: boolean;
  /** The parent nuclide undergoing fission. */
  parent: NuclideId;
  /** Yield values indexed by the energy of the incident neutrons. */
  yields: Mapping< IncidentNeutronEnergy, NumberValue< 'quantity' > >;
};

/** Collection of data related to nuclear fission processes. */
export type NuclearFission = Collection< {
  /** Total yield of the nuclide including contributions from precursors. */
  cumulative?: Many< StructProperty< NuclearFissionYield > >;
  /** Direct yield of the nuclide from the fission event. */
  independent?: Many< StructProperty< NuclearFissionYield > >;
} >;


/** Parameters governing the interaction of the nuclide with neutrons. */
export type NuclearNeutronCapture = {
  /** Spin and parity of the capturing state. */
  spinParity?: Spin;
  /** Effective area representing the probability of a specific reaction. */
  crossSection?: {
    /** Capture cross-section for a Maxwellian neutron distribution. */
    maxwellianCapture?: NumberValue< 'area' >;
    /** Total radiative capture cross-section. */
    capture?: NumberValue< 'area' >;
    /** Probability of elastic neutron scattering. */
    elastic?: NumberValue< 'area' >;
    /** Probability of neutron-induced alpha emission. */
    alpha?: NumberValue< 'area' >;
    /** Probability of neutron-induced proton emission. */
    proton?: NumberValue< 'area' >;
    /** Probability of neutron-induced fission. */
    fission?: NumberValue< 'area' >;
  };
  /** Potential scattering radius of the nucleus. */
  radius?: NumberValue< 'length' >;
  /** Parameters of the nuclear resonance structure. */
  resonance?: {
    /** Average energy spacing between resonances. */
    averageSpacing?: NumberValue< 'energy' >;
    /** Reduced neutron width for s-wave neutrons. */
    sWave?: NumberValue< 'energy' >;
    /** Reduced neutron width for p-wave neutrons. */
    pWave?: NumberValue< 'energy' >;
  };
  /** Cross-section integrated over a 1/E neutron spectrum. */
  resonanceIntegrals?: {
    /** Integral for radiative capture. */
    capture?: NumberValue< 'area' >;
    /** Integral for alpha emission. */
    alpha?: NumberValue< 'area' >;
    /** Integral for proton emission. */
    proton?: NumberValue< 'area' >;
    /** Integral for neutron-induced fission. */
    fission?: NumberValue< 'area' >;
    /** Integral for total neutron absorption. */
    absorption?: NumberValue< 'area' >;
  };
  /** Maxwellian-averaged capture cross-section at kT = 30 keV. */
  macs30?: NumberValue< 'area' >;
};

/** Collection of data related to specific nuclear reactions. */
export type NuclearReactions = Collection< {
  /** Detailed parameters of neutron capture processes. */
  neutronCapture?: One< StructProperty< NuclearNeutronCapture > >;
} >;


/** Properties relevant to Nuclear Magnetic Resonance (NMR) spectroscopy. */
export type NuclearNMR = {
  /** Nuclear spin state used for NMR. */
  spin?: Spin;
  /** Ratio of the magnetic moment to the angular momentum. */
  gyromagneticRatio?: NumberValue< 'gyromagneticRatio' >;
  /** Relationship between the external field and the resonance frequency. */
  larmorFrequency?: {
    /** Strength of the external magnetic flux density. */
    field: NumberValue< 'magneticFluxDensity' >;
    /** Resulting Larmor precession frequency. */
    frequency: NumberValue< 'frequency' >;
  };
  /** NMR sensitivity of the nuclide relative to a reference. */
  relativeSensitivity?: {
    /** Numerical sensitivity factor. */
    value: NumberValue< NoUnit >;
    /** The reference nuclide (usually 1H or 13C). */
    reference?: NuclideId;
  };
};

/** Collection of data for various nuclear spectroscopy techniques. */
export type NuclearSpectroscopy = Collection< {
  /** Data for Nuclear Magnetic Resonance applications. */
  nmr?: One< StructProperty< NuclearNMR > >;
} >;


/** Comprehensive collection of nuclear data, categorized by states, transitions, and interactions. */
export type NuclearCollection = Collection< {
  /** Properties of the nuclear ground state. */
  ground?: One< StructProperty< NuclearGroundState > >;
  /** Registry of excited nuclear energy levels. */
  levels?: Collection< {
    [ K in NuclearLevelId ]: One< StructProperty< NuclearLevel > >
  } >;
  /** Documented gamma-ray transitions. */
  gammas?: Many< StructProperty< NuclearGamma > >;
  /** Comprehensive radioactive decay datasets. */
  decay?: Many< StructProperty< DecayRadiation > >;
  /** Experimental magnetic and electric moments. */
  moments?: NuclearMoments;
  /** Documented nuclear reaction parameters. */
  reactions?: NuclearReactions;
  /** Fission yield and probability data. */
  fission?: NuclearFission;
  /** Parameters for spectroscopic applications. */
  spectroscopy?: NuclearSpectroscopy;
} >;
