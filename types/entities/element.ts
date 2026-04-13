/**
 * Element Entity
 * Defines the database entity for chemical elements of the periodic table.
 * 
 * @module entities/element
 */

import type { Expand } from 'devtypes/types/util';
import type { Collection, Distinct, Single } from '@/abstract/collection';
import type { FormCollection } from '@/abstract/form';
import type { PrimitiveProperty } from '@/abstract/property';
import type { AtomicsCollection } from '@/collections/atomics';
import type { ChemistryCollection } from '@/collections/chemistry';
import type { DescriptiveCollection } from '@/collections/descriptive';
import type { MetaData } from '@/collections/generic';
import type { PhysicsCollection } from '@/collections/physics';
import type { SafetyCollection } from '@/collections/safety';
import type { ElementBlock, ElementGroup, ElementProperty, ElementSet, ElementSymbol } from '@/enums/element';
import type { Goldschmidt, NaturalOccurrence, Phase, PTColumn, PTPeriod, Superconductivity } from '@/enums/generic';


/** Element collections */

/**
 * Collection for classification properties of elements.
 * 
 * @param symbol - Distinct chemical symbol of the element
 * @param atomicNumber - Distinct atomic number of the element
 * @param block - Distinct block of the periodic table
 * @param group - Distinct group of the periodic table
 * @param column - Distinct column number in the periodic table
 * @param period - Distinct period number in the periodic table
 * @param phase - Standard phase at room temperature
 * @param set - Distinct set classification of the element
 * @param radioactive - Whether the element is radioactive
 * @param naturalOccurrence - Natural occurrence type
 * @param goldschmidt - Goldschmidt classification
 * @param superconductivity - Superconductivity type
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
    radioactive: Single< PrimitiveProperty< boolean > >;
    naturalOccurrence?: Single< PrimitiveProperty< NaturalOccurrence > >;
    goldschmidt?: Single< PrimitiveProperty< Goldschmidt > >;
    superconductivity?: Single< PrimitiveProperty< Superconductivity > >;
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
export type ElementEntity = Expand< MetaData & SingleElement & {
    forms?: FormCollection< SingleElement >;
} >;

/**
 * Entity type for all elements, indexed by their symbol.
 * 
 * This includes metadata, collections for a single element, and optional forms.
 * Forms are alternative representations or variations of the element data.
 */
export type Element = Collection< {
    [ K in ElementSymbol ]: ElementEntity;
} >;
