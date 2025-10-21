/**
 * Physical Units System
 * Comprehensive type-safe unit system with automatic conversion support
 */

// SI base dimensions
export const SIDimension = [
    'time', 'length', 'mass', 'electricCurrent', 'temperature',
    'amountOfSubstance', 'luminousIntensity'
] as const;

export type SIDimension = ( typeof SIDimension )[ number ];

// All physical quantities including SI base dimensions and derived quantities
export const PhysicalQuantity = [ ...SIDimension,

    // Mechanics
    'acceleration', 'angularAcceleration', 'angularVelocity', 'area', 'density', 'energy',
    'force', 'frequency', 'impulse', 'jerk', 'momentum', 'power', 'pressure', 'torque',
    'velocity', 'volume', 'volumetricFlowRate', 'massFlowRate', 'surfaceTension',
    'dynamicViscosity', 'kinematicViscosity', 'specificVolume', 'specificWeight',
    'momentOfInertia', 'angularMomentum', 'action',

    // Thermodynamics
    'enthalpy', 'entropy', 'heatCapacity', 'specificHeatCapacity', 'molarHeatCapacity',
    'thermalConductivity', 'thermalResistance', 'thermalExpansion', 'thermalDiffusivity',
    'heatFluxDensity', 'heatTransferCoefficient',

    // Electromagnetism
    'capacitance', 'charge', 'conductance', 'electricalConductivity', 'electricalResistivity',
    'electricPotential', 'electricField', 'electricFluxDensity', 'inductance', 'magneticFlux',
    'magneticFluxDensity', 'magneticFieldStrength', 'magneticPermeability', 'magneticMoment',
    'magneticSusceptibility', 'magnetization', 'resistance', 'resistivity', 'permittivity',
    'electricDipoleMoment', 'currentDensity', 'linearChargeDensity', 'surfaceChargeDensity',
    'volumeChargeDensity',

    // Optics and radiation
    'luminousFlux', 'illuminance', 'luminance', 'radiantIntensity', 'radiance',
    'irradiance', 'absorbedDose', 'equivalentDose', 'effectiveDose', 'exposure',
    'radioactivity', 'absorptionCoefficient', 'attenuationCoefficient',
    'refractiveIndex',

    // Chemistry
    'amountConcentration', 'massConcentration', 'molality', 'molarMass', 'molarVolume',
    'molarEnergy', 'molarEntropy', 'molarHeatCapacity', 'catalyticActivity',
    'catalyticConcentration', 'massFraction', 'moleFraction', 'volumeFraction',
    'specificSurfaceArea', 'surfaceConcentration', 'concentration',

    // Acoustics
    'soundPressure', 'soundIntensity', 'soundPower', 'acousticImpedance',
    'specificAcousticImpedance',

    // Other quantities
    'angle', 'solidAngle', 'wavenumber', 'fuelEfficiency', 'permeability',
    'compressibility', 'thermalExpansionCoefficient', 'temperatureCoefficient',
    'molarMagneticSusceptibility', 'massMagneticSusceptibility',

    // Dimensionless quantities
    'dimensionless', 'quantity', 'ratio', 'percentage', 'partsPerMillion',
    'partsPerBillion'

] as const;

export type PhysicalQuantity = ( typeof PhysicalQuantity )[ number ];

/**
 * Dimension Vector
 * Represents the powers of each base dimension in the order:
 * [time, length, mass, electricCurrent, temperature, amountOfSubstance, luminousIntensity]
 */
type DimensionVector = [ number, number, number, number, number, number, number ];

// Type describing a physical unit
type Unit = {
    symbol: string;
    name?: string;
    isBase?: boolean;
    conversion?: {
        factor: number;
        offset?: number;
    };
}

// Type describing a physical quantity and its units
type Quantity< Q extends PhysicalQuantity > = {
    dimension?: {
        symbol: string;
        name: string;
        si: Q extends SIDimension ? true : false;
        vector: DimensionVector;
    };
    baseUnit: string;
    units: Record< string, Unit >;
}

// Collection of physical quantities and their units
export type UnitCollection = {
    [ Q in PhysicalQuantity ]?: Quantity< Q >;
};

// Unit reference used in other parts of the data model
export type UnitId< Q extends PhysicalQuantity = PhysicalQuantity > = [ Q, string ];
