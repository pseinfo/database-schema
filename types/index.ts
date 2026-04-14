import type { Collection } from './abstract/collection';
import type { ReferenceCollection } from './abstract/reference';
import type { UnitCollection } from './abstract/unit';
import type { ElementCollection } from './entity/element';

export type Database = {
  meta: any;
  data: Collection< {
    elements: ElementCollection;
    nuclides: any;
    compounds: any;
    minerals: any;
    mixtures: any;
  } >;
  unit: UnitCollection;
  refs: ReferenceCollection;
};
