/**
 * @file abundance.ts
 * @description Defines the abundance of chemical elements and substances across various environments.
 * This collection captures the relative presence of matter in the universe, solar system,
 * Earth's layers, and biological systems.
 */

import type { NaturalOccurrence } from '../../enum/element';
import type { Collection, Single } from '../abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '../abstract/property';

/**
 * Registry of environmental and geological occurrences.
 */
export type AbundanceCollection = Collection< {
  /** The primary classification of how a substance exists or is formed on Earth. */
  naturalOccurrence?: Single< PrimitiveProperty< NaturalOccurrence > >;

  /** The estimated mass or molar fraction of the substance in the observable universe. */
  universeAbundance?: Single< NumberProperty< 'massFraction' > >;
  /** The estimated concentration of the substance within the entirety of the solar system. */
  solarSystemAbundance?: Single< NumberProperty< 'massFraction' > >;
  /** The concentration of the substance found in the Sun's photosphere or corona. */
  sunAbundance?: Single< NumberProperty< 'massFraction' > >;
  /** The characteristic concentration of the substance found in CI chondrite meteorites. */
  meteoriteAbundance?: Single< NumberProperty< 'massFraction' > >;

  /** The average mass fraction of the substance found in the Earth's continental crust. */
  crustalAbundance?: Single< NumberProperty< 'massFraction' > >;
  /** The average concentration of the substance within the global oceanic volume. */
  oceanAbundance?: Single< NumberProperty< 'massFraction' > >;
  /** The typical concentration of the substance found specifically in seawater. */
  seaAbundance?: Single< NumberProperty< 'massFraction' > >;
  /** The concentration of the substance found in terrestrial freshwater streams. */
  streamAbundance?: Single< NumberProperty< 'massFraction' > >;
  /** The volume or mass fraction of the substance within the planetary atmosphere. */
  atmosphereAbundance?: Single< NumberProperty< 'massFraction' > >;

  /** The average mass percentage of the substance found within the human body. */
  humanAbundance?: Single< NumberProperty< 'massFraction' > >;

  /** The relative typical concentration of the substance found in the Earth's mineralogy. */
  mineralAbundance?: Single< NumberProperty< 'massFraction' > >;
  /** The concentration of the substance in economically exploitable geological formations. */
  oreAbundance?: Single< NumberProperty< 'massFraction' > >;
} >;
