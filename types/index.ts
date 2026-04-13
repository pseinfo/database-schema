import type { ReferenceCollection } from './abstract/reference';
import type { UnitCollection } from './abstract/unit';

export type Database = {
  meta: any;
  data: any;
  unit: UnitCollection;
  refs: ReferenceCollection;
};
