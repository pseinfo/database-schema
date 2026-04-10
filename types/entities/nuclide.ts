/**
 * Nuclide Entity
 * Defines the database entity for nuclear isotopes and metastable nuclide states.
 * 
 * Nuclides are grouped by their parent chemical element and then by mass number
 * plus optional metastable state identifiers (e.g. "99", "99m", "99m1").
 */

import type { Collection, Distinct, Group, Single } from '../abstract/collection';
import type { NumberProperty } from '../abstract/property';
import type { DescriptiveCollection } from '../collections/descriptive';
import type { MetaData } from '../collections/generic';
import type { DecayMode, ElementSymbol, NuclideProperty, NuclideStability, NuclideState, RadiationType } from '../utils/const';

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
 * @param qValue - Q value for electron capture
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
    qValue?: Single< NumberProperty< 'energy' > >;
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

/**
 * DecayChannel
 * Type for a single radioactive decay channel of a nuclide.
 * 
 * @param mode - Decay mode (e.g. alpha, beta minus, etc.)
 * @param probability - Optional probability or branching ratio for this decay channel
 * @param product - Optional daughter nuclide produced by this decay channel
 * @param energy - Optional decay energy for this channel
 * @param radiation - Optional list of radiation types emitted during this decay channel
 */
type DecayChannel = Distinct< {
    mode: Distinct< DecayMode >;
    probability?: Single< NumberProperty< 'quantity' > >;
    product?: Distinct< string >;
    energy?: Single< NumberProperty< 'energy' > >;
    radiation?: Distinct< RadiationType[] >;
} >;

/**
 * DecayCollection
 * Collection for decay properties of nuclides.
 * 
 * @param halfLife - Half-life of the nuclide
 * @param decayChannels - List of decay channels for the nuclide
 * @param delayedNeutronEmission - Optional delayed neutron emission probability
 * @param delayedProtonEmission - Optional delayed proton emission probability
 */
type DecayCollection = Collection< {
    halfLife?: Single< NumberProperty< 'time' > >;
    decayChannels?: Distinct< DecayChannel[] >;
    delayedNeutronEmission?: Single< NumberProperty< 'quantity' > >;
    delayedProtonEmission?: Single< NumberProperty< 'quantity' > >;
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
type SingleNuclide = Collection< {
    descriptive: DescriptiveCollection;
    classification: NuclideClassification;
    nuclear?: NuclearCollection;
    nmr?: NMRCollection;
    decay?: DecayCollection;
    properties?: Distinct< NuclideProperty[] >;
} >;

/**
 * Nuclides
 * Type for the main nuclide collection grouped by element symbol and nuclide identifier.
 * 
 * The structure is a nested record where the first level keys are element symbols,
 * the second level keys are nuclide identifiers (mass number with optional metastable
 * state suffix), and the values are SingleNuclide objects containing all relevant
 * properties for each nuclide.
 */
type Nuclides = Collection< {
    [ K in ElementSymbol ]?: {
        [ N in NuclideIdentifier ]?: MetaData & SingleNuclide;
    };
} >;

/** Nuclide index */

/**
 * NuclideIndexEntry
 * Type for a single entry in the generated nuclide index, keyed by z,n coordinate.
 * 
 * @param z - Atomic number (Z)
 * @param n - Neutron number (N)
 * @param m - Mass number (A)
 * @param element - Element symbol for the nuclide
 * @param symbol - Parsed nuclide symbol (e.g. "99mTc")
 * @param layer - Group of layer values for this nuclide in the generated index, including:
 *   - halfLife: Half-life bucket category
 *   - mainDecayMode: Main decay mode category
 *   - nuclearRadius: Optional nuclear radius category
 *   - massExcess: Optional mass excess category
 *   - atomicMass: Optional atomic mass category
 *   - bindingEnergy: Optional binding energy category
 */
type NuclideIndexEntry< Z extends number, N extends number > = Collection< {
    z: Distinct< Z >;
    n: Distinct< N >;
    m: Distinct< number >;
    element: Distinct< ElementSymbol >;
    symbol: Distinct< string >;
    layer: Group< {
        halfLife?: Distinct< number >;
        mainDecayMode?: Distinct< DecayMode >;
        nuclearRadius?: Distinct< number >;
        massExcess?: Distinct< number >;
        atomicMass?: Distinct< number >;
        bindingEnergy?: Distinct< number >;
    } >;
} >;

/**
 * NuclideIndex
 * Type for the generated nuclide index, keyed by z,n coordinate.
 * 
 * The index is structured as a nested record where the first level keys are atomic numbers (Z),
 * the second level keys are neutron numbers (N), and the values are NuclideIndexEntry objects
 * containing the relevant properties for each nuclide.
 */
type NuclideIndex = Collection< {
    [ Z in number ]?: {
        [ N in number ]?: NuclideIndexEntry< Z, N >;
    };
} >;

/** Decay chains */

type NuclideDecayChainEntry< N extends NuclideIdentifier > = Collection< {
    nuclide: N;
    z: Distinct< number >;
    n: Distinct< number >;
    m: Distinct< number >;
    element: Distinct< ElementSymbol >;
    symbol: Distinct< string >;
    halfLife: Distinct< number | undefined >;
    stable: Distinct< boolean >;
    chainDepth: Distinct< number >;
    isTerminal: Distinct< boolean >;
} >;

type NuclideDecayChains = Collection< {
    [ N in NuclideIdentifier ]?: NuclideDecayChainEntry< N >;
} >;

/**
 * Nuclide
 * Main nuclide entity type containing the main nuclide collection, the generated nuclide index,
 * and the generated decay chain export.
 * 
 * @param nuclides - Main collection of nuclides grouped by element and nuclide identifier
 * @param index - Generated nuclide index keyed by z,n coordinate
 * @param decayChains - Generated decay chain export containing decay chain information for all nuclides
 */
export type Nuclide = {
    nuclides: Nuclides;
    index: NuclideIndex;
    decayChains: NuclideDecayChains;
};
