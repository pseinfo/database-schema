import type { Collection, Single } from '../abstract/collection';
import type { NumberProperty } from '../abstract/property';

export type ChemistryCollection = Collection< {
    molarMass?: Single< NumberProperty< 'molarMass' > >;
    molarVolume?: Single< NumberProperty< 'molarVolume' > >;
} >;
