import type { ConditionType, StandardCondition } from '../../enum/system/condition';
import type { PhysicalQuantity } from '../registry/unit';
import type { NumberValue } from './value';

type Discrete< Q extends PhysicalQuantity = PhysicalQuantity > = {
  [ K in Q ]?: NumberValue< K >;
};

export type Condition< Q extends PhysicalQuantity = PhysicalQuantity > =
  | { type: ConditionType.STANDARD, base: StandardCondition, properties?: Discrete< Q > }
  | { type: ConditionType.DISCRETE, properties: Discrete< Q > };
