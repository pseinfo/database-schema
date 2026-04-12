/**
 * Condition Types
 * Defines a mapping of physical quantities as conditions for properties.
 * 
 * @module abstract/condition
 */

import type { Primitive } from 'devtypes/types/primitive';
import type { PhysicalQuantity } from '@/abstract/unit';
import type { Value } from '@/abstract/value';
import type { StandardCondition } from '@/enums/abstract';


/**
 * Type description of a mapping of physical quantities to values as conditions.
 * Either standard conditions or custom set of properties.
 * 
 * @template Q - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type Conditions<
    Q extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = StandardCondition | {
    [ K in Q ]?: Value< K, T >;
};
