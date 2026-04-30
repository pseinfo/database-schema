/**
 * @file model/collection/formula.ts
 * @description Representations of chemical formulas, including systematic notation
 * and typographic renderings.
 */

import type { FormulaType } from '../../enum/science/formula';
import type { BlobType } from '../../enum/system/blob';
import type { Collection, OneOrMany } from '../base/modifier';
import type { StructProperty } from '../base/property';
import type { BlobId } from '../registry/blob';

/** Structural model for a chemical formula representation. */
export type Formula = {
  /** Plain text representation of the chemical formula (e.g., "H{2}O"). */
  notation?: string;
  /** High-quality typographic rendering of the formula using LaTeX. */
  latexNotation?: string;
  /** Visual representations or structural diagrams of the chemical formula. */
  images?: BlobId< BlobType.FORMULA >[];
};

/** Collection of diverse formula types (e.g., empirical, structural, skeletal). */
export type FormulaCollection = Collection< {
  [ K in FormulaType ]?: OneOrMany< StructProperty< Formula > >;
} >;
