/**
 * Composition Collection
 * Defines the structure for chemical components and composition of substances.
 * 
 * @module collections/composition
 */

import type { Collection, Distinct, Group, Single } from '@/abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '@/abstract/property';
import type { ComponentRole } from '@/enums/compound';
import type { ElementSymbol } from '@/enums/element';


/**
 * Defines the structure for a single component of a chemical substance or mineral.
 * 
 * @param element - Distinct chemical symbol of the element
 * @param amount - Distinct stoichiometric amount or number of atoms
 * @param frequency - Optional occurrence frequency or probability
 * @param role - Role of the component (e.g., cation, anion, impurity)
 * @param massFraction - Optional mass fraction of the element
 * @param atomicFraction - Optional atomic fraction of the element
 * @param charge - Optional formal charge of the component
 */
export type CompositionComponent = Group< {
    element: Distinct< ElementSymbol >;
    amount: Distinct< number >;
    frequency?: Single< PrimitiveProperty< number > >;
    role?: Single< PrimitiveProperty< ComponentRole > >;
    massFraction?: Single< NumberProperty< 'massFraction' > >;
    atomicFraction?: Single< NumberProperty< 'massFraction' > >;
    charge?: Single< PrimitiveProperty< number > >;
} >;

/**
 * Collection for compositional properties.
 * 
 * @param components - List of components that make up the substance
 * @param formula - Distinct chemical formula
 * @param empiricalFormula - Distinct empirical formula
 * @param structuralFormula - Distinct structural formula (e.g. for minerals or complex compounds)
 * @param charge - Overall formal charge
 */
export type CompositionCollection = Collection< {
    components: CompositionComponent[];
    formula: Distinct< string >;
    empiricalFormula?: Distinct< string >;
    structuralFormula?: Distinct< string >;
    charge?: Single< PrimitiveProperty< number > >;
} >;
