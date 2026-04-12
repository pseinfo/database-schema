/**
 * Uncertainty System
 * Physical and measurement uncertainty representations.
 * 
 * @module abstract/uncertainty
 */

import type { RequireFrom } from 'devtypes/types/constraint';
import type { Brand, Expand } from 'devtypes/types/util';
import type { UncertaintyType } from '@/enums/abstract';


/**
 * Branded common fields for all uncertainty types.
 * 
 * @template T - Uncertainty type
 * @param type - Uncertainty type (branding)
 * @param confidence - Optional confidence level (0 to 1)
 * @param note - Optional note about the uncertainty
 */
export type BaseUncertainty< T extends UncertaintyType > = Brand< {
    confidence?: number;
    note?: string;
}, T, 'type', true >;

/**
 * Specific fields for uncertainty types.
 * 
 * @param absolute - Absolute uncertainty value
 * @param relative - Relative uncertainty value (as a fraction)
 * @param plus - Positive deviation for asymmetrical uncertainty
 * @param minus - Negative deviation for asymmetrical uncertainty
 */
export interface UncertaintyFields {
    absolute?: number;
    relative?: number;
    plus?: number;
    minus?: number;
}

/** Specific uncertainty type definitions */

/**
 * Type description of an absolute uncertainty.
 * Includes required absolute field.
 */
export type AbsoluteUncertainty = Expand<
    BaseUncertainty< UncertaintyType.ABSOLUTE > &
    RequireFrom< UncertaintyFields, 'absolute' >
>;

/**
 * Type description of a relative uncertainty.
 * Includes required relative field.
 */
export type RelativeUncertainty = Expand<
    BaseUncertainty< UncertaintyType.RELATIVE > &
    RequireFrom< UncertaintyFields, 'relative' >
>;

/**
 * Type description of an asymmetrical uncertainty.
 * Includes required plus and minus fields.
 */
export type AsymmetricalUncertainty = Expand<
    BaseUncertainty< UncertaintyType.ASYMMETRICAL > &
    RequireFrom< UncertaintyFields, 'plus' | 'minus' >
>;

/** Union type for all uncertainty types. */
export type Uncertainty =
    | AbsoluteUncertainty
    | RelativeUncertainty
    | AsymmetricalUncertainty;
