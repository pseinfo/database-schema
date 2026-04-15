import type { Collection, Group, Single } from '../abstract/collection';
import type { ArrayProperty, NumberProperty, PrimitiveProperty, StructProperty } from '../abstract/property';
import type { ShellModel } from '../enum/generic';
import type { PhysicalQuantity } from '../enum/util';

export type AtomicsCollection = Collection< {
  atomicNumber?: Single< PrimitiveProperty< number > >;
  massNumber?: Single< PrimitiveProperty< number > >;

  electronConfig?: Single< PrimitiveProperty< string > >;
  valenceElectrons?: Single< PrimitiveProperty< number > >;
  shellModel?: Single< StructProperty< {
    [ K in ShellModel ]: number;
  } > >;

  ionizationEnergies?: Single< ArrayProperty< PhysicalQuantity.ENERGY > >;

  mass?: Group< {
    atomicMass?: Single< NumberProperty< PhysicalQuantity.MASS > >;
    standardAtomicWeight?: Single< PrimitiveProperty< number > >;
    relativeAtomicMass?: Single< PrimitiveProperty< number > >;
    massExcess?: Single< NumberProperty< PhysicalQuantity.ENERGY > >;
  } >;

  radius?: Group< {
    empiricalRadius?: Single< NumberProperty< PhysicalQuantity.LENGTH > >;
    calculatedRadius?: Single< NumberProperty< PhysicalQuantity.LENGTH > >;
    covalentRadius?: Single< NumberProperty< PhysicalQuantity.LENGTH > >;
    vdwRadius?: Single< NumberProperty< PhysicalQuantity.LENGTH > >;
  } >;

  charge?: Group< {
    nuclearCharge: Single< PrimitiveProperty< number > >;
    effectiveCharge: Single< PrimitiveProperty< number > >;
  } >;

  electronegativity?: Group< {
    pauling?: Single< PrimitiveProperty< number > >;
    sanderson?: Single< PrimitiveProperty< number > >;
    allredRochow?: Single< PrimitiveProperty< number > >;
    mulliken?: Single< PrimitiveProperty< number > >;
    allen?: Single< PrimitiveProperty< number > >;
    ghoshGupta?: Single< NumberProperty< PhysicalQuantity.ENERGY > >;
    nagle?: Single< PrimitiveProperty< number > >;
    pearson?: Single< NumberProperty< PhysicalQuantity.ENERGY > >;
    martynov?: Single< PrimitiveProperty< number > >;
    gordy?: Single< PrimitiveProperty< number > >;
    rahm?: Single< NumberProperty< PhysicalQuantity.ENERGY > >;
  } >;
} >;
