/**
 * Abstract Property Types
 * Definitions for various property types used in the database schema.
 */

import type { Primitive } from 'devtypes/types/primitive';
import type { Conditions } from '@/abstract/condition';
import type { RefId } from '@/abstract/reference';
import type { PhysicalQuantity } from '@/abstract/unit';
import * as value from '@/abstract/value';

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
 * 
 * @template P - Primitive types for the property values
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type PrimitiveProperty<
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.PrimitiveValue< P >;

/**
 * SingleProperty
 * Type description of a single value property.
 * 
 * @template Q - Physical quantities used as conditions
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type SingleProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.SingleValue< Q >;

/**
 * ArrayProperty
 * Type description of an array value property.
 * 
 * @template Q - Physical quantities used as conditions
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type ArrayProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.ArrayValue< Q >;

/**
 * RangeProperty
 * Type description of a range value property.
 * 
 * @template Q - Physical quantities used as conditions
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
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
 * 
 * @template Q - Physical quantities used as conditions
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type CoupledNumberProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.CoupledNumberValue< Q >;

/**
 * CoupledProperty
 * Type description of a coupled value property.
 * 
 * @template Q - Physical quantities used as conditions
 * @template P - Primitive types for the property values
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
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
 * 
 * @template Q - Physical quantities used as conditions
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type NumberProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.NumberValue< Q >;

/**
 * Property
 * Type description of a general property with any value type.
 * 
 * @template Q - Physical quantities used as conditions
 * @template P - Primitive types for the property values
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type Property<
    Q extends PhysicalQuantity = PhysicalQuantity,
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = BaseFields< C, T > & value.Value< Q, P >;
