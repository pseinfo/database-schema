import type { Collection, Single } from '../abstract/collection';
import type { StructProperty } from '../abstract/property';
import type { NumberValue } from '../abstract/value';
import type { DecayMode, RadiationType, SpinParity } from '../enum/nuclide';

export type Spin = {
  parity: SpinParity;
  value: string;
  calculatedValue?: number;
};

export type NMR = {
  spin?: Spin;
  gyromagneticRatio?: NumberValue< 'gyromagneticRatio' >;
  larmorPrecession?: NumberValue< 'frequency' >;
};

export type DecayChannel = {
  mode: DecayMode;
  branchingRatio?: NumberValue< 'quantity' >;
  energy?: NumberValue< 'energy' >;
  radiation?: RadiationType[];
};

export type GroudState = {
  energy?: NumberValue< 'energy' >;
  angularMomentum?: Spin;
  halfLife?: NumberValue< 'time' >;
  isotopeAbundance?: NumberValue< 'massFraction' >;

  isotopeMass?: NumberValue< 'mass' >;
  chargeRadius?: NumberValue< 'length' >;
  massExcess?: NumberValue< 'energy' >;
  dipoleMoment?: NumberValue< 'area' >;
  quadrupoleMoment?: NumberValue< 'magneticMoment' >;
  isoSpin?: Spin;

  decayChannel?: DecayChannel[];

  bindingEnergy?: NumberValue< 'energy' >;
  alphaDecayEnergy?: NumberValue< 'energy' >;
  betaDecayEnergy?: NumberValue< 'energy' >;
  electronCaptureEnergy?: NumberValue< 'energy' >;
  neutronEmissionEnergy?: NumberValue< 'energy' >;
  isomericTransitionEnergy?: NumberValue< 'energy' >;
  neutronSeparationEnergy?: NumberValue< 'energy' >;
  protonSeparationEnergy?: NumberValue< 'energy' >;
  excitationEnergy?: NumberValue< 'energy' >;
};

export type AdoptedLevel = {
  energy?: NumberValue< 'energy' >;
  angularMomentum?: Spin;
  band?: number;
  halfLife?: NumberValue< 'time' >;
  isotopeAbundance?: NumberValue< 'massFraction' >;
  dipoleMoment?: NumberValue< 'area' >;
  quadrupoleMoment?: NumberValue< 'magneticMoment' >;
  isoSpin?: Spin;
  decayChannel?: DecayChannel[];
};

export type NuclearCollection = Collection< {
  nmr?: Single< StructProperty< NMR > >;
  ground?: Single< StructProperty< GroudState > >;
  level?: Single< StructProperty< AdoptedLevel > >;
} >;
