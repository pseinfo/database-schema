/**
 * Abstract Property Types
 * Definitions for various property types used in the database schema.
 */

import { Primitive } from 'devtypes/types/primitives';
import { Conditions } from './condition';
import { RefId } from './reference';
import { PhysicalQuantity } from './unit';
import * as value from './value';


interface BaseFields< C extends PhysicalQuantity = PhysicalQuantity, T extends Primitive = Primitive > {
    conditions?: Conditions< C, T >;
    references?: RefId[];
}

/** Specific property type definitions */

export type PrimitiveProperty<
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.PrimitiveValue< P >;

export type SingleProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.SingleValue< Q >;

export type ArrayProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.ArrayValue< Q >;

export type RangeProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.RangeValue< Q >;

/** Coupled property type definitions */

export type CoupledNumberProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.CoupledNumberValue< Q >;

export type CoupledProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.CoupledValue< Q, P >;

/** Union property types */

export type NumberProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.NumberValue< Q >;

export type Property<
    Q extends PhysicalQuantity = PhysicalQuantity,
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.Value< Q, P >;
