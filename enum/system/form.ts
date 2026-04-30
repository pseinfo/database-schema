/**
 * @file enum/system/form.ts
 * @description Defines enums for structural and physical variations of chemical species.
 */

/**
 * Categories of physical or structural manifestations of a chemical substance.
 */
export enum FormType {
  /** Elemental variations in the same physical state (e.g., Graphite vs. Diamond). */
  ALLOTROPE = 'allotrope',
  /** Specific molecular arrangement or aggregation state. */
  MOLECULAR = 'molecular',
  /** Manifestation in a particular state of matter (Solid, Liquid, Gas). */
  PHASE = 'phase',
  /** Crystalline variations of the same chemical compound (e.g., Calcite vs. Aragonite). */
  POLYMORPH = 'polymorph',
  /** Structural form not covered by other categories. */
  OTHER = 'other'
};
