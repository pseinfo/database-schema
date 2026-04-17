/**
 * @file uncertainty.ts
 * @description Provides the data models for representing experimental uncertainty.
 * This is crucial for scientific data where measurements are never absolute and require
 * a standardized way to communicate precision and error margins.
 */

import type { RequireFrom } from 'devtypes/types/constraint';
import type { Brand, Expand } from 'devtypes/types/util';
import type { UncertaintyType } from '../../enum/util';

/**
 * Base structure for all scientific uncertainty types.
 * @template T The specific type of uncertainty (absolute, relative, or asymmetrical).
 */
type BaseUncertainty< T extends UncertaintyType > = Brand< {
  /** The statistical confidence level (e.g., 0.95 for a 95% confidence interval) */
  confidence?: number;
  /** Additional scientific notes regarding the measurement error or calculation method */
  note?: string;
}, T, 'type', true >;

/**
 * Common fields used across different uncertainty models.
 */
interface UncertaintyFields {
  /** The constant value of the error in the same unit as the measurement */
  absolute?: number;
  /** The fractional error relative to the measurement value (e.g., 0.01 for 1%) */
  relative?: number;
  /** The positive deviation in asymmetrical error models */
  plus?: number;
  /** The negative deviation in asymmetrical error models */
  minus?: number;
}

/**
 * Represents an absolute error margin (e.g., ±0.05).
 * Requires the presence of the 'absolute' field.
 */
export type AbsoluteUncertainty = Expand<
  BaseUncertainty< UncertaintyType.ABSOLUTE > &
  RequireFrom< UncertaintyFields, 'absolute' >
>;

/**
 * Represents a relative error margin (e.g., ±2%).
 * Requires the presence of the 'relative' field.
 */
export type RelativeUncertainty = Expand<
  BaseUncertainty< UncertaintyType.RELATIVE > &
  RequireFrom< UncertaintyFields, 'relative' >
>;

/**
 * Represents asymmetrical errors where the upper and lower bounds differ (e.g., +0.1/-0.05).
 * Requires both 'plus' and 'minus' fields to define the range.
 */
export type AsymmetricalUncertainty = Expand<
  BaseUncertainty< UncertaintyType.ASYMMETRICAL > &
  RequireFrom< UncertaintyFields, 'plus' | 'minus' >
>;

/**
 * Union type facilitating any supported scientific uncertainty model.
 */
export type Uncertainty =
  | AbsoluteUncertainty
  | RelativeUncertainty
  | AsymmetricalUncertainty;
