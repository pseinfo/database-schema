import type { Collection } from './abstract/collection';
import type { ReferenceCollection } from './abstract/reference';
import type { UnitCollection } from './abstract/unit';
import type { MetaData } from './abstract/util';
import type { CompoundEntity } from './entity/compound';
import type { ElementEntity } from './entity/element';
import type { MineralEntity } from './entity/mineral';
import type { MixtureEntity } from './entity/mixture';
import type { NuclideEntity } from './entity/nuclide';

export type DBMetaCollection = Collection< MetaData & {
  stats: any;
} >;

export type Database = Collection< {
  meta: DBMetaCollection;
  data: Collection< {
    elements: ElementEntity;
    nuclides: NuclideEntity;
    compounds: CompoundEntity;
    minerals: MineralEntity;
    mixtures: MixtureEntity;
  } >;
  unit: UnitCollection;
  refs: ReferenceCollection;
} >;
