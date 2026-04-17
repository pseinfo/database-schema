/**
 * @file mineral.ts
 * @description Defines the schema for minerals, integrating geological classification
 * systems such as IMA, Strunz, and Dana.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { MineralCategory, MineralClass, MineralProperty } from '../../enum/mineral';
import type { Phase } from '../../enum/physics';
import type { Collection, Distinct } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { MetaData } from '../abstract/util';
import type { Composite } from './composite';

/** Opaque identifier for a mineral entry. */
export type MineralID = Brand< string, 'mineralID' >;

/**
 * Geological and mineralogical taxonomic data.
 */
export type MineralClassification = Collection< {
  /** The natural origin classification (e.g., Silicates, Carbonates). */
  category: Distinct< MineralCategory >;
  /** The specific mineral class within the classification hierarchy. */
  class: Distinct< MineralClass >;
  /** The official symbol assigned by the International Mineralogical Association. */
  imaSymbol: Distinct< string >;
  /** The identification number in the 8th edition of the Strunz classification. */
  strunz8: Distinct< string >;
  /** The identification number in the 9th edition of the Strunz classification. */
  strunz9: Distinct< string >;
  /** The identification number in the Dana system of mineralogy. */
  dana: Distinct< string >;
  /** The identifier in the Lapis system of mineral classification. */
  lapis: Distinct< string >;
  /** The physical state (always solid for minerals by definition). */
  phase: Distinct< Phase.SOLID >;
  /** Indicates if the mineral contains naturally occurring radionuclides. */
  radioactive: Distinct< boolean >;
  /** Indicates if the specimen is a synthetic lab-grown counterpart of a natural mineral. */
  synthetic: Distinct< boolean >;
  /** List of characteristic properties associated with this mineral. */
  properties: Distinct< MineralProperty[] >;
} >;

/**
 * Representation of a single mineral species as a multi-element substance.
 */
export type SingleMineral = Composite< MineralClassification >;

/**
 * The complete mineral entity, including metadata and potential variety forms.
 */
export type Mineral = Expand< MetaData & SingleMineral & {
  /** Variations or varieties of the mineral (e.g., Quartz vs. Amethyst). */
  forms?: FormCollection< SingleMineral >;
} >;

/**
 * Global registry of all mineral species indexed by a unique identifier.
 */
export type MineralEntity = Collection< {
  [ key: MineralID ]: Mineral;
} >;
