/**
 * Nuclear Collection
 * Defines a set of nuclear properties for nuclides.
 * 
 * @module collections/nuclear
 */

import type { Collection, Group, Single } from '@/abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '@/abstract/property';


/**
 * NMRGroup
 * Nuclear Magnetic Resonance properties for nuclides.
 * 
 * @param spin - Nuclear spin quantum number
 * @param gyromagneticRatio - Gyromagnetic ratio of the nuclide
 * @param magneticMoment - Magnetic moment of the nuclide
 * @param larmorPrecession - Larmor precession frequency
 * @param sensitivity - Relative sensitivity of the nuclide in NMR
 * @param quadrupoleMoment - Quadrupole moment of the nuclide
 * @param referenceField - Reference magnetic field strength for NMR measurements
 * @param chemicalShiftReference - Chemical shift reference
 */
export type NMRGroup = Group< {
    spin?: Single< PrimitiveProperty< number > >;
    gyromagneticRatio?: Single< NumberProperty< 'magneticMoment' > >;
    magneticMoment?: Single< NumberProperty< 'magneticMoment' > >;
    larmorPrecession?: Single< NumberProperty< 'frequency' > >;
    sensitivity?: Single< PrimitiveProperty< number > >;
    quadrupoleMoment?: Single< NumberProperty< 'quantity' > >;
    referenceField?: Single< NumberProperty< 'magneticFieldStrength' > >;
    chemicalShiftReference?: Single< PrimitiveProperty< string > >;
} >;

/**
 * Collection for nuclear properties of nuclides.
 * 
 * @param atomicMass - Atomic mass of the nuclide
 * @param massExcess - Mass excess of the nuclide
 * @param bindingEnergyPerNucleon - Binding energy per nucleon
 * @param neutronSeparationEnergy - Neutron separation energy
 * @param protonSeparationEnergy - Proton separation energy
 * @param nuclearChargeRadius - Nuclear charge radius
 * @param excitationEnergy - Excitation energy levels
 * @param isomericTransitionEnergy - Isomeric transition energy for metastable states
 * @param qValue - Q value for electron capture
 * @param crossSection - Cross section data
 * @param nrm - NMR properties collection
 */
export type NuclearCollection = Collection< {
    atomicMass?: Single< NumberProperty< 'mass' > >;
    massExcess?: Single< NumberProperty< 'energy' > >;
    bindingEnergyPerNucleon?: Single< NumberProperty< 'energy' > >;
    neutronSeparationEnergy?: Single< NumberProperty< 'energy' > >;
    protonSeparationEnergy?: Single< NumberProperty< 'energy' > >;
    nuclearChargeRadius?: Single< NumberProperty< 'length' > >;
    excitationEnergy?: Single< NumberProperty< 'energy' > >;
    isomericTransitionEnergy?: Single< NumberProperty< 'energy' > >;
    qValue?: Single< NumberProperty< 'energy' > >;
    crossSection?: Group< {
        thermalNeutronCapture?: Single< NumberProperty< 'area' > >;
        resonanceIntegral?: Single< NumberProperty< 'area' > >;
        fission?: Single< NumberProperty< 'area' > >;
    } >;
    nrm?: NMRGroup;
} >;
