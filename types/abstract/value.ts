/**
 * Abstract Value Types
 * Definitions for various types of values used in the schema.
 * 
 * @module abstract/value
 */

import type { RequireAtLeastOne, RequireExactlyOne, StrictSubset } from 'devtypes/types/constraint';
import type { Primitive } from 'devtypes/types/primitive';
import type { Brand } from 'devtypes/types/util';
import type { Uncertainty } from '@/abstract/uncertainty';
import type { PhysicalQuantity, UnitId } from '@/abstract/unit';
import type { ValueType, ValueConfidence } from '@/enums/abstract';


/**
 * Branded common fields for all value types.
 * 
 * @template T - Value type
 * @param type - Type for value (branding)
 * @param confidence - Confidence level of the value
 * @param uncertainty - Uncertainty associated with the value
 * @param note - Optional note or comment about the value
 */
export type BaseValue< T extends ValueType > = Brand< {
    confidence?: ValueConfidence;
    uncertainty?: Uncertainty;
    note?: string;
}, T, 'type', true >;

/**
 * Specific fields for value types.
 * 
 * @template Q - Physical quantity type
 * @template T - Primitive type
 * @template S - Struct types for the value
 * @param value - Single primitive value
 * @param values - Array of primitive values
 * @param range - Range with lower and upper bounds
 * @param unit - Unit identifier for the value
 * @param struct - Struct value
 */
export interface ValueFields<
    Q extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive,
    S extends Record< StructKey, any > = Record< StructKey, any >
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

/** Specific value type definitions */

/**
 * Type description of a primitive value.
 * Includes required fields for value or values.
 * 
 * @template T - Primitive type
 */
export type PrimitiveValue< T extends Primitive = Primitive > =
    BaseValue< ValueType.PRIMITIVE > &
    RequireExactlyOne< ValueFields< never, T >, 'value' | 'values' >;

/** Struct key type. */
export type StructKey = string | number;

/** Generic struct type. */
export type StructType = Record< StructKey, any >; 

/**
 * Type description of a struct value (e.g. objects, arrays).
 * Includes required fields for struct.
 * 
 * @template T - Struct type
 */
export type StructValue< T extends StructType = StructType > =
    BaseValue< ValueType.STRUCT > &
    RequireAtLeastOne< ValueFields< never, never, T >, 'struct' >; 

/**
 * Type description of a single numeric value.
 * Includes required field for value and optional unit.
 * 
 * @template Q - Physical quantity type
 */
export type SingleValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    BaseValue< ValueType.SINGLE > &
    StrictSubset< ValueFields< Q, number >, 'value', 'unit' >;

/**
 * Type description of an numeric array value.
 * Includes required field for values and optional unit.
 * 
 * @template Q - Physical quantity type
 */
export type ArrayValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    BaseValue< ValueType.ARRAY > &
    StrictSubset< ValueFields< Q, number >, 'values', 'unit' >;

/**
 * Type description of a numeric range value.
 * Includes required field for range, optional value and unit.
 * 
 * @template Q - Physical quantity type
 */
export type RangeValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    BaseValue< ValueType.RANGE > &
    StrictSubset< ValueFields< Q, number >, 'range', 'value' | 'unit' >;

/** Coupled value type definitions */

/**
 * Type description of a coupled value with number primitives.
 * 
 * @template Q - Physical quantity type
 */
export type CoupledNumberValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    BaseValue< ValueType.COUPLED > & {
        properties: RequireAtLeastOne< {
            [ K in Q ]?:
                | SingleValue< K >
                | ArrayValue< K >
                | RangeValue< K >;
        } >;
    };

/**
 * Type description of a coupled value with generic primitives.
 * 
 * @template Q - Physical quantity type
 * @template T - Primitive type
 * @template S - Struct type
 */
export type CoupledValue<
    Q extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive,
    S extends StructType = StructType
> =
    BaseValue< ValueType.COUPLED > & {
        properties: RequireAtLeastOne< {
            [ K in Q ]?:
                | PrimitiveValue< T >
                | StructValue< S >
                | SingleValue< K >
                | ArrayValue< K >
                | RangeValue< K >;
        } >;
    };

/** Union value types */

/**
 * Union type for all number-based value types.
 * 
 * @template Q - Physical quantity type
 */
export type NumberValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    | SingleValue< Q >
    | ArrayValue< Q >
    | RangeValue< Q >
    | CoupledNumberValue< Q >;

/**
 * Union type for all value types.
 * 
 * @template Q - Physical quantity type
 * @template T - Primitive type
 * @template S - Struct type
 */
export type Value<
    Q extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive,
    S extends StructType = StructType
> =
    | NumberValue< Q >
    | PrimitiveValue< T >
    | StructValue< S >
    | CoupledValue< Q, T, S >;
