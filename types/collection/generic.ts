import type { Collection, Single } from '../abstract/collection';
import type { StructProperty } from '../abstract/property';
import type { NumberValue } from '../abstract/value';

export type GenericCollection = Collection< {
  price: Single< StructProperty< {
    value: NumberValue< 'currency' >;
    date: string;
    market?: string;
    url?: string;
  } > >;
} >;
