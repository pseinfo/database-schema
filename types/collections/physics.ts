/**
 * Physics Collection
 * Defines a set of physical properties for elements, materials and substances.
 */

import { Collection, Group, Single } from '../abstract/collection';
import { CoupledNumberProperty, NumberProperty, PrimitiveProperty } from '../abstract/property';
import { Phase } from '../utils/const';

/**
 * PhysicsCollection
 * Collection for physical properties of elements.
 * 
 * @param density - Density of the element or substance
 * @param phase - Standard phase at room temperature
 * @param temperature - Temperature-related properties
 * @param enthalpy - Enthalpy properties
 * @param heat - Heat properties
 * @param hardness - Hardness properties
 * @param elasticity - Elasticity and mechanical properties
 * @param electricity - Electrical properties
 * @param magnetism - Magnetic properties
 * @param optics - Optical properties
 * @param acoustics - Acoustic properties
 * @param surface - Surface properties
 * @param viscosity - Viscosity and flow properties
 */
export type PhysicsCollection = Collection< {

    // Fundamental physical properties
    density?: Single< NumberProperty< 'density' > >;
    phase?: Single< PrimitiveProperty< Phase > >;

    // Temperature-related properties
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

    // Enthalpy properties
    enthalpy?: Group< {
        fusionEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
        vaporisationEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
        sublimationEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
        atomizationEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
        formationEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
        combustionEnthalpy?: Single< NumberProperty< 'enthalpy' > >;
    } >;

    // Heat properties
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

    // Hardness properties
    hardness?: Group< {
        brinellHardness?: Single< PrimitiveProperty< number > >;
        mohsHardness?: Single< PrimitiveProperty< number > >;
        vickersHardness?: Single< PrimitiveProperty< number > >;
        rockwellHardness?: Single< PrimitiveProperty< number > >;
        knooHardness?: Single< PrimitiveProperty< number > >;
    } >;

    // Elasticity and mechanical properties
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

    // Electrical properties
    electricity?: Group< {
        electricalConductivity?: Single< NumberProperty< 'electricalConductivity' > >;
        electricalResistivity?: Single< NumberProperty< 'electricalResistivity' > >;
        temperatureCoefficient?: Single< NumberProperty< 'temperatureCoefficient' > >;
        superconductingPoint?: Single< NumberProperty< 'temperature' > >;
        bandGap?: Single< NumberProperty< 'energy' > >;
        dielectricConstant?: Single< PrimitiveProperty< number > >;
    } >;

    // Magnetic properties
    magnetism?: Group< {
        magneticOrdering?: Single< PrimitiveProperty<
            'diamagnetic' | 'paramagnetic' | 'ferromagnetic' | 'antiferromagnetic' |
            'ferrimagnetic' | 'superparamagnetic'
        > >;
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

    // Optical properties
    optics?: Group< {
        refractiveIndex?: Single< PrimitiveProperty< number > >;
        reflectance?: Single< PrimitiveProperty< number > >;
        absorptionCoefficient?: Single< NumberProperty< 'absorptionCoefficient' > >;
        emissivity?: Single< PrimitiveProperty< number > >;
        transmittance?: Single< PrimitiveProperty< number > >;
        opacity?: Single< PrimitiveProperty< number > >;
        color?: Single< PrimitiveProperty< string > >;
        luster?: Single< PrimitiveProperty< 'metallic' | 'vitreous' | 'pearly' | 'dull' | 'adamantine' > >;
    } >;

    // Acoustic properties
    acoustics?: Group< {
        soundSpeed?: Single< NumberProperty< 'velocity' > >;
        acousticImpedance?: Single< NumberProperty< 'acousticImpedance' > >;
        attenuationCoefficient?: Single< NumberProperty< 'attenuationCoefficient' > >;
    } >;

    // Surface properties
    surface?: Group< {
        surfaceTension?: Single< NumberProperty< 'surfaceTension' > >;
        contactAngle?: Single< NumberProperty< 'angle' > >;
    } >;

    // Viscosity and flow properties
    viscosity?: Group< {
        dynamicViscosity?: Single< NumberProperty< 'dynamicViscosity' > >;
        kinematicViscosity?: Single< NumberProperty< 'kinematicViscosity' > >;
    } >;

} >;
