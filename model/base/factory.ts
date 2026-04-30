import type { Brand, Expand } from 'devtypes/types/util';
import type { EntityType, RegistryType } from '../../enum/registry/system';
import type { Struct } from './primitives';

export type Factory<
  T extends EntityType | RegistryType,
  C extends unknown,
  K extends Struct< string | number >
> = Expand< Brand< K & { data: C }, T, 'type', true > >;
