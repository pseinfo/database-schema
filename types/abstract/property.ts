/**
 * Abstract Property Types
 * Definitions for various property types used in the database schema.
 */

import { Primitive } from 'devtypes/types/primitives';
import { Conditions } from './condition';
import { RefId } from './reference';
import { PhysicalQuantity } from './unit';
import * as value from './value';

/**
 * BaseFields
 * Common fields for all property types.
 * 
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 * @param conditions - optional conditions mapping physical quantities to values
 * @param references - optional array of reference IDs associated with the property
 */
interface BaseFields< C extends PhysicalQuantity = PhysicalQuantity, T extends Primitive = Primitive > {
    conditions?: Conditions< C, T >;
    references?: RefId[];
}

/** Specific property type definitions */

/**
 * PrimitiveProperty
 * Property type for primitive values.
 */
export type PrimitiveProperty<
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.PrimitiveValue< P >;

/**
 * SingleProperty
 * Type description of a single value property.
 */
export type SingleProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.SingleValue< Q >;

/**
 * ArrayProperty
 * Type description of an array value property.
 */
export type ArrayProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.ArrayValue< Q >;

/**
 * RangeProperty
 * Type description of a range value property.
 */
export type RangeProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.RangeValue< Q >;

/** Coupled property type definitions */

/**
 * CoupledNumberProperty
 * Type description of a coupled number value property.
 */
export type CoupledNumberProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.CoupledNumberValue< Q >;

/**
 * CoupledProperty
 * Type description of a coupled value property.
 */
export type CoupledProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.CoupledValue< Q, P >;

/** Union property types */

/**
 * NumberProperty
 * Type description of a number value property.
 */
export type NumberProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.NumberValue< Q >;

/**
 * Property
 * Type description of a general property with any value type.
 */
export type Property<
    Q extends PhysicalQuantity = PhysicalQuantity,
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.Value< Q, P >;
