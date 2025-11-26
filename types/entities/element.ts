/**
 * Element Entity
 * Defines the database entity for chemical elements of the periodic table.
 */

import { Collection, LangGroup } from '../abstract/collection';
import { AbundanceGroup, DiscoveryGroup, MediaGroup, MetaData, WeblinksGroup } from '../collections/generic';
import { RegistryGroup, StructureGroup } from '../collections/registry';

/** List of all element symbols from the periodic table */
export const ElementSymbol = [
    'h', 'he', 'li', 'be', 'b', 'c', 'n', 'o', 'f', 'ne', 'na', 'mg', 'al', 'si', 'p', 's',
    'cl', 'ar', 'k', 'ca', 'sc', 'ti', 'v', 'cr', 'mn', 'fe', 'co', 'ni', 'cu', 'zn', 'ga',
    'ge', 'as', 'se', 'br', 'kr', 'rb', 'sr', 'y', 'zr', 'nb', 'mo', 'tc', 'ru', 'rh', 'pd',
    'ag', 'cd', 'in', 'sn', 'sb', 'te', 'i', 'xe', 'cs', 'ba', 'la', 'ce', 'pr', 'nd', 'pm',
    'sm', 'eu', 'gd', 'tb', 'dy', 'ho', 'er', 'tm', 'yb', 'lu', 'hf', 'ta', 'w', 're', 'os',
    'ir', 'pt', 'au', 'hg', 'tl', 'pb', 'bi', 'po', 'at', 'rn', 'fr', 'ra', 'ac', 'th', 'pa',
    'u', 'np', 'pu', 'am', 'cm', 'bk', 'cf', 'es', 'fm', 'md', 'no', 'lr', 'rf', 'db', 'sg',
    'bh', 'hs', 'mt', 'ds', 'rg', 'cn', 'nh', 'fl', 'mc', 'lv', 'ts', 'og'
] as const;

export type ElementSymbol = ( typeof ElementSymbol )[ number ];

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
