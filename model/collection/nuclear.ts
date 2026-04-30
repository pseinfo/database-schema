import type { Brand, Expand } from 'devtypes/types/util';
import type {
  BetaRadiationType, BetaTransitionType, DecayMode, DelayedParticle,
  IncidentNeutronEnergy, MomentMeasurementMethod, MomentMeasurementRef,
  RadiationType, SpinParity
} from '../../enum/collection/nuclear';
import type { Collection, Many, Mapping, One } from '../base/modifier';
import type { StructProperty } from '../base/property';
import type { NumberValue } from '../base/value';
import type { NuclideId } from '../domain/nuclide';
import type { NoUnit } from '../registry/unit';

export type Spin = {
  parity: SpinParity;
  calculatedValue: number;
  value: string;
};

export type NuclearRef = {
  energy: NumberValue< 'energy' >;
  spinParity?: Spin;
  halfLife?: NumberValue< 'time' >;
};

export type DecayChannel = {
  mode: DecayMode;
  branchingRatio?: NumberValue< 'quantity' >;
  energy?: NumberValue< 'energy' >;
  radiation?: RadiationType[];
};

type NuclearBaseLevel = NuclearRef & {
  decayChannel?: DecayChannel[];
  isospin?: Spin;
  magneticMoment?: NumberValue< 'magneticMoment' >;
  quadrupoleMoment?: NumberValue< 'area' >;
};


export type NuclearGroundState = Expand< NuclearBaseLevel & {
  abundance?: NumberValue< 'moleFraction' >;
  radius?: NumberValue< 'length' >;
  qValues?: {
    betaMinus?: NumberValue< 'energy'>;
    alpha?: NumberValue< 'energy' >;
    ec?: NumberValue< 'energy' >;
    betaDelayedNeutron?: NumberValue< 'energy' >;
  };
  separationEnergy?: {
    neutron?: NumberValue< 'energy' >;
    proton?: NumberValue< 'energy' >;
  };
  bindingEnergyPerNucleon?: NumberValue< 'energy' >;
  atomicMass?: NumberValue< 'mass' >;
  massExcess?: NumberValue< 'energy' >;
} >;


export type NuclearLevelId = Brand< number, 'nuclearLevelId' >;

export type NuclearLevel = Expand< NuclearBaseLevel & {
  band?: number;
} >;


export type NuclearGamma = {
  fromLevel: NuclearLevelId;
  toLevel: NuclearLevelId;
  gammaEnergy?: NumberValue< 'energy' >;
  intensity?: NumberValue< NoUnit >;
  multipolarity?: string;
  mixingRatio?: NumberValue< NoUnit >;
  conversionCoefficient?: NumberValue< NoUnit >;
  reducedTransitionProbability?: {
    electric?: NumberValue< NoUnit >;
    magnetic?: NumberValue< NoUnit >;
  };
};


export type DecayRadiationDataset = {
  daughterNuclide: NuclideId;
  parentLevel?: NuclearLevelId;
  halfLife?: NumberValue< 'time' >;
  decayMode?: DecayChannel;
  qValue?: NumberValue< 'energy' >;
  energyBalance?: {
    alpha?: NumberValue< 'energy' >;
    beta?: NumberValue< 'energy' >;
    electronConversionAuger?: NumberValue< 'energy' >;
    gammaXray?: NumberValue< 'energy' >;
    recoil?: NumberValue< 'energy' >;
    neutrino?: NumberValue< 'energy' >;
    total?: NumberValue< 'energy' >;
    qBranching?: NumberValue< 'energy' >;
    delta?: NumberValue< 'quantity' >;
    unplaced?: NumberValue< 'energy' >;
  };
};

type RadiationBase = {
  energy?: NumberValue< 'energy' >;
  intensity?: NumberValue< 'quantity' >;
  daughterLevel?: NuclearLevelId;
};

export type BetaRadiation = Expand< RadiationBase & {
  type: BetaRadiationType;
  meanEnergy?: NumberValue< 'energy' >;
  maxEnergy?: NumberValue< 'energy' >;
  electronCaptureEnergy?: NumberValue< 'energy' >;
  conversionElectronIntensity?: NumberValue< 'quantity' >;
  logFt?: NumberValue< NoUnit >;
  transitionType?: BetaTransitionType;
} >;

export type AlphaRadiation = Expand< RadiationBase & {
  hindranceFactor?: NumberValue< NoUnit >;
} >;

export type GammaRadiation = Expand< RadiationBase & {
  intensityBetaPlus?: NumberValue< 'quantity' >;
  fromLevel?: NuclearLevelId;
  toLevel?: NuclearLevelId;
  multipolarity?: string;
  mixingRatio?: NumberValue< NoUnit >;
  conversionCoefficient?: NumberValue< NoUnit >;
} >;

export type DelayedParticleRadiation = Expand< RadiationBase & {
  particle: DelayedParticle;
  intermediateEnergy?: NumberValue< 'energy' >;
  width?: NumberValue< 'energy' >;
  angularMomentumTransfer?: NumberValue< NoUnit >;
  spinParity?: Spin;
} >;

export type AtomicRadiation = Expand< RadiationBase & {
  originShell?: string;
  line?: string;
  sourceEnergy?: NumberValue< 'energy' >;
  electronCaptureProbability?: NumberValue< 'quantity' >;
  conversionCoefficientShell?: NumberValue< NoUnit >;
} >;

export type DecayRadiation = {
  dataset: DecayRadiationDataset;
  radiation?: {
    beta?: BetaRadiation[];
    alpha?: AlphaRadiation[];
    gamma?: GammaRadiation[];
    delayed?: DelayedParticleRadiation[];
    atomic?: AtomicRadiation[];
  };
};


export type NuclearMomentMeasurement = {
  ref:
    | { type: MomentMeasurementRef.LEVEL, level: NuclearLevelId }
    | { type: MomentMeasurementRef.CONTEXT, context: NuclearRef };
  magneticMoment?: NumberValue< 'magneticMoment' >;
  quadrupoleMoment?: NumberValue< 'area' >;
  method?: MomentMeasurementMethod;
  referenceStandard?: NuclideId;
  indcTable?: string;
  nsrKey?: string;
};

export type NuclearMoments = Collection< {
  recommended?: Many< StructProperty< NuclearMomentMeasurement > >;
  compiled?: Many< StructProperty< NuclearMomentMeasurement > >;
} >;


export type NuclearFissionYield = {
  metastable: boolean;
  parent: NuclideId;
  yields: Mapping< IncidentNeutronEnergy, NumberValue< 'quantity' > >;
};

export type NuclearFission = Collection< {
  cumulative?: Many< StructProperty< NuclearFissionYield > >;
  independent?: Many< StructProperty< NuclearFissionYield > >;
} >;

export type NuclearNeutronCapture = {
  spinParity?: Spin;
  crossSection?: {
    maxwellianCapture?: NumberValue< 'area' >;
    capture?: NumberValue< 'area' >;
    elastic?: NumberValue< 'area' >;
    alpha?: NumberValue< 'area' >;
    proton?: NumberValue< 'area' >;
    fission?: NumberValue< 'area' >;
  };
  radius?: NumberValue< 'length' >;
  resonance?: {
    averageSpacing?: NumberValue< 'energy' >;
    sWave?: NumberValue< 'energy' >;
    pWave?: NumberValue< 'energy' >;
  };
  resonanceIntegrals?: {
    capture?: NumberValue< 'area' >;
    alpha?: NumberValue< 'area' >;
    proton?: NumberValue< 'area' >;
    fission?: NumberValue< 'area' >;
    absorption?: NumberValue< 'area' >;
  };
  macs30?: NumberValue< 'area' >;
};

export type NuclearReactions = Collection< {
  neutronCapture?: One< StructProperty< NuclearNeutronCapture > >;
} >;


export type NuclearNMR = {
  spin?: Spin;
  gyromagneticRatio?: NumberValue< 'gyromagneticRatio' >;
  larmorFrequency?: {
    field: NumberValue< 'magneticFluxDensity' >;
    frequency: NumberValue< 'frequency' >;
  };
  relativeSensitivity?: {
    value: NumberValue< NoUnit >;
    reference?: NuclideId;
  };
};

export type NuclearSpectroscopy = Collection< {
  nmr?: One< StructProperty< NuclearNMR > >;
} >;


export type NuclearCollection = Collection< {
  ground?: One< StructProperty< NuclearGroundState > >;
  levels?: Collection< {
    [ K in NuclearLevelId ]: One< StructProperty< NuclearLevel > >
  } >;
  gammas?: Many< StructProperty< NuclearGamma > >;
  decay?: Many< StructProperty< DecayRadiation > >;
  moments?: NuclearMoments;
  reactions?: NuclearReactions;
  fission?: NuclearFission;
  spectroscopy?: NuclearSpectroscopy;
} >;
