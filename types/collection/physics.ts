/**
 * @file physics.ts
 * @description Defines macroscopic physical properties of substances, covering thermodynamics, mechanics,
 * electromagnetism, and optical characteristics.
 */

import type { Diaphaneity, Gloss, Lustre, MagneticOrdering, Phase, Superconductivity } from '../../enum/physics';
import type { Collection, Group, Single } from '../abstract/collection';
import type { CoupledNumberProperty, NumberProperty, PrimitiveProperty } from '../abstract/property';
import type { LangGroup } from '../abstract/util';

/**
 * Registry of physical properties describing the macroscopic behavior and state of matter.
 */
export type PhysicsCollection = Collection< {
  /** The mass per unit volume of the substance under specific conditions. */
  density?: Single< NumberProperty< 'density' > >;
  /** The ratio of the density of the substance to the density of a reference material (usually water). */
  relativeDensity?: Single< PrimitiveProperty< number > >;
  /** The primary physical state (solid, liquid, gas, plasma) of the substance. */
  phase?: Single< PrimitiveProperty< Phase > >;

  /** Grouping of temperature-dependent phase transitions and thermal limits. */
  temperature?: Group< {
    /** The temperature at which a solid substance changes state to a liquid. */
    meltingPoint?: Single< NumberProperty< 'temperature' > >;
    /** The temperature at which the vapor pressure of a liquid equals the external pressure. */
    boilingPoint?: Single< NumberProperty< 'temperature' > >;
    /** The temperature range over which a substance remains in the liquid phase. */
    liquidRange?: Single< NumberProperty< 'temperature' > >;
    /** The temperature at which a structural or electronic phase transition occurs. */
    transitionTemp?: Single< NumberProperty< 'temperature' > >;
    /** The temperature at which a solid changes directly into a gas without passing through the liquid phase. */
    sublimationPoint?: Single< NumberProperty< 'temperature' > >;
    /** The lowest temperature at which vapors of a fluid will ignite when given an ignition source. */
    flashPoint?: Single< NumberProperty< 'temperature' > >;
    /** The temperature at which a substance spontaneously ignites in a normal atmosphere. */
    autoignitionTemp?: Single< NumberProperty< 'temperature' > >;
    /** The state (temperature and pressure) above which distinct liquid and gas phases do not exist. */
    criticalPoint?: Single< CoupledNumberProperty< 'temperature' | 'pressure' > >;
    /** The state (temperature and pressure) at which solid, liquid, and gas phases coexist in equilibrium. */
    triplePoint?: Single< CoupledNumberProperty< 'temperature' | 'pressure' > >;
    /** A measure of the maximum frequency of lattice vibrations in a solid. */
    debyeTemp?: Single< NumberProperty< 'temperature' > >;
  } >;

  /** Grouping of thermodynamic energy changes associated with phase or chemical transitions. */
  enthalpy?: Group< {
    /** The energy required to change a substance from solid to liquid without changing its temperature. */
    fusionEnthalpy?: Single< NumberProperty< 'energy' > >;
    /** The energy required to change a substance from liquid to gas at its boiling point. */
    vaporisationEnthalpy?: Single< NumberProperty< 'energy' > >;
    /** The energy required for the direct transition of a solid to a gaseous state. */
    sublimationEnthalpy?: Single< NumberProperty< 'energy' > >;
    /** The energy change required to separate a molecule into its constituent atoms. */
    atomizationEnthalpy?: Single< NumberProperty< 'energy' > >;
    /** The change in enthalpy during the formation of one mole of a substance from its constituent elements. */
    formationEnthalpy?: Single< NumberProperty< 'energy' > >;
    /** The energy released as heat when a substance undergoes complete combustion with oxygen. */
    combustionEnthalpy?: Single< NumberProperty< 'energy' > >;
  } >;

  /** Grouping of thermal transport and storage properties. */
  heat?: Group< {
    /** The amount of heat required to raise the temperature of a given amount of substance by one degree. */
    heatCapacity?: Single< NumberProperty< 'heatCapacity' > >;
    /** The heat capacity of one mole of the substance. */
    molarHeatCapacity?: Single< NumberProperty< 'molarHeatCapacity' > >;
    /** The heat capacity per unit mass of the substance. */
    specificHeatCapacity?: Single< NumberProperty< 'specificHeatCapacity' > >;
    /** The rate at which heat passes through a specific thickness of the material. */
    thermalConductivity?: Single< NumberProperty< 'thermalConductivity' > >;
    /** The tendency of matter to change its shape, area, and volume in response to a change in temperature. */
    thermalExpansion?: Single< NumberProperty< 'thermalExpansion' > >;
    /** The rate of temperature spread through a material. */
    thermalDiffusivity?: Single< NumberProperty< 'thermalDiffusivity' > >;
    /** The minimum energy needed to remove an electron from a solid to a point in the vacuum. */
    workFunction?: Single< NumberProperty< 'energy' > >;
    /** The ratio of the heat capacity at constant pressure to heat capacity at constant volume. */
    adiabaticIndex?: Single< PrimitiveProperty< number > >;
  } >;

  /** Grouping of mechanical resistance scales for surface deformation. */
  hardness?: Group< {
    /** Hardness measured by the indentation depth of a hard steel or carbide ball. */
    brinellHardness?: Single< PrimitiveProperty< number > >;
    /** A qualitative scale of mineral hardness based on scratch resistance. */
    mohsHardness?: Single< PrimitiveProperty< number > >;
    /** Hardness measured using a square-based diamond pyramid indenter. */
    vickersHardness?: Single< PrimitiveProperty< number > >;
    /** Hardness based on the depth of penetration of a diamond or ball indenter. */
    rockwellHardness?: Single< PrimitiveProperty< number > >;
    /** Microhardness test for thin or brittle materials using a rhombic diamond indenter. */
    knoopHardness?: Single< PrimitiveProperty< number > >;
  } >;

  /** Grouping of properties describing the deformation of a material under stress. */
  elasticity?: Group< {
    /** Resistance of a substance to uniform compression. */
    bulkModulus?: Single< NumberProperty< 'pressure' > >;
    /** Resistance of a material to shearing deformation. */
    shearModulus?: Single< NumberProperty< 'pressure' > >;
    /** A measure of the stiffness of a solid material (tensile elasticity). */
    youngModulus?: Single< NumberProperty< 'pressure' > >;
    /** The ratio of transverse strain to axial strain. */
    poissonRatio?: Single< PrimitiveProperty< number > >;
    /** The fractional volume change per unit change in pressure. */
    compressibility?: Single< NumberProperty< 'compressibility' > >;
    /** The maximum stress that a material can withstand while being stretched. */
    tensileStrength?: Single< NumberProperty< 'pressure' > >;
    /** The stress level at which a material begins to deform plastically. */
    yieldStrength?: Single< NumberProperty< 'pressure' > >;
    /** The maximum stress a material can withstand before failing. */
    ultimateStrength?: Single< NumberProperty< 'pressure' > >;
  } >;

  /** Grouping of properties related to the movement of charge carriers. */
  electricity?: Group< {
    /** A measure of a material's ability to conduct an electric current. */
    conductivity?: Single< NumberProperty< 'electricConductivity' > >;
    /** A measure of how strongly a material opposes the flow of electric current. */
    resistivity?: Single< NumberProperty< 'electricResistivity' > >;
    /** The relative change of a physical property per degree of temperature change. */
    tempCoefficient?: Single< NumberProperty< 'tempCoefficient' > >;
    /** The type or mechanism of zero electrical resistance behavior. */
    superconductivity?: Single< PrimitiveProperty< Superconductivity > >;
    /** The critical temperature below which a material becomes superconducting. */
    superconductingPoint?: Single< NumberProperty< 'temperature' > >;
    /** The energy range in a solid where no electron states can exist. */
    bandGap?: Single< NumberProperty< 'energy' > >;
    /** A measure of a material's ability to store electrical energy in an electric field. */
    dielectricConstant?: Single< PrimitiveProperty< number > >;
    /** The product of magnitude of charges and distance between them in a molecule. */
    dipoleMoment?: Single< NumberProperty< 'dipoleMoment' > >;
  } >;

  /** Grouping of properties describing a material's response to magnetic fields. */
  magnetism?: Group< {
    /** The fundamental magnetic state of the material (e.g., ferromagnetism). */
    magneticOrdering?: Single< PrimitiveProperty< MagneticOrdering > >;
    /** A measure of the degree to which a substance becomes magnetized in an external field. */
    magneticSusceptibility?: Single< NumberProperty< 'magneticSusceptibility' > >;
    /** The magnetic susceptibility per mole of the substance. */
    molarMagneticSusceptibility?: Single< NumberProperty< 'molarMagneticSusceptibility' > >;
    /** The magnetic susceptibility per unit mass of the substance. */
    massMagneticSusceptibility?: Single< NumberProperty< 'massMagneticSusceptibility' > >;
    /** The temperature above which a ferromagnetic material becomes paramagnetic. */
    curiePoint?: Single< NumberProperty< 'temperature' > >;
    /** The temperature above which an antiferromagnetic material becomes paramagnetic. */
    neelPoint?: Single< NumberProperty< 'temperature' > >;
    /** The magnetic strength and orientation of a magnet or other object that produces a magnetic field. */
    magneticMoment?: Single< NumberProperty< 'magneticMoment' > >;
    /** The resistance of a ferromagnetic material to changes in magnetization. */
    coercivity?: Single< NumberProperty< 'magneticFieldStrength' > >;
    /** The magnetization left behind after an external magnetic field is removed. */
    remanence?: Single< NumberProperty< 'magneticFluxDensity' > >;
    /** The ability of a material to support the formation of a magnetic field within itself. */
    permeability?: Single< NumberProperty< 'magneticPermeability' > >;
  } >;

  /** Grouping of properties describing the behavior of light within and on the surface of the material. */
  optics?: Group< {
    /** The ratio of the speed of light in vacuum to the speed of light in the medium. */
    refractiveIndex?: Single< PrimitiveProperty< number > >;
    /** The fraction of incident electromagnetic power that is reflected at an interface. */
    reflectance?: Single< PrimitiveProperty< number > >;
    /** The difference between the refractive indices for light with different polarizations. */
    birefringence?: Single< PrimitiveProperty< number > >;
    /** The angle between the optical axes in biaxial crystals. */
    v2Angle?: Single< NumberProperty< 'angle' > >;
    /** A measure of the rate of decrease in the intensity of electromagnetic radiation as it passes through a given substance. */
    absorptionCoefficient?: Single< NumberProperty< 'absorptionCoefficient' > >;
    /** The ratio of the energy radiated from a material's surface to that radiated from a blackbody. */
    emissivity?: Single< PrimitiveProperty< number > >;
    /** The fraction of incident light that passes through the sample. */
    transmittance?: Single< PrimitiveProperty< number > >;
    /** The measure of impenetrability to electromagnetic or other kinds of radiation. */
    opacity?: Single< PrimitiveProperty< number > >;
    /** The attribute of visual perception by which a body appears to reflect light specularly. */
    gloss?: Single< PrimitiveProperty< Gloss > >;
    /** The appearance of a material surface in terms of its light-reflective qualities. */
    lustre?: Single< PrimitiveProperty< Lustre > >;
    /** The degree to which a substance allows light to pass through it. */
    diaphaneity?: Single< PrimitiveProperty< Diaphaneity > >;
    /** The perceived color of the substance in its bulk form. */
    color?: LangGroup;
    /** The color of the powder produced when the material is dragged across an unweathered surface. */
    streak?: LangGroup;
  } >;

  /** Grouping of properties related to the transmission of mechanical waves. */
  acoustics?: Group< {
    /** The distance traveled per unit time by a sound wave as it propagates through a medium. */
    soundSpeed?: Single< NumberProperty< 'velocity' > >;
    /** The product of the density of the medium and the speed of sound in it. */
    acousticImpedance?: Single< NumberProperty< 'acousticImpedance' > >;
    /** The rate at which sound energy is lost as it propagates through a material. */
    attenuationCoefficient?: Single< NumberProperty< 'attenuationCoefficient' > >;
  } >;

  /** Grouping of properties describing the interface between different phases. */
  surface?: Group< {
    /** The elastic-like force that exists in the surface of a liquid, tending to minimize surface area. */
    surfaceTension?: Single< NumberProperty< 'surfaceTension' > >;
    /** The angle at which a liquid-vapor interface meets a solid surface. */
    contactAngle?: Single< NumberProperty< 'angle' > >;
  } >;

  /** Grouping of properties describing the internal friction of a fluid. */
  viscosity?: Group< {
    /** A measure of the resistance of a fluid to deformation under shear stress. */
    dynamicViscosity?: Single< NumberProperty< 'dynamicViscosity' > >;
    /** The ratio of dynamic viscosity to the density of the fluid. */
    kinematicViscosity?: Single< NumberProperty< 'kinematicViscosity' > >;
  } >;
} >;
