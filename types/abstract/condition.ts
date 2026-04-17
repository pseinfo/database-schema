/**
 * @file condition.ts
 * @description Defines the environmental and experimental conditions under which measurements are performed.
 * This ensures that scientific data (like boiling points or solubility) is correctly attributed
 * to specific temperatures, pressures, or other states.
 */

import type { Primitive } from 'devtypes/types/primitive';
import type { StandardCondition } from '../../enum/util';
import type { PhysicalQuantity } from './unit';
import type { Value } from './value';

/**
 * A map of experimental conditions defining the state of a measurement.
 * It can either be a predefined set (like STP) or a flexible mapping of physical quantities.
 * @template Q The physical quantities defining the conditions (e.g., Temperature, Pressure).
 * @template T The primitive types allowed for specialized conditions.
 */
export type Conditions<
  Q extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> =
  /** Predefined environmental standards (e.g., StandardCondition.STP). */
  | StandardCondition
  /** A dictionary mapping specific physical quantities to their measured values during the experiment. */
  | { [ K in Q ]?: Value< K, T > };
