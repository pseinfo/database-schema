/**
 * Composition Collection
 * Defines the structure for chemical components and composition of substances.
 * 
 * @module collections/composition
 */

import type { Collection, Distinct, Group } from '../abstract/collection';
import type { ElementSymbol } from '../enums/element';


/**
 * Defines the structure for a single component of a chemical substance or mineral.
 * 
 * @param element - Distinct chemical symbol of the element
 * @param amount - Distinct stoichiometric amount or number of atoms
 */
export type CompositionComponent = Group< {
    element: Distinct< ElementSymbol >;
    amount: Distinct< number >;
} >;

/**
 * Collection for compositional properties.
 * 
 * @param formula - Chemical formula
 * @param components - List of components that make up the substance
 */
export type CompositionCollection = Collection< {
    formula: Distinct< string >;
    components: CompositionComponent[];
} >;
