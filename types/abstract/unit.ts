import type { Brand } from 'devtypes/types/util';
import type { MetricSystem, SIDimension } from '../../enum/util';

export type SIPrefix = keyof typeof SIPrefix;
export const SIPrefix = {
  Y: 1e24, Z: 1e21, E: 1e18, P: 1e15, T: 1e12, G: 1e9, M: 1e6, k: 1e3,
  h: 1e2, da: 1e1, d: 1e-1, c: 1e-2, m: 1e-3, µ: 1e-6, n: 1e-9, p: 1e-12,
  f: 1e-15, a: 1e-18, z: 1e-21, y: 1e-24
} as const;

export type ValidUnits = typeof ValidUnits;
export type PhysicalQuantity = keyof typeof ValidUnits;
export const ValidUnits = {
  time: { base: [ 's', 'min', 'h', 'd', 'a' ], prefixable: [ 's' ] },
  length: { base: [ 'm', 'in', 'ft', 'yd', 'mi', 'Å', 'Ø' ], prefixable: [ 'm' ] },
  mass: { base: [ 'g', 't', 'oz', 'lb', 'u', 'Da' ], prefixable: [ 'g' ] },
  electricCurrent: { base: [ 'A' ], prefixable: [ 'A' ] },
  temperature: { base: [ 'K', '°C', '°F' ], prefixable: [] },
  amountOfSubstance: { base: [ 'mol' ], prefixable: [ 'mol' ] },
  luminousIntensity: { base: [ 'cd' ], prefixable: [] },

  velocity: { base: [ 'm/s', 'km/h', 'mph', 'ft/s', 'knot', 'Mach' ], prefixable: [ 'm/s' ] },
  acceleration: { base: [ 'm/s[2]', 'g', 'Gal' ], prefixable: [ 'm/s[2]' ] },
  force: { base: [ 'N', 'dyn', 'kgf', 'lbf' ], prefixable: [ 'N' ] },
  surfaceTension: { base: [ 'N/m', 'dyn/cm' ], prefixable: [ 'N/m' ] },
  pressure: { base: [ 'Pa', 'bar', 'atm', 'psi', 'torr', 'mmHg', 'inHg', 'cmH{2}O' ], prefixable: [ 'Pa', 'bar' ] },
  energy: { base: [ 'J', 'eV', 'kcal', 'Wh', 'Btu', 'erg' ], prefixable: [ 'J', 'eV', 'Wh' ] },
  power: { base: [ 'W', 'hp', 'erg/s', 'kcal/s' ], prefixable: [ 'W' ] },
  density: { base: [ 'kg/m[3]', 'g/cm[3]', 'g/mL', 'lb/ft[3]' ], prefixable: [] },
  absorptionCoefficient: { base: [ 'm[-1]', 'L/(mol·cm)' ], prefixable: [ 'm[-1]' ] },
  attenuationCoefficient: { base: [ 'm[-1]', 'dB/cm', 'dB/km' ], prefixable: [ 'm[-1]' ] },
  compressibility: { base: [ 'Pa[-1]', 'bar[-1]' ], prefixable: [ 'Pa[-1]', 'bar[-1]' ] },

  enthalpy: { base: [ 'J/mol', 'J/g', 'kcal/mol', 'eV', 'Btu/lb' ], prefixable: [ 'eV' ] },
  entropy: { base: [ 'J/(mol·K)', 'J/(g·K)', 'cal/(mol·K)', 'Btu/(lb·°F)' ], prefixable: [] },
  heatCapacity: { base: [ 'J/(mol·K)', 'J/(g·K)', 'cal/(mol·K)', 'Btu/(lb·°F)' ], prefixable: [] },
  specificHeatCapacity: { base: [ 'J/(g·K)', 'J/(kg·K)', 'cal/(g·K)', 'Btu/(lb·°F)' ], prefixable: [] },
  tempCoefficient: { base: [ 'K[-1]', 'ppm/K' ], prefixable: [] },
  thermalConductivity: { base: [ 'W/(m·K)', 'W/(cm·K)', 'cal/(s·cm·K)' ], prefixable: [] },
  thermalExpansion: { base: [ 'K[-1]', 'ppm/K' ], prefixable: [] },
  thermalDiffusivity: { base: [ 'm[2]/s', 'cm[2]/s' ], prefixable: [] },

  electricCharge: { base: [ 'C', 'e', 'Ah' ], prefixable: [ 'C' ] },
  electricPotential: { base: [ 'V' ], prefixable: [ 'V' ] },
  electricResistance: { base: [ 'Ω' ], prefixable: [ 'Ω' ] },
  electricConductance: { base: [ 'S' ], prefixable: [ 'S' ] },
  electricConductivity: { base: [ 'S/m', 'S/cm' ], prefixable: [ 'S/m' ] },
  electricResistivity: { base: [ 'Ω·m', 'Ω·cm' ], prefixable: [ 'Ω·m' ] },
  dipoleMoment: { base: [ 'C·m', 'statC·cm', 'abC·cm' ], prefixable: [ 'C·m' ] },

  magneticFlux: { base: [ 'Wb', 'V·s' ], prefixable: [ 'Wb' ] },
  magneticFluxDensity: { base: [ 'T', 'G' ], prefixable: [ 'T', 'G' ] },
  magneticSusceptibility: { base: [ '*', 'cm[3]/mol', 'm[3]/mol' ], prefixable: [] },
  magneticMoment: { base: [ 'J/T', 'A·m[2]', 'µ{B}', 'µ{N}' ], prefixable: [ 'J/T' ] },
  magneticFieldStrength: { base: [ 'A/m', 'Oe' ], prefixable: [ 'A/m' ] },
  magneticPermeability: { base: [ 'H/m' ], prefixable: [ 'H/m' ] },
  molarMagneticSusceptibility: { base: [ 'cm[3]/mol', 'm[3]/mol' ], prefixable: [] },
  massMagneticSusceptibility: { base: [ 'cm[3]/g', 'm[3]/kg' ], prefixable: [] },

  luminousFlux: { base: [ 'lm' ], prefixable: [] },
  illuminance: { base: [ 'lx', 'fc' ], prefixable: [] },

  soundSpeed: { base: [ 'm/s', 'km/h', 'ft/s' ], prefixable: [ 'm/s' ] },
  acousticImpedance: { base: [ 'Pa·s/m', 'kg/(m[2]·s)', 'Rayl' ], prefixable: [] },

  molarMass: { base: [ 'g/mol' ], prefixable: [ 'g/mol' ] },
  molarVolume: { base: [ 'L/mol', 'm[3]/mol' ], prefixable: [ 'L/mol', 'm[3]/mol' ] },
  concentration: { base: [ 'mol/L', 'mol/m[3]', 'g/L', 'ppm', 'ppb' ], prefixable: [ 'mol/L', 'mol/m[3]', 'g/L' ] },
  molarity: { base: [ 'M', 'mol/L' ], prefixable: [ 'mol/L' ] },
  molality: { base: [ 'm', 'mol/kg' ], prefixable: [ 'mol/kg' ] },
  moleFraction: { base: [ '%', '‰', '*', 'ppm', 'ppb', 'ppt' ], prefixable: [] },
  molarHeatCapacity: { base: [ 'J/(mol·K)', 'cal/(mol·K)' ], prefixable: [] },

  dynamicViscosity: { base: [ 'Pa·s', 'cP', 'poise', 'mPa·s' ], prefixable: [] },
  kinematicViscosity: { base: [ 'm[2]/s', 'cSt', 'stoke' ], prefixable: [] },

  activity: { base: [ 'Bq', 'Ci' ], prefixable: [ 'Bq', 'Ci' ] },
  absorbedDose: { base: [ 'Gy', 'rad' ], prefixable: [ 'Gy' ] },

  gyromagneticRatio: { base: [ 'rad/(s·T)' ] , prefixable: [] },

  frequency: { base: [ 'Hz', 'rpm', 'rps' ], prefixable: [ 'Hz' ] },
  angle: { base: [ '°', 'rad', 'ʹ', 'ʺ', 'grad', 'turn' ], prefixable: [] },
  massFraction: { base: [ '%', '‰', '*', 'ppm', 'ppb', 'ppt' ], prefixable: [] },
  area: { base: [ 'm[2]', 'b' ], prefixable: [ 'm[2]' ] },
  quantity: { base: [ '*', '%', '‰', 'mol' ], prefixable: [] },
  currency: { base: [ 'USD', 'EUR', 'CHF' ], prefixable: [] }
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
