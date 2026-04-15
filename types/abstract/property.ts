import type { Primitive } from 'devtypes/types/primitive';
import type { Expand } from 'devtypes/types/util';
import type { PhysicalQuantity } from '../enum/util';
import type { Conditions } from './condition';
import type { RefId } from './reference';
import type * as value from './value';

export interface BaseProperty<
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> {
  conditions?: Conditions< C, T >;
  references?: RefId[];
}

export type PrimitiveProperty<
  P extends Primitive = Primitive,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.PrimitiveValue< P > >;

export type StructProperty<
  S extends value.StructType = value.StructType,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.StructValue< S > >;

export type SingleProperty<
  Q extends PhysicalQuantity = PhysicalQuantity,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.SingleValue< Q > >;

export type ArrayProperty<
  Q extends PhysicalQuantity = PhysicalQuantity,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.ArrayValue< Q > >;

export type RangeProperty<
  Q extends PhysicalQuantity = PhysicalQuantity,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.RangeValue< Q > >;


export type CoupledNumberProperty<
  Q extends PhysicalQuantity = PhysicalQuantity,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.CoupledNumberValue< Q > >;

export type CoupledProperty<
  Q extends PhysicalQuantity = PhysicalQuantity,
  P extends Primitive = Primitive,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive,
  S extends value.StructType = value.StructType
> = Expand< BaseProperty< C, T > & value.CoupledValue< Q, P, S > >;

export type NumberProperty<
  Q extends PhysicalQuantity = PhysicalQuantity,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.NumberValue< Q > >;

export type Property<
  Q extends PhysicalQuantity = PhysicalQuantity,
  P extends Primitive = Primitive,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive,
  S extends value.StructType = value.StructType
> = Expand< BaseProperty< C, T > & value.Value< Q, P, S > >;
