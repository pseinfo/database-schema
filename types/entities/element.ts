/**
 * Element Entity
 * Defines the database entity for chemical elements of the periodic table.
 */

import { Collection, LangGroup } from '../abstract/collection';
import { AbundanceGroup, DiscoveryGroup, MediaGroup, MetaData, WeblinksGroup } from '../collections/generic';
import { RegistryGroup, StructureGroup } from '../collections/registry';
import { ElementSymbol } from '../utils/const';

/** Element collections */

/**
 * DescriptiveCollection
 * Collection for descriptive properties of elements.
 * Includes registry, structure, names, appearance, abundance, discovery, media, and weblinks.
 */
type DescriptiveCollection = Collection< {
    registry: RegistryGroup;
    structure: StructureGroup;
    names: LangGroup< 'en' | 'la' >;
    appearance?: LangGroup;
    abundance?: AbundanceGroup;
    discovery?: DiscoveryGroup;
    media?: MediaGroup;
    weblinks?: WeblinksGroup;
} >;

/** Main element entity */

/**
 * SingleElement
 * Type for a single element entry (all properties)
 * 
 * @param descriptive - Descriptive properties collection
 */
type SingleElement = Collection< {
    descriptive: DescriptiveCollection;
} >;

/** Entity type for all elements, indexed by their symbol */
export type ElementEntity = {
    [ K in ElementSymbol ]: MetaData & SingleElement;
};
