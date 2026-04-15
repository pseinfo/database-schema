import type { Collection, Single } from '../abstract/collection';
import type { StructProperty } from '../abstract/property';
import type { NumberValue } from '../abstract/value';
import type { PhysicalQuantity } from '../enum/util';

export type GenericCollection = Collection< {
  price: Single< StructProperty< {
    value: NumberValue< PhysicalQuantity.CURRENCY >;
    date: string;
    market?: string;
    url?: string;
  } > >;
} >;
