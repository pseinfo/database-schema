/**
 * Condition Type
 * Defines a mapping of physical quantities as conditions for properties.
 */

import { Primitive } from 'devtypes/types/primitives';
import { PhysicalQuantity } from './unit';
import { Value } from './value';

/**
 * Conditions
 * A mapping of physical quantities as conditions for properties.
 * 
 * @template Q - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type Conditions< Q extends PhysicalQuantity = PhysicalQuantity, T extends Primitive = Primitive > = {
    [ K in Q ]?: Value< K, T >
};
