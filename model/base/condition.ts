/**
 * @file model/base/condition.ts
 * @description Models the environmental parameters (temperature, pressure, etc.) under
 * which a scientific measurement was conducted.
 */

import type { ConditionType, StandardCondition } from '../../enum/system/condition';
import type { PhysicalQuantity } from '../registry/unit';
import type { NumberValue } from './value';

/**
 * A collection of specific physical quantities serving as measurement conditions.
 * 
 * @template Q The physical quantity being defined.
 */
type Discrete< Q extends PhysicalQuantity = PhysicalQuantity > = {
  [ K in Q ]?: NumberValue< K >;
};

/**
 * Classification of measurement environments into predefined standards or custom discrete parameters.
 * 
 * @template Q The physical quantity of the associated property.
 */
export type Condition< Q extends PhysicalQuantity = PhysicalQuantity > = {
  /** Discriminator for standardized reference conditions. */
  type: ConditionType.STANDARD,
  /** The specific international standard applied (e.g., STP, SATP). */
  base: StandardCondition,
  /** Optional overrides or additional parameters for the standard condition. */
  properties?: Discrete< Q >
} | {
  /** Discriminator for specifically defined measurement conditions. */
  type: ConditionType.DISCRETE,
  /** A set of custom physical parameters (e.g., a specific temperature). */
  properties: Discrete< Q >
};
