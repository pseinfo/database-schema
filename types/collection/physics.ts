import type { Collection, Group, Single } from '../abstract/collection';
import type { CoupledNumberProperty, NumberProperty, PrimitiveProperty } from '../abstract/property';
import type { LangGroup } from '../abstract/util';
import type { Phase } from '../enum/generic';
import type { Diaphaneity, Gloss, Lustre, MagneticOrdering, Superconductivity } from '../enum/physics';

export type PhysicsCollection = Collection< {
  density?: Single< NumberProperty< 'density' > >;
  relativeDensity?: Single< PrimitiveProperty< number > >;
  phase?: Single< PrimitiveProperty< Phase > >;

  temperature?: Group< {
    meltingPoint?: Single< NumberProperty< 'temperature' > >;
    boilingPoint?: Single< NumberProperty< 'temperature' > >;
    liquidRange?: Single< NumberProperty< 'temperature' > >;
    transitionTemp?: Single< NumberProperty< 'temperature' > >;
    sublimationPoint?: Single< NumberProperty< 'temperature' > >;
    flashPoint?: Single< NumberProperty< 'temperature' > >;
    autoignitionTemp?: Single< NumberProperty< 'temperature' > >;
    criticalPoint?: Single< CoupledNumberProperty< 'temperature' | 'pressure' > >;
    triplePoint?: Single< CoupledNumberProperty< 'temperature' | 'pressure' > >;
    debyeTemp?: Single< NumberProperty< 'temperature' > >;
  } >;

  enthalpy?: Group< {
    fusionEnthalpy?: Single< NumberProperty< 'energy' > >;
    vaporisationEnthalpy?: Single< NumberProperty< 'energy' > >;
    sublimationEnthalpy?: Single< NumberProperty< 'energy' > >;
    atomizationEnthalpy?: Single< NumberProperty< 'energy' > >;
    formationEnthalpy?: Single< NumberProperty< 'energy' > >;
    combustionEnthalpy?: Single< NumberProperty< 'energy' > >;
  } >;

  heat?: Group< {
    heatCapacity?: Single< NumberProperty< 'heatCapacity' > >;
    molarHeatCapacity?: Single< NumberProperty< 'molarHeatCapacity' > >;
    specificHeatCapacity?: Single< NumberProperty< 'specificHeatCapacity' > >;
    thermalConductivity?: Single< NumberProperty< 'thermalConductivity' > >;
    thermalExpansion?: Single< NumberProperty< 'thermalExpansion' > >;
    thermalDiffusivity?: Single< NumberProperty< 'thermalDiffusivity' > >;
    workFunction?: Single< NumberProperty< 'energy' > >;
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
    bulkModulus?: Single< NumberProperty< 'pressure' > >;
    shearModulus?: Single< NumberProperty< 'pressure' > >;
    youngModulus?: Single< NumberProperty< 'pressure' > >;
    poissonRatio?: Single< PrimitiveProperty< number > >;
    compressibility?: Single< NumberProperty< 'compressibility' > >;
    tensileStrength?: Single< NumberProperty< 'pressure' > >;
    yieldStrength?: Single< NumberProperty< 'pressure' > >;
    ultimateStrength?: Single< NumberProperty< 'pressure' > >;
  } >;

  electricity?: Group< {
    conductivity?: Single< NumberProperty< 'electricConductivity' > >;
    resistivity?: Single< NumberProperty< 'electricResistivity' > >;
    tempCoefficient?: Single< NumberProperty< 'tempCoefficient' > >;
    superconductivity?: Single< PrimitiveProperty< Superconductivity > >;
    superconductingPoint?: Single< NumberProperty< 'temperature' > >;
    bandGap?: Single< NumberProperty< 'energy' > >;
    dielectricConstant?: Single< PrimitiveProperty< number > >;
    dipoleMoment?: Single< NumberProperty< 'dipoleMoment' > >;
  } >;

  magnetism?: Group< {
    magneticOrdering?: Single< PrimitiveProperty< MagneticOrdering > >;
    magneticSusceptibility?: Single< NumberProperty< 'magneticSusceptibility' > >;
    molarMagneticSusceptibility?: Single< NumberProperty< 'molarMagneticSusceptibility' > >;
    massMagneticSusceptibility?: Single< NumberProperty< 'massMagneticSusceptibility' > >;
    curiePoint?: Single< NumberProperty< 'temperature' > >;
    neelPoint?: Single< NumberProperty< 'temperature' > >;
    magneticMoment?: Single< NumberProperty< 'magneticMoment' > >;
    coercivity?: Single< NumberProperty< 'magneticFieldStrength' > >;
    remanence?: Single< NumberProperty< 'magneticFluxDensity' > >;
    permeability?: Single< NumberProperty< 'magneticPermeability' > >;
  } >;

  optics?: Group< {
    refractiveIndex?: Single< PrimitiveProperty< number > >;
    reflectance?: Single< PrimitiveProperty< number > >;
    birefringence?: Single< PrimitiveProperty< number > >;
    v2Angle?: Single< NumberProperty< 'angle' > >;
    absorptionCoefficient?: Single< NumberProperty< 'absorptionCoefficient' > >;
    emissivity?: Single< PrimitiveProperty< number > >;
    transmittance?: Single< PrimitiveProperty< number > >;
    opacity?: Single< PrimitiveProperty< number > >;
    gloss?: Single< PrimitiveProperty< Gloss > >;
    lustre?: Single< PrimitiveProperty< Lustre > >;
    diaphaneity?: Single< PrimitiveProperty< Diaphaneity > >;
    color?: LangGroup;
    streak?: LangGroup;
  } >;

  acoustics?: Group< {
    soundSpeed?: Single< NumberProperty< 'velocity' > >;
    acousticImpedance?: Single< NumberProperty< 'acousticImpedance' > >;
    attenuationCoefficient?: Single< NumberProperty< 'attenuationCoefficient' > >;
  } >;

  surface?: Group< {
    surfaceTension?: Single< NumberProperty< 'surfaceTension' > >;
    contactAngle?: Single< NumberProperty< 'angle' > >;
  } >;

  viscosity?: Group< {
    dynamicViscosity?: Single< NumberProperty< 'dynamicViscosity' > >;
    kinematicViscosity?: Single< NumberProperty< 'kinematicViscosity' > >;
  } >;
} >;
