/**
 * @file model/domain/substance.ts
 * @description Abstract base models for all chemical and physical entities, defining the
 * shared architectural framework for properties and collections.
 */

import type { DomainType } from '../../enum/system/domain';
import type { Collection } from '../base/modifier';
import type { AbundanceCollection } from '../collection/abundance';
import type { ChemistryCollection } from '../collection/chemistry';
import type { CompositionCollection } from '../collection/composition';
import type { DescriptiveCollection } from '../collection/descriptive';
import type { FormulaCollection } from '../collection/formula';
import type { GenericCollection } from '../collection/generic';
import type { HistoryCollection } from '../collection/history';
import type { IdentificationCollection } from '../collection/identification';
import type { MediaCollection } from '../collection/media';
import type { PhysicsCollection } from '../collection/physics';
import type { ReactionCollection } from '../collection/reaction';
import type { SafetyCollection } from '../collection/safety';
import type { StructureCollection } from '../collection/structure';
import type { Weblinks } from '../utility/weblinks';

/**
 * Universal model for a physical or chemical substance, integrating all available scientific collections.
 * 
 * @template C The classification type specific to the entity's scientific domain.
 * @template T Additional domain-specific fields to be merged into the substance model.
 */
export type Substance<
  C extends Collection< unknown >,
  T extends object = {}
> = Collection< {
  /** Domain-specific scientific classification and categorization. */
  classification: C;
  /** International regulatory and database identifiers. */
  identification?: IdentificationCollection;
  /** Mathematical and notation-based structural representations. */
  structure?: StructureCollection;
  /** Chemical formula notations and renderings. */
  formula?: FormulaCollection;
  /** Qualitative observations and localized nomenclature. */
  descriptive?: DescriptiveCollection;
  /** General non-scientific properties. */
  generic?: GenericCollection;
  /** Chronological documentation of scientific milestones. */
  history?: HistoryCollection;
  /** Fundamental physical properties and state functions. */
  physics?: PhysicsCollection;
  /** Core chemical, thermodynamic, and crystallographic parameters. */
  chemistry?: ChemistryCollection;
  /** Stoichiometry and transitions of chemical reactions. */
  reaction?: ReactionCollection;
  /** Natural prevalence and isotopic abundance data. */
  abundance?: AbundanceCollection;
  /** Safety data and toxicological limits. */
  safety?: SafetyCollection;
  /** Visual assets, spectra, and digital documentation. */
  media?: MediaCollection;
  /** Curated links to external scientific databases and resources. */
  weblinks?: Weblinks;
} & T >;

/**
 * Specialization for substances defined by their internal constituent makeup.
 * 
 * @template D The target scientific domain (Compound, Mineral, Mixture).
 * @template C The classification type specific to the entity's scientific domain.
 * @template T Additional domain-specific fields to be merged into the substance model.
 */
export type ComposedSubstance<
  D extends DomainType,
  C extends Collection< unknown >,
  T extends object = {}
> = Substance< C, T & {
  /** Qualitative and quantitative definition of the substance's constituents. */
  composition: CompositionCollection< D >;
} >;
