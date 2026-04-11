/**
 * Composition Collection
 * Defines the structure for chemical components and composition of substances.
 */

import type { Collection, Distinct } from '../abstract/collection';
import type { ElementSymbol, ComponentRole } from '../utils/const';

/**
 * CompositionComponent
 * Defines the structure for a single component of a chemical substance or mineral.
 * 
 * @param element - Chemical symbol of the element
 * @param amount - Stoichiometric amount or number of atoms
 * @param frequency - Optional occurrence frequency or probability
 * @param role - Role of the component (e.g., cation, anion, impurity)
 * @param massFraction - Optional mass fraction of the element
 * @param atomicFraction - Optional atomic fraction of the element
 * @param charge - Optional formal charge of the component
 */
export type CompositionComponent = Distinct< {
    element: ElementSymbol;
    amount: Distinct< number >;
    frequency?: Distinct< number >;
    role?: Distinct< ComponentRole >;
    massFraction?: Distinct< number >;
    atomicFraction?: Distinct< number >;
    charge?: Distinct< number >;
} >;

/**
 * CompositionCollection
 * Group for compositional properties.
 * 
 * @param components - List of components that make up the substance
 * @param formula - Chemical formula
 * @param empiricalFormula - Empirical formula
 * @param structuralFormula - Structural formula (e.g. for minerals or complex compounds)
 * @param charge - Overall formal charge
 */
export type CompositionCollection = Collection< {
    components: Distinct< CompositionComponent[] >;
    formula: Distinct< string >;
    empiricalFormula?: Distinct< string >;
    structuralFormula?: Distinct< string >;
    charge?: Distinct< number >;
} >;
