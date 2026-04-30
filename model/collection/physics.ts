/**
 * @file model/collection/physics.ts
 * @description Comprehensive physical properties covering thermodynamics, electromagnetism,
 * mechanics, optics, and acoustics.
 */

import type { Diaphaneity, Gloss, Lustre, MagneticOrdering, Phase, Superconductivity } from '../../enum/science/physics';
import type { Collection, Group, OneOrMany } from '../base/modifier';
import type { LangGroup } from '../base/primitive';
import type { CoupledNumberProperty, NumberProperty, PrimitiveProperty, RangeProperty, StructProperty } from '../base/property';
import type { NumberValue } from '../base/value';
import type { NoUnit } from '../registry/unit';

/** Grouping of fundamental physical characteristics and behavior. */
export type PhysicsCollection = Collection< {
  /** Mass per unit volume. */
  density?: OneOrMany< NumberProperty< 'density' > >;
  /** Ratio of the density of a substance to the density of a reference material. */
  relativeDensity?: OneOrMany< NumberProperty< NoUnit > >;
  /** The distinct state of matter at given conditions (Solid, Liquid, Gas, Plasma). */
  phase?: OneOrMany< PrimitiveProperty< Phase > >;

  /** Thermal properties and phase transition parameters. */
  thermodynamics?: Group< {
    /** Critical points and state transformation temperatures. */
    temperature?: Group< {
      /** Temperature at which a solid becomes a liquid. */
      meltingPoint?: OneOrMany< NumberProperty< 'temperature' > >;
      /** Temperature at which a liquid becomes a gas. */
      boilingPoint?: OneOrMany< NumberProperty< 'temperature' > >;
      /** Temperature range over which the substance remains liquid. */
      liquidRange?: OneOrMany< RangeProperty< 'temperature' > >;
      /** Generic temperature for other phase transformations. */
      phaseTransition?: OneOrMany< NumberProperty< 'temperature' > >;
      /** Temperature at which an amorphous solid becomes viscous. */
      glassTransition?: OneOrMany< NumberProperty<'temperature'> >;
      /** Temperature at which a solid directly becomes a gas. */
      sublimationPoint?: OneOrMany< NumberProperty< 'temperature' > >;
      /** Lowest temperature at which a liquid can form an ignitable vapor. */
      flashPoint?: OneOrMany< NumberProperty< 'temperature' > >;
      /** Lowest temperature at which a substance spontaneously ignites. */
      autoignitionTemp?: OneOrMany< NumberProperty< 'temperature' > >;
      /** Temperature and pressure at which liquid and gas phases become indistinguishable. */
      criticalPoint?: OneOrMany< CoupledNumberProperty< 'temperature' | 'pressure' > >;
      /** Temperature and pressure at which three phases coexist in equilibrium. */
      triplePoint?: OneOrMany< CoupledNumberProperty< 'temperature' | 'pressure' > >;
      /** Temperature of a crystal's highest-frequency normal mode of vibration. */
      debyeTemp?: OneOrMany< NumberProperty< 'temperature' > >;
    } >;
    /** Energy changes associated with state transitions and reactions. */
    enthalpy?: Group< {
      /** Heat change during fusion (melting). */
      fusion?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
      /** Heat change during vaporization. */
      vaporization?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
      /** Heat change during sublimation. */
      sublimation?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
      /** Energy required to separate a molecule into its constituent atoms. */
      atomization?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
      /** Heat change during the formation of the substance. */
      formation?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
      /** Heat released during complete combustion of the substance. */
      combustion?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
      /** Heat change during a specific chemical reaction. */
      reaction?: OneOrMany< NumberProperty< 'energy' > | NumberProperty< 'molarEnergy' > >;
    } >;
    /** Parameters governing thermal energy storage and transfer. */
    heat?: Group< {
      /** Amount of heat required to change the temperature of the sample by one degree. */
      heatCapacity?: OneOrMany< NumberProperty< 'heatCapacity' > >;
      /** Heat capacity per unit of substance (mole). */
      molarHeatCapacity?: OneOrMany< NumberProperty< 'molarHeatCapacity' > >;
      /** Heat capacity per unit mass. */
      specificHeatCapacity?: OneOrMany< NumberProperty< 'specificHeatCapacity' > >;
      /** Ability of the material to conduct heat. */
      thermalConductivity?: OneOrMany< NumberProperty< 'thermalConductivity' > >;
      /** Tendency of the material to change its volume in response to a change in temperature. */
      thermalExpansion?: OneOrMany< NumberProperty< 'tempCoefficient' > >;
      /** Rate at which heat spreads through the material. */
      thermalDiffusivity?: OneOrMany< NumberProperty< 'thermalDiffusivity' > >;
      /** Ratio of the specific heat at constant pressure to that at constant volume. */
      adiabaticIndex?: OneOrMany< NumberProperty< NoUnit > >;
    } >;
  } >;

  /** Electrical and magnetic behavior and responses. */
  electromagnetism?: Group< {
    /** Properties related to the flow and storage of electric charge. */
    electric?: Group< {
      /** Ability of the material to conduct electric current. */
      conductivity?: OneOrMany< NumberProperty< 'electricConductivity' > >;
      /** Measure of how strongly the material opposes the flow of electric current. */
      resistivity?: OneOrMany< NumberProperty< 'electricResistivity' > >;
      /** Relative change in electrical properties per degree of temperature. */
      tempCoefficient?: Group< {
        /** Temperature coefficient of electrical conductivity. */
        conductivity?: OneOrMany< NumberProperty< 'tempCoefficient' > >;
        /** Temperature coefficient of electrical resistivity. */
        resistivity?: OneOrMany< NumberProperty< 'tempCoefficient' > >;
      } >;
      /** Minimum energy required to remove an electron from the solid to a point in vacuum. */
      workFunction?: OneOrMany< NumberProperty< 'energy' > >;
      /** Energy range in a solid where no electron states can exist. */
      bandGap?: OneOrMany< NumberProperty< 'energy' > >;
      /** Ratio of the permittivity of the material to the permittivity of free space. */
      dielectricConstant?: OneOrMany< NumberProperty< NoUnit > >;
      /** Ability of the material to store electrical energy in an electric field. */
      permittivity?: OneOrMany< NumberProperty< 'electricPermittivity' > >;
      /** Separation of positive and negative electrical charges. */
      dipoleMoment?: OneOrMany< NumberProperty< 'electricDipoleMoment' > >;
      /** State of zero electrical resistance and expulsion of magnetic fields. */
      superconductivity?: OneOrMany< StructProperty< {
        /** Classification of the superconducting behavior. */
        type: Superconductivity;
        /** Temperature below which the material becomes superconducting. */
        criticalTemp?: NumberValue< 'temperature' >;
      } > >;
      /** Ratio of the induced electric field to the product of current density and magnetic field. */
      hallCoefficient?: OneOrMany< NumberProperty< 'hallCoefficient' > >;
      /** Ease with which an electron can move through the solid under an electric field. */
      electronMobility?: OneOrMany< NumberProperty< 'electronMobility' > >;
    } >;
    /** Response of the material to magnetic fields and its internal magnetic structure. */
    magnetic?: Group< {
      /** The nature of the material's magnetic alignment. */
      magneticOrdering?: OneOrMany< PrimitiveProperty< MagneticOrdering > >;
      /** Degree of magnetization in response to an applied magnetic field. */
      susceptibility?: OneOrMany< StructProperty< {
        /** Susceptibility per unit volume. */
        volumetric?: NumberValue< 'magneticSusceptibility' >;
        /** Susceptibility per unit of substance (mole). */
        molar?: NumberValue< 'molarMagneticSusceptibility' >;
        /** Susceptibility per unit mass. */
        mass?: NumberValue< 'massMagneticSusceptibility' >;
      } > >;
      /** Temperatures defining magnetic state transitions. */
      phaseTransitionTemp?: OneOrMany< StructProperty< {
        /** Temperature above which a ferromagnetic material becomes paramagnetic. */
        curie?: NumberValue< 'temperature' >;
        /** Temperature above which an antiferromagnetic material becomes paramagnetic. */
        neel?: NumberValue< 'temperature' >;
      } > >;
      /** Strength of the material's internal magnetic source. */
      magneticMoment?: OneOrMany< NumberProperty< 'magneticMoment' > >;
      /** Resistance of a ferromagnetic material to becoming demagnetized. */
      coercivity?: OneOrMany< NumberProperty< 'magneticFieldStrength' > >;
      /** Magnetization remaining after the external magnetic field is removed. */
      remanence?: OneOrMany< NumberProperty< 'magneticFluxDensity' > >;
      /** Ability of the material to support the formation of a magnetic field. */
      permeability?: OneOrMany< NumberProperty< 'magneticPermeability' > >;
      /** Density of permanent or induced magnetic dipole moments. */
      magnetization?: OneOrMany< NumberProperty< 'magnetization' > >;
    } >;
  } >;

  /** Response to physical forces, including hardness, elasticity, and fluid behavior. */
  mechanics?: Group< {
    /** Resistance of the solid to various kinds of permanent shape change when a force is applied. */
    hardness?: Group< {
      /** Hardness determined by indentation with a steel or carbide ball. */
      brinell?: OneOrMany< NumberProperty< NoUnit > >;
      /** Qualitative scale of mineral hardness based on scratch resistance. */
      mohs?: OneOrMany< NumberProperty< NoUnit > >;
      /** Hardness determined by indentation with a diamond pyramid. */
      vickers?: OneOrMany< NumberProperty< NoUnit > >;
      /** Hardness based on the depth of penetration of an indenter. */
      rockwell?: OneOrMany< NumberProperty< NoUnit > >;
      /** Microhardness test for brittle materials or thin sheets. */
      knoop?: OneOrMany< NumberProperty< NoUnit > >;
    } >;
    /** Ability of the material to resist distorting influences and return to its original size/shape. */
    elasticity?: Group< {
      /** Fundamental constants of linear elasticity. */
      elasticConstants?: Group< {
        /** Resistance to uniform compression. */
        bulkModulus?: OneOrMany< NumberProperty< 'pressure' > >;
        /** Resistance to shearing strain. */
        shearModulus?: OneOrMany< NumberProperty< 'pressure' > >;
        /** Resistance to linear compression or extension. */
        youngModulus?: OneOrMany< NumberProperty< 'pressure' > >;
        /** Ratio of transverse strain to axial strain. */
        poissonRatio?: OneOrMany< NumberProperty< NoUnit > >;
      } >;
      /** Points of structural failure under stress. */
      strengthLimits?: Group< {
        /** Maximum stress the material can withstand while being stretched. */
        tensile?: OneOrMany< NumberProperty< 'pressure' > >;
        /** The absolute maximum stress before catastrophic failure. */
        ultimate?: OneOrMany< NumberProperty< 'pressure' > >;
        /** Stress level at which plastic deformation begins. */
        yield?: OneOrMany< NumberProperty< 'pressure' > >;
      } >;
      /** Measure of the relative volume change of a fluid or solid as a response to pressure. */
      compressibility?: OneOrMany< NumberProperty< 'compressibility' > >;
    } >;
    /** Properties of the interface between the material and its environment. */
    surface?: Group< {
      /** Tendency of liquid surfaces to shrink into the minimum surface area possible. */
      surfaceTension?: OneOrMany< NumberProperty< 'surfaceTension' > >;
      /** Angle at which a liquid-vapor interface meets a solid surface. */
      contactAngle?: OneOrMany< NumberProperty< 'angle' > >;
      /** Work required to separate two surfaces. */
      adhesionEnergy?: OneOrMany< NumberProperty< 'energy' > >;
    } >;
    /** Parameters governing structural degradation and mechanical failure. */
    failure?: Group< {
      /** Failure through crack propagation. */
      fracture?: Group< {
        /** Resistance of the material to crack propagation. */
        fractureToughness?: OneOrMany< NumberProperty< 'fractureToughness' > >;
        /** Rate at which a fatigue crack increases in length. */
        crackGrowthRate?: OneOrMany< NumberProperty< 'rate' > >;
        /** Factor used in fracture mechanics to predict the stress state near a crack tip. */
        stressIntensityFactor?: OneOrMany< NumberProperty< 'stressIntensityFactor' > >;
      } >;
      /** Weakening of a material caused by repeatedly applied loads. */
      fatigue?: Group< {
        /** Maximum cyclic stress that can be applied to the material. */
        fatigueStrength?: OneOrMany< NumberProperty< 'pressure' > >;
        /** Stress level below which fatigue failure does not occur. */
        fatigueLimit?: OneOrMany< NumberProperty< 'pressure' > >;
        /** Number of load cycles a sample can sustain before failure. */
        cyclesToFailure?: OneOrMany< NumberProperty< NoUnit > >;
      } >;
      /** Tendency of a solid material to move slowly or deform permanently under the influence of persistent stresses. */
      creep?: Group< {
        /** Maximum stress the material can withstand for a given time without exceeding a creep limit. */
        creepStrength?: OneOrMany< NumberProperty< 'pressure' > >;
        /** Rate of deformation per unit time during creep. */
        creepRate?: OneOrMany< NumberProperty< 'rate' > >;
        /** Time-dependent strain per unit stress. */
        creepCompliance?: OneOrMany< NumberProperty< 'compressibility' > >;
      } >;
    } >;
    /** Physical properties of the material in a fluid state. */
    fluid?: Group< {
      /** Measure of a fluid's resistance to flow. */
      viscosity?: Group< {
        /** Resistance to shearing flows (internal friction). */
        dynamicViscosity?: OneOrMany< NumberProperty< 'dynamicViscosity' > >;
        /** Ratio of dynamic viscosity to the density of the fluid. */
        kinematicViscosity?: OneOrMany< NumberProperty< 'kinematicViscosity' > >;
      } >;
    } >;
  } >;

  /** Interaction with electromagnetic radiation, primarily in the visible spectrum. */
  optics?: Group< {
    /** Fundamental indices of refraction and absorption. */
    opticalConstants?: Group< {
      /** Ratio of the speed of light in vacuum to the speed of light in the material. */
      refractiveIndex?: OneOrMany< NumberProperty< NoUnit > >;
      /** Measure of the material's ability to attenuate light. */
      extinctionCoefficient?: OneOrMany< NumberProperty< NoUnit > >;
      /** Difference between the refractive indices of a material for different light polarizations. */
      birefringence?: OneOrMany< NumberProperty< NoUnit > >;
      /** Angle between the two optic axes in a biaxial crystal. */
      biaxialAngle?: OneOrMany< NumberProperty< 'angle' > >;
    } >;
    /** Quantitative measures of light interaction. */
    lightInteraction?: Group< {
      /** Proportion of incident light that is reflected by the surface. */
      reflectance?: OneOrMany< NumberProperty< NoUnit > >;
      /** Proportion of incident light that passes through the material. */
      transmittance?: OneOrMany< NumberProperty< NoUnit > >;
      /** Effectiveness of the surface in emitting energy as thermal radiation. */
      emissivity?: OneOrMany< NumberProperty< NoUnit > >;
      /** Measure of the rate of light energy loss in the material. */
      absorptionCoefficient?: OneOrMany< NumberProperty< 'attenuationCoefficient' > >;
      /** Measure of light redirection by particles or inhomogeneities. */
      scatteringCoefficient?: OneOrMany< NumberProperty< 'attenuationCoefficient' > >;
    } >;
    /** Qualitative and localized observations of visual properties. */
    appearance?: Group< {
      /** Degree to which a surface reflects light in a specular way. */
      gloss?: OneOrMany< PrimitiveProperty< Gloss > >;
      /** The way light interacts with the surface of a crystal, mineral, or rock. */
      lustre?: OneOrMany< PrimitiveProperty< Lustre > >;
      /** Ability of the material to transmit light (transparency). */
      diaphaneity?: OneOrMany< PrimitiveProperty< Diaphaneity > >;
      /** Localized description of the material's visual color. */
      color?: LangGroup< OneOrMany< PrimitiveProperty< string > > >;
      /** The color of the powder produced when the material is dragged across an unweathered surface. */
      streak?: LangGroup< OneOrMany< PrimitiveProperty< string > > >;
    } >;
  } >;

  /** Propagation of mechanical waves (sound) through the material. */
  acoustics?: Group< {
    /** Speed at which sound waves travel through the material. */
    soundSpeed?: OneOrMany< NumberProperty< 'velocity' > >;
    /** Speed of longitudinal sound waves in a bulk material. */
    bulkSoundSpeed?: OneOrMany< NumberProperty< 'velocity' > >;
    /** Rate at which sound energy is lost as it travels. */
    attenuationCoefficient?: OneOrMany< NumberProperty< 'attenuationCoefficient' > >;
    /** Opposition of the material to the acoustic flow. */
    acousticImpedance?: OneOrMany< NumberProperty< 'acousticImpedance' > >;
  } >;
} >;
