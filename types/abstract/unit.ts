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
    time: [ 's', 'min', 'h', 'd', 'a', 'y' ] as const,
    length: [ 'm', 'in', 'ft', 'yd', 'mi', 'Å', 'Ø' ] as const,
    mass: [ 'g', 't', 'oz', 'lb', 'u', 'Da' ] as const,
    electricCurrent: [ 'A' ] as const,
    temperature: [ 'K', '°C', '°F' ] as const,
    amountOfSubstance: [ 'mol' ] as const,
    luminousIntensity: [ 'cd' ] as const,

    // Mechanical quantities
    velocity: [ 'm/s', 'km/h', 'mph', 'ft/s', 'knot', 'Mach' ] as const,
    acceleration: [ 'm/s[2]', 'g (g-force)', 'Gal' ] as const,
    force: [ 'N', 'dyn', 'kgf', 'lbf' ] as const,
    surfaceTension: [ 'N/m', 'dyn/cm', 'mN/m' ] as const,
    pressure: [ 'Pa', 'bar', 'atm', 'psi', 'torr', 'mmHg', 'inHg', 'cmH{2}O' ] as const,
    energy: [ 'J', 'eV', 'kcal', 'Wh', 'Btu', 'erg' ] as const,
    power: [ 'W', 'hp', 'erg/s', 'kcal/s' ] as const,
    density: [ 'kg/m[3]', 'g/cm[3]', 'g/mL', 'lb/ft[3]' ] as const,
    absorptionCoefficient: [ 'm[-1]', 'cm[-1]', 'L/(mol·cm)' ] as const,
    attenuationCoefficient: [ 'm[-1]', 'cm[-1]', 'dB/cm', 'dB/km' ] as const,
    compressibility: [ 'Pa[-1]', 'bar[-1]' ] as const,

    // Thermal quantities
    enthalpy: [ 'J/mol', 'J/g', 'kcal/mol', 'eV', 'Btu/lb' ] as const,
    entropy: [ 'J/(mol·K)', 'J/(g·K)', 'cal/(mol·K)', 'Btu/(lb·°F)' ] as const,
    heatCapacity: [ 'J/(mol·K)', 'J/(g·K)', 'cal/(mol·K)', 'Btu/(lb·°F)' ] as const,
    specificHeatCapacity: [ 'J/(g·K)', 'J/(kg·K)', 'cal/(g·K)', 'Btu/(lb·°F)' ] as const,
    tempCoefficient: [ 'K[-1]', 'ppm/K' ] as const,
    thermalConductivity: [ 'W/(m·K)', 'W/(cm·K)', 'cal/(s·cm·K)' ] as const,
    thermalExpansion: [ 'K[-1]', 'ppm/K' ] as const,
    thermalDiffusivity: [ 'm[2]/s', 'cm[2]/s' ] as const,

    // Electrical quantities
    electricCharge: [ 'C', 'e', 'Ah' ] as const,
    electricPotential: [ 'V' ] as const,
    electricResistance: [ 'Ω' ] as const,
    electricConductance: [ 'S' ] as const,
    electricConductivity: [ 'S/m', 'S/cm' ] as const,
    electricResistivity: [ 'Ω·m', 'Ω·cm' ] as const,

    // Magnetic quantities
    magneticFlux: [ 'Wb', 'V·s' ] as const,
    magneticFluxDensity: [ 'T', 'G' ] as const,
    magneticSusceptibility: [ 'dimensionless', 'cm[3]/mol', 'm[3]/mol' ] as const,
    magneticMoment: [ 'J/T', 'A·m[2]', 'µ{B}', 'µ{N}' ] as const,
    magneticFieldStrength: [ 'A/m', 'Oe' ] as const,
    magneticPermeability: [ 'H/m' ] as const,
    molarMagneticSusceptibility: [ 'cm[3]/mol', 'm[3]/mol' ] as const,
    massMagneticSusceptibility: [ 'cm[3]/g', 'm[3]/kg' ] as const,

    // Optical quantities
    luminousFlux: [ 'lm' ] as const,
    illuminance: [ 'lx', 'fc' ] as const,

    // Acoustic quantities
    soundSpeed: [ 'm/s', 'km/h', 'ft/s' ] as const,
    acousticImpedance: [ 'Pa·s/m', 'kg/(m[2]·s)', 'Rayl' ] as const,

    // Chemical quantities
    molarMass: [ 'g/mol', 'kg/mol' ] as const,
    molarVolume: [ 'L/mol', 'cm[3]/mol', 'm[3]/mol' ] as const,
    concentration: [ 'mol/L', 'mol/m[3]', 'g/L', 'ppm', 'ppb' ] as const,
    molarity: [ 'M', 'mol/L' ] as const,
    molality: [ 'm', 'mol/kg' ] as const,
    moleFraction: [ '%', 'dimensionless', 'ppm', 'ppb', 'ppt' ] as const,
    molarHeatCapacity: [ 'J/(mol·K)', 'cal/(mol·K)' ] as const,

    // Viscosity quantities
    dynamicViscosity: [ 'Pa·s', 'cP', 'poise', 'mPa·s' ] as const,
    kinematicViscosity: [ 'm[2]/s', 'cSt', 'stoke' ] as const,

    // Radiation quantities
    activity: [ 'Bq', 'Ci' ] as const,
    absorbedDose: [ 'Gy', 'rad' ] as const,

    // Specialized quantities
    frequency: [ 'Hz', 'rpm', 'rps' ] as const,
    angle: [ '°', 'rad', 'ʹ', 'ʺ', 'grad', 'turn' ] as const,
    massFraction: [ '%', 'dimensionless', 'ppm', 'ppb', 'ppt' ] as const,
    quantity: [ 'dimensionless', '%', 'mol' ] as const

} as const;

export type ValidUnits = typeof ValidUnits;

/** List of valid physical quantities */
export type PhysicalQuantity = keyof typeof ValidUnits;

/* Base unit types for physical quantities */
type BaseUnitSymbols< Q extends PhysicalQuantity > = ValidUnits[ Q ][ number ];

/* Unit symbols with optional SI prefixes */
type PrefixedSymbols< Q extends PhysicalQuantity > =
    | BaseUnitSymbols< Q >
    | `${ SIPrefix }${ BaseUnitSymbols< Q > }`;

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
type Unit< Q extends PhysicalQuantity, U extends BaseUnitSymbols< Q > > = Brand< {
    symbol: U;
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
