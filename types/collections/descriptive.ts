/**
 * Descriptive Collection
 * Defines the structure for descriptive properties of chemical elements and compounds.
 * 
 * @module collections/descriptive
 */

import type { Collection, Single } from '@/abstract/collection';
import type { NumberProperty } from '@/abstract/property';
import type { AbundanceGroup, DiscoveryGroup, LangGroup, MediaGroup, WeblinksGroup } from '@/collections/generic';
import type { RegistryGroup, StructureGroup } from '@/collections/registry';
import type { LangCode } from '@/enums/generic';


/**
 * Collection for descriptive properties of elements and compounds.
 * 
 * @param registry - Registry information group
 * @param structure - Structural information group
 * @param names - Names in different languages
 * @param description - Descriptions in different languages
 * @param appearance - Appearance descriptions in different languages
 * @param odor - Odor descriptions in different languages
 * @param abundance - Natural abundance information group
 * @param discovery - Discovery information group
 * @param media - Media information group
 * @param weblinks - Weblinks information group
 * @param pricing - Pricing information group
 */
export type DescriptiveCollection = Collection< {
    registry: RegistryGroup;
    structure: StructureGroup;
    names: LangGroup< LangCode.ENGLISH | LangCode.LATIN >;
    description?: LangGroup;
    appearance?: LangGroup;
    odor?: LangGroup;
    abundance?: AbundanceGroup;
    discovery?: DiscoveryGroup;
    media?: MediaGroup;
    weblinks?: WeblinksGroup;
    pricing?: Single< NumberProperty< 'currency' > >;
} >;
