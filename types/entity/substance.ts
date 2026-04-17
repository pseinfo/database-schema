/**
 * @file substance.ts
 * @description Defines the universal schema for any chemical or physical substance.
 * This is the primary structural unit that aggregates all scientific data collections
 * including physical, chemical, and safety properties.
 */

import type { Collection } from '../abstract/collection';
import type { AbundanceCollection } from '../collection/abundance';
import type { ChemistryCollection } from '../collection/chemistry';
import type { CrystallographyCollection } from '../collection/crystallography';
import type { DescriptiveCollection } from '../collection/descriptive';
import type { GenericCollection } from '../collection/generic';
import type { PhysicsCollection } from '../collection/physics';
import type { SafetyCollection } from '../collection/safety';

/**
 * Universal container for a substance's scientific data.
 * @template C The classification type specific to the entity (e.g., Element, Compound).
 */
export type Substance< C extends Collection< unknown > > = Collection< {
  /** High-level taxonomic classification and categorical identifiers. */
  classification: C;
  /** Qualitative and historical metadata (names, descriptions, media). */
  descriptive: DescriptiveCollection;
  /** Generic, non-specific data (e.g., prices, market data). */
  generic?: GenericCollection;
  /** Data regarding the relative presence across various environments. */
  abundance?: AbundanceCollection;
  /** Macroscopic physical behaviors and thermodynamic states. */
  physics?: PhysicsCollection;
  /** Internal lattice structure and crystallographic symmetry properties. */
  crystallography?: CrystallographyCollection;
  /** Reactivity, stoichiometry, and molecular geometry properties. */
  chemistry?: ChemistryCollection;
  /** Hazard identifications, safety ratings, and toxicological data. */
  safety?: SafetyCollection;
} >;
