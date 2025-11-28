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
 * @template U - unit symbol type
 * @param symbol - unit symbol (e.g., "m" for meters)
 * @param name - optional full name of the unit (e.g., "meter")
 * @param isBase - whether this unit is a base unit
 * @param allowPrefix - whether unit prefixes are allowed
 * @param system - metric system the unit belongs to
 * @param conversion - conversion factor to the base unit
 *  - factor - multiplication factor to convert to the base unit
 *  - offset - optional offset for units like Celsius to Kelvin
 */
type Unit< Q extends PhysicalQuantity, U extends ValidUnits[ Q ][ number ] > = Brand< {
    symbol: string;
    name?: string;
    isBase?: boolean;
    allowPrefix?: boolean;
    system?: MetricSystem;
    conversion?: {
        factor: number;
        offset?: number;
    };
}, `${ Q }::${ U }` >;

/**
 * Quantity
 * Type description of a physical quantity and its units.
 * 
 * @template Q - physical quantity type
 * @param dimension - optional dimension information
 *  - symbol - dimension symbol (e.g., "L" for length)
 *  - name - full name of the dimension (e.g., "Length")
 *  - si - whether this dimension is an SI base dimension
 *  - vector - dimension vector representing the powers of base dimensions
 * @param baseUnit - symbol of the base unit for this quantity
 * @param units - record of units associated with this quantity
 */
type Quantity< Q extends PhysicalQuantity > = {
    dimension?: {
        symbol: string;
        name: string;
        si: boolean;
        vector: DimensionVector;
    };
    baseUnit: ValidUnits[ Q ][ number ];
    units: { [ U in ValidUnits[ Q ][ number ] ]: Unit< Q, U > };
};
