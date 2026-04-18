/**
 * @file element.ts
 * @description Defines the schema for chemical elements, including their classification,
 * atomic properties, and allotropic forms.
 */

import type { Expand } from 'devtypes/types/util';
import type { ElementBlock, ElementGroup, ElementProperty, ElementSet, ElementSymbol, PTColumn, PTPeriod } from '../../enum/element';
import type { Phase } from '../../enum/physics';
import type { Collection, Distinct } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { MetaData } from '../abstract/util';
import type { AtomicsCollection } from '../collection/atomics';
import type { Substance } from './substance';

/**
 * High-level taxonomic classification for a chemical element in the periodic table.
 */
export type ElementClassification = Collection< {
  /** The standard IUPAC symbol (e.g., 'H', 'Fe'). */
  symbol: Distinct< string >;
  /** The count of protons in the nucleus defining the element. */
  atomicNumber: Distinct< number >;
  /** The orbital block (s, p, d, f) where the valence electrons reside. */
  block: Distinct< ElementBlock >;
  /** The categorical group name (e.g., Noble Gas, Alkali Metal). */
  group: Distinct< ElementGroup >;
  /** The vertical column number (1-18) in the standard periodic table. */
  column: Distinct< PTColumn >;
  /** The horizontal period number (1-7) in the periodic table. */
  period: Distinct< PTPeriod >;
  /** The standard physical phase at 298.15 K and 100 kPa. */
  phase: Distinct< Phase >;
  /** The specific geochemical or structural set (e.g., Lanthanides). */
  set: Distinct< ElementSet >;
  /** Indicates if all isotopes of the element are unstable. */
  radioactive: Distinct< boolean >;
  /** Indicates if the element occurs naturally on Earth or is only produced artificially. */
  synthetic: Distinct< boolean >;
  /** List of characteristic properties associated with this element. */
  properties: Distinct< ElementProperty[] >;
} >;

/**
 * Representation of a single chemical element as a substance.
 */
export type SingleElement = Expand< Substance< ElementClassification > & {
  /** Fundamental atomic properties including nuclear and electronic structure. */
  atomics?: AtomicsCollection;
} >;

/**
 * The core data structure for a chemical element, excluding metadata.
 * Designed for file-based database construction where metadata is enriched automatically.
 */
export type ElementData = Expand< SingleElement & {
  /** Variations of the element in the same physical state (e.g., Graphite vs. Diamond). */
  forms?: FormCollection< SingleElement >;
} >;

/**
 * The complete elemental entity, including automatically enriched metadata and potential allotropes.
 */
export type Element = MetaData< ElementData >;

/**
 * Global registry of all chemical elements indexed by their IUPAC symbol.
 */
export type ElementEntity = Collection< {
  [ K in ElementSymbol ]: Element;
} >;
