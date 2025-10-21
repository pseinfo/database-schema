/**
 * Abstract Property Types
 * Definitions for various property types used in the database schema.
 */

import { Conditions } from './condition';
import { RefId } from './reference';
import { PhysicalQuantity } from './unit';
import { Primitive } from './utils';
import { ArrayValue, CoupledNumberValue, CoupledValue, NumberValue, PrimitiveValue, RangeValue, SingleValue, Value } from './value';

// Base fields for all property types
interface BaseFields<
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> {
    conditions?: Conditions< C, T >;
    references?: RefId[];
}

// Specific property type definitions
export type PrimitiveProperty<
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & PrimitiveValue< P >;

export type SingleProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & SingleValue< Q >;

export type ArrayProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & ArrayValue< Q >;

export type RangeProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & RangeValue< Q >;

// Coupled property type definitions
export type CoupledNumberProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & CoupledNumberValue< Q >;

export type CoupledProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & CoupledValue< Q, P >;

// Union property types
export type NumberProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & NumberValue< Q >;

export type Property<
    Q extends PhysicalQuantity = PhysicalQuantity,
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & Value< Q, P >;
