/**
 * Element Entity
 * Defines the database entity for chemical elements of the periodic table.
 */

import type { Collection, Distinct } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { AtomicsCollection } from '../collections/atomics';
import type { ChemistryCollection } from '../collections/chemistry';
import type { DescriptiveCollection } from '../collections/descriptive';
import type { MetaData } from '../collections/generic';
import type { PhysicsCollection } from '../collections/physics';
import type { SafetyCollection } from '../collections/safety';
import type { ElementBlock, ElementGroup, ElementProperty, ElementSet, ElementSymbol, NaturalOccurrence, Phase } from '../utils/const';

/** Element collections */

/**
 * Classification
 * Collection for classification properties of elements.
 * 
 * @param symbol - Chemical symbol of the element
 * @param atomicNumber - Atomic number of the element
 * @param block - Block of the periodic table
 * @param group - Group of the periodic table
 * @param column - Column number in the periodic table
 * @param period - Period number in the periodic table
 * @param radioactive - Whether the element is radioactive
 * @param set - Set classification of the element
 * @param phase - Standard phase at room temperature
 * @param naturalOccurrence - Natural occurrence type
 * @param goldschmidt - Goldschmidt classification
 * @param superconductivity - Superconductivity type
 */
type Classification = Collection< {
    symbol: Distinct< string >;
    atomicNumber: Distinct< number >;
    block: Distinct< ElementBlock >;
    group: Distinct< ElementGroup >;
    column: Distinct< 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 >;
    period: Distinct< 1 | 2 | 3 | 4 | 5 | 6 | 7 >;
    radioactive: Distinct< boolean >;
    set?: Distinct< ElementSet >;
    phase?: Distinct< Phase >;
    naturalOccurrence?: Distinct< NaturalOccurrence >;
    goldschmidt?: Distinct< 'atmophile' | 'chalcophile' | 'lithophile' | 'siderophile' | 'synthetic' >;
    superconductivity?: Distinct< 'none' | 'normal' | 'special' >;
} >;

/** Main element entity */

/**
 * SingleElement
 * Type for a single element entry (all properties).
 * 
 * @param descriptive - Descriptive properties collection
 * @param classification - Classification properties collection
 * @param physics - Physics properties collection
 * @param chemistry - Chemistry properties collection
 * @param atomics - Atomics properties collection
 * @param properties - Distinct list of element properties
 * @param safety - Safety properties collection
 */
type SingleElement = Collection< {
    descriptive: DescriptiveCollection;
    classification: Classification;
    physics?: PhysicsCollection;
    chemistry?: ChemistryCollection;
    atomics?: AtomicsCollection;
    properties?: Distinct< ElementProperty[] >;
    safety?: SafetyCollection;
} >;

/**
 * Element
 * Entity type for all elements, indexed by their symbol.
 * 
 * This includes metadata, collections for a single element, and optional forms.
 * Forms are alternative representations or variations of the element data.
 */
export type Element = {
    [ K in ElementSymbol ]: MetaData & SingleElement & {
        forms?: FormCollection< SingleElement >;
    };
};
