import type { Primitive } from 'devtypes/types/primitive';
import type { Expand } from 'devtypes/types/util';
import type { ReactionRef } from '../collection/reaction';
import type { RefId } from '../registry/reference';
import type { NoUnit, PhysicalQuantity } from '../registry/unit';
import type { Condition } from './condition';
import type { Struct } from './primitive';
import type * as v from './value';

type BaseProperty< C extends PhysicalQuantity, T extends Struct = {} > = {
  conditions?: Condition< C >;
  reactions?: ReactionRef[];
  references?: RefId[];
} & T;

export type PrimitiveProperty<
  P extends Primitive = Primitive,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.PrimitiveValue< P >
>;

export type StructProperty<
  S extends Struct = Struct,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.StructValue< S >
>;

export type ArrayProperty<
  Q extends PhysicalQuantity | NoUnit,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.ArrayValue< Q >
>;

export type RangeProperty<
  Q extends PhysicalQuantity | NoUnit,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.RangeValue< Q >
>;

export type CoupledNumberProperty<
  Q extends PhysicalQuantity | NoUnit,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.CoupledNumberValue< Q >
>;

export type CoupledProperty<
  Q extends PhysicalQuantity | NoUnit,
  P extends Primitive = Primitive,
  S extends Struct = Struct,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.CoupledValue< Q, P, S >
>;

export type NumberProperty<
  Q extends PhysicalQuantity | NoUnit,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.NumberValue< Q >
>;

export type Property<
  Q extends PhysicalQuantity | NoUnit,
  P extends Primitive = Primitive,
  S extends Struct = Struct,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.Value< Q, P, S >
>;

export type PropertyWrapper = Property< PhysicalQuantity > | Property< NoUnit >;
