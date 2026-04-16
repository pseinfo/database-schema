import type { Collection, Distinct, Group } from './abstract/collection';
import type { ReferenceCollection } from './abstract/reference';
import type { UnitCollection } from './abstract/unit';
import type { MetaData } from './abstract/util';
import type { CompoundEntity } from './entity/compound';
import type { ElementEntity } from './entity/element';
import type { MineralEntity } from './entity/mineral';
import type { MixtureEntity } from './entity/mixture';
import type { NuclideEntity } from './entity/nuclide';

export type StatsCollection = Collection< {
  size: Distinct< number >;
  entities: Group< {
    elements: Distinct< number >;
    nuclides: Distinct< number >;
    compounds: Distinct< number >;
    minerals: Distinct< number >;
    mixtures: Distinct< number >;
  } >;
  authors: Distinct< {
    name: Distinct< string >;
    count: Distinct< number >;
  }[] >;
} >;

export type Database = Collection< {
  meta: Collection< MetaData & {
    stats: StatsCollection;
  } >;
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
