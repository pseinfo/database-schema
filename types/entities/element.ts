/**
 * Element Entity
 * Defines the database entity for chemical elements of the periodic table.
 * 
 * @module entities/element
 */

import type { Expand } from 'devtypes/types/util';
import type { Collection, Distinct } from '@/abstract/collection';
import type { FormCollection } from '@/abstract/form';
import type { AtomicsCollection } from '@/collections/atomics';
import type { ChemistryCollection } from '@/collections/chemistry';
import type { DescriptiveCollection } from '@/collections/descriptive';
import type { MetaData } from '@/collections/generic';
import type { PhysicsCollection } from '@/collections/physics';
import type { SafetyCollection } from '@/collections/safety';
import type { ElementBlock, ElementGroup, ElementProperty, ElementSet, ElementSymbol } from '@/enums/element';
import type { Phase, PTColumn, PTPeriod } from '@/enums/generic';


/** Element collections */

/**
 * Collection for classification properties of elements.
 * 
 * @param symbol - Chemical symbol of the element
 * @param atomicNumber - Atomic number of the element
 * @param block - Block of the periodic table
 * @param group - Group of the periodic table
 * @param column - Column number in the periodic table
 * @param period - Period number in the periodic table
 * @param phase - Standard phase at room temperature
 * @param set - Set classification of the element
 * @param radioactive - Whether the element is radioactive
 */
export type ElementClassification = Collection< {
    symbol: Distinct< string >;
    atomicNumber: Distinct< number >;
    block: Distinct< ElementBlock >;
    group: Distinct< ElementGroup >;
    column: Distinct< PTColumn >;
    period: Distinct< PTPeriod >;
    phase: Distinct< Phase >;
    set: Distinct< ElementSet >;
    radioactive: Distinct< boolean >;
} >;

/** Main element entity */

/**
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
export type SingleElement = Collection< {
    descriptive: DescriptiveCollection;
    classification: ElementClassification;
    physics?: PhysicsCollection;
    chemistry?: ChemistryCollection;
    atomics?: AtomicsCollection;
    properties?: Distinct< ElementProperty[] >;
    safety?: SafetyCollection;
} >;

/** Type description for a single element entity. */
export type Element = Expand< MetaData & SingleElement & {
    forms?: FormCollection< SingleElement >;
} >;

/**
 * Collection of all elements, indexed by their symbol.
 * 
 * This includes metadata, collections for a single element, and optional forms.
 * Forms are alternative representations or variations of the element data.
 */
export type ElementCollection = Collection< {
    [ K in ElementSymbol ]: Element;
} >;
