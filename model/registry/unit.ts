/**
 * @file model/registry/unit.ts
 * @description Core definitions for the measurement system, including physical quantities,
 * SI dimensions, and unit conversions.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { RegistryType } from '../../enum/system/domain';
import type { MeasurementSystem } from '../../enum/system/unit';
import type { Factory } from '../base/factory';
import type { Collection, Distinct } from '../base/modifier';
import type { LangGroup } from '../base/primitive';

/** Import defined physical quantities and their units. */
import ValidUnits from '../../config/units';

/** Key identifier for a measurable physical property. */
export type PhysicalQuantity = keyof typeof ValidUnits;
/** The complete set of unit configurations defined in the database. */
export type ValidUnits = typeof ValidUnits;

/** Representation of dimensionless quantities or counts. */
export type NoUnit = never;

/**
 * Vector of seven exponents representing the International System of Units (SI) base dimensions.
 * Order: [Time, Length, Mass, Electric Current, Temperature, Amount of Substance, Luminous Intensity]
 */
export type DimensionVector = readonly [
  T: number, L: number, M: number, I: number, Θ: number, N: number, J: number
];

/** The set of seven base quantities defined by the International System of Units (SI). */
export type SIDimension = ( typeof SIDimension )[ number ];
export const SIDimension = [
    'time', 'length', 'mass', 'electricCurrent', 'temperature',
    'amountOfSubstance', 'luminousIntensity'
] as const;

/** Standard SI decimal prefixes and their associated scale factors. */
export type SIPrefix = keyof typeof SIPrefix;
export const SIPrefix = {
  Y: 1e24, Z: 1e21, E: 1e18, P: 1e15, T: 1e12, G: 1e9, M: 1e6,
  k: 1e3, h: 1e2, da: 1e1, d: 1e-1, c: 1e-2, m: 1e-3, µ: 1e-6,
  n: 1e-9, p: 1e-12, f: 1e-15, a: 1e-18, z: 1e-21, y: 1e-24
} as const;

/** Low-level structural configuration for a physical quantity registry. */
export type UnitConfig = Readonly< Record< string, {
  /** Typographic symbol of the physical quantity. */
  symbol: string;
  /** Dimensional exponents in the SI system. */
  vector: DimensionVector | null;
  /** Set of supported unit symbols for this quantity. */
  units: string[];
  /** Subset of unit symbols compatible with SI prefixes. */
  prefixableUnits: string[];
  /** Primary unit symbol used for internal calculations. */
  baseUnit: string;
} > >;

/** The set of unit symbols natively supported for a specific quantity. */
type BaseUnitSymbols< Q extends PhysicalQuantity > = ValidUnits[ Q ][ 'units' ][ number ];
/** The subset of units that can be combined with SI prefixes. */
type PrefixableUnitSymbols< Q extends PhysicalQuantity > = ValidUnits[ Q ][ 'prefixableUnits' ][ number ];
/** All possible combinations of units and SI prefixes for a quantity. */
type PrefixedSymbols< Q extends PhysicalQuantity > =
  | BaseUnitSymbols< Q >
  | `${ SIPrefix }${ PrefixableUnitSymbols< Q > }`;

/**
 * Quantitative relationship between a specific unit and the SI base unit.
 * 
 * @template T Indicates if the unit is a base unit.
 */
type ConversionField< T extends boolean > = T extends true ? {} : {
  /** Mathematical factors for converting the unit to the SI base. */
  conversion: {
    /** Multiplier for the unit value. */
    factor: number;
    /** Constant offset for non-proportional conversions (e.g., Celsius to Kelvin). */
    offset?: number;
  };
};

/**
 * Detailed definition of a measurement unit, including its name and conversion factors.
 * 
 * @template Q The physical quantity to which the unit belongs.
 * @template U The unit symbol.
 * @template isBase Indicates if this is the quantity's reference unit.
 */
export type Unit<
  Q extends PhysicalQuantity, U extends BaseUnitSymbols< Q >,
  isBase extends boolean = U extends ValidUnits[ Q ][ 'baseUnit' ] ? true : false
> = Expand< Brand< {
  /** Localized name of the unit. */
  name: LangGroup;
  /** Typographic representation of the unit symbol in LaTeX. */
  latex: string;
  /** Indicates if the unit is the primary reference unit for its quantity. */
  isBase: isBase;
  /** Indicates if the unit can be used with SI prefixes. */
  prefixable: U extends PrefixableUnitSymbols< Q > ? true : false;
  /** The measurement system to which the unit belongs (e.g., Metric, Imperial). */
  system?: MeasurementSystem;
} & ConversionField< isBase >, U, 'symbol', true > >;

/**
 * Comprehensive definition of a physical property, its dimensions, and associated units.
 * 
 * @template Q The physical quantity of the property.
 */
export type Quantity< Q extends PhysicalQuantity > = Expand< Brand< {
  /** The mathematical dimensionality of the physical property. */
  dimension: {
    /** Indicates if the quantity is one of the seven SI base dimensions. */
    si: Q extends SIDimension ? true : false;
    /** Exponents representing the SI base dimensions. */
    vector: ValidUnits[ Q ][ 'vector' ];
  };
  /** Localized name of the physical quantity. */
  name: LangGroup;
  /** Typographic representation of the quantity symbol in LaTeX. */
  latex: string;
  /** The symbol of the primary reference unit for this quantity. */
  baseUnit: ValidUnits[ Q ][ 'baseUnit' ];
  /** The collection of all supported units for this specific quantity. */
  units: {
    [ U in BaseUnitSymbols< Q > ]: Unit< Q, U >;
  };
}, ValidUnits[ Q ][ 'symbol' ], 'symbol', true > >;

/**
 * Unique identifier for a unit, comprising the quantity and the specific prefixed symbol.
 * 
 * @template Q The physical quantity of the unit.
 */
export type UnitId< Q extends PhysicalQuantity = PhysicalQuantity > = Brand<
  [ Q, PrefixedSymbols< Q > ],
  `unitId:${ Q }`
>;

/** System-wide collection of physical quantities indexed by their identifiers. */
export type UnitRegistry = Collection< {
  [ Q in PhysicalQuantity ]?: Distinct< Quantity< Q > >;
} >;

/**
 * Helper type for generating type-safe unit definitions for the database.
 * 
 * @template Q The physical quantity of the unit.
 */
export type UnitFactory< Q extends PhysicalQuantity > = Factory< RegistryType.UNIT, Quantity< Q >, {
  /** The physical quantity identifier. */
  quantity: Q;
} >;
