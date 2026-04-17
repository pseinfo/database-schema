/**
 * @file composite.ts
 * @description Defines the base structure for substances composed of multiple chemical elements.
 * Extends the basic substance model with detailed stoichiometric information.
 */

import type { Expand } from 'devtypes/types/util';
import type { Collection } from '../abstract/collection';
import type { CompositionCollection } from '../collection/composition';
import type { Substance } from './substance';

/**
 * A substance entity that inherently includes a multi-element composition.
 * @template C The classification type specific to the composite entity.
 */
export type Composite< C extends Collection< unknown > > = Expand< Substance< C > & {
  /** Detailed record of the constituent elements and their stoichiometric ratios. */
  composition: CompositionCollection;
} >;
