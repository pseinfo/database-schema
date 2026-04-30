/**
 * @file model/domain/mixture.ts
 * @description Models chemical mixtures and dispersions, defining their homogeneity
 * and physical phase relationships.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { MixtureHomogeneity, MixtureProperty, MixtureSystem, MixtureType } from '../../enum/science/mixture';
import type { Phase } from '../../enum/science/physics';
import type { SubstanceProperty } from '../../enum/science/substance';
import type { DomainType } from '../../enum/system/domain';
import type { Factory } from '../base/factory';
import type { FormCollection } from '../base/form';
import type { Collection, Distinct } from '../base/modifier';
import type { Metadata } from '../utility/meta';
import type { ComposedSubstance } from './substance';

/** Unique identifier for a chemical mixture entity. */
export type MixtureId = Brand< string, 'mixtureId' >;

/** Physical and scientific classification of a mixture. */
export type MixtureClassification = Collection< {
  /** Broad scientific type of the mixture (e.g., Solution, Suspension). */
  type: Distinct< MixtureType >;
  /** Degree of uniform distribution of constituents (Homogeneous or Heterogeneous). */
  homogeneity: Distinct< MixtureHomogeneity >;
  /** Nature of the mixture system (e.g., Gas-Liquid, Solid-Solid). */
  system: Distinct< MixtureSystem >;
  /** Standard physical state at STP. */
  phase: Distinct< Phase >;
  /** Physical state of the continuous phase (solvent/medium). */
  mediumPhase?: Distinct< Phase >;
  /** Physical state of the dispersed or solute phase. */
  dispersedPhase?: Distinct< Phase >;
  /** List of primary scientific properties associated with this mixture. */
  properties: Distinct< SubstanceProperty | MixtureProperty >[];
} >;

/** Representation of a single mixture as a composed substance. */
export type SingleMixture = ComposedSubstance< DomainType.MIXTURE, MixtureClassification >;

/** Complete data model for a chemical mixture, including its various physical forms. */
export type MixtureData = Expand< SingleMixture & {
  /** Collection of distinct physical manifestations or states of the mixture. */
  forms?: FormCollection< SingleMixture >;
} >;

/** A chemical mixture enriched with system and versioning metadata. */
export type Mixture = Metadata< MixtureData >;

/** Collection of all chemical mixtures, indexed by their unique identifiers. */
export type MixtureDomain = Collection< {
  [ key: MixtureId ]: Mixture;
} >;

/** Factory for constructing standardized mixture entities. */
export type MixtureFactory = Factory< DomainType.MIXTURE, MixtureData, {
  /** The target mixture's unique identifier. */
  mixtureId: MixtureId;
} >;
