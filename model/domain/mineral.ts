/**
 * @file model/domain/mineral.ts
 * @description Models minerals and mineraloids, incorporating geological classification
 * systems and structural registries.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { MineralClass, MineralProperty, MineralStructure, MineralSubClass } from '../../enum/science/mineral';
import type { Phase } from '../../enum/science/physics';
import type { SubstanceProperty } from '../../enum/science/substance';
import type { DomainType } from '../../enum/system/domain';
import type { Factory } from '../base/factory';
import type { FormCollection } from '../base/form';
import type { Collection, Distinct, Group } from '../base/modifier';
import type { Metadata } from '../utility/meta';
import type { ComposedSubstance } from './substance';

/** Unique identifier for a mineral species. */
export type MineralId = Brand< string, 'mineralId' >;

/** Geological and structural classification of a mineral. */
export type MineralClassification = Collection< {
  /** Primary mineralogical class (e.g., Silicates, Sulfides). */
  class: Distinct< MineralClass >;
  /** Specific subclass or division within the mineral class. */
  subclass?: Distinct< MineralSubClass >;
  /** Solid solution series to which the mineral belongs. */
  series?: Distinct< string >;
  /** Structural arrangement of the mineral lattice. */
  structure: Distinct< MineralStructure >;
  /** Mapping of identifiers from international mineralogical classification systems. */
  system: Group< {
    /** Official symbol assigned by the International Mineralogical Association. */
    imaSymbol: Distinct< string >;
    /** Strunz classification code (8th edition). */
    strunz8?: Distinct< string >;
    /** Strunz classification code (9th edition). */
    strunz9?: Distinct< string >;
    /** Dana mineral classification code. */
    dana?: Distinct< string >;
    /** Lapis mineral classification code. */
    lapis?: Distinct< string >;
  } >;
  /** Physical state of the mineral (always solid). */
  phase: Distinct< Phase.SOLID >;
  /** List of primary scientific properties associated with this mineral. */
  properties: Distinct< SubstanceProperty | MineralProperty >[];
} >;

/** Representation of a single mineral species as a composed substance. */
export type SingleMineral = ComposedSubstance< DomainType.MINERAL, MineralClassification >;

/** Complete data model for a mineral, including its various physical habits or varieties. */
export type MineralData = Expand< SingleMineral & {
  /** Collection of distinct physical manifestations or varieties of the mineral. */
  forms?: FormCollection< SingleMineral >;
} >;

/** A mineral enriched with system and versioning metadata. */
export type Mineral = Metadata< MineralData >;

/** Collection of all mineral species, indexed by their unique identifiers. */
export type MineralDomain = Collection< {
  [ key: MineralId ]: Mineral;
} >;

/** Factory for constructing standardized mineral entities. */
export type MineralFactory = Factory< DomainType.MINERAL, MineralData, {
  /** The target mineral's unique identifier. */
  mineralId: MineralId;
} >;
