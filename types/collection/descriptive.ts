import type { Collection, Distinct, Group } from '../abstract/collection';
import type { RefId } from '../abstract/reference';
import type { LangCode } from '../enum/generic';
import type { LangGroup, MediaGroup, WeblinksGroup } from './generic';
import type { RegistryGroup, StructureGroup } from './registry';

export type DiscoveryGroup = Group< {
  year?: Distinct< number >;
  discoverer?: Distinct< string | string[] >;
  country?: Distinct< string | string[] >;
  institute?: Distinct< string | string[] >;
  references?: RefId[];
} >;

export type DescriptiveCollection = Collection< {
  registry: RegistryGroup;
  structure: StructureGroup;
  names: LangGroup< LangCode.ENGLISH | LangCode.LATIN >;
  description?: LangGroup;
  appearance?: LangGroup;
  odor?: LangGroup;
  discovery?: DiscoveryGroup;
  media?: MediaGroup;
  weblinks?: WeblinksGroup;
} >;
