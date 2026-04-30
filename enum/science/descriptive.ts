/**
 * @file enum/science/descriptive.ts
 * @description Defines enums for sensory and qualitative properties of substances.
 */

/**
 * Properties that can be perceived by human senses, used in descriptive collection
 * for textual description of substances.
 */
export enum SensoryProperty {
  /** The visible form and macroscopic structure of a substance. */
  APPEARANCE = 'appearance',
  /** The flavor profile as perceived by gustatory receptors. */
  TASTE = 'taste',
  /** The scent produced by volatile molecules interacting with olfactory receptors. */
  ODOR = 'odor',
  /** The physical feel or surface consistency of a material. */
  TEXTURE = 'texture',
  /** The color of the substance as perceived by human eyes. */
  COLOR = 'color'
};
