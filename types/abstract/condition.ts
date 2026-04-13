import type { Primitive } from 'devtypes/types/primitive';
import { stp } from '../../config/stp';
import type { PhysicalQuantity } from './unit';
import type { Value } from './value';

export type StandardCondition = keyof typeof stp;

export type Conditions<
  Q extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = StandardCondition | {
  [ K in Q ]?: Value< K, T >;
};
