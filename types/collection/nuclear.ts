import type { Collection, Group, Single } from '../abstract/collection';
import type { NumberProperty, StructProperty } from '../abstract/property';
import type { SpinParity } from '../enum/nuclide';

export type Spin = {
  parity: SpinParity;
  value: string;
  calculatedValue?: number;
};

export type NuclearCollection = Collection< {
  ground?: Group< {
    halfLife?: Single< NumberProperty< 'time' > >;
    isotopeMass?: Single< NumberProperty< 'mass' > >;
    chargeRadius?: Single< NumberProperty< 'length' > >;
    massExcess?: Single< NumberProperty< 'energy' > >;

    dipoleMoment?: Single< NumberProperty< 'area' > >;
    quadrupoleMoment?: Single< NumberProperty< 'magneticMoment' > >;
    isoSpin?: Single< StructProperty< Spin > >;

    nmr?: Group< {
      spin?: Single< StructProperty < Spin > >;
      gyromagneticRatio?: Single< NumberProperty< 'gyromagneticRatio' > >;
      larmorPrecession?: Single< NumberProperty< 'frequency' > >;
    } >;

    energy?: Group< {
      bindingEnergy?: Single< NumberProperty< 'energy' > >;
      alphaDecayEnergy?: Single< NumberProperty< 'energy' > >;
      betaDecayEnergy?: Single< NumberProperty< 'energy' > >;
      electronCaptureEnergy?: Single< NumberProperty< 'energy' > >;
      neutronEmissionEnergy?: Single< NumberProperty< 'energy' > >;
      isomericTransitionEnergy?: Single< NumberProperty< 'energy' > >;
      neutronSeparationEnergy?: Single< NumberProperty< 'energy' > >;
      protonSeparationEnergy?: Single< NumberProperty< 'energy' > >;
      excitationEnergy?: Single< NumberProperty< 'energy' > >;
    } >;
  } >;
} >;
