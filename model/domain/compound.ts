/**
 * @file model/domain/compound.ts
 * @description Models chemical compounds, focusing on their categorical classification
 * and stoichiometric composition.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { CompoundCategory, CompoundClass, CompoundComposition, CompoundProperty } from '../../enum/science/compound';
import type { Phase } from '../../enum/science/physics';
import type { SubstanceProperty } from '../../enum/science/substance';
import type { DomainType } from '../../enum/system/domain';
import type { Factory } from '../base/factory';
import type { FormCollection } from '../base/form';
import type { Collection, Distinct } from '../base/modifier';
import type { Metadata } from '../utility/meta';
import type { ComposedSubstance } from './substance';

/** Unique identifier for a chemical compound entity. */
export type CompoundId = Brand< string, 'compoundId' >;

/** Systematic classification of a chemical compound. */
export type CompoundClassification = Collection< {
  /** Broad scientific category of the compound (e.g., Organic, Inorganic). */
  category: Distinct< CompoundCategory >;
  /** Type of chemical composition (e.g., Stoichiometric, Non-stoichiometric). */
  composition: Distinct< CompoundComposition >;
  /** Specific chemical class or functional group designation. */
  class: Distinct< CompoundClass >;
  /** Standard physical state at STP. */
  phase: Distinct< Phase >;
  /** List of primary scientific properties associated with this compound. */
  properties: Distinct< SubstanceProperty | CompoundProperty >[];
} >;

/** Representation of a single chemical compound as a composed substance. */
export type SingleCompound = ComposedSubstance< DomainType.COMPOUND, CompoundClassification >;

/** Complete data model for a chemical compound, including its various physical forms or phases. */
export type CompoundData = Expand< SingleCompound & {
  /** Collection of distinct physical manifestations or polymorphs of the compound. */
  forms?: FormCollection< SingleCompound >;
} >;

/** A chemical compound enriched with system and versioning metadata. */
export type Compound = Metadata< CompoundData >;

/** Collection of all chemical compounds, indexed by their unique identifiers. */
export type CompoundDomain = Collection< {
  [ key: CompoundId ]: Compound;
} >;

/** Factory for constructing standardized compound entities. */
export type CompoundFactory = Factory< DomainType.COMPOUND, CompoundData, {
  /** The target compound's unique identifier. */
  compoundId: CompoundId;
} >;
