import type { Brand, Expand } from 'devtypes/types/util';
import type { DomainType, RegistryType } from '../../enum/system/domain';
import type { Collection } from './modifier';
import type { Struct } from './primitive';

export type Factory<
  T extends DomainType | RegistryType,
  C extends Collection< unknown >,
  K extends Struct< string | number >
> = Expand< Brand< K & { data: C }, T, 'type', true > >;
