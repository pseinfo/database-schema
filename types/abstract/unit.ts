/**
 * @file unit.ts
 * @description Defines the scientific unit registry and physical dimensions.
 * This file serves as the core module for physical quantities, their base units,
 * prefixing rules, and dimensional analysis within the database.
 */

import type { Brand } from 'devtypes/types/util';
import type { MetricSystem } from '../../enum/util';
import type { Factory } from './util';

/**
 * Fundamental dimensions of the International System of Units (SI).
 * These dimensions form the basis for all derived physical quantities and their units.
 */
export type SIDimension = ( typeof SIDimension )[ number ];
export const SIDimension = [
    /** Physical dimension of temporal duration. */
    'time',
    /** Physical dimension of distance or spatial extent. */
    'length',
    /** Physical dimension of inertia and gravitational attraction. */
    'mass',
    /** Rate of flow of electric charge. */
    'electricCurrent',
    /** Degree of thermal energy in a system. */
    'temperature',
    /** Number of elementary entities in a sample. */
    'amountOfSubstance',
    /** Power emitted by a light source in a particular direction. */
    'luminousIntensity'
] as const;

/**
 * Valid SI prefixes and their corresponding numerical factors.
 */
export type SIPrefix = keyof typeof SIPrefix;
export const SIPrefix = {
  /** Yotta (10^24) */ Y: 1e24,  /** Zetta (10^21) */ Z: 1e21,  /** Exa (10^18)   */ E: 1e18,
  /** Peta (10^15)  */ P: 1e15,  /** Tera (10^12)  */ T: 1e12,  /** Giga (10^9)   */ G: 1e9,
  /** Mega (10^6)   */ M: 1e6,   /** Kilo (10^3)   */ k: 1e3,   /** Hecto (10^2)  */ h: 1e2,
  /** Deca (10^1)   */ da: 1e1,  /** Deci (10^-1)  */ d: 1e-1,  /** Centi (10^-2) */ c: 1e-2,
  /** Milli (10^-3) */ m: 1e-3,  /** Micro (10^-6) */ µ: 1e-6,  /** Nano (10^-9)  */ n: 1e-9,
  /** Pico (10^-12) */ p: 1e-12, /** Femto (10^-15)*/ f: 1e-15, /** Atto (10^-18) */ a: 1e-18,
  /** Zepto (10^-21)*/ z: 1e-21, /** Yocto (10^-24)*/ y: 1e-24
} as const;

/**
 * The main registry of all supported physical quantities and their valid unit symbols.
 */
export type ValidUnits = typeof ValidUnits;

/**
 * Union of all supported physical quantity identifiers.
 */
export type PhysicalQuantity = keyof typeof ValidUnits;

/**
 * Detailed specification of units for each physical quantity.
 */
export const ValidUnits = {
  /** Base SI Dimension: Time */
  time: { base: [ 's', 'min', 'h', 'd', 'a', 't{P}' ], prefixable: [ 's' ] },
  /** Base SI Dimension: Length */
  length: { base: [ 'm', 'in', 'ft', 'yd', 'mi', 'Å', 'Ø', 'l{P}' ], prefixable: [ 'm' ] },
  /** Base SI Dimension: Mass */
  mass: { base: [ 'g', 't', 'oz', 'lb', 'u', 'Da', 'm{P}' ], prefixable: [ 'g' ] },
  /** Base SI Dimension: Electric Current */
  electricCurrent: { base: [ 'A' ], prefixable: [ 'A' ] },
  /** Base SI Dimension: Thermodynamic Temperature */
  temperature: { base: [ 'K', '°C', '°F', 'T{P}' ], prefixable: [] },
  /** Base SI Dimension: Amount of Substance */
  amountOfSubstance: { base: [ 'mol' ], prefixable: [ 'mol' ] },
  /** Base SI Dimension: Luminous Intensity */
  luminousIntensity: { base: [ 'cd' ], prefixable: [] },

  /** Derived Quantity: Velocity */
  velocity: { base: [ 'm/s', 'km/h', 'mph', 'ft/s', 'knot', 'Mach' ], prefixable: [ 'm/s' ] },
  /** Derived Quantity: Acceleration */
  acceleration: { base: [ 'm/s[2]', 'g', 'Gal' ], prefixable: [ 'm/s[2]' ] },
  /** Derived Quantity: Force */
  force: { base: [ 'N', 'dyn', 'kgf', 'lbf' ], prefixable: [ 'N' ] },
  /** Derived Quantity: Surface Tension */
  surfaceTension: { base: [ 'N/m', 'dyn/cm' ], prefixable: [ 'N/m' ] },
  /** Derived Quantity: Pressure */
  pressure: { base: [ 'Pa', 'bar', 'atm', 'psi', 'torr', 'mmHg', 'inHg', 'cmH{2}O' ], prefixable: [ 'Pa', 'bar' ] },
  /** Derived Quantity: Energy */
  energy: { base: [ 'J', 'eV', 'kcal', 'Wh', 'Btu', 'erg' ], prefixable: [ 'J', 'eV', 'Wh' ] },
  /** Derived Quantity: Power */
  power: { base: [ 'W', 'hp', 'erg/s', 'kcal/s' ], prefixable: [ 'W' ] },
  /** Derived Quantity: Density */
  density: { base: [ 'kg/m[3]', 'g/cm[3]', 'g/mL', 'lb/ft[3]' ], prefixable: [] },
  /** Derived Quantity: Absorption Coefficient (Optical) */
  absorptionCoefficient: { base: [ 'm[-1]', 'L/(mol·cm)' ], prefixable: [ 'm[-1]' ] },
  /** Derived Quantity: Attenuation Coefficient (Signal) */
  attenuationCoefficient: { base: [ 'm[-1]', 'dB/cm', 'dB/km' ], prefixable: [ 'm[-1]' ] },
  /** Derived Quantity: Material Compressibility */
  compressibility: { base: [ 'Pa[-1]', 'bar[-1]' ], prefixable: [ 'Pa[-1]', 'bar[-1]' ] },

  /** Thermodynamics: Enthalpy (Molar/Mass) */
  enthalpy: { base: [ 'J/mol', 'J/g', 'kcal/mol', 'eV', 'Btu/lb' ], prefixable: [ 'eV' ] },
  /** Thermodynamics: Entropy */
  entropy: { base: [ 'J/(mol·K)', 'J/(g·K)', 'cal/(mol·K)', 'Btu/(lb·°F)' ], prefixable: [] },
  /** Thermodynamics: Total Heat Capacity */
  heatCapacity: { base: [ 'J/(mol·K)', 'J/(g·K)', 'cal/(mol·K)', 'Btu/(lb·°F)' ], prefixable: [] },
  /** Thermodynamics: Specific Heat Capacity */
  specificHeatCapacity: { base: [ 'J/(g·K)', 'J/(kg·K)', 'cal/(g·K)', 'Btu/(lb·°F)' ], prefixable: [] },
  /** Thermodynamics: Temperature Coefficient */
  tempCoefficient: { base: [ 'K[-1]', 'ppm/K' ], prefixable: [] },
  /** Thermodynamics: Thermal Conductivity */
  thermalConductivity: { base: [ 'W/(m·K)', 'W/(cm·K)', 'cal/(s·cm·K)' ], prefixable: [] },
  /** Thermodynamics: Thermal Expansion Coefficient */
  thermalExpansion: { base: [ 'K[-1]', 'ppm/K' ], prefixable: [] },
  /** Thermodynamics: Thermal Diffusivity */
  thermalDiffusivity: { base: [ 'm[2]/s', 'cm[2]/s' ], prefixable: [] },

  /** Electromagnetism: Electric Charge */
  electricCharge: { base: [ 'C', 'e', 'Ah' ], prefixable: [ 'C' ] },
  /** Electromagnetism: Electric Potential / Voltage */
  electricPotential: { base: [ 'V' ], prefixable: [ 'V' ] },
  /** Electromagnetism: Electric Resistance */
  electricResistance: { base: [ 'Ω' ], prefixable: [ 'Ω' ] },
  /** Electromagnetism: Electric Conductance */
  electricConductance: { base: [ 'S' ], prefixable: [ 'S' ] },
  /** Electromagnetism: Electric Conductivity (Specific) */
  electricConductivity: { base: [ 'S/m', 'S/cm' ], prefixable: [ 'S/m' ] },
  /** Electromagnetism: Electric Resistivity (Specific) */
  electricResistivity: { base: [ 'Ω·m', 'Ω·cm' ], prefixable: [ 'Ω·m' ] },
  /** Electromagnetism: Electric Dipole Moment */
  dipoleMoment: { base: [ 'C·m', 'statC·cm', 'abC·cm' ], prefixable: [ 'C·m' ] },

  /** Magnetism: Magnetic Flux */
  magneticFlux: { base: [ 'Wb', 'V·s' ], prefixable: [ 'Wb' ] },
  /** Magnetism: Magnetic Flux Density / Induction */
  magneticFluxDensity: { base: [ 'T', 'G' ], prefixable: [ 'T', 'G' ] },
  /** Magnetism: Dimensionless or Specific Magnetic Susceptibility */
  magneticSusceptibility: { base: [ '*', 'cm[3]/mol', 'm[3]/mol' ], prefixable: [] },
  /** Magnetism: Magnetic Moment */
  magneticMoment: { base: [ 'J/T', 'A·m[2]', 'µ{B}', 'µ{N}' ], prefixable: [ 'J/T' ] },
  /** Magnetism: Magnetic Field Strength */
  magneticFieldStrength: { base: [ 'A/m', 'Oe' ], prefixable: [ 'A/m' ] },
  /** Magnetism: Magnetic Permeability */
  magneticPermeability: { base: [ 'H/m' ], prefixable: [ 'H/m' ] },
  /** Magnetism: Molar Magnetic Susceptibility */
  molarMagneticSusceptibility: { base: [ 'cm[3]/mol', 'm[3]/mol' ], prefixable: [] },
  /** Magnetism: Mass (Gram) Magnetic Susceptibility */
  massMagneticSusceptibility: { base: [ 'cm[3]/g', 'm[3]/kg' ], prefixable: [] },

  /** Photometry: Luminous Flux */
  luminousFlux: { base: [ 'lm' ], prefixable: [] },
  /** Photometry: Illuminance */
  illuminance: { base: [ 'lx', 'fc' ], prefixable: [] },

  /** Acoustics: Speed of Sound */
  soundSpeed: { base: [ 'm/s', 'km/h', 'ft/s' ], prefixable: [ 'm/s' ] },
  /** Acoustics: Acoustic Impedance */
  acousticImpedance: { base: [ 'Pa·s/m', 'kg/(m[2]·s)', 'Rayl' ], prefixable: [] },

  /** Chemistry: Molar Mass */
  molarMass: { base: [ 'g/mol' ], prefixable: [ 'g/mol' ] },
  /** Chemistry: Molar Volume */
  molarVolume: { base: [ 'L/mol', 'm[3]/mol' ], prefixable: [ 'L/mol', 'm[3]/mol' ] },
  /** Chemistry: Substance Concentration */
  concentration: { base: [ 'mol/L', 'mol/m[3]', 'g/L', 'ppm', 'ppb' ], prefixable: [ 'mol/L', 'mol/m[3]', 'g/L' ] },
  /** Chemistry: Molarity (mol/L) */
  molarity: { base: [ 'M', 'mol/L' ], prefixable: [ 'mol/L' ] },
  /** Chemistry: Molality (mol/kg) */
  molality: { base: [ 'm', 'mol/kg' ], prefixable: [ 'mol/kg' ] },
  /** Chemistry: Dimensionless Mole Fraction */
  moleFraction: { base: [ '%', '‰', '*', 'ppm', 'ppb', 'ppt' ], prefixable: [] },
  /** Chemistry: Molar Heat Capacity */
  molarHeatCapacity: { base: [ 'J/(mol·K)', 'cal/(mol·K)' ], prefixable: [] },

  /** Fluid Dynamics: Dynamic Viscosity */
  dynamicViscosity: { base: [ 'Pa·s', 'cP', 'poise', 'mPa·s' ], prefixable: [] },
  /** Fluid Dynamics: Kinematic Viscosity */
  kinematicViscosity: { base: [ 'm[2]/s', 'cSt', 'stoke' ], prefixable: [] },

  /** Nuclear: Radioactive Activity */
  activity: { base: [ 'Bq', 'Ci' ], prefixable: [ 'Bq', 'Ci' ] },
  /** Nuclear: Absorbed Radiation Dose */
  absorbedDose: { base: [ 'Gy', 'rad' ], prefixable: [ 'Gy' ] },

  /** Magnetic Resonance: Gyromagnetic Ratio */
  gyromagneticRatio: { base: [ 'rad/(s·T)' ] , prefixable: [] },

  /** General Physics: Frequency */
  frequency: { base: [ 'Hz', 'rpm', 'rps' ], prefixable: [ 'Hz' ] },
  /** General Physics: Angular Measurement */
  angle: { base: [ '°', 'rad', 'ʹ', 'ʺ', 'grad', 'turn' ], prefixable: [] },
  /** General Physics: Dimensionless Mass Fraction */
  massFraction: { base: [ '%', '‰', '*', 'ppm', 'ppb', 'ppt' ], prefixable: [] },
  /** General Physics: Geometric Area */
  area: { base: [ 'm[2]', 'b' ], prefixable: [ 'm[2]' ] },
  /** General Physics: Dimensionless Quantity */
  quantity: { base: [ '*', '%', '‰', 'mol' ], prefixable: [] },
  /** Economics: Monetary Currency */
  currency: { base: [ 'USD', 'EUR', 'CHF' ], prefixable: [] }
} as const;

/**
 * Extracts base unit symbols for a specific physical quantity.
 * @template Q The physical quantity to extract symbols for.
 */
type BaseUnitSymbols< Q extends PhysicalQuantity > = ValidUnits[ Q ][ 'base' ][ number ];

/**
 * Extracts prefixable unit symbols for a specific physical quantity.
 * @template Q The physical quantity to extract prefixable symbols for.
 */
type PrefixableUnitSymbols< Q extends PhysicalQuantity > = ValidUnits[ Q ][ 'prefixable' ][ number ];

/**
 * Generates all possible symbols (including SI prefixes) for a quantity.
 * @template Q The physical quantity to generate symbols for.
 */
type PrefixedSymbols< Q extends PhysicalQuantity > =
  /** Base unit symbols. */
  | BaseUnitSymbols< Q >
  /** SI prefixed unit symbols. */
  | `${ SIPrefix }${ PrefixableUnitSymbols< Q > }`;

/**
 * Representation of the base SI dimensions:
 * [ length, mass, time, current, temperature, amount, intensity ].
 */
export type DimensionVector = [ number, number, number, number, number, number, number ];

/**
 * Branded structure for a single scientific unit.
 * @template Q The physical quantity this unit belongs to.
 * @template U The specific symbol of this unit.
 */
export type Unit< Q extends PhysicalQuantity, U extends BaseUnitSymbols< Q > > = Brand< {
  /** The full human-readable name of the unit (e.g., "meters per second"). */
  name?: string;
  /** The metric or imperial system this unit originates from. */
  system?: MetricSystem;
  /** Indicates if this is the fundamental base unit for the system. */
  isBase?: boolean;
  /** Whether this unit can be combined with SI prefixes. */
  prefixable?: U extends PrefixableUnitSymbols< Q > ? true : false;
  /** Factors for converting this unit to the system base unit. */
  conversion?: {
    /** The multiplication factor. */
    factor: number;
    /** The additive offset (primarily for temperature scales). */
    offset?: number;
  };
}, U, 'symbol', true >;

/**
 * Defines the properties and available units for a physical quantity.
 * @template Q The physical quantity being defined.
 */
export type Quantity< Q extends PhysicalQuantity > = {
  /** The physical dimension of the quantity. */
  dimension?: {
    /** The shorthand symbol for the dimension (e.g., "L" for length). */
    symbol: string;
    /** The full name of the dimension (e.g., "length"). */
    name: string;
    /** Whether this is a fundamental SI base dimension. */
    si: Q extends SIDimension ? true : false;
    /** The exponents of the base SI dimensions. */
    vector: DimensionVector;
  };
  /** The reference unit symbol for this quantity. */
  baseUnit: BaseUnitSymbols< Q >;
  /** A collection of all valid units for this quantity. */
  units: {
    [ U in BaseUnitSymbols< Q > ]: Unit< Q, U >;
  };
};

/**
 * A branded unique identifier for a unit, coupling the quantity with it's specific symbol.
 * @template Q The physical quantity of the unit.
 */
export type UnitId< Q extends PhysicalQuantity = PhysicalQuantity > = Brand<
  [ Q, PrefixedSymbols< Q > ],
  'unitId'
>;

/**
 * The unit registry collecting all physical quantities and their unit definitions.
 */
export type UnitCollection = {
  [ Q in PhysicalQuantity ]?: Quantity< Q >;
};

export type UnitFactory< Q extends PhysicalQuantity > = Factory<
  'unit',
  { quantity: Q },
  Quantity< Q >
>;
