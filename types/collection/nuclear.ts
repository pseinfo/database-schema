import type { Collection, Single } from '../abstract/collection';
import type { NumberProperty } from '../abstract/property';

export type NuclearCollection = Collection< {
  atomicMass?: Single< NumberProperty< 'mass' > >;
  massExcess?: Single< NumberProperty< 'energy' > >;
} >;
