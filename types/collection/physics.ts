import type { Collection, Group, Single } from '../abstract/collection';
import type { CoupledNumberProperty, NumberProperty, PrimitiveProperty, StructProperty } from '../abstract/property';
import type { ElementSymbol } from '../enum/element';
import type { Phase } from '../enum/generic';
import type { CrystalFamily, CrystalSystem, MagneticOrdering, Superconductivity } from '../enum/physics';

export type PhysicsCollection = Collection< {
  density?: Single< NumberProperty< 'density' > >;
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
    fusionEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
    vaporisationEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
    sublimationEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
    atomizationEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
    formationEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
    combustionEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
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
    temperatureCoefficient?: Single< NumberProperty< 'tempCoefficient' > >;
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
    absorptionCoefficient?: Single< NumberProperty< 'absorptionCoefficient' > >;
    emissivity?: Single< PrimitiveProperty< number > >;
    transmittance?: Single< PrimitiveProperty< number > >;
    opacity?: Single< PrimitiveProperty< number > >;
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

  crystal?: Group< {
    family?: Single< PrimitiveProperty< CrystalFamily > >;
    system?: Single< PrimitiveProperty< CrystalSystem > >;
    pearsonSymbol?: Single< PrimitiveProperty< string > >;
    pointGroup?: Single< StructProperty< {
      number: number;
      name: string;
      hermannMauguin?: string;
      schoenflies?: string;
    } > >;
    laueGroup?: string;
    spaceGroup?: Single< StructProperty< {
      number: number;
      symbol: string;
    } > >;
    latticeConstant?: Single< StructProperty< {
      a?: number;
      b?: number;
      c?: number;
      alpha?: number;
      beta?: number;
      gamma?: number;
    } > >;
    ligancy?: Single< StructProperty< {
      [ K in ElementSymbol ]?: number;
    } > >;
    twinning?: Single< PrimitiveProperty< string > >;
    habit?: Single< PrimitiveProperty< string > >;
    faces?: Single< PrimitiveProperty< string > >;
  } >;
} >;
