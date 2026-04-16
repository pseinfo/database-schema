import type { Primitive } from 'devtypes/types/primitive';
import type { StandardCondition } from '../../enum/util';
import type { PhysicalQuantity } from './unit';
import type { Value } from './value';

export type Conditions<
  Q extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = StandardCondition | {
  [ K in Q ]?: Value< K, T >;
};
