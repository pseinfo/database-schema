import type { Collection, Single } from '../abstract/collection';
import type { StructProperty } from '../abstract/property';
import type { NumberValue, PrimitiveValue } from '../abstract/value';
import type { DecayMode, RadiationType, SpinParity } from '../enum/nuclide';
import type { PhysicalQuantity } from '../enum/util';

export type Spin = {
  parity: SpinParity;
  value: string;
  calculatedValue: number;
};

export type NMR = {
  spin?: Spin;
  gyromagneticRatio?: NumberValue< PhysicalQuantity.GYROMAGNETIC_RATIO >;
  larmorPrecession?: NumberValue< PhysicalQuantity.FREQUENCY >;
};

export type DecayChannel = {
  mode: DecayMode;
  branchingRatio?: NumberValue< PhysicalQuantity.QUANTITY >;
  energy?: NumberValue< PhysicalQuantity.ENERGY >;
  radiation?: RadiationType[];
};

export type GroudState = {
  energy?: NumberValue< PhysicalQuantity.ENERGY >;
  angularMomentum?: Spin;
  halfLife?: NumberValue< PhysicalQuantity.TIME >;
  isotopeAbundance?: NumberValue< PhysicalQuantity.MASS_FRACTION >;

  isotopeMass?: NumberValue< PhysicalQuantity.MASS >;
  chargeRadius?: NumberValue< PhysicalQuantity.LENGTH >;
  massExcess?: NumberValue< PhysicalQuantity.ENERGY >;
  dipoleMoment?: NumberValue< PhysicalQuantity.AREA >;
  quadrupoleMoment?: NumberValue< PhysicalQuantity.MAGNETIC_MOMENT >;
  isoSpin?: Spin;

  decayChannel?: DecayChannel[];

  bindingEnergy?: NumberValue< PhysicalQuantity.ENERGY >;
  alphaDecayEnergy?: NumberValue< PhysicalQuantity.ENERGY >;
  betaDecayEnergy?: NumberValue< PhysicalQuantity.ENERGY >;
  electronCaptureEnergy?: NumberValue< PhysicalQuantity.ENERGY >;
  neutronEmissionEnergy?: NumberValue< PhysicalQuantity.ENERGY >;
  neutronSeparationEnergy?: NumberValue< PhysicalQuantity.ENERGY >;
  protonSeparationEnergy?: NumberValue< PhysicalQuantity.ENERGY >;
  excitationEnergy?: NumberValue< PhysicalQuantity.ENERGY >;
};

export type Level = {
  energy?: NumberValue< PhysicalQuantity.ENERGY >;
  angularMomentum?: Spin;
  band?: number;
  halfLife?: NumberValue< PhysicalQuantity.TIME >;
  isotopeAbundance?: NumberValue< PhysicalQuantity.MASS_FRACTION >;
  dipoleMoment?: NumberValue< PhysicalQuantity.AREA >;
  quadrupoleMoment?: NumberValue< PhysicalQuantity.MAGNETIC_MOMENT >;
  isoSpin?: Spin;
  decayChannel?: DecayChannel[];
};

export type Gamma = {
  initial?: {
    energy?: NumberValue< PhysicalQuantity.ENERGY >;
    angularMomentum?: Spin;
  };
  final?: {
    energy?: NumberValue< PhysicalQuantity.ENERGY >;
    angularMomentum?: Spin;
  };
  halfLife?: NumberValue< PhysicalQuantity.TIME >;
  transitionEnergy?: NumberValue< PhysicalQuantity.ENERGY >;
  relativeIntensity?: NumberValue< PhysicalQuantity.QUANTITY >;
  gRayMixingRatio?: PrimitiveValue< number >;
  conversionCoefficient?: PrimitiveValue< number >;
  reducedElectricProbability?: PrimitiveValue< number >;
  magneticTransitionProbability?: PrimitiveValue< number >;
  multipolarity?: string;
};

export type NuclearCollection = Collection< {
  nmr?: Single< StructProperty< NMR > >;
  ground?: Single< StructProperty< GroudState > >;
  level?: Single< StructProperty< Level > >;
  gamma?: Single< StructProperty< Gamma > >;
} >;
