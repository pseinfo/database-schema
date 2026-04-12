/**
 * Abstract Property Types
 * Definitions for various property types used in the database schema.
 * 
 * @module abstract/property
 */

import type { Primitive } from 'devtypes/types/primitive';
import type { Expand } from 'devtypes/types/util';
import type { Conditions } from '@/abstract/condition';
import type { RefId } from '@/abstract/reference';
import type { PhysicalQuantity } from '@/abstract/unit';
import * as value from '@/abstract/value';


/**
 * Common fields for all property wrappers.
 * 
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 * @param conditions - Optional conditions mapping physical quantities to values
 * @param references - Optional array of reference IDs associated with the property
 */
export interface BaseProperty<
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> {
    conditions?: Conditions< C, T >;
    references?: RefId[];
}

/** Specific property type definitions */

/**
 * Property wrapper for primitive values.
 * 
 * @template P - Primitive types for the property values
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type PrimitiveProperty<
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.PrimitiveValue< P > >; 

/**
 * Property wrapper for structure values (e.g. objects, arrays).
 * 
 * @template S - Structure types for the property values
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type StructProperty<
    S extends value.StructType = value.StructType,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.StructValue< S > >; 

/**
 * Property wrapper for single values.
 * 
 * @template Q - Physical quantities used as conditions
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type SingleProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.SingleValue< Q > >; 

/**
 * Property wrapper for array values.
 * 
 * @template Q - Physical quantities used as conditions
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type ArrayProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.ArrayValue< Q > >; 

/**
 * Property wrapper for range values.
 * 
 * @template Q - Physical quantities used as conditions
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type RangeProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.RangeValue< Q > >; 

/** Coupled property type definitions */

/**
 * Property wrapper for coupled number values.
 * 
 * @template Q - Physical quantities used as conditions
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type CoupledNumberProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.CoupledNumberValue< Q > >; 

/**
 * Property wrapper for coupled values.
 * 
 * @template Q - Physical quantities used as conditions
 * @template P - Primitive types for the property values
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 * @template S - Structure types for the property values
 */
export type CoupledProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive,
    S extends value.StructType = value.StructType
> = Expand< BaseProperty< C, T > & value.CoupledValue< Q, P, S > >; 

/** Union property types */

/**
 * Union property wrapper for number values.
 * 
 * @template Q - Physical quantities used as conditions
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type NumberProperty<
    Q extends PhysicalQuantity = PhysicalQuantity,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = Expand< BaseProperty< C, T > & value.NumberValue< Q > >; 

/**
 * Union property wrapper for general values.
 * 
 * @template Q - Physical quantities used as conditions
 * @template P - Primitive types for the property values
 * @template C - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 * @template S - Structure types for the property values
 */
export type Property<
    Q extends PhysicalQuantity = PhysicalQuantity,
    P extends Primitive = Primitive,
    C extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive,
    S extends value.StructType = value.StructType
> = Expand< BaseProperty< C, T > & value.Value< Q, P, S > >; 
