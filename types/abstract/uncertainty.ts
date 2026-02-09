/**
 * Uncertainty System
 * Physical and measurement uncertainty representations.
 */

import { RequireFrom } from 'devtypes/types/constraint';
import { Brand } from 'devtypes/types/util';

/** Uncertainty types */
export const UncertaintyType = [ 'absolute', 'relative', 'asymmetrical' ] as const;
export type UncertaintyType = ( typeof UncertaintyType )[ number ];

/**
 * BaseFields
 * Common fields for all uncertainty types
 * 
 * @template T - Uncertainty type
 * @param type - type of uncertainty (branding)
 * @param confidence - optional confidence level (0 to 1)
 * @param note - optional note about the uncertainty
 */
type BaseFields< T extends UncertaintyType > = Brand< {
    confidence?: number;
    note?: string;
}, T, 'type', true >;

/**
 * UncertaintyFields
 * Fields common to all uncertainty types
 * 
 * @param absolute - absolute uncertainty value
 * @param relative - relative uncertainty value (as a fraction)
 * @param plus - positive deviation for asymmetrical uncertainty
 * @param minus - negative deviation for asymmetrical uncertainty
 */
interface UncertaintyFields {
    absolute?: number;
    relative?: number;
    plus?: number;
    minus?: number;
}

/** Specific uncertainty type definitions */

/**
 * AbsoluteUncertainty
 * Type description of an absolute uncertainty
 * 
 * Fields: absolute
 */
export type AbsoluteUncertainty =
    BaseFields< 'absolute' > &
    RequireFrom< UncertaintyFields, 'absolute' >;

/**
 * RelativeUncertainty
 * Type description of a relative uncertainty
 * 
 * Fields: relative
 */
export type RelativeUncertainty =
    BaseFields< 'relative' > &
    RequireFrom< UncertaintyFields, 'relative' >;

/**
 * AsymmetricalUncertainty
 * Type description of an asymmetrical uncertainty
 * 
 * Fields: plus, minus
 */
export type AsymmetricalUncertainty =
    BaseFields< 'asymmetrical' > &
    RequireFrom< UncertaintyFields, 'plus' | 'minus' >;

/** Union type for all uncertainty types */
export type Uncertainty =
    | AbsoluteUncertainty
    | RelativeUncertainty
    | AsymmetricalUncertainty;
