/**
 * @file enum/system/uncertainty.ts
 * @description Defines enums for representing scientific and statistical uncertainty in measurements.
 */

/**
 * The mathematical nature of the uncertainty value.
 */
export enum UncertaintyType {
  /** Expressed in the same units as the measured value. */
  ABSOLUTE = 'absolute',
  /** Expressed as a ratio or percentage of the measured value. */
  RELATIVE = 'relative'
};

/**
 * The geometric or statistical distribution of the uncertainty.
 */
export enum UncertaintyShape {
  /** Equal variance in both positive and negative directions (±x). */
  SYMMETRICAL = 'symmetrical',
  /** Different variances for positive and negative deviations (+x/-y). */
  ASYMMETRICAL = 'asymmetrical',
  /** A defined range [min, max] where the value is expected to lie. */
  INTERVAL = 'interval',
  /** The distribution shape is not specified. */
  UNKNOWN = 'unknown'
};

/**
 * Methods for specifying the statistical reliability of a measurement.
 */
export enum ConfidenceType {
  /** Percentage indicating the probability that the true value lies within the range. */
  LEVEL = 'level',
  /** Multiples of the standard deviation (σ) in a normal distribution. */
  SIGMA = 'sigma'
};
