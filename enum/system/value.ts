/**
 * @file enum/system/value.ts
 * @description Defines enums for the structural nature and scientific origin of data values.
 */

/**
 * The architectural data structure used to represent a value.
 */
export enum ValueType {
  /** A single, basic data type (number, string, boolean). */
  PRIMITIVE = 'primitive',
  /** A complex object containing multiple related properties. */
  STRUCT = 'struct',
  /** A single quantified value with an optional unit. */
  SINGLE = 'single',
  /** A collection of multiple values of the same type. */
  ARRAY = 'array',
  /** A continuous interval between a minimum and maximum value. */
  RANGE = 'range',
  /** Values that are grouped together (e.g. triple point). */
  COUPLED = 'coupled'
};

/**
 * The scientific or methodology-based source of a data value.
 */
export enum ValueOrigin {
  /** Obtained through direct physical measurement or observation. */
  MEASURED = 'measured',
  /** Derived from other data using mathematical formulas. */
  CALCULATED = 'calculated',
  /** Approximated based on expert knowledge or incomplete data. */
  ESTIMATED = 'estimated',
  /** Resulting from controlled laboratory conditions. */
  EXPERIMENTAL = 'experimental',
  /** Predicted by physical models or fundamental principles. */
  THEORETICAL = 'theoretical'
};
