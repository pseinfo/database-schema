import type { Collection } from './abstract/collection';
import type { ReferenceCollection } from './abstract/reference';
import type { UnitCollection } from './abstract/unit';
import type { ElementEntity } from './entity/element';

export type Database = {
  meta: any;
  data: Collection< {
    elements: ElementEntity;
    nuclides: any;
    compounds: any;
    minerals: any;
    mixtures: any;
  } >;
  unit: UnitCollection;
  refs: ReferenceCollection;
};
