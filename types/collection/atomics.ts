import type { Collection, Group, Single } from '../abstract/collection';
import type { ArrayProperty, NumberProperty, PrimitiveProperty, StructProperty } from '../abstract/property';
import type { ShellModel } from '../enum/generic';

export type AtomicsCollection = Collection< {
  atomicNumber?: Single< PrimitiveProperty< number > >;
  massNumber?: Single< PrimitiveProperty< number > >;

  electronConfig?: Single< PrimitiveProperty< string > >;
  shellModel?: Single< StructProperty< {
    [ K in ShellModel ]: number;
  } > >;

  ionizationEnergies?: Single< ArrayProperty< 'energy' > >;

  mass?: Group< {
    atomicMass?: Single< NumberProperty< 'mass' > >;
    standardAtomicWeight?: Single< PrimitiveProperty< number > >;
    relativeAtomicMass?: Single< PrimitiveProperty< number > >;
    massExcess?: Single< NumberProperty< 'energy' > >;
  } >;

  radius?: Group< {
    empiricalRadius?: Single< NumberProperty< 'length' > >;
    calculatedRadius?: Single< NumberProperty< 'length' > >;
    covalentRadius?: Single< NumberProperty< 'length' > >;
    vdwRadius?: Single< NumberProperty< 'length' > >;
  } >;

  electronegativity?: Group< {
    pauling?: Single< PrimitiveProperty< number > >;
    sanderson?: Single< PrimitiveProperty< number > >;
    allredRochow?: Single< PrimitiveProperty< number > >;
    mulliken?: Single< PrimitiveProperty< number > >;
    allen?: Single< PrimitiveProperty< number > >;
    ghoshGupta?: Single< NumberProperty< 'energy' > >;
    nagle?: Single< PrimitiveProperty< number > >;
    pearson?: Single< NumberProperty< 'energy' > >;
    martynov?: Single< PrimitiveProperty< number > >;
    gordy?: Single< PrimitiveProperty< number > >;
    rahm?: Single< NumberProperty< 'energy' > >;
  } >;
} >;
