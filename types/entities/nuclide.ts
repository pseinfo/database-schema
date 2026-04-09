/**
 * Nuclide Entity
 * Defines the database entity for nuclear isotopes and metastable nuclide states.
 * 
 * Nuclides are grouped by their parent chemical element and then by mass number
 * plus optional metastable state identifiers (e.g. "99", "99m", "99m1").
 */

import { Collection, Distinct, Single } from '../abstract/collection';
import { NumberProperty } from '../abstract/property';
import { DescriptiveCollection } from '../collections/descriptive';
import type { MetaData } from '../collections/generic';
import type { ElementSymbol, NuclideProperty, NuclideStability, NuclideState } from '../utils/const';

/** Valid nuclide identifiers with optional metastable state suffix. */
type NuclideIdentifier = `${number}` | `${number}m` | `${number}m${number}`;

/** Nuclide collections */

/**
 * NuclideClassification
 * Collection for classification properties of nuclides.
 * 
 * @param element - Parent element symbol
 * @param atomicNumber - Atomic number (Z)
 * @param neutronNumber - Neutron number (N)
 * @param massNumber - Mass number (A)
 * @param state - Nuclide state (ground, metastable, etc.)
 * @param stability - Nuclide stability classification
 * @param spinParity - Spin and parity information
 * @param parity - Parity classification
 * @param isomericLevel - Isomeric level information for metastable states
 */
type NuclideClassification = Collection< {
    element: Distinct< ElementSymbol >;
    atomicNumber: Distinct< number >;
    neutronNumber: Distinct< number >;
    massNumber: Distinct< number >;
    state?: Distinct< NuclideState >;
    stability?: Distinct< NuclideStability >;
    spinParity?: Distinct< string >;
    parity?: Distinct< '+' | '-' | 'unknown' >;
    isomericLevel?: Distinct< string >;
} >;

/**
 * NuclearCollection
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
 */
type NuclearCollection = Collection< {
    atomicMass?: Single< NumberProperty< 'mass' > >;
    massExcess?: Single< NumberProperty< 'energy' > >;
    bindingEnergyPerNucleon?: Single< NumberProperty< 'energy' > >;
    neutronSeparationEnergy?: Single< NumberProperty< 'energy' > >;
    protonSeparationEnergy?: Single< NumberProperty< 'energy' > >;
    nuclearChargeRadius?: Single< NumberProperty< 'length' > >;
    excitationEnergy?: Single< NumberProperty< 'energy' > >;
    isomericTransitionEnergy?: Single< NumberProperty< 'energy' > >;
} >;

/**
 * NMRCollection
 * Collection for NMR properties of nuclides.
 * 
 * @param resonanceSpin - Resonance spin information
 * @param gyromagneticRatio - Gyromagnetic ratio of the nuclide
 * @param magneticMoment - Magnetic moment of the nuclide
 * @param quadrupoleMoment - Quadrupole moment of the nuclide
 * @param resonanceFrequency - NMR resonance frequency
 * @param referenceField - Reference magnetic field strength for NMR measurements
 * @param relativeSensitivity - Relative sensitivity of the nuclide in NMR
 * @param chemicalShiftReference - Chemical shift reference information
 */
type NMRCollection = Collection< {
    resonanceSpin?: Distinct< string >;
    gyromagneticRatio?: Single< NumberProperty< 'quantity' > >;
    magneticMoment?: Single< NumberProperty< 'magneticMoment' > >;
    quadrupoleMoment?: Single< NumberProperty< 'quantity' > >;
    resonanceFrequency?: Single< NumberProperty< 'frequency' > >;
    referenceField?: Single< NumberProperty< 'magneticFieldStrength' > >;
    relativeSensitivity?: Single< NumberProperty< 'quantity' > >;
    chemicalShiftReference?: Distinct< string >;
} >;

type DecayCollection = Collection< {
    halfLife?: Single< NumberProperty< 'time' > >;
} >;

/** Main nuclide entity */

/**
 * SingleNuclide
 * Type for a single nuclide entry (all properties).
 * 
 * @param descriptive - Descriptive properties collection
 * @param classification - Classification properties collection
 * @param nuclear - Nuclear properties collection
 * @param nmr - NMR properties collection
 * @param decay - Decay properties collection
 * @param properties - Distinct list of nuclide properties
 */
type SingleNuclide = {
    descriptive: DescriptiveCollection;
    classification: NuclideClassification;
    nuclear?: NuclearCollection;
    nmr?: NMRCollection;
    decay?: DecayCollection;
    properties?: Distinct< NuclideProperty[] >;
};

/**
 * Nuclide
 * Entity type for nuclear isotopes, indexed by element symbol and nuclide identifier.
 * 
 * Each nuclide will have descriptive, classification, decay, NMR and
 * nuclear properties, as well as metadata.
 */
export type Nuclide = {
    [ K in ElementSymbol ]?: {
        [ A in NuclideIdentifier ]?: MetaData & SingleNuclide;
    };
};
