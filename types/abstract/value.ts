/**
 * Abstract Value Types
 * Definitions for various types of values used in the schema.
 */

import { Brand } from 'devtypes/types/base';
import { RequireAtLeastOne } from 'devtypes/types/constraints';
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
