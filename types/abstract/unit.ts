/**
 * Physical Units System
 * High-level type system for modeling physical quantities and units.
 * 
 * Defines basic units for each physical quantity and uses prefixes for derived units
 * without defining all possible combinations.
 * 
 * The unit system provides dimension vectors for physical quantities, conversion factors
 * between units, and checks for unit compatibility.
 * 
 * @module abstract/unit
 */

import type { Brand } from 'devtypes/types/util';
import type { MetricSystem, SIDimension } from '../enums/abstract';


/** SI unit prefixes (metric system). */
export type SIPrefix = keyof typeof SIPrefix;
export const SIPrefix = {
    Y: 1e24, Z: 1e21, E: 1e18, P: 1e15, T: 1e12, G: 1e9, M: 1e6, k: 1e3,
    h: 1e2, da: 1e1, d: 1e-1, c: 1e-2, m: 1e-3, µ: 1e-6, n: 1e-9, p: 1e-12,
    f: 1e-15, a: 1e-18, z: 1e-21, y: 1e-24
} as const;

/** List of valid quantities and their base unit symbols. */
export type ValidUnits = typeof ValidUnits;
export const ValidUnits = {

    // SI base dimensions
    time: { base: [ 's', 'min', 'h', 'd', 'a' ] as const, prefixable: [ 's' ] as const },
    length: { base: [ 'm', 'in', 'ft', 'yd', 'mi', 'Å', 'Ø' ] as const, prefixable: [ 'm' ] as const },
    mass: { base: [ 'g', 't', 'oz', 'lb', 'u', 'Da' ] as const, prefixable: [ 'g' ] as const },
    electricCurrent: { base: [ 'A' ] as const, prefixable: [ 'A' ] as const },
    temperature: { base: [ 'K', '°C', '°F' ] as const, prefixable: [] as const },
    amountOfSubstance: { base: [ 'mol' ] as const, prefixable: [ 'mol' ] as const },
    luminousIntensity: { base: [ 'cd' ] as const, prefixable: [] as const },

    // Mechanical quantities
    velocity: { base: [ 'm/s', 'km/h', 'mph', 'ft/s', 'knot', 'Mach' ] as const, prefixable: [ 'm/s' ] as const },
    acceleration: { base: [ 'm/s[2]', 'g', 'Gal' ] as const, prefixable: [ 'm/s[2]' ] as const },
    force: { base: [ 'N', 'dyn', 'kgf', 'lbf' ] as const, prefixable: [ 'N' ] as const },
    surfaceTension: { base: [ 'N/m', 'dyn/cm' ] as const, prefixable: [ 'N/m' ] as const },
    pressure: { base: [ 'Pa', 'bar', 'atm', 'psi', 'torr', 'mmHg', 'inHg', 'cmH{2}O' ] as const, prefixable: [ 'Pa', 'bar' ] as const },
    energy: { base: [ 'J', 'eV', 'kcal', 'Wh', 'Btu', 'erg' ] as const, prefixable: [ 'J', 'eV', 'Wh' ] as const },
    power: { base: [ 'W', 'hp', 'erg/s', 'kcal/s' ] as const, prefixable: [ 'W' ] as const },
    density: { base: [ 'kg/m[3]', 'g/cm[3]', 'g/mL', 'lb/ft[3]' ] as const, prefixable: [] as const },
    absorptionCoefficient: { base: [ 'm[-1]', 'L/(mol·cm)' ] as const, prefixable: [ 'm[-1]' ] as const },
    attenuationCoefficient: { base: [ 'm[-1]', 'dB/cm', 'dB/km' ] as const, prefixable: [ 'm[-1]' ] as const },
    compressibility: { base: [ 'Pa[-1]', 'bar[-1]' ] as const, prefixable: [ 'Pa[-1]', 'bar[-1]' ] as const },

    // Thermal quantities
    enthalpy: { base: [ 'J/mol', 'J/g', 'kcal/mol', 'eV', 'Btu/lb' ] as const, prefixable: [ 'eV' ] as const },
    entropy: { base: [ 'J/(mol·K)', 'J/(g·K)', 'cal/(mol·K)', 'Btu/(lb·°F)' ] as const, prefixable: [] as const },
    heatCapacity: { base: [ 'J/(mol·K)', 'J/(g·K)', 'cal/(mol·K)', 'Btu/(lb·°F)' ] as const, prefixable: [] as const },
    specificHeatCapacity: { base: [ 'J/(g·K)', 'J/(kg·K)', 'cal/(g·K)', 'Btu/(lb·°F)' ] as const, prefixable: [] as const },
    tempCoefficient: { base: [ 'K[-1]', 'ppm/K' ] as const, prefixable: [] as const },
    thermalConductivity: { base: [ 'W/(m·K)', 'W/(cm·K)', 'cal/(s·cm·K)' ] as const, prefixable: [] as const },
    thermalExpansion: { base: [ 'K[-1]', 'ppm/K' ] as const, prefixable: [] as const },
    thermalDiffusivity: { base: [ 'm[2]/s', 'cm[2]/s' ] as const, prefixable: [] as const },

    // Electrical quantities
    electricCharge: { base: [ 'C', 'e', 'Ah' ] as const, prefixable: [ 'C' ] as const },
    electricPotential: { base: [ 'V' ] as const, prefixable: [ 'V' ] as const },
    electricResistance: { base: [ 'Ω' ] as const, prefixable: [ 'Ω' ] as const },
    electricConductance: { base: [ 'S' ] as const, prefixable: [ 'S' ] as const },
    electricConductivity: { base: [ 'S/m', 'S/cm' ] as const, prefixable: [ 'S/m' ] as const },
    electricResistivity: { base: [ 'Ω·m', 'Ω·cm' ] as const, prefixable: [ 'Ω·m' ] as const },

    // Magnetic quantities
    magneticFlux: { base: [ 'Wb', 'V·s' ] as const, prefixable: [ 'Wb' ] as const },
    magneticFluxDensity: { base: [ 'T', 'G' ] as const, prefixable: [ 'T', 'G' ] as const },
    magneticSusceptibility: { base: [ '*', 'cm[3]/mol', 'm[3]/mol' ] as const, prefixable: [] as const },
    magneticMoment: { base: [ 'J/T', 'A·m[2]', 'µ{B}', 'µ{N}' ] as const, prefixable: [ 'J/T' ] as const },
    magneticFieldStrength: { base: [ 'A/m', 'Oe' ] as const, prefixable: [ 'A/m' ] as const },
    magneticPermeability: { base: [ 'H/m' ] as const, prefixable: [ 'H/m' ] as const },
    molarMagneticSusceptibility: { base: [ 'cm[3]/mol', 'm[3]/mol' ] as const, prefixable: [] as const },
    massMagneticSusceptibility: { base: [ 'cm[3]/g', 'm[3]/kg' ] as const, prefixable: [] as const },

    // Optical quantities
    luminousFlux: { base: [ 'lm' ] as const, prefixable: [] as const },
    illuminance: { base: [ 'lx', 'fc' ] as const, prefixable: [] as const },

    // Acoustic quantities
    soundSpeed: { base: [ 'm/s', 'km/h', 'ft/s' ] as const, prefixable: [ 'm/s' ] as const },
    acousticImpedance: { base: [ 'Pa·s/m', 'kg/(m[2]·s)', 'Rayl' ] as const, prefixable: [] as const },

    // Chemical quantities
    molarMass: { base: [ 'g/mol' ] as const, prefixable: [ 'g/mol' ] as const },
    molarVolume: { base: [ 'L/mol', 'm[3]/mol' ] as const, prefixable: [ 'L/mol', 'm[3]/mol' ] as const },
    concentration: { base: [ 'mol/L', 'mol/m[3]', 'g/L', 'ppm', 'ppb' ] as const, prefixable: [ 'mol/L', 'mol/m[3]', 'g/L' ] as const },
    molarity: { base: [ 'M', 'mol/L' ] as const, prefixable: [ 'mol/L' ] as const },
    molality: { base: [ 'm', 'mol/kg' ] as const, prefixable: [ 'mol/kg' ] as const },
    moleFraction: { base: [ '%', '‰', '*', 'ppm', 'ppb', 'ppt' ] as const, prefixable: [] as const },
    molarHeatCapacity: { base: [ 'J/(mol·K)', 'cal/(mol·K)' ] as const, prefixable: [] as const },

    // Viscosity quantities
    dynamicViscosity: { base: [ 'Pa·s', 'cP', 'poise', 'mPa·s' ] as const, prefixable: [] as const },
    kinematicViscosity: { base: [ 'm[2]/s', 'cSt', 'stoke' ] as const, prefixable: [] as const },

    // Radiation quantities
    activity: { base: [ 'Bq', 'Ci' ] as const, prefixable: [ 'Bq', 'Ci' ] as const },
    absorbedDose: { base: [ 'Gy', 'rad' ] as const, prefixable: [ 'Gy' ] as const },

    // Specialized quantities
    frequency: { base: [ 'Hz', 'rpm', 'rps' ] as const, prefixable: [ 'Hz' ] as const },
    angle: { base: [ '°', 'rad', 'ʹ', 'ʺ', 'grad', 'turn' ] as const, prefixable: [] as const },
    massFraction: { base: [ '%', '‰', '*', 'ppm', 'ppb', 'ppt' ] as const, prefixable: [] as const },
    area: { base: [ 'm[2]', 'b' ] as const, prefixable: [ 'm[2]', 'b' ] as const },
    quantity: { base: [ '*', '%', '‰', 'mol' ] as const, prefixable: [] as const },
    currency: { base: [ 'USD' ] as const, prefixable: [] as const }

} as const;

/** List of valid physical quantities. */
export type PhysicalQuantity = keyof typeof ValidUnits;

/** Base and prefixable unit types for physical quantities. */
export type BaseUnitSymbols< Q extends PhysicalQuantity > = ValidUnits[ Q ][ 'base' ][ number ];
export type PrefixableUnitSymbols< Q extends PhysicalQuantity > = ValidUnits[ Q ][ 'prefixable' ][ number ];

/** Allowed unit symbols with SI prefixes. */
export type PrefixedSymbols< Q extends PhysicalQuantity > =
    | BaseUnitSymbols< Q >
    | `${ SIPrefix }${ PrefixableUnitSymbols< Q > }`;

/**
 * Vector representing the powers of each base dimension in the order:
 * [time, length, mass, electricCurrent, temperature, amountOfSubstance, luminousIntensity]
 */
export type DimensionVector = [ number, number, number, number, number, number, number ];

/**
 * Branded type description of a single physical unit.
 * 
 * @template Q - Physical quantity type
 * @template U - Unit symbol type
 * @param symbol - Unit symbol (e.g., "m" for meters; branding)
 * @param name - Optional full name of the unit (e.g., "meter")
 * @param isBase - Whether this unit is a base unit
 * @param prefixable - Whether unit prefixes are allowed
 * @param system - Metric system the unit belongs to
 * @param conversion - Conversion factor to the base unit
 *  - factor - Multiplication factor to convert to the base unit
 *  - offset - Optional offset for units like Celsius to Kelvin
 */
export type Unit< Q extends PhysicalQuantity, U extends BaseUnitSymbols< Q > > = Brand< {
    name?: string;
    isBase?: boolean;
    prefixable?: U extends PrefixableUnitSymbols< Q > ? true : false;
    system?: MetricSystem;
    conversion?: {
        factor: number;
        offset?: number;
    };
}, U, 'symbol', true >;

/**
 * Type description of a physical quantity and its units.
 * 
 * @template Q - Physical quantity type
 * @param dimension - Optional dimension information
 *  - symbol - Dimension symbol (e.g., "L" for length)
 *  - name - Full name of the dimension (e.g., "Length")
 *  - si - Whether this dimension is an SI base dimension
 *  - vector - Dimension vector representing the powers of base dimensions
 * @param baseUnit - Symbol of the base unit for this quantity
 * @param units - Record of units associated with this quantity
 */
export type Quantity< Q extends PhysicalQuantity > = {
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

/** Collection of physical quantities and their units. */
export type UnitCollection = {
    [ Q in PhysicalQuantity ]?: Quantity< Q >;
};

/**
 * Branded unit reference used in other parts of the data model.
 * 
 * @template Q - Physical quantities used as conditions
 */
export type UnitId< Q extends PhysicalQuantity = PhysicalQuantity > = Brand<
    [ Q, PrefixedSymbols< Q > ],
    'unitId'
>;
