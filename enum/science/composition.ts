/**
 * @file enum/science/composition.ts
 * @description Defines enums for chemical composition representation types.
 */

/**
 * Methods for specifying the quantitative relationship between components in a substance.
 */
export enum CompositionType {
  /** Precise integer ratios of atoms in a chemical formula based on Dalton's laws. */
  STOICHIOMETRY = 'stoichiometry',
  /** Non-stoichiometric compositions where component ratios vary within defined limits. */
  RANGE = 'range',
  /** Proportional distribution expressed as mass, molar, or volume fractions. */
  FRACTION = 'fraction'
};
