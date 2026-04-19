/**
 * @file compound.ts
 * @description Defines the schema for chemical compounds, covering their structural
 * classification, bonding characteristics, and various chemical forms.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { CompoundCategory, CompoundProperty, CompoundUnion } from '../../enum/compound';
import type { Phase } from '../../enum/physics';
import type { EntityType } from '../../enum/util';
import type { Collection, Distinct } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { Factory, MetaData } from '../abstract/util';
import type { Composite } from './composite';

/** Opaque identifier for a chemical compound entry. */
export type CompoundId = Brand< string, 'compoundID' >;

/**
 * High-level categorization of a chemical compound based on its bonding and origin.
 */
export type CompoundClassification = Collection< {
  /** The structural or thematic category (e.g., Oxide, Polymer). */
  category: Distinct< CompoundCategory >;
  /** The type of chemical connection (e.g., Covalent, Ionic). */
  union: Distinct< CompoundUnion >;
  /** Indicates if the compound is based on carbon chains (with specific exceptions). */
  organic: Distinct< boolean >;
  /** The physical state of the compound under standard conditions. */
  phase: Distinct< Phase >;
  /** Indicates if the compound contains radioactive radionuclides. */
  radioactive: Distinct< boolean >;
  /** Indicates if the compound is produced through industrial synthesis. */
  synthetic: Distinct< boolean >;
  /** List of characteristic properties associated with this compound. */
  properties: Distinct< CompoundProperty[] >;
} >;

/**
 * Representation of a single chemical compound as a multi-element substance.
 */
export type SingleCompound = Composite< CompoundClassification >;

/**
 * The core data structure for a chemical compound, excluding metadata.
 * Designed for file-based database construction where metadata is enriched automatically.
 */
export type CompoundData = Expand< SingleCompound & {
  /** Variations of the compound (e.g., different crystal structures or hydration levels). */
  forms?: FormCollection< SingleCompound >;
} >;

/**
 * The complete chemical compound entity, including automatically enriched metadata.
 */
export type Compound = MetaData< CompoundData >;

/**
 * Global registry of all chemical compounds indexed by a unique identifier.
 */
export type CompoundEntity = Collection< {
  [ key: CompoundId ]: Compound;
} >;

export type CompoundFactory = Factory<
  EntityType.COMPOUND,
  { compoundId: CompoundId },
  CompoundData
>;
