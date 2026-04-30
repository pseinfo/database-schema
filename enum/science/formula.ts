/**
 * @file enum/science/formula.ts
 * @description Defines enums for different types of chemical formula representations.
 */

/**
 * Standard formats for representing the elemental composition and structure of molecules.
 */
export enum FormulaType {
  /** The simplest whole-number ratio of atoms of each element present in a compound. */
  EMPIRICAL = 'empirical',
  /** The actual number of atoms of each element in a single molecule of a substance. */
  MOLECULAR = 'molecular',
  /** A graphic representation showing the spatial arrangement of atoms and chemical bonds. */
  STRUCTURAL = 'structural',
  /** A simplified structural formula where carbon atoms and C-H bonds are represented by vertices. */
  SKELETAL = 'skeletal',
  /** A textual representation of the molecular structure showing atom groups in sequence. */
  CONDENSED = 'condensed',
  /** A standard system for ordering elements (C first, then H, then alphabetical). */
  HILL = 'hill',
  /** A generalized formula using variables (e.g., R-groups) to represent a class of compounds. */
  GENERIC = 'generic'
};
