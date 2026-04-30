/**
 * @file model/collection/abundance.ts
 * @description Models the distribution and prevalence of chemical elements and isotopes
 * across different cosmic and terrestrial spheres.
 */

import type { AbundanceType, NaturalOccurrence } from '../../enum/science/abundance';
import type { Collection, Mapping, One, OneOrMany } from '../base/modifier';
import type { NumberProperty, PrimitiveProperty } from '../base/property';

/** Collection of properties describing the natural occurrence and quantitative abundance of a species. */
export type AbundanceCollection = Collection< {
  /** Qualitative classification of the species' presence in nature (e.g., Primordial, Synthetic). */
  naturalOccurrence?: One< PrimitiveProperty< NaturalOccurrence > >;
  /** Quantitative measurements of mass fractions across different environments (e.g., Universe, Earth's Crust). */
  abundances?: Mapping< AbundanceType, OneOrMany< NumberProperty< 'massFraction' > > >;
} >;
