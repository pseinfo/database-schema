/**
 * @file enum/system/unit.ts
 * @description Defines enums for standardized measurement systems and units.
 */

/**
 * Broad categories of unit systems used to quantify physical properties.
 */
export enum MeasurementSystem {
  /** The International System of Units (SI) and associated metric variations. */
  METRIC = 'metric',
  /** Historical system of units used primarily in the UK. */
  IMPERIAL = 'imperial',
  /** United States customary units. */
  US = 'us',
  /** Natural units based on universal physical constants. */
  PLANCK = 'planck'
};
