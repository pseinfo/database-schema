import type { Collection } from './abstract/collection';
import type { ReferenceCollection } from './abstract/reference';
import type { UnitCollection } from './abstract/unit';

export type Database = {
  meta: any;
  data: Collection< {
    elements: any;
    nuclides: any;
    compounds: any;
    minerals: any;
    mixtures: any;
  } >;
  unit: UnitCollection;
  refs: ReferenceCollection;
};
