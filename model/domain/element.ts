/**
 * @file model/domain/element.ts
 * @description Models the fundamental chemical elements, integrating their periodic
 * classification with atomic and substance-level properties.
 */

import type { Expand } from 'devtypes/types/util';
import type {
  ElementGroup, ElementProperty, ElementSet, ElementSymbol, PeriodicTableColumn,
  PeriodicTablePeriod, Subshell
} from '../../enum/science/element';
import type { Phase } from '../../enum/science/physics';
import type { SubstanceProperty } from '../../enum/science/substance';
import type { DomainType } from '../../enum/system/domain';
import type { Factory } from '../base/factory';
import type { FormCollection } from '../base/form';
import type { Collection, Distinct } from '../base/modifier';
import type { AtomicCollection } from '../collection/atomic';
import type { Metadata } from '../utility/meta';
import type { Substance } from './substance';

/** Fundamental classification of a chemical element within the periodic system. */
export type ElementClassification = {
  /** Standardized IUPAC chemical symbol of the element. */
  symbol: Distinct< string >;
  /** The number of protons in the atomic nucleus. */
  atomicNumber: Distinct< number >;
  /** Classification by valence orbital symmetry (s, p, d, f). */
  block: Distinct< Subshell >;
  /** Vertical column in the periodic table (group number). */
  column: Distinct< PeriodicTableColumn >;
  /** Horizontal row in the periodic table. */
  period: Distinct< PeriodicTablePeriod >;
  /** Classification into chemical sets (e.g., Alkali metals, Noble gases). */
  set: Distinct< ElementSet >;
  /** Systematic group designation. */
  group: Distinct< ElementGroup >;
  /** Standard physical state at STP. */
  phase: Distinct< Phase >;
  /** List of primary scientific properties associated with this element. */
  properties: Distinct< SubstanceProperty | ElementProperty >[];
};

/** Representation of a single chemical element as a scientific substance. */
export type SingleElement = Substance< ElementClassification, {
  /** Fundamental nuclear and electronic properties. */
  atomic?: AtomicCollection;
} >;

/** Complete data model for a chemical element, including its various allotropic or physical forms. */
export type ElementData = Expand< SingleElement & {
  /** Collection of distinct allotropes or physical manifestations of the element. */
  forms?: FormCollection< SingleElement >;
} >;

/** A chemical element enriched with system and versioning metadata. */
export type Element = Metadata< ElementData >;

/** Collection of all chemical elements, indexed by their unique symbols. */
export type ElementDomain = Collection< {
  [ K in ElementSymbol ]: Element;
} >;

/** Factory for constructing standardized element entities. */
export type ElementFactory = Factory< DomainType.ELEMENT, ElementData, {
  /** The target chemical element's symbol. */
  elementSymbol: ElementSymbol;
} >;
