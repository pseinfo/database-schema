import type { RequireAtLeastOne, RequireExactlyOneFrom, RequireFrom, StrictSubset } from 'devtypes/types/constraint';
import type { Primitive } from 'devtypes/types/primitive';
import type { Brand, Expand } from 'devtypes/types/util';
import type { PhysicalQuantity, ValueType, ValueConfidence } from '../enum/util';
import type { Uncertainty } from './uncertainty';
import type { UnitId } from './unit';

export type StructType = Record< string | number, unknown >;

export type BaseValue< T extends ValueType > = Brand< {
  confidence?: ValueConfidence;
  uncertainty?: Uncertainty;
  note?: string;
}, T, 'type', true >;

export interface ValueFields<
  Q extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive,
  S extends StructType = StructType
> {
  value?: T;
  values?: T[];
  range?: RequireAtLeastOne< Record< 'lower' | 'upper', {
    value: number;
    uncertainty?: Uncertainty;
    inclusive?: boolean;
  } > >;
  unit?: UnitId< Q >;
  struct?: S;
}

export type PrimitiveValue< T extends Primitive = Primitive > = Expand<
  BaseValue< ValueType.PRIMITIVE > &
  RequireExactlyOneFrom< ValueFields< never, T >, 'value' | 'values' >
>;

export type StructValue< T extends StructType = StructType > = Expand<
  BaseValue< ValueType.STRUCT > &
  RequireFrom< ValueFields< never, never, T >, 'struct' >
>;

export type SingleValue< Q extends PhysicalQuantity = PhysicalQuantity > = Expand<
  BaseValue< ValueType.SINGLE > &
  StrictSubset< ValueFields< Q, number >, 'value', 'unit' >
>;

export type ArrayValue< Q extends PhysicalQuantity = PhysicalQuantity > = Expand<
  BaseValue< ValueType.ARRAY > &
  StrictSubset< ValueFields< Q, number >, 'values', 'unit' >
>;

export type RangeValue< Q extends PhysicalQuantity = PhysicalQuantity > = Expand<
  BaseValue< ValueType.RANGE > &
  StrictSubset< ValueFields< Q, number >, 'range', 'value' | 'unit' >
>;

export type CoupledNumberValue< Q extends PhysicalQuantity = PhysicalQuantity > = Expand<
  BaseValue< ValueType.COUPLED > & {
    properties: RequireAtLeastOne< {
      [ K in Q ]?:
        | SingleValue< K >
        | ArrayValue< K >
        | RangeValue< K >;
    } >;
  }
>;

export type CoupledValue<
  Q extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive,
  S extends StructType = StructType
> = Expand<
  BaseValue< ValueType.COUPLED > & {
    properties: RequireAtLeastOne< {
      [ K in Q ]?:
        | PrimitiveValue< T >
        | StructValue< S >
        | SingleValue< K >
        | ArrayValue< K >
        | RangeValue< K >;
    } >;
  }
>;

export type NumberValue< Q extends PhysicalQuantity = PhysicalQuantity > =
  | SingleValue< Q >
  | ArrayValue< Q >
  | RangeValue< Q >
  | CoupledNumberValue< Q >;

export type Value<
  Q extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive,
  S extends StructType = StructType
> =
  | NumberValue< Q >
  | PrimitiveValue< T >
  | StructValue< S >
  | CoupledValue< Q, T, S >;
