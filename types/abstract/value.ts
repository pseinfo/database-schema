/**
 * Abstract Value Types
 * Definitions for various types of values used in the schema.
 */

import { Brand } from 'devtypes/types/base';
import { RequireAtLeastOne, RequireExactlyOne, StrictSubset } from 'devtypes/types/constraints';
import { Primitive } from 'devtypes/types/primitives';
import { Uncertainty } from './uncertainty';
import { PhysicalQuantity, UnitId } from './unit';

/** Value types */
export const ValueType = [ 'primitive', 'single', 'array', 'range', 'coupled' ] as const;
export type ValueType = ( typeof ValueType )[ number ];

/** Confidence levels */
export const ValueConfidence = [ 'measured', 'calculated', 'estimated', 'theoretical', 'experimental' ] as const;
export type ValueConfidence = ( typeof ValueConfidence )[ number ];

/**
 * BaseFields
 * Common fields for all value types
 * 
 * @template T - value type brand
 * @param confidence - confidence level of the value
 * @param uncertainty - uncertainty associated with the value
 * @param note - optional note or comment about the value
 */
type BaseFields< T extends ValueType > = Brand< {
    confidence?: ValueConfidence;
    uncertainty?: Uncertainty;
    note?: string;
}, T >;

/**
 * ValueFields
 * Fields for different types of values
 * 
 * @template Q - Physical quantity type
 * @template T - Primitive type
 * @param value - single primitive value
 * @param values - array of primitive values
 * @param range - range with lower and upper bounds
 * @param unit - unit identifier for the value
 */
interface ValueFields< Q extends PhysicalQuantity = PhysicalQuantity, T extends Primitive = Primitive > {
    value?: T;
    values?: T[];
    range?: RequireAtLeastOne< Record< 'lower' | 'upper', {
        value: number;
        uncertainty?: Uncertainty;
        inclusive?: boolean;
    } > >;
    unit?: UnitId< Q >;
}

/** Specific value type definitions */

/**
 * PrimitiveValue
 * Type describtion of a primitive value
 * 
 * Fields: value or values
 */
export type PrimitiveValue< T extends Primitive = Primitive > =
    BaseFields< 'primitive' > &
    RequireExactlyOne< ValueFields< never, T >, 'value' | 'values' >;

/**
 * SingleValue
 * Type describtion of a single numeric value
 * 
 * Fields: (numeric) value
 * Optional Fields: unit
 */
export type SingleValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    BaseFields< 'single' > &
    StrictSubset< ValueFields< Q, number >, 'value', 'unit' >;

/**
 * ArrayValue
 * Type describtion of an numeric array value
 * 
 * Fields: (numeric) values
 * Optional Fields: unit
 */
export type ArrayValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    BaseFields< 'array' > &
    StrictSubset< ValueFields< Q, number >, 'values', 'unit' >;

/**
 * RangeValue
 * Type describtion of a numeric range value
 * 
 * Fields: (numeric) range
 * Optional Fields: value, unit
 */
export type RangeValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    BaseFields< 'range' > &
    StrictSubset< ValueFields< Q, number >, 'range', 'value' | 'unit' >;

/** Coupled value type definitions */

/**
 * CoupledNumberValue
 * Type describtion of a coupled value with number primitives
 * 
 * Fields: properties with single, array, or range values
 */
export type CoupledNumberValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    BaseFields< 'coupled' > & {
        properties: RequireAtLeastOne< {
            [ K in Q ]?:
                | SingleValue< K >
                | ArrayValue< K >
                | RangeValue< K >;
        } >;
    };

/**
 * CoupledValue
 * Type describtion of a coupled value with generic primitives
 * 
 * Fields: properties with primitive, single, array, or range values
 */
export type CoupledValue< Q extends PhysicalQuantity = PhysicalQuantity, T extends Primitive = Primitive > =
    BaseFields< 'coupled' > & {
        properties: RequireAtLeastOne< {
            [ K in Q ]?:
                | PrimitiveValue< T >
                | SingleValue< K >
                | ArrayValue< K >
                | RangeValue< K >;
        } >;
    };

/** Union value types */

/**
 * NumberValue
 * Union type for all number-based value types
 * 
 * Fields: single, array, range, or coupled number values
 */
export type NumberValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    | SingleValue< Q >
    | ArrayValue< Q >
    | RangeValue< Q >
    | CoupledNumberValue< Q >;

/**
 * Value
 * Union type for all value types
 * 
 * Fields: number-based, primitive-based, or coupled values
 */
export type Value< Q extends PhysicalQuantity = PhysicalQuantity, T extends Primitive = Primitive > =
    | NumberValue< Q >
    | PrimitiveValue< T >
    | CoupledValue< Q, T >;
