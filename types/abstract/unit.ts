import type { Brand } from 'devtypes/types/util';
import type { MetricSystem, SIDimension } from '../enum/util';
import { PhysicalQuantity } from '../enum/util';

export type SIPrefix = keyof typeof SIPrefix;
export const SIPrefix = {
  Y: 1e24, Z: 1e21, E: 1e18, P: 1e15, T: 1e12, G: 1e9, M: 1e6, k: 1e3,
  h: 1e2, da: 1e1, d: 1e-1, c: 1e-2, m: 1e-3, µ: 1e-6, n: 1e-9, p: 1e-12,
  f: 1e-15, a: 1e-18, z: 1e-21, y: 1e-24
} as const;

export type ValidUnits = typeof ValidUnits;
export const ValidUnits = {
  [ PhysicalQuantity.TIME ]: { base: [ 's', 'min', 'h', 'd', 'a' ], prefixable: [ 's' ] },
  [ PhysicalQuantity.LENGTH ]: { base: [ 'm', 'in', 'ft', 'yd', 'mi', 'Å', 'Ø' ], prefixable: [ 'm' ] },
  [ PhysicalQuantity.MASS ]: { base: [ 'g', 't', 'oz', 'lb', 'u', 'Da' ], prefixable: [ 'g' ] },
  [ PhysicalQuantity.ELECTRIC_CURRENT ]: { base: [ 'A' ], prefixable: [ 'A' ] },
  [ PhysicalQuantity.TEMPERATURE ]: { base: [ 'K', '°C', '°F' ], prefixable: [] },
  [ PhysicalQuantity.AMOUNT_OF_SUBSTANCE ]: { base: [ 'mol' ], prefixable: [ 'mol' ] },
  [ PhysicalQuantity.LUMINOUS_INTENSITY ]: { base: [ 'cd' ], prefixable: [] },

  [ PhysicalQuantity.VELOCITY ]: { base: [ 'm/s', 'km/h', 'mph', 'ft/s', 'knot', 'Mach' ], prefixable: [ 'm/s' ] },
  [ PhysicalQuantity.ACCELERATION ]: { base: [ 'm/s[2]', 'g', 'Gal' ], prefixable: [ 'm/s[2]' ] },
  [ PhysicalQuantity.FORCE ]: { base: [ 'N', 'dyn', 'kgf', 'lbf' ], prefixable: [ 'N' ] },
  [ PhysicalQuantity.SURFACE_TENSION ]: { base: [ 'N/m', 'dyn/cm' ], prefixable: [ 'N/m' ] },
  [ PhysicalQuantity.PRESSURE ]: { base: [ 'Pa', 'bar', 'atm', 'psi', 'torr', 'mmHg', 'inHg', 'cmH{2}O' ], prefixable: [ 'Pa', 'bar' ] },
  [ PhysicalQuantity.ENERGY ]: { base: [ 'J', 'eV', 'kcal', 'Wh', 'Btu', 'erg' ], prefixable: [ 'J', 'eV', 'Wh' ] },
  [ PhysicalQuantity.POWER ]: { base: [ 'W', 'hp', 'erg/s', 'kcal/s' ], prefixable: [ 'W' ] },
  [ PhysicalQuantity.DENSITY ]: { base: [ 'kg/m[3]', 'g/cm[3]', 'g/mL', 'lb/ft[3]' ], prefixable: [] },
  [ PhysicalQuantity.ABSORPTION_COEFFICIENT ]: { base: [ 'm[-1]', 'L/(mol·cm)' ], prefixable: [ 'm[-1]' ] },
  [ PhysicalQuantity.ATTENUATION_COEFFICIENT ]: { base: [ 'm[-1]', 'dB/cm', 'dB/km' ], prefixable: [ 'm[-1]' ] },
  [ PhysicalQuantity.COMPRESSIBILITY ]: { base: [ 'Pa[-1]', 'bar[-1]' ], prefixable: [ 'Pa[-1]', 'bar[-1]' ] },

  [ PhysicalQuantity.ENTHALPY ]: { base: [ 'J/mol', 'J/g', 'kcal/mol', 'eV', 'Btu/lb' ], prefixable: [ 'eV' ] },
  [ PhysicalQuantity.ENTROPY ]: { base: [ 'J/(mol·K)', 'J/(g·K)', 'cal/(mol·K)', 'Btu/(lb·°F)' ], prefixable: [] },
  [ PhysicalQuantity.HEAT_CAPACITY ]: { base: [ 'J/(mol·K)', 'J/(g·K)', 'cal/(mol·K)', 'Btu/(lb·°F)' ], prefixable: [] },
  [ PhysicalQuantity.SPECIFIC_HEAT_CAPACITY ]: { base: [ 'J/(g·K)', 'J/(kg·K)', 'cal/(g·K)', 'Btu/(lb·°F)' ], prefixable: [] },
  [ PhysicalQuantity.TEMP_COEFFICIENT ]: { base: [ 'K[-1]', 'ppm/K' ], prefixable: [] },
  [ PhysicalQuantity.THERMAL_CONDUCTIVITY ]: { base: [ 'W/(m·K)', 'W/(cm·K)', 'cal/(s·cm·K)' ], prefixable: [] },
  [ PhysicalQuantity.THERMAL_EXPANSION ]: { base: [ 'K[-1]', 'ppm/K' ], prefixable: [] },
  [ PhysicalQuantity.THERMAL_DIFFUSIVITY ]: { base: [ 'm[2]/s', 'cm[2]/s' ], prefixable: [] },

  [ PhysicalQuantity.ELECTRIC_CHARGE ]: { base: [ 'C', 'e', 'Ah' ], prefixable: [ 'C' ] },
  [ PhysicalQuantity.ELECTRIC_POTENTIAL ]: { base: [ 'V' ], prefixable: [ 'V' ] },
  [ PhysicalQuantity.ELECTRIC_RESISTANCE ]: { base: [ 'Ω' ], prefixable: [ 'Ω' ] },
  [ PhysicalQuantity.ELECTRIC_CONDUCTANCE ]: { base: [ 'S' ], prefixable: [ 'S' ] },
  [ PhysicalQuantity.ELECTRIC_CONDUCTIVITY ]: { base: [ 'S/m', 'S/cm' ], prefixable: [ 'S/m' ] },
  [ PhysicalQuantity.ELECTRIC_RESISTIVITY ]: { base: [ 'Ω·m', 'Ω·cm' ], prefixable: [ 'Ω·m' ] },
  [ PhysicalQuantity.DIPOLE_MOMENT ]: { base: [ 'C·m', 'statC·cm', 'abC·cm' ], prefixable: [ 'C·m' ] },

  [ PhysicalQuantity.MAGNETIC_FLUX ]: { base: [ 'Wb', 'V·s' ], prefixable: [ 'Wb' ] },
  [ PhysicalQuantity.MAGNETIC_FLUX_DENSITY ]: { base: [ 'T', 'G' ], prefixable: [ 'T', 'G' ] },
  [ PhysicalQuantity.MAGNETIC_SUSCEPTIBILITY ]: { base: [ '*', 'cm[3]/mol', 'm[3]/mol' ], prefixable: [] },
  [ PhysicalQuantity.MAGNETIC_MOMENT ]: { base: [ 'J/T', 'A·m[2]', 'µ{B}', 'µ{N}' ], prefixable: [ 'J/T' ] },
  [ PhysicalQuantity.MAGNETIC_FIELD_STRENGTH ]: { base: [ 'A/m', 'Oe' ], prefixable: [ 'A/m' ] },
  [ PhysicalQuantity.MAGNETIC_PERMEABILITY ]: { base: [ 'H/m' ], prefixable: [ 'H/m' ] },
  [ PhysicalQuantity.MOLAR_MAGNETIC_SUSCEPTIBILITY ]: { base: [ 'cm[3]/mol', 'm[3]/mol' ], prefixable: [] },
  [ PhysicalQuantity.MASS_MAGNETIC_SUSCEPTIBILITY ]: { base: [ 'cm[3]/g', 'm[3]/kg' ], prefixable: [] },

  [ PhysicalQuantity.LUMINOUS_FLUX ]: { base: [ 'lm' ], prefixable: [] },
  [ PhysicalQuantity.ILLUMINANCE ]: { base: [ 'lx', 'fc' ], prefixable: [] },

  [ PhysicalQuantity.SOUND_SPEED ]: { base: [ 'm/s', 'km/h', 'ft/s' ], prefixable: [ 'm/s' ] },
  [ PhysicalQuantity.ACOUSTIC_IMPEDANCE ]: { base: [ 'Pa·s/m', 'kg/(m[2]·s)', 'Rayl' ], prefixable: [] },

  [ PhysicalQuantity.MOLAR_MASS ]: { base: [ 'g/mol' ], prefixable: [ 'g/mol' ] },
  [ PhysicalQuantity.MOLAR_VOLUME ]: { base: [ 'L/mol', 'm[3]/mol' ], prefixable: [ 'L/mol', 'm[3]/mol' ] },
  [ PhysicalQuantity.CONCENTRATION ]: { base: [ 'mol/L', 'mol/m[3]', 'g/L', 'ppm', 'ppb' ], prefixable: [ 'mol/L', 'mol/m[3]', 'g/L' ] },
  [ PhysicalQuantity.MOLARITY ]: { base: [ 'M', 'mol/L' ], prefixable: [ 'mol/L' ] },
  [ PhysicalQuantity.MOLALITY ]: { base: [ 'm', 'mol/kg' ], prefixable: [ 'mol/kg' ] },
  [ PhysicalQuantity.MOLE_FRACTION ]: { base: [ '%', '‰', '*', 'ppm', 'ppb', 'ppt' ], prefixable: [] },
  [ PhysicalQuantity.MOLAR_HEAT_CAPACITY ]: { base: [ 'J/(mol·K)', 'cal/(mol·K)' ], prefixable: [] },

  [ PhysicalQuantity.DYNAMIC_VISCOSITY ]: { base: [ 'Pa·s', 'cP', 'poise', 'mPa·s' ], prefixable: [] },
  [ PhysicalQuantity.KINEMATIC_VISCOSITY ]: { base: [ 'm[2]/s', 'cSt', 'stoke' ], prefixable: [] },

  [ PhysicalQuantity.ACTIVITY ]: { base: [ 'Bq', 'Ci' ], prefixable: [ 'Bq', 'Ci' ] },
  [ PhysicalQuantity.ABSORBED_DOSE ]: { base: [ 'Gy', 'rad' ], prefixable: [ 'Gy' ] },

  [ PhysicalQuantity.GYROMAGNETIC_RATIO ]: { base: [ 'rad/(s·T)' ] , prefixable: [] },

  [ PhysicalQuantity.FREQUENCY ]: { base: [ 'Hz', 'rpm', 'rps' ], prefixable: [ 'Hz' ] },
  [ PhysicalQuantity.ANGLE ]: { base: [ '°', 'rad', 'ʹ', 'ʺ', 'grad', 'turn' ], prefixable: [] },
  [ PhysicalQuantity.MASS_FRACTION ]: { base: [ '%', '‰', '*', 'ppm', 'ppb', 'ppt' ], prefixable: [] },
  [ PhysicalQuantity.AREA ]: { base: [ 'm[2]', 'b' ], prefixable: [ 'm[2]' ] },
  [ PhysicalQuantity.QUANTITY ]: { base: [ '*', '%', '‰', 'mol' ], prefixable: [] },
  [ PhysicalQuantity.CURRENCY ]: { base: [ 'USD', 'EUR', 'CHF' ], prefixable: [] }
} as const;

export type BaseUnitSymbols< Q extends PhysicalQuantity > = ValidUnits[ Q ][ 'base' ][ number ];
export type PrefixableUnitSymbols< Q extends PhysicalQuantity > = ValidUnits[ Q ][ 'prefixable' ][ number ];

export type PrefixedSymbols< Q extends PhysicalQuantity > =
  | BaseUnitSymbols< Q >
  | `${ SIPrefix }${ PrefixableUnitSymbols< Q > }`;

export type DimensionVector = [ number, number, number, number, number, number, number ];

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

export type UnitId< Q extends PhysicalQuantity = PhysicalQuantity > = Brand<
  [ Q, PrefixedSymbols< Q > ],
  'unitId'
>;

export type UnitCollection = {
  [ Q in PhysicalQuantity ]?: Quantity< Q >;
};
