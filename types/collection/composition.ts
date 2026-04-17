/**
 * @file composition.ts
 * @description Defines the chemical makeup of substances, including elemental components,
 * stoichiometry, and various formula representations.
 */

import type { ComponentRole } from '../../enum/chemistry';
import type { ElementSymbol } from '../../enum/element';
import type { Collection, Single } from '../abstract/collection';
import type { PrimitiveProperty, StructProperty } from '../abstract/property';

/**
 * Representation of a single chemical constituent within a substance.
 */
export type Component = {
  /** The chemical symbol of the element (e.g., 'H', 'Fe'). */
  element: ElementSymbol;
  /** The stoichiometric quantity or relative amount of the element. */
  quantity: number;
  /** The functional role of the component within the structure (e.g., cation, ligand). */
  type?: ComponentRole;
  /** The formal oxidation state or ionic charge of the component. */
  charge?: number;
};

/**
 * Registry of properties describing the chemical identity and stoichiometric ratios.
 */
export type CompositionCollection = Collection< {
  /** The list of individual elements and their quantities that make up the substance. */
  components: Single< StructProperty< Component > >;
  /** The standard chemical representation showing the type and number of atoms (e.g., "H{2}O"). */
  formula: Single< PrimitiveProperty< string > >;
  /** The simplest whole-number ratio of atoms in a compound. */
  empiricalFormula?: Single< PrimitiveProperty< string > >;
  /** A formula showing the types and nodes of atoms without full structural detail. */
  condensedFormula?: Single< PrimitiveProperty< string > >;
  /** The net electrical charge of the entire chemical entity. */
  charge?: Single< PrimitiveProperty< number > >;
} >;
