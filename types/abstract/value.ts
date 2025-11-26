/**
 * Abstract Value Types
 * Definitions for various types of values used in the schema.
 */

import { PhysicalQuantity, UnitId } from './unit';

/** Value types */
export const ValueType = [ 'primitive', 'single', 'array', 'range', 'coupled' ] as const;
export type ValueType = ( typeof ValueType )[ number ];

/** Confidence levels */
export const ValueConfidence = [ 'measured', 'calculated', 'estimated', 'theoretical', 'experimental' ] as const;
export type ValueConfidence = ( typeof ValueConfidence )[ number ];
