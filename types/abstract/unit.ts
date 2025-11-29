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

/** SI unit prefixes (metric system) */
export const SIPrefix = {
    Y: 1e24, Z: 1e21, E: 1e18, P: 1e15, T: 1e12, G: 1e9, M: 1e6, k: 1e3,
    h: 1e2, da: 1e1, d: 1e-1, c: 1e-2, m: 1e-3, µ: 1e-6, n: 1e-9, p: 1e-12,
    f: 1e-15, a: 1e-18, z: 1e-21, y: 1e-24
} as const;

export type SIPrefix = keyof typeof SIPrefix;

/** List of valid quantities and their base unit symbols */
export const ValidUnits = {

    // SI base dimensions
    time: {
        base: [ 's', 'min', 'h', 'd', 'a' ] as const,
        prefixable: [ 's' ] as const
    },
    length: {
        base: [ 'm', 'in', 'ft', 'yd', 'mi', 'Å', 'Ø' ] as const,
        prefixable: [ 'm' ] as const
    },
    mass: {
        base: [ 'g', 't', 'oz', 'lb', 'u', 'Da' ] as const,
        prefixable: [ 'g' ] as const
    },
    electricCurrent: {
        base: [ 'A' ] as const,
        prefixable: [ 'A' ] as const
    },
    temperature: {
        base: [ 'K', '°C', '°F' ] as const,
        prefixable: [] as const
    },
    amountOfSubstance: {
        base: [ 'mol' ] as const,
        prefixable: [ 'mol' ] as const
    },
    luminousIntensity: {
        base: [ 'cd' ] as const,
        prefixable: [] as const
    },

    // Mechanical quantities
    velocity: {
        base: [ 'm/s', 'km/h', 'mph', 'ft/s', 'knot', 'Mach' ] as const,
        prefixable: [ 'm/s' ] as const
    },
    acceleration: {
        base: [ 'm/s[2]', 'g', 'Gal' ] as const,
        prefixable: [ 'm/s[2]' ] as const
    },
    force: {
        base: [ 'N', 'dyn', 'kgf', 'lbf' ] as const,
        prefixable: [ 'N' ] as const
    },
    surfaceTension: {
        base: [ 'N/m', 'dyn/cm', 'mN/m' ] as const,
        prefixable: [] as const
    },
    pressure: {
        base: [ 'Pa', 'bar', 'atm', 'psi', 'torr', 'mmHg', 'inHg', 'cmH{2}O' ] as const,
        prefixable: [ 'Pa', 'bar' ] as const
    },
    energy: {
        base: [ 'J', 'eV', 'kcal', 'Wh', 'Btu', 'erg' ] as const,
        prefixable: [ 'J', 'eV', 'Wh' ] as const
    },
    power: {
        base: [ 'W', 'hp', 'erg/s', 'kcal/s' ] as const,
        prefixable: [ 'W' ] as const
    },
    density: {
        base: [ 'kg/m[3]', 'g/cm[3]', 'g/mL', 'lb/ft[3]' ] as const,
        prefixable: [] as const
    },
    absorptionCoefficient: {
        base: [ 'm[-1]', 'cm[-1]', 'L/(mol·cm)' ] as const,
        prefixable: [] as const
    },
    attenuationCoefficient: {
        base: [ 'm[-1]', 'cm[-1]', 'dB/cm', 'dB/km' ] as const,
        prefixable: [] as const
    },
    compressibility: {
        base: [ 'Pa[-1]', 'bar[-1]' ] as const,
        prefixable: [] as const
    }

} as const;

export type ValidUnits = typeof ValidUnits;

/** List of valid physical quantities */
export type PhysicalQuantity = keyof typeof ValidUnits;

/* Base and prefixable unit types for physical quantities */
type BaseUnitSymbols< Q extends PhysicalQuantity > = ValidUnits[ Q ][ 'base' ][ number ];
type PrefixableUnitSymbols< Q extends PhysicalQuantity > = ValidUnits[ Q ][ 'prefixable' ][ number ];

/** Allowed unit symbols with SI prefixes */
type PrefixedSymbols< Q extends PhysicalQuantity > =
    | BaseUnitSymbols< Q >
    | `${ SIPrefix }${ PrefixableUnitSymbols< Q > }`;

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
 * @param prefixable - whether unit prefixes are allowed
 * @param system - metric system the unit belongs to
 * @param conversion - conversion factor to the base unit
 *  - factor - multiplication factor to convert to the base unit
 *  - offset - optional offset for units like Celsius to Kelvin
 */
type Unit< Q extends PhysicalQuantity, U extends BaseUnitSymbols< Q > > = Brand< {
    symbol: U;
    name?: string;
    isBase?: boolean;
    prefixable?: U extends PrefixableUnitSymbols< Q > ? true : false;
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
        si: Q extends SIDimension ? true : false;
        vector: DimensionVector;
    };
    baseUnit: BaseUnitSymbols< Q >;
    units: {
        [ U in BaseUnitSymbols< Q > ]: Unit< Q, U >;
    };
};

/** Collection of physical quantities and their units */
export type UnitCollection = {
    [ Q in PhysicalQuantity ]?: Quantity< Q >;
};

/** Unit reference used in other parts of the data model */
export type UnitId< Q extends PhysicalQuantity = PhysicalQuantity > = [ Q, PrefixedSymbols< Q > ];
