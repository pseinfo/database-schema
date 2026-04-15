import type { Collection, Group, Single } from '../abstract/collection';
import type { CoupledNumberProperty, NumberProperty, PrimitiveProperty } from '../abstract/property';
import type { LangGroup } from '../abstract/util';
import type { Phase } from '../enum/generic';
import type { MagneticOrdering, Superconductivity } from '../enum/physics';
import type { PhysicalQuantity } from '../enum/util';

export type PhysicsCollection = Collection< {
  density?: Single< NumberProperty< PhysicalQuantity.DENSITY > >;
  phase?: Single< PrimitiveProperty< Phase > >;

  temperature?: Group< {
    meltingPoint?: Single< NumberProperty< PhysicalQuantity.TEMPERATURE > >;
    boilingPoint?: Single< NumberProperty< PhysicalQuantity.TEMPERATURE > >;
    liquidRange?: Single< NumberProperty< PhysicalQuantity.TEMPERATURE > >;
    transitionTemp?: Single< NumberProperty< PhysicalQuantity.TEMPERATURE > >;
    sublimationPoint?: Single< NumberProperty< PhysicalQuantity.TEMPERATURE > >;
    flashPoint?: Single< NumberProperty< PhysicalQuantity.TEMPERATURE > >;
    autoignitionTemp?: Single< NumberProperty< PhysicalQuantity.TEMPERATURE > >;
    criticalPoint?: Single< CoupledNumberProperty< PhysicalQuantity.TEMPERATURE | PhysicalQuantity.PRESSURE > >;
    triplePoint?: Single< CoupledNumberProperty< PhysicalQuantity.TEMPERATURE | PhysicalQuantity.PRESSURE > >;
    debyeTemp?: Single< NumberProperty< PhysicalQuantity.TEMPERATURE > >;
  } >;

  enthalpy?: Group< {
    fusionEnthalpy?: Single< NumberProperty< PhysicalQuantity.ENTHALPY > >;
    vaporisationEnthalpy?: Single< NumberProperty< PhysicalQuantity.ENTHALPY > >;
    sublimationEnthalpy?: Single< NumberProperty< PhysicalQuantity.ENTHALPY > >;
    atomizationEnthalpy?: Single< NumberProperty< PhysicalQuantity.ENTHALPY > >;
    formationEnthalpy?: Single< NumberProperty< PhysicalQuantity.ENTHALPY > >;
    combustionEnthalpy?: Single< NumberProperty< PhysicalQuantity.ENTHALPY > >;
  } >;

  heat?: Group< {
    heatCapacity?: Single< NumberProperty< PhysicalQuantity.HEAT_CAPACITY > >;
    molarHeatCapacity?: Single< NumberProperty< PhysicalQuantity.MOLAR_HEAT_CAPACITY > >;
    specificHeatCapacity?: Single< NumberProperty< PhysicalQuantity.SPECIFIC_HEAT_CAPACITY > >;
    thermalConductivity?: Single< NumberProperty< PhysicalQuantity.THERMAL_CONDUCTIVITY > >;
    thermalExpansion?: Single< NumberProperty< PhysicalQuantity.THERMAL_EXPANSION > >;
    thermalDiffusivity?: Single< NumberProperty< PhysicalQuantity.THERMAL_DIFFUSIVITY > >;
    workFunction?: Single< NumberProperty< PhysicalQuantity.ENERGY > >;
    adiabaticIndex?: Single< PrimitiveProperty< number > >;
  } >;

  hardness?: Group< {
    brinellHardness?: Single< PrimitiveProperty< number > >;
    mohsHardness?: Single< PrimitiveProperty< number > >;
    vickersHardness?: Single< PrimitiveProperty< number > >;
    rockwellHardness?: Single< PrimitiveProperty< number > >;
    knoopHardness?: Single< PrimitiveProperty< number > >;
  } >;

  elasticity?: Group< {
    bulkModulus?: Single< NumberProperty< PhysicalQuantity.PRESSURE > >;
    shearModulus?: Single< NumberProperty< PhysicalQuantity.PRESSURE > >;
    youngModulus?: Single< NumberProperty< PhysicalQuantity.PRESSURE > >;
    poissonRatio?: Single< PrimitiveProperty< number > >;
    compressibility?: Single< NumberProperty< PhysicalQuantity.COMPRESSIBILITY > >;
    tensileStrength?: Single< NumberProperty< PhysicalQuantity.PRESSURE > >;
    yieldStrength?: Single< NumberProperty< PhysicalQuantity.PRESSURE > >;
    ultimateStrength?: Single< NumberProperty< PhysicalQuantity.PRESSURE > >;
  } >;

  electricity?: Group< {
    conductivity?: Single< NumberProperty< PhysicalQuantity.ELECTRIC_CONDUCTIVITY > >;
    resistivity?: Single< NumberProperty< PhysicalQuantity.ELECTRIC_RESISTIVITY > >;
    temperatureCoefficient?: Single< NumberProperty< PhysicalQuantity.TEMP_COEFFICIENT > >;
    superconductivity?: Single< PrimitiveProperty< Superconductivity > >;
    superconductingPoint?: Single< NumberProperty< PhysicalQuantity.TEMPERATURE > >;
    bandGap?: Single< NumberProperty< PhysicalQuantity.ENERGY > >;
    dielectricConstant?: Single< PrimitiveProperty< number > >;
    dipoleMoment?: Single< NumberProperty< PhysicalQuantity.DIPOLE_MOMENT > >;
  } >;

  magnetism?: Group< {
    magneticOrdering?: Single< PrimitiveProperty< MagneticOrdering > >;
    magneticSusceptibility?: Single< NumberProperty< PhysicalQuantity.MAGNETIC_SUSCEPTIBILITY > >;
    molarMagneticSusceptibility?: Single< NumberProperty< PhysicalQuantity.MOLAR_MAGNETIC_SUSCEPTIBILITY > >;
    massMagneticSusceptibility?: Single< NumberProperty< PhysicalQuantity.MASS_MAGNETIC_SUSCEPTIBILITY > >;
    curiePoint?: Single< NumberProperty< PhysicalQuantity.TEMPERATURE > >;
    neelPoint?: Single< NumberProperty< PhysicalQuantity.TEMPERATURE > >;
    magneticMoment?: Single< NumberProperty< PhysicalQuantity.MAGNETIC_MOMENT > >;
    coercivity?: Single< NumberProperty< PhysicalQuantity.MAGNETIC_FIELD_STRENGTH > >;
    remanence?: Single< NumberProperty< PhysicalQuantity.MAGNETIC_FLUX_DENSITY > >;
    permeability?: Single< NumberProperty< PhysicalQuantity.MAGNETIC_PERMEABILITY > >;
  } >;

  optics?: Group< {
    refractiveIndex?: Single< PrimitiveProperty< number > >;
    reflectance?: Single< PrimitiveProperty< number > >;
    birefringence?: Single< PrimitiveProperty< number > >;
    absorptionCoefficient?: Single< NumberProperty< PhysicalQuantity.ABSORPTION_COEFFICIENT > >;
    emissivity?: Single< PrimitiveProperty< number > >;
    transmittance?: Single< PrimitiveProperty< number > >;
    opacity?: Single< PrimitiveProperty< number > >;
    color?: LangGroup;
    streak?: LangGroup;
  } >;

  acoustics?: Group< {
    soundSpeed?: Single< NumberProperty< PhysicalQuantity.VELOCITY > >;
    acousticImpedance?: Single< NumberProperty< PhysicalQuantity.ACOUSTIC_IMPEDANCE > >;
    attenuationCoefficient?: Single< NumberProperty< PhysicalQuantity.ATTENUATION_COEFFICIENT > >;
  } >;

  surface?: Group< {
    surfaceTension?: Single< NumberProperty< PhysicalQuantity.SURFACE_TENSION > >;
    contactAngle?: Single< NumberProperty< PhysicalQuantity.ANGLE > >;
  } >;

  viscosity?: Group< {
    dynamicViscosity?: Single< NumberProperty< PhysicalQuantity.DYNAMIC_VISCOSITY > >;
    kinematicViscosity?: Single< NumberProperty< PhysicalQuantity.KINEMATIC_VISCOSITY > >;
  } >;
} >;
