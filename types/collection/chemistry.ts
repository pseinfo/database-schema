import type { Collection, Group, Single } from '../abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '../abstract/property';
import type { AcidBaseCharacter, BasicityType, Goldschmidt, HSAB } from '../enum/chemistry';

export type ChemistryCollection = Collection< {
  molarMass?: Single< NumberProperty< 'molarMass' > >;
  molarVolume?: Single< NumberProperty< 'molarVolume' > >;

  basicity?: Group< {
    type?: Single< PrimitiveProperty< BasicityType > >;
    hsab?: Single< PrimitiveProperty< HSAB > >;
    character?: Single< PrimitiveProperty< AcidBaseCharacter > >;
    pKa?: Single< PrimitiveProperty< number > >;
    pKb?: Single< PrimitiveProperty< number > >;
    goldschmidt?: Single< PrimitiveProperty< Goldschmidt > >;
  } >;
} >;
