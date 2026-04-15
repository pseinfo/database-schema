import type { Collection, Single } from '../abstract/collection';
import type { NumberProperty } from '../abstract/property';
import type { LangGroup } from '../abstract/util';
import type { PhysicalQuantity } from '../enum/util';

export type MineralCollection = Collection< {
  formulaMass?: Single< NumberProperty< PhysicalQuantity.MOLAR_MASS > >;
  color?: LangGroup;
  streak?: LangGroup;
} >;
