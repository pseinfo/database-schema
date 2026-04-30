import type { RequireAtLeastOne } from 'devtypes/types/constraint';
import type { Primitive } from 'devtypes/types/primitive';
import type { Brand, Expand } from 'devtypes/types/util';
import type { ValueOrigin, ValueType } from '../../enum/base/value';
import type { NoUnit, PhysicalQuantity, UnitId } from '../registry/unit';
import type { Struct } from './primitive';
import type { Uncertainty } from './uncertainty';

type UnitField< Q extends PhysicalQuantity | NoUnit > = [ Q ] extends [ NoUnit ] ? {} : {
  unit: UnitId< Q >;
};

type UncertaintyField< T extends ValueType > = T extends ValueType.SINGLE | ValueType.RANGE | ValueType.ARRAY ? {
  uncertainty?: Uncertainty;
} : {};

type BaseValue< T extends ValueType > = Brand< {
  origin?: ValueOrigin;
  context?: string;
  note?: string;
} & UncertaintyField< T >, T, 'type', true >;

type Range = RequireAtLeastOne< Record< 'lower' | 'upper', {
  value: number;
  exclusive?: boolean;
} > >;

export type PrimitiveValue< P extends Primitive = Primitive > = Expand<
  BaseValue< ValueType.PRIMITIVE > & ( { value: P } | { values: P[] } )
>;

export type StructValue< S extends Struct = Struct > = Expand<
  BaseValue< ValueType.STRUCT > & { struct: S }
>;

export type SingleValue< Q extends PhysicalQuantity | NoUnit = PhysicalQuantity > = Expand<
  BaseValue< ValueType.SINGLE > & { value: number } & UnitField< Q >
>;

export type ArrayValue< Q extends PhysicalQuantity | NoUnit = PhysicalQuantity > = Expand<
  BaseValue< ValueType.ARRAY > & { values: number[] } & UnitField< Q >
>;

export type RangeValue< Q extends PhysicalQuantity | NoUnit = PhysicalQuantity > = Expand<
  BaseValue< ValueType.RANGE > & { range: Range, value?: number } & UnitField< Q >
>;

export type CoupledNumberValue< Q extends PhysicalQuantity | NoUnit = PhysicalQuantity > = Expand<
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
  Q extends PhysicalQuantity | NoUnit = PhysicalQuantity,
  P extends Primitive = Primitive,
  S extends Struct = Struct
> = Expand<
  BaseValue< ValueType.COUPLED > & {
    properties: RequireAtLeastOne< {
      [ K in Q ]?:
        | PrimitiveValue< P >
        | StructValue< S >
        | SingleValue< K >
        | ArrayValue< K >
        | RangeValue< K >;
    } >;
  }
>;

export type NumberValue< Q extends PhysicalQuantity | NoUnit = PhysicalQuantity > =
  | SingleValue< Q >
  | ArrayValue< Q >
  | RangeValue< Q >
  | CoupledNumberValue< Q >;

export type Value<
  Q extends PhysicalQuantity | NoUnit = PhysicalQuantity,
  P extends Primitive = Primitive,
  S extends Struct = Struct
> =
  | NumberValue< Q >
  | PrimitiveValue< P >
  | StructValue< S >
  | CoupledValue< Q, P, S >;
