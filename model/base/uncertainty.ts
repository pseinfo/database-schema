/**
 * @file model/base/uncertainty.ts
 * @description Represents the statistical reliability and error margins of experimental
 * or calculated data.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { ConfidenceType, UncertaintyShape, UncertaintyType } from '../../enum/system/uncertainty';

/**
 * Structural framework for defining measurement errors, including distribution shapes
 * and confidence intervals.
 * 
 * @template T The type of uncertainty (absolute or relative).
 */
type BaseUncertainty< T extends UncertaintyType > = Expand< Brand< {
  /** The geometric or statistical distribution of the error margin. */
  shape:
    /** Equal variance in both positive and negative directions (±x). */
    | { type: UncertaintyShape.SYMMETRICAL, value: number }
    /** Different variances for positive and negative deviations (+x/-y). */
    | { type: UncertaintyShape.ASYMMETRICAL, plus: number, minus: number }
    /** A defined range [min, max] where the value is expected to lie. */
    | { type: UncertaintyShape.INTERVAL, min: number, max: number }
    /** The distribution shape is not formally specified. */
    | { type: UncertaintyShape.UNKNOWN };
  /** The statistical reliability or coverage factor of the measurement. */
  confidence?:
    /** Percentage indicating the probability that the true value lies within the range. */
    | { type: ConfidenceType.LEVEL, value: number }
    /** Multiples of the standard deviation (σ) in a normal distribution. */
    | { type: ConfidenceType.SIGMA, value: number };
  /** Technical metadata regarding the error estimation. */
  meta?: {
    /** The origin for the uncertainty value. */
    source?: string;
    /** The mathematical or experimental method used to determine the uncertainty. */
    method?: string;
  };
  /** Additional qualitative notes regarding the error margin. */
  notes?: string;
}, T, 'type', true > >;

/** Error margin expressed in the same physical unit as the measured value. */
export type AbsoluteUncertainty = BaseUncertainty< UncertaintyType.ABSOLUTE >;

/** Error margin expressed as a fraction or percentage of the measured value. */
export type RelativeUncertainty = BaseUncertainty< UncertaintyType.RELATIVE >;

/** Universal type encompassing both absolute and relative error models. */
export type Uncertainty = AbsoluteUncertainty | RelativeUncertainty;
