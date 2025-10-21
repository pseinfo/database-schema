/**
 * Condition Type
 * Defines a mapping of physical quantities as conditions for properties.
 */

import { PhysicalQuantity } from './unit';
import { Primitive } from './utils';
import { Value } from './value';

export type Conditions<
    Q extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = { [ K in Q ]?: Value< K, T > };
