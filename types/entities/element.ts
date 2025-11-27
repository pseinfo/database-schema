/**
 * Element Entity
 * Defines the database entity for chemical elements of the periodic table.
 */

import { Collection, Distinct, LangGroup } from '../abstract/collection';
import { AtomicsCollection } from '../collections/atomics';
import { AbundanceGroup, DiscoveryGroup, MediaGroup, MetaData, WeblinksGroup } from '../collections/generic';
import { PhysicsCollection } from '../collections/physics';
import { RegistryGroup, StructureGroup } from '../collections/registry';
import { ElementBlock, ElementGroup, ElementSet, ElementSymbol, Phase } from '../utils/const';

/** Element properties */
export const ElementProperty = [
    'antiquity', 'artificial', 'heavyMetal', 'lightMetal', 'mononuclide', 'native',
    'natural', 'noble', 'platinumMetal', 'radioactive', 'rareEarths', 'refractorMetal',
    'semiconductor', 'stable', 'synthetic', 'vital'
] as const;

export type ElementProperty = ( typeof ElementProperty )[ number ];

/** Element collections */

/**
 * Descriptive
 * Collection for descriptive properties of elements.
 * Includes registry, structure, names, appearance, abundance, discovery, media, and weblinks.
 */
type Descriptive = Collection< {
    registry: RegistryGroup;
    structure: StructureGroup;
    names: LangGroup< 'en' | 'la' >;
    appearance?: LangGroup;
    abundance?: AbundanceGroup;
    discovery?: DiscoveryGroup;
    media?: MediaGroup;
    weblinks?: WeblinksGroup;
} >;

/**
 * Classification
 * Collection for classification properties of elements.
 * Includes symbol, atomic number, block, group, column, period, radioactivity, set, and phase.
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
} >;

/** Main element entity */

/**
 * SingleElement
 * Type for a single element entry (all properties)
 * 
 * @param descriptive - Descriptive properties collection
 * @param classification - Classification properties collection
 * @param physics - Physics properties collection
 * @param atomics - Atomics properties collection
 */
type SingleElement = Collection< {
    descriptive: Descriptive;
    classification: Classification;
    physics?: PhysicsCollection;
    atomics?: AtomicsCollection;
} >;

/** Entity type for all elements, indexed by their symbol */
export type Element = {
    [ K in ElementSymbol ]: MetaData & SingleElement;
};
