import type { Collection } from './abstract/collection';
import type { ReferenceCollection } from './abstract/reference';
import type { UnitCollection } from './abstract/unit';
import type { CompoundEntity } from './entity/compound';
import type { ElementEntity } from './entity/element';
import type { MineralEntity } from './entity/mineral';
import type { NuclideEntity } from './entity/nuclide';

export type Database = {
  meta: any;
  data: Collection< {
    elements: ElementEntity;
    nuclides: NuclideEntity;
    compounds: CompoundEntity;
    minerals: MineralEntity;
    mixtures: any;
  } >;
  unit: UnitCollection;
  refs: ReferenceCollection;
};
