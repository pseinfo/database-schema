/**
 * Descriptive Collection
 * Defines the descriptive data structure for elements.
 */

import { Collection, Distinct, LangGroup } from '../abstract/collection';
import { ElementProperty } from '../abstract/const';
import { AbundanceGroup, DiscoveryGroup, MediaGroup, WeblinksGroup } from '../collection/generic';
import { RegistryGroup, StructureGroup } from '../collection/registry';

export type DescriptiveCollection = Collection< {
    registry: RegistryGroup;
    structure: StructureGroup;
    names: LangGroup< 'en' | 'la' >;
    appearance?: LangGroup;
    abundance?: AbundanceGroup;
    discovery?: DiscoveryGroup;
    properties?: Distinct< ElementProperty[] >;
    media?: MediaGroup;
    weblinks?: WeblinksGroup;
} >;
