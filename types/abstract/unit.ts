/**
 * Physical Units System
 * Type system for physical units.
 */

import { Brand } from 'devtypes/types/base';
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
 * Type description of a single physical unit.
 * 
 * @template Q - physical quantity type
 * @param symbol - unit symbol (e.g., "m" for meters)
 * @param name - optional full name of the unit (e.g., "meter")
 * @param isBase - whether this unit is a base unit
 * @param conversion - conversion factor to the base unit
 *  - factor - multiplication factor to convert to the base unit
 *  - offset - optional offset for units like Celsius to Kelvin
 */
type Unit< Q extends PhysicalQuantity, T extends string = string > = Brand< {
    symbol: string;
    name?: string;
    isBase?: boolean;
    conversion?: {
        factor: number;
        offset?: number;
    };
}, `${Q}::${T}` >;

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
 *  - system - optional metric system the dimension belongs to
 * @param baseUnit - symbol of the base unit for this quantity
 * @param units - record of units associated with this quantity
 */
type Quantity< Q extends PhysicalQuantity, T extends string = string > = {
    dimension?: {
        symbol: string;
        name: string;
        si: boolean;
        vector: DimensionVector;
        system?: MetricSystem;
    };
    baseUnit: T;
    units: Record< T, Unit< Q > >;
};

/** Collection of physical quantities and their units */
export type UnitCollection = {
    [ Q in PhysicalQuantity ]?: Quantity< Q >;
};

/** Unit reference used in other parts of the data model */
export type UnitId< Q extends PhysicalQuantity = PhysicalQuantity > = [ Q, string ];

/** Strict unit reference ensuring the unit exists in the provided collection */
export type UnitIdStrict< Q extends PhysicalQuantity = PhysicalQuantity, C extends UnitCollection = UnitCollection > = {
    [ Q in keyof C & PhysicalQuantity ]: C[ Q ] extends Quantity< Q, infer U > ? [ Q, U ] : never;
}[ Q extends keyof C & PhysicalQuantity ? Q : never ];
