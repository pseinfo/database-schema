/**
 * @file mixture.ts
 * @description Defines the schema for chemical mixtures, focusing on their physical
 * homogeneity, state of dispersion, and categorical types.
 */

import type { Brand } from 'devtypes/types/util';
import type { MixtureCategory, MixtureHomogeneity, MixtureProperty, MixtureType } from '../../enum/mixture';
import type { Phase } from '../../enum/physics';
import type { EntityType } from '../../enum/util';
import type { Collection, Distinct } from '../abstract/collection';
import type { Factory, MetaData } from '../abstract/util';
import type { Composite } from './composite';

/** Opaque identifier for a chemical mixture. */
export type MixtureId = Brand< string, 'mixtureID' >;

/**
 * Physical and architectural classification of multi-component substance systems.
 */
export type MixtureClassification = Collection< {
  /** The specific physical nature of the mixture (e.g., Solution, Colloid, Suspension). */
  type: Distinct< MixtureType >;
  /** The degree of uniform distribution of the components (Homogeneous or Heterogeneous). */
  homogeneity: Distinct< MixtureHomogeneity >;
  /** The structural or thematic category (e.g., Alloy, Aerosol). */
  category: Distinct< MixtureCategory >;
  /** The overall bulk physical phase of the mixture. */
  phase: Distinct< Phase >;
  /** The phase of the continuous substance in which the other components are dispersed. */
  mediumPhase: Distinct< Phase >;
  /** The phase of the particles or droplets that are distributed within the medium. */
  dispersedPhase: Distinct< Phase >;
  /** Indicates if any constituent of the mixture is radioactive. */
  radioactive: Distinct< boolean >;
  /** Indicates if the mixture is manufactured or synthetic. */
  synthetic: Distinct< boolean >;
  /** List of characteristic properties associated with this mixture. */
  properties: Distinct< MixtureProperty[] >;
} >;

/**
 * Representation of a single chemical mixture as a multi-element substance.
 */
export type SingleMixture = Composite< MixtureClassification >;

/**
 * The core data structure for a chemical mixture, excluding metadata.
 * Designed for file-based database construction where metadata is enriched automatically.
 */
export type MixtureData = SingleMixture;

/**
 * The complete mixture entity, including automatically enriched metadata.
 */
export type Mixture = MetaData< MixtureData >;

/**
 * Global registry of all multi-component mixtures indexed by a unique identifier.
 */
export type MixtureEntity = Collection< {
  [ key: MixtureId ]: Mixture;
} >;

/**
 * Factory type for defining chemical mixtures in the database repository.
 * Ensures that the mixture identifier and constituent data are correctly typed.
 * 
 * @example
 * ```typescript
 * import type { MixtureFactory } from '@pseinfo/database-schema/entity/mixture';
 * import { EntityType } from '@pseinfo/database-schema/enum/util';
 * 
 * export default ( {
 *   type: EntityType.MIXTURE,
 *   mixtureId: 'air',
 *   data: {
 *     // ...
 *   }
 * } ) as const satisfies MixtureFactory;
 * ```
 */
export type MixtureFactory = Factory< EntityType.MIXTURE, MixtureData, {
  /** The mixture identifier as primary entity key. */
  mixtureId: MixtureId;
} >;
