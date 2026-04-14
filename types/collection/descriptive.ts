import type { Collection } from '../abstract/collection';
import type { LangCode } from '../enum/generic';
import type { LangGroup } from './generic';
import type { RegistryGroup, StructureGroup } from './registry';

export type DescriptiveCollection = Collection< {
  registry: RegistryGroup;
  structure: StructureGroup;
  names: LangGroup< LangCode.ENGLISH | LangCode.LATIN >;
  description?: LangGroup;
  appearance?: LangGroup;
  odor?: LangGroup;
} >;
