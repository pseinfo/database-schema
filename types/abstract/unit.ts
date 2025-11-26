/**
 * Physical Units System
 * Type system for physical units
 */

import { LiteralUnion } from 'devtypes/types/primitives';

/** Metric systems */
export const MetricSystem = [ 'metric', 'imperial', 'us', 'custom', 'unknown' ] as const;
export type MetricSystem = ( typeof MetricSystem )[ number ];

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
 * 
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

/**
 * Quantity
 * Type describtion of a physical quantity and its units
 * 
 * @param dimension - optional dimension information
 *  - symbol - dimension symbol (e.g., "L" for length)
 *  - name - full name of the dimension (e.g., "Length")
 *  - si - whether this dimension is an SI base dimension
 *  - vector - dimension vector representing the powers of base dimensions
 *  - system - optional metric system the dimension belongs to
 * @param baseUnit - symbol of the base unit for this quantity
 * @param units - record of units associated with this quantity
 */
type Quantity< Q extends PhysicalQuantity > = {
    dimension?: {
        symbol: string;
        name: string;
        si: Q extends SIDimension ? true : false;
        vector: DimensionVector;
        system?: MetricSystem;
    };
    baseUnit: string;
    units: Record< string, Unit >;
}
