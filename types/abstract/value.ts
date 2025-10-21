/**
 * Abstract Value Types
 * Definitions for various types of values used in the schema.
 */

import { Uncertainty } from './uncertainty';
import { PhysicalQuantity, UnitId } from './unit';
import { Primitive, RequireAtLeastOne, StrictSubset } from './utils';

// Value types
export const ValueType = [ 'primitive', 'single', 'array', 'range', 'coupled' ] as const;
export type ValueType = ( typeof ValueType )[ number ];

// Confidence levels
export const ValueConfidence = [ 'measured', 'calculated', 'estimated', 'theoretical', 'experimental' ] as const;
export type ValueConfidence = ( typeof ValueConfidence )[ number ];

// Field definitions for value types
interface BaseFields< T extends ValueType > {
    readonly __type__: T;
    confidence?: ValueConfidence;
    uncertainty?: Uncertainty;
    note?: string;
}

interface ValueFields< Q extends PhysicalQuantity = PhysicalQuantity > {
    value?: number;
    values?: number[];
    range?: RequireAtLeastOne< Record< 'lower' | 'upper', {
        value: number;
        uncertainty?: Uncertainty;
        inclusive?: boolean;
    } > >;
    unit_ref?: UnitId< Q >;
}

// Specific value type definitions
export type PrimitiveValue< T extends Primitive = Primitive > =
    BaseFields< 'primitive' > & { value: T };

export type SingleValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    BaseFields< 'single' > & StrictSubset<
        ValueFields< Q >, 'value', 'unit_ref'
    >;

export type ArrayValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    BaseFields< 'array' > & StrictSubset<
        ValueFields< Q >, 'values', 'unit_ref'
    >;

export type RangeValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    BaseFields< 'range' > & StrictSubset<
        ValueFields< Q >, 'range', 'value' | 'unit_ref'
    >;

// Coupled value type definitions
export type CoupledNumberValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    BaseFields< 'coupled' > & {
        properties: RequireAtLeastOne< {
            [ K in Q ]?:
                | SingleValue< K >
                | ArrayValue< K >
                | RangeValue< K >;
        } >;
    };

export type CoupledValue<
    Q extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> =
    BaseFields< 'coupled' > & {
        properties: RequireAtLeastOne< {
            [ K in Q ]?:
                | PrimitiveValue< T >
                | SingleValue< K >
                | ArrayValue< K >
                | RangeValue< K >;
        } >;
    };

// Union value types
export type NumberValue< Q extends PhysicalQuantity = PhysicalQuantity > =
    | SingleValue< Q >
    | ArrayValue< Q >
    | RangeValue< Q >
    | CoupledNumberValue< Q >;

export type Value<
    Q extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> =
    | NumberValue< Q >
    | PrimitiveValue< T >
    | CoupledValue< Q, T >;
