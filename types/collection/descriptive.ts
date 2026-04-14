import type { Collection, Single } from '../abstract/collection';
import type { NumberProperty } from '../abstract/property';
import type { LangCode } from '../enum/generic';
import type { RegistryGroup, StructureGroup } from './registry';

export type DescriptiveCollection = Collection< {
  registry: RegistryGroup;
  structure: StructureGroup;
} >;
