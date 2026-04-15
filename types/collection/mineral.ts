import type { Collection, Single } from '../abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '../abstract/property';
import type { PhysicalQuantity } from '../enum/util';

export type MineralCollection = Collection< {
  formulaMass?: Single< NumberProperty< PhysicalQuantity.MOLAR_MASS > >;
  color?: Single< PrimitiveProperty< string > >;
} >;
