/**
 * Element Entity
 * Defines the database entity for chemical elements of the periodic table.
 */

import type { Collection, Distinct, Single } from '@/abstract/collection';
import type { FormCollection } from '@/abstract/form';
import type { PrimitiveProperty } from '@/abstract/property';
import type { AtomicsCollection } from '@/collections/atomics';
import type { ChemistryCollection } from '@/collections/chemistry';
import type { DescriptiveCollection } from '@/collections/descriptive';
import type { MetaData } from '@/collections/generic';
import type { PhysicsCollection } from '@/collections/physics';
import type { SafetyCollection } from '@/collections/safety';
import type { Phase } from '@/enums/generic';
import type * as consts from '../utils/const';

/** Element collections */

/**
 * ElementClassification
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
    block: Distinct< consts.ElementBlock >;
    group: Distinct< consts.ElementGroup >;
    column: Distinct< consts.ElementColumn >;
    period: Distinct< consts.ElementPeriod >;
    phase: Distinct< Phase >;
    set: Distinct< consts.ElementSet >;
    radioactive: Single< PrimitiveProperty< boolean > >;
    naturalOccurrence?: Single< PrimitiveProperty< consts.NaturalOccurrence > >;
    goldschmidt?: Single< PrimitiveProperty< consts.Goldschmidt > >;
    superconductivity?: Single< PrimitiveProperty< consts.Superconductivity > >;
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
export type SingleElement = Collection< {
    descriptive: DescriptiveCollection;
    classification: ElementClassification;
    physics?: PhysicsCollection;
    chemistry?: ChemistryCollection;
    atomics?: AtomicsCollection;
    properties?: Distinct< consts.ElementProperty[] >;
    safety?: SafetyCollection;
} >;

/**
 * Element
 * Entity type for all elements, indexed by their symbol.
 * 
 * This includes metadata, collections for a single element, and optional forms.
 * Forms are alternative representations or variations of the element data.
 */
export type Element = Collection< {
    [ K in consts.ElementSymbol ]: MetaData & SingleElement & {
        forms?: FormCollection< SingleElement >;
    };
} >;
