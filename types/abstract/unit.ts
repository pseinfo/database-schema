/**
 * Physical Units System
 * Type system for physical units.
 */

import { Brand } from 'devtypes/types/base';

/** Metric systems */
export const MetricSystem = [ 'metric', 'imperial', 'us', 'custom', 'unknown' ] as const;
export type MetricSystem = ( typeof MetricSystem )[ number ];

/** SI base dimensions */
export const SIDimension = [ 'time', 'length', 'mass', 'electricCurrent', 'temperature', 'amountOfSubstance', 'luminousIntensity' ] as const;
export type SIDimension = ( typeof SIDimension )[ number ];

/** List of valid quantities and their units */
export const ValidUnits = {
    time: [ 's', 'm', 'h', 'd', 'a' ],
    length: [ 'm', 'in', 'ft', 'yd', 'mi' ],
    mass: [ 'g', 't', 'oz', 'lb' ],
    electricCurrent: [ 'A' ],
    temperature: [ 'K', 'C', 'F' ],
    amountOfSubstance: [ 'mol' ],
    luminousIntensity: [ 'cd' ]
} as const;

export type ValidUnits = typeof ValidUnits;

/** List of valid physical quantities */
export type PhysicalQuantity = keyof ValidUnits;

/**
 * Dimension Vector
 * Represents the powers of each base dimension in the order:
 * [time, length, mass, electricCurrent, temperature, amountOfSubstance, luminousIntensity]
 */
type DimensionVector = [ number, number, number, number, number, number, number ];

/**
 * Unit
 * Type description of a single physical unit.
 * 
 * @template Q - physical quantity type
 * @param symbol - unit symbol (e.g., "m" for meters)
 * @param name - optional full name of the unit (e.g., "meter")
 * @param isBase - whether this unit is a base unit
 * @param allowPrefix - whether unit prefixes are allowed
 * @param system - metric system the unit belongs to
 * @param conversion - conversion factor to the base unit
 *  - factor - multiplication factor to convert to the base unit
 *  - offset - optional offset for units like Celsius to Kelvin
 */
type Unit< Q extends PhysicalQuantity > = Brand< {
    symbol: string;
    name?: string;
    isBase?: boolean;
    allowPrefix?: boolean;
    system?: MetricSystem;
    conversion?: {
        factor: number;
        offset?: number;
    };
}, `${ Q }::${ ValidUnits[ Q ][ number ] }` >;
