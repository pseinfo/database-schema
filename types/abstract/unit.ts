/**
 * Physical Units System
 * Type system for physical units
 */

import { LiteralUnion } from 'devtypes/types/primitives';

/** SI base dimensions */
export const SIDimension = [ 'time', 'length', 'mass', 'electricCurrent', 'temperature', 'amountOfSubstance', 'luminousIntensity' ] as const;
export type SIDimension = ( typeof SIDimension )[ number ];

/** Physical quantities als literal union including SI base dimensions */
export type PhysicalQuantity = LiteralUnion< SIDimension >;

/**
 * Dimension Vector
 * Represents the powers of each base dimension in the order:
 * [time, length, mass, electricCurrent, temperature, amountOfSubstance, luminousIntensity]
 */
type DimensionVector = [ number, number, number, number, number, number, number ];

/**
 * Unit
 * Type describtion of a single physical unit
 * @param symbol - unit symbol (e.g., "m" for meters)
 * @param name - optional full name of the unit (e.g., "meter")
 * @param isBase - whether this unit is a base unit
 * @param conversion - conversion factor to the base unit
 *  - factor - multiplication factor to convert to the base unit
 *  - offset - optional offset for units like Celsius to Kelvin
 */
type Unit = {
    symbol: string;
    name?: string;
    isBase?: boolean;
    conversion?: {
        factor: number;
        offset?: number;
    };
}
