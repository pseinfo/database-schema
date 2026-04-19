/**
 * @file mineral.ts
 * @description Defines the schema for minerals, integrating geological classification
 * systems such as IMA, Strunz, and Dana.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { MineralCategory, MineralClass, MineralProperty } from '../../enum/mineral';
import type { Phase } from '../../enum/physics';
import type { EntityType } from '../../enum/util';
import type { Collection, Distinct } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { Factory, MetaData } from '../abstract/util';
import type { Composite } from './composite';

/** Opaque identifier for a mineral entry. */
export type MineralId = Brand< string, 'mineralID' >;

/**
 * High-level mineral classification data.
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
 * The core data structure for a mineral species, excluding metadata.
 * Designed for file-based database construction where metadata is enriched automatically.
 */
export type MineralData = Expand< SingleMineral & {
  /** Variations or varieties of the mineral (e.g., Quartz vs. Amethyst). */
  forms?: FormCollection< SingleMineral >;
} >;

/**
 * The complete mineral entity, including automatically enriched metadata and potential variety forms.
 */
export type Mineral = MetaData< MineralData >;

/**
 * Global registry of all mineral species indexed by a unique identifier.
 */
export type MineralEntity = Collection< {
  [ key: MineralId ]: Mineral;
} >;

/**
 * Factory type for defining minerals in the database repository.
 * Ensures that the mineral identifier and geological data are correctly typed.
 * 
 * @example
 * ```typescript
 * import type { MineralFactory } from '@pseinfo/database-schema/entity/mineral';
 * import { EntityType } from '@pseinfo/database-schema/enum/util';
 * 
 * export default ( {
 *   type: EntityType.MINERAL,
 *   mineralId: 'quartz',
 *   data: {
 *     // ...
 *   }
 * } ) as const satisfies MineralFactory;
 * ```
 */
export type MineralFactory = Factory< EntityType.MINERAL, MineralData, {
  /** The mineral identifier as primary entity key. */
  mineralId: MineralId;
} >;
