import type { Collection } from './abstract/collection';
import type { ReferenceCollection } from './abstract/reference';
import type { UnitCollection } from './abstract/unit';
import type { CompoundEntity } from './entity/compound';
import type { ElementEntity } from './entity/element';
import type { NuclideEntity } from './entity/nuclide';

export type Database = {
  meta: any;
  data: Collection< {
    elements: ElementEntity;
    nuclides: NuclideEntity;
    compounds: CompoundEntity;
    minerals: any;
    mixtures: any;
  } >;
  unit: UnitCollection;
  refs: ReferenceCollection;
};
