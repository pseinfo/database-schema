import { Collection, Group, Single } from '../abstract/collection';
import { CoupledNumberProperty, NumberProperty, PrimitiveProperty } from '../abstract/property';

export type PhysicsCollection = Collection< {

    // Fundamental physical properties
    density?: Single< NumberProperty< 'density' > >;
    phase?: Single< PrimitiveProperty< 'solid' | 'liquid' | 'gas' | 'unknown' > >;
    soundSpeed?: Single< NumberProperty< 'velocity' > >;

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

} >;
