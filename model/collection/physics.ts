import type { Diaphaneity, Gloss, Lustre, MagneticOrdering, Phase, Superconductivity } from '../../enum/science/physics';
import type { Collection, Group, OneOrMany } from '../base/modifier';
import type { LangGroup } from '../base/primitive';
import type { CoupledNumberProperty, NumberProperty, PrimitiveProperty, RangeProperty, StructProperty } from '../base/property';
import type { NumberValue } from '../base/value';
import type { NoUnit } from '../registry/unit';

export type PhysicsCollection = Collection< {
  density?: OneOrMany< NumberProperty< 'density' > >;
  relativeDensity?: OneOrMany< NumberProperty< NoUnit > >;
  phase?: OneOrMany< PrimitiveProperty< Phase > >;

  thermodynamics?: Group< {
    temperature?: Group< {
      meltingPoint?: OneOrMany< NumberProperty< 'temperature' > >;
      boilingPoint?: OneOrMany< NumberProperty< 'temperature' > >;
      liquidRange?: OneOrMany< RangeProperty< 'temperature' > >;
      phaseTransition?: OneOrMany< NumberProperty< 'temperature' > >;
      glassTransition?: OneOrMany< NumberProperty<'temperature'> >;
      sublimationPoint?: OneOrMany< NumberProperty< 'temperature' > >;
      flashPoint?: OneOrMany< NumberProperty< 'temperature' > >;
      autoignitionTemp?: OneOrMany< NumberProperty< 'temperature' > >;
      criticalPoint?: OneOrMany< CoupledNumberProperty< 'temperature' | 'pressure' > >;
      triplePoint?: OneOrMany< CoupledNumberProperty< 'temperature' | 'pressure' > >;
      debyeTemp?: OneOrMany< NumberProperty< 'temperature' > >;
    } >;
    enthalpy?: Group< {
      fusion?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
      vaporization?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
      sublimation?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
      atomization?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
      formation?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
      combustion?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
      reaction?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
    } >;
    heat?: Group< {
      heatCapacity?: OneOrMany< NumberProperty< 'heatCapacity' > >;
      molarHeatCapacity?: OneOrMany< NumberProperty< 'molarHeatCapacity' > >;
      specificHeatCapacity?: OneOrMany< NumberProperty< 'specificHeatCapacity' > >;
      thermalConductivity?: OneOrMany< NumberProperty< 'thermalConductivity' > >;
      thermalExpansion?: OneOrMany< NumberProperty< 'tempCoefficient' > >;
      thermalDiffusivity?: OneOrMany< NumberProperty< 'thermalDiffusivity' > >;
      adiabaticIndex?: OneOrMany< NumberProperty< NoUnit > >;
    } >;
  } >;

  electromagnetism?: Group< {
    electric?: Group< {
      conductivity?: OneOrMany< NumberProperty< 'electricConductivity' > >;
      resistivity?: OneOrMany< NumberProperty< 'electricResistivity' > >;
      tempCoefficient?: Group< {
        conductivity?: OneOrMany< NumberProperty< 'tempCoefficient' > >;
        resistivity?: OneOrMany< NumberProperty< 'tempCoefficient' > >;
      } >;
      workFunction?: OneOrMany< NumberProperty< 'energy' > >;
      bandGap?: OneOrMany< NumberProperty< 'energy' > >;
      dielectricConstant?: OneOrMany< NumberProperty< NoUnit > >;
      permittivity?: OneOrMany< NumberProperty< 'electricPermittivity' > >;
      dipoleMoment?: OneOrMany< NumberProperty< 'electricDipoleMoment' > >;
      superconductivity?: OneOrMany< StructProperty< {
        type: Superconductivity;
        criticalTemp?: NumberValue< 'temperature' >;
      } > >;
      hallCoefficient?: OneOrMany< NumberProperty< 'hallCoefficient' > >;
      electronMobility?: OneOrMany< NumberProperty< 'electronMobility' > >;
    } >;
    magnetic?: Group< {
      magneticOrdering?: OneOrMany< PrimitiveProperty< MagneticOrdering > >;
      susceptibility?: OneOrMany< StructProperty< {
        volumetric?: NumberValue< 'magneticSusceptibility' >;
        molar?: NumberValue< 'molarMagneticSusceptibility' >;
        mass?: NumberValue< 'massMagneticSusceptibility' >;
      } > >;
      phaseTransitionTemp?: OneOrMany< StructProperty< {
        curie?: NumberValue< 'temperature' >;
        neel?: NumberValue< 'temperature' >;
      } > >;
      magneticMoment?: OneOrMany< NumberProperty< 'magneticMoment' > >;
      coercivity?: OneOrMany< NumberProperty< 'magneticFieldStrength' > >;
      remanence?: OneOrMany< NumberProperty< 'magneticFluxDensity' > >;
      permeability?: OneOrMany< NumberProperty< 'magneticPermeability' > >;
      magnetization?: OneOrMany< NumberProperty< 'magnetization' > >;
    } >;
  } >;

  mechanics?: Group< {
    hardness?: Group< {
      brinell?: OneOrMany< NumberProperty< NoUnit > >;
      mohs?: OneOrMany< NumberProperty< NoUnit > >;
      vickers?: OneOrMany< NumberProperty< NoUnit > >;
      rockwell?: OneOrMany< NumberProperty< NoUnit > >;
      knoop?: OneOrMany< NumberProperty< NoUnit > >;
    } >;
    elasticity?: Group< {
      elasticConstants?: Group< {
        bulkModulus?: OneOrMany< NumberProperty< 'pressure' > >;
        shearModulus?: OneOrMany< NumberProperty< 'pressure' > >;
        youngModulus?: OneOrMany< NumberProperty< 'pressure' > >;
        poissonRatio?: OneOrMany< NumberProperty< NoUnit > >;
      } >;
      strengthLimits?: Group< {
        tensile?: OneOrMany< NumberProperty< 'pressure' > >;
        ultimate?: OneOrMany< NumberProperty< 'pressure' > >;
        yield?: OneOrMany< NumberProperty< 'pressure' > >;
      } >;
      compressibility?: OneOrMany< NumberProperty< 'compressibility' > >;
    } >;
    surface?: Group< {
      surfaceTension?: OneOrMany< NumberProperty< 'surfaceTension' > >;
      contactAngle?: OneOrMany< NumberProperty< 'angle' > >;
      adhesionEnergy?: OneOrMany< NumberProperty< 'energy' > >;
    } >;
    failure?: Group< {
      fracture?: Group< {
        fractureToughness?: OneOrMany< NumberProperty< 'fractureToughness' > >;
        crackGrowthRate?: OneOrMany< NumberProperty< 'rate' > >;
        stressIntensityFactor?: OneOrMany< NumberProperty< 'stressIntensityFactor' > >;
      } >;
      fatigue?: Group< {
        fatigueStrength?: OneOrMany< NumberProperty< 'pressure' > >;
        fatigueLimit?: OneOrMany< NumberProperty< 'pressure' > >;
        cyclesToFailure?: OneOrMany< NumberProperty< NoUnit > >;
      } >;
      creep?: Group< {
        creepStrength?: OneOrMany< NumberProperty< 'pressure' > >;
        creepRate?: OneOrMany< NumberProperty< 'rate' > >;
        creepCompliance?: OneOrMany< NumberProperty< 'compressibility' > >;
      } >;
    } >;
    fluid?: Group< {
      viscosity?: Group< {
        dynamicViscosity?: OneOrMany< NumberProperty< 'dynamicViscosity' > >;
        kinematicViscosity?: OneOrMany< NumberProperty< 'kinematicViscosity' > >;
      } >;
    } >;
  } >;

  optics?: Group< {
    opticalConstants?: Group< {
      refractiveIndex?: OneOrMany< NumberProperty< NoUnit > >;
      extinctionCoefficient?: OneOrMany< NumberProperty< NoUnit > >;
      birefringence?: OneOrMany< NumberProperty< NoUnit > >;
      biaxialAngle?: OneOrMany< NumberProperty< 'angle' > >;
    } >;
    lightInteraction?: Group< {
      reflectance?: OneOrMany< NumberProperty< NoUnit > >;
      transmittance?: OneOrMany< NumberProperty< NoUnit > >;
      emissivity?: OneOrMany< NumberProperty< NoUnit > >;
      absorptionCoefficient?: OneOrMany< NumberProperty< 'attenuationCoefficient' > >;
      scatteringCoefficient?: OneOrMany< NumberProperty< 'attenuationCoefficient' > >;
    } >;
    appearance?: Group< {
      gloss?: OneOrMany< PrimitiveProperty< Gloss > >;
      lustre?: OneOrMany< PrimitiveProperty< Lustre > >;
      diaphaneity?: OneOrMany< PrimitiveProperty< Diaphaneity > >;
      color?: LangGroup< OneOrMany< PrimitiveProperty< string > > >;
      streak?: LangGroup< OneOrMany< PrimitiveProperty< string > > >;
    } >;
  } >;

  acoustics?: Group< {
    soundSpeed?: OneOrMany< NumberProperty< 'velocity' > >;
    bulkSoundSpeed?: OneOrMany< NumberProperty< 'velocity' > >;
    attenuationCoefficient?: OneOrMany< NumberProperty< 'attenuationCoefficient' > >;
    acousticImpedance?: OneOrMany< NumberProperty< 'acousticImpedance' > >;
  } >;
} >;
