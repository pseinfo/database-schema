import type { UnitConfig } from '../model/registry/unit';

export default ( {
  // --- BASE SI QUANTITIES ---
  time: {
    symbol: 't',
    vector: [ 1, 0, 0, 0, 0, 0, 0 ],
    units: [ 's', 'min', 'h', 'd', 'a', 't{P}' ],
    prefixableUnits: [ 's' ],
    baseUnit: 's'
  },
  length: {
    symbol: 'l',
    vector: [ 0, 1, 0, 0, 0, 0, 0 ],
    units: [ 'm', 'in', 'ft', 'yd', 'mi', 'Å', 'Ø', 'l{P}' ],
    prefixableUnits: [ 'm' ],
    baseUnit: 'm'
  },
  mass: {
    symbol: 'm',
    vector: [ 0, 0, 1, 0, 0, 0, 0 ],
    units: [ 'g', 't', 'oz', 'lb', 'u', 'Da', 'm{P}' ],
    prefixableUnits: [ 'g' ],
    baseUnit: 'g'
  },
  electricCurrent: {
    symbol: 'I',
    vector: [ 0, 0, 0, 1, 0, 0, 0 ],
    units: [ 'A', 'Bi' ],
    prefixableUnits: [ 'A' ],
    baseUnit: 'A'
  },
  temperature: {
    symbol: 'T',
    vector: [ 0, 0, 0, 0, 1, 0, 0 ],
    units: [ 'K', '°C', '°F', 'T{P}' ],
    prefixableUnits: [],
    baseUnit: 'K'
  },
  amountOfSubstance: {
    symbol: 'n',
    vector: [ 0, 0, 0, 0, 0, 1, 0 ],
    units: [ 'mol' ],
    prefixableUnits: [ 'mol' ],
    baseUnit: 'mol'
  },
  luminousIntensity: {
    symbol: 'I{v}',
    vector: [ 0, 0, 0, 0, 0, 0, 1 ],
    units: [ 'cd' ],
    prefixableUnits: [],
    baseUnit: 'cd'
  },

  // --- KINEMATICS & MECHANICS ---
  area: {
    symbol: 'a',
    vector: [ 0, 2, 0, 0, 0, 0, 0 ],
    units: [ 'm[2]', 'b' ],
    prefixableUnits: [ 'm[2]' ],
    baseUnit: 'm[2]'
  },
  volume: {
    symbol: 'V',
    vector: [ 0, 3, 0, 0, 0, 0, 0 ],
    units: [ 'm[3]', 'L', 'ml', 'cm[3]', 'cc' ],
    prefixableUnits: [ 'm[3]', 'L', 'ml', 'cm[3]' ],
    baseUnit: 'm[3]'
  },
  angle: {
    symbol: '',
    vector: [ 0, 0, 0, 0, 0, 0, 0 ],
    units: [ '°', 'rad', 'ʹ', 'ʺ', 'grad', 'turn' ],
    prefixableUnits: [],
    baseUnit: '°'
  },
  velocity: {
    symbol: 'v',
    vector: [ -1, 1, 0, 0, 0, 0, 0 ],
    units: [ 'm/s', 'km/h', 'mph', 'ft/s', 'knot', 'Mach', 'c' ],
    prefixableUnits: [ 'm/s' ],
    baseUnit: 'm/s'
  },
  density: {
    symbol: 'ρ',
    vector: [ 0, -3, 1, 0, 0, 0, 0 ],
    units: [ 'g/m[3]', 'g/cm[3]', 'g/ml', 'g/l', 'lb/ft[3]' ],
    prefixableUnits: [ 'g/m[3]', 'g/cm[3]', 'g/ml', 'g/l' ],
    baseUnit: 'g/m[3]'
  },

  // --- THERMODYNAMICS ---
  energy: {
    symbol: 'E',
    vector: [ -2, 2, 1, 0, 0, 0, 0 ],
    units: [ 'J', 'eV', 'kcal', 'Wh', 'Btu', 'erg', 'E{P}' ],
    prefixableUnits: [ 'J', 'eV', 'Wh' ],
    baseUnit: 'J'
  },
  molarEnergy: {
    symbol: 'J/mol',
    vector: [ -2, 2, 1, 0, 0, -1, 0 ],
    units: [ 'J/mol', 'kcal/mol' ],
    prefixableUnits: [ 'J/mol' ],
    baseUnit: 'J/mol'
  },
  entropy: {
    symbol: 'S',
    vector: [ -2, 2, 1, 0, -1, 0, 0 ],
    units: [ 'J/K' ],
    prefixableUnits: [ 'J/K' ],
    baseUnit: 'J/K'
  },
  heatCapacity: {
    symbol: 'C',
    vector: [ -2, 2, 1, 0, -1, 0, 0 ],
    units: [ 'J/K', 'kcal/K' ],
    prefixableUnits: [ 'J/K' ],
    baseUnit: 'J/K'
  },
  specificHeatCapacity: {
    symbol: 'c',
    vector: [ -2, 2, 0, 0, -1, 0, 0 ],
    units: [ 'J/(kg·K)', 'J/(g·K)', 'Btu/(lb·°F)', 'cal/(kg·K)' ],
    prefixableUnits: [ 'J/(kg·K)' ],
    baseUnit: 'J/(kg·K)'
  },
  molarHeatCapacity: {
    symbol: 'c{m}',
    vector: [ -2, 2, 1, 0, -1, -1, 0 ],
    units: [ 'J/(K·mol)', 'kcal/(K·mol)' ],
    prefixableUnits: [ 'J/(K·mol)' ],
    baseUnit: 'J/(K·mol)'
  },
  tempCoefficient: {
    symbol: 'dT',
    vector: [ 0, 0, 0, 0, -1, 0, 0 ],
    units: [ 'K[-1]', 'ppm/K' ],
    prefixableUnits: [],
    baseUnit: 'K[-1]'
  },
  thermalConductivity: {
    symbol: 'λ',
    vector: [ -3, 1, 1, 0, -1, 0, 0 ],
    units: [ 'W/(m·K)', 'W/(cm·K)' ],
    prefixableUnits: [ 'W/(m·K)', 'W/(cm·K)' ],
    baseUnit: 'W/(m·K)'
  },
  thermalDiffusivity: {
    symbol: 'a',
    vector: [ -1, 2, 0, 0, 0, 0, 0 ],
    units: [ 'm[2]/s' ],
    prefixableUnits: [ 'm[2]/s' ],
    baseUnit: 'm[2]/s'
  },

  // --- ELECTROMAGNETISM ---
  electricConductivity: {
    symbol: 'σ',
    vector: [ 3, -3, -1, 2, 0, 0, 0 ],
    units: [ 'S/m', 'S/cm', '1/(Ω·m)' ],
    prefixableUnits: [ 'S/m', 'S/cm' ],
    baseUnit: 'S/m'
  },
  electricResistivity: {
    symbol: 'ρ',
    vector: [ -3, 3, 1, -2, 0, 0, 0 ],
    units: [ 'Ω·m', 'Ω·cm' ],
    prefixableUnits: [ 'Ω·m' ],
    baseUnit: 'Ω·m'
  },
  electricPotential: {
    symbol: 'φ',
    vector: [ -3, 2, 1, -1, 0, 0, 0 ],
    units: [ 'V', 'statV', 'abV' ],
    prefixableUnits: [ 'V' ],
    baseUnit: 'V'
  },
  electricPermittivity: {
    symbol: 'ε',
    vector: [ 4, -3, -1, 2, 0, 0, 0 ],
    units: [ 'F/m' ],
    prefixableUnits: [ 'F/m' ],
    baseUnit: 'F/m'
  },
  electricDipoleMoment: {
    symbol: 'p',
    vector: [ 1, 1, 0, 1, 0, 0, 0 ],
    units: [ 'C·m', 'statC·cm', 'abC·cm' ],
    prefixableUnits: [ 'C·m' ],
    baseUnit: 'C·m'
  },
  hallCoefficient: {
    symbol: 'A{H}',
    vector: [ -1, 3, 0, -1, 0, 0, 0 ],
    units: [ 'm[3]/C' ],
    prefixableUnits: [ 'm[3]/C' ],
    baseUnit: 'm[3]/C'
  },
  electronMobility: {
    symbol: 'μ',
    vector: [ 2, 0, -1, 1, 0, 0, 0 ],
    units: [ 'm[2]/(V·s)' ],
    prefixableUnits: [ 'm[2]/(V·s)' ],
    baseUnit: 'm[2]/(V·s)'
  },
  magneticSusceptibility: {
    symbol: 'X',
    vector: [ 0, 0, 0, 0, 0, 0, 0 ],
    units: [ '*' ],
    prefixableUnits: [],
    baseUnit: '*'
  },
  molarMagneticSusceptibility: {
    symbol: 'X{mol}',
    vector: [ 0, 3, 0, 0, 0, -1, 0 ],
    units: [ 'm[3]/mol' ],
    prefixableUnits: [ 'm[3]/mol' ],
    baseUnit: 'm[3]/mol'
  },
  massMagneticSusceptibility: {
    symbol: 'X{m}',
    vector: [ 0, 3, -1, 0, 0, 0, 0 ],
    units: [ 'm[3]/kg', 'm[3]/g' ],
    prefixableUnits: [ 'm[3]/kg', 'm[3]/g' ],
    baseUnit: 'm[3]/kg'
  },
  magneticMoment: {
    symbol: 'm',
    vector: [ 0, 2, 0, 1, 0, 0, 0 ],
    units: [ 'J/T', 'abA·cm[2]', 'statA·cm[2]' ],
    prefixableUnits: [ 'J/T' ],
    baseUnit: 'J/T'
  },
  magneticFieldStrength: {
    symbol: 'H',
    vector: [ 0, -1, 0, 1, 0, 0, 0 ],
    units: [ 'A/m', 'Oe', 'statA/cm' ],
    prefixableUnits: [ 'A/m', 'Oe', 'statA/cm' ],
    baseUnit: 'A/m'
  },
  magneticFluxDensity: {
    symbol: 'B',
    vector: [ -2, 0, 1, -1, 0, 0, 0 ],
    units: [ 'T', '10[5]·γ', 'statT' ],
    prefixableUnits: [ 'T' ],
    baseUnit: 'T'
  },
  magneticPermeability: {
    symbol: 'μ',
    vector: [ -2, 1, 1, -2, 0, 0, 0 ],
    units: [ 'H/m', 's[2]/cm[2]' ],
    prefixableUnits: [ 'H/m' ],
    baseUnit: 'H/m'
  },
  magnetization: {
    symbol: 'M',
    vector: [ 0, -1, 0, 1, 0, 0, 0 ],
    units: [ 'A/m' ],
    prefixableUnits: [ 'A/m' ],
    baseUnit: 'A/m'
  },
  gyromagneticRatio: {
    symbol: 'γ',
    vector: [ 1, 0, -1, 1, 0, 0, 0 ],
    units: [ 'rad/(s·T)' ],
    prefixableUnits: [],
    baseUnit: 'rad/(s·T)'
  },

  // --- FLUID MECHANICS & ACOUSTICS ---
  pressure: {
    symbol: 'p',
    vector: [ -2, -1, 1, 0, 0, 0, 0 ],
    units: [ 'Pa', 'bar', 'atm', 'psi', 'torr', 'mmHg', 'inHg', 'cmH{2}O' ],
    prefixableUnits: [ 'Pa', 'bar' ],
    baseUnit: 'Pa'
  },
  compressibility: {
    symbol: 'κ',
    vector: [ 2, 1, -1, 0, 0, 0, 0 ],
    units: [ 'Pa[-1]', 'bar[-1]' ],
    prefixableUnits: [ 'Pa[-1]', 'bar[-1]' ],
    baseUnit: 'Pa[-1]'
  },
  acousticImpedance: {
    symbol: 'Z',
    vector: [ -1, -4, 1, 0, 0, 0, 0 ],
    units: [ 'Pa·s/m[3]', 'Rayl/m[2]' ],
    prefixableUnits: [ 'Pa·s/m[3]' ],
    baseUnit: 'Pa·s/m[3]'
  },
  dynamicViscosity: {
    symbol: 'η',
    vector: [ -1, -1, 1, 0, 0, 0, 0 ],
    units: [ 'Pa·s', 'P' ],
    prefixableUnits: [ 'Pa·s', 'P' ],
    baseUnit: 'Pa·s'
  },
  kinematicViscosity: {
    symbol: 'ν',
    vector: [ -1, 2, 0, 0, 0, 0, 0 ],
    units: [ 'm[2]/s', 'St' ],
    prefixableUnits: [ 'm[2]/s' ],
    baseUnit: 'm[2]/s'
  },
  surfaceTension: {
    symbol: 'σ',
    vector: [ -2, 0, 1, 0, 0, 0, 0 ],
    units: [ 'N/m' ],
    prefixableUnits: [ 'N/m' ],
    baseUnit: 'N/m'
  },

  // --- OPTICS & WAVES ---
  frequency: {
    symbol: 'f',
    vector: [ -1, 0, 0, 0, 0, 0, 0 ],
    units: [ 'Hz', 'rpm', 'rps' ],
    prefixableUnits: [ 'Hz' ],
    baseUnit: 'Hz'
  },
  attenuationCoefficient: {
    symbol: 'α',
    vector: [ 0, -1, 0, 0, 0, 0, 0 ],
    units: [ 'm[-1]' ],
    prefixableUnits: [ 'm[-1]' ],
    baseUnit: 'm[-1]'
  },

  // --- CHEMISTRY & AMOUNTS ---
  concentration: {
    symbol: 'C{i}',
    vector: [ 0, -3, 0, 0, 0, 1, 0 ],
    units: [ 'mol/L', 'mol/m[3]', 'g/L', 'ppm', 'ppb' ],
    prefixableUnits: [ 'mol/L', 'mol/m[3]', 'g/L' ],
    baseUnit: 'mol/L'
  },
  molarMass: {
    symbol: 'M',
    vector: [ 0, 0, 1, 0, 0, -1, 0 ],
    units: [ 'g/mol' ],
    prefixableUnits: [ 'g/mol' ],
    baseUnit: 'g/mol'
  },
  molarVolume: {
    symbol: 'V{m}',
    vector: [ 0, 3, 0, 0, 0, -1, 0 ],
    units: [ 'm[3]/mol' ],
    prefixableUnits: [ 'm[3]/mol' ],
    baseUnit: 'm[3]/mol'
  },
  massFraction: {
    symbol: 'w',
    vector: null,
    units: [ '%', '‰', '*', 'ppm', 'ppb', 'ppt' ],
    prefixableUnits: [],
    baseUnit: '%'
  },
  moleFraction: {
    symbol: 'x',
    vector: null,
    units: [ '%', '‰', '*', 'mol/mol', 'ppm', 'ppb', 'ppt' ],
    prefixableUnits: [ 'mol/mol' ],
    baseUnit: '%'
  },
  massPerMass: {
    symbol: 'w/w',
    vector: null,
    units: [ 'g/kg', 'g/g', 'g/mg' ],
    prefixableUnits: [ 'g/kg', 'g/g', 'g/mg' ],
    baseUnit: 'g/kg'
  },
  quantity: {
    symbol: '',
    vector: null,
    units: [ '*', '%', '‰' ],
    prefixableUnits: [],
    baseUnit: '%'
  },
  rate: {
    symbol: 'R',
    vector: [ -1, 0, 0, 0, 0, 0, 0 ],
    units: [ 's[-1]' ],
    prefixableUnits: [ 's[-1]' ],
    baseUnit: 's[-1]'
  },

  // --- MATERIALS & MECHANICS ---
  fractureToughness: {
    symbol: 'K{Ic}',
    vector: [ -2, -1, 1, 0, 0, 0, 0 ],
    units: [ 'Pa/m[1/2]' ],
    prefixableUnits: [ 'Pa/m[1/2]' ],
    baseUnit: 'Pa/m[1/2]'
  },
  stressIntensityFactor: {
    symbol: 'K',
    vector: [ -2, -1, 1, 0, 0, 0, 0 ],
    units: [ 'Pa·m[1/2]' ],
    prefixableUnits: [ 'Pa·m[1/2]' ],
    baseUnit: 'Pa·m[1/2]'
  }
} ) as const satisfies UnitConfig;
