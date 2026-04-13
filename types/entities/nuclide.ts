/**
 * Nuclide Entity
 * Defines the database entity for nuclear isotopes and metastable nuclide states.
 * 
 * Nuclides are grouped by their parent chemical element and then by mass number
 * plus optional metastable state identifiers (e.g. "99", "99m", "99m1").
 * 
 * @module entities/nuclide
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { Collection, Distinct, Group, Single } from '../abstract/collection';
import type { NumberProperty, PrimitiveProperty, StructProperty } from '../abstract/property';
import type { NumberValue } from '../abstract/value';
import type { DescriptiveCollection } from '../collections/descriptive';
import type { MetaData } from '../collections/generic';
import type { NuclearCollection } from '../collections/nuclear';
import type { ElementSymbol } from '../enums/element';
import type { DecayMode, NuclideParity, NuclideProperty, NuclideStability, NuclideState, RadiationType } from '../enums/nuclide';


/** Valid nuclide identifiers with optional metastable state suffix. */
export type NuclideIdentifier = Brand< `${number}` | `${number}m` | `${number}m${number}`, 'nuclideID' >;

/** Nuclide collections */

/**
 * Collection for classification properties of nuclides.
 * 
 * @param element - Distinct parent element symbol
 * @param atomicNumber - Distinct atomic number (Z)
 * @param neutronNumber - Distinct neutron number (N)
 * @param massNumber - Distinct mass number (A)
 * @param state - Nuclide state (ground, metastable, etc.)
 * @param stability - Nuclide stability classification
 * @param parity - Parity classification
 * @param spinParity - Spin and parity information
 * @param isomericLevel - Isomeric level information for metastable states
 */
export type NuclideClassification = Collection< {
    element: Distinct< ElementSymbol >;
    atomicNumber: Distinct< number >;
    neutronNumber: Distinct< number >;
    massNumber: Distinct< number >;
    state?: Single< PrimitiveProperty< NuclideState > >;
    stability?: Single< PrimitiveProperty< NuclideStability > >;
    parity?: Single< PrimitiveProperty< NuclideParity > >;
    spinParity?: Single< PrimitiveProperty< string > >;
    isomericLevel?: Single< PrimitiveProperty< string > >;
} >;

/**
 * Type definition for a single radioactive decay channel of a nuclide.
 * 
 * @param mode - Decay mode (e.g. alpha, beta minus, etc.)
 * @param probability - Optional probability or branching ratio for this decay channel
 * @param product - Optional daughter nuclide produced by this decay channel
 * @param energy - Optional decay energy for this channel
 * @param radiation - Optional list of radiation types emitted during this decay channel
 */
export type DecayChannel = {
    mode: DecayMode;
    probability?: NumberValue< 'quantity' >;
    product?: NuclideIdentifier;
    energy?: NumberValue< 'energy' >;
    radiation?: RadiationType[];
};

/**
 * Collection for decay properties of nuclides.
 * 
 * @param halfLife - Half-life of the nuclide
 * @param decayChannels - List of decay channels for the nuclide
 * @param delayedNeutronEmission - Optional delayed neutron emission probability
 * @param delayedProtonEmission - Optional delayed proton emission probability
 */
export type DecayCollection = Collection< {
    halfLife?: Single< NumberProperty< 'time' > >;
    decayChannels?: Single< StructProperty< DecayChannel > >;
    delayedNeutronEmission?: Single< NumberProperty< 'quantity' > >;
    delayedProtonEmission?: Single< NumberProperty< 'quantity' > >;
} >;

/** Main nuclide entity */

/**
 * Type for a single nuclide entry (all properties).
 * 
 * @param descriptive - Descriptive properties collection
 * @param classification - Classification properties collection
 * @param nuclear - Nuclear properties collection
 * @param decay - Decay properties collection
 * @param properties - Distinct list of nuclide properties
 */
export type SingleNuclide = Collection< {
    descriptive: DescriptiveCollection;
    classification: NuclideClassification;
    nuclear?: NuclearCollection;
    decay?: DecayCollection;
    properties?: Distinct< NuclideProperty[] >;
} >;

/** Type description for a single nuclide entity. */
export type Nuclide = Expand< MetaData & SingleNuclide >;

/**
 * Type for the main nuclide collection grouped by element symbol and nuclide identifier.
 * 
 * The structure is a nested record where the first level keys are element symbols,
 * the second level keys are nuclide identifiers (mass number with optional metastable
 * state suffix), and the values are SingleNuclide objects containing all relevant
 * properties for each nuclide.
 */
export type Nuclides = Collection< {
    [ K in ElementSymbol ]?: {
        [ N in NuclideIdentifier ]?: Nuclide;
    };
} >;

/** Nuclide index */

/**
 * Type for a single entry in the generated nuclide index, keyed by z,n coordinate.
 * 
 * @param z - Atomic number (Z)
 * @param n - Neutron number (N)
 * @param m - Mass number (A)
 * @param nuclide - Nuclide identifier
 * @param element - Element symbol for the nuclide
 * @param layer - Group of layer values for this nuclide in the generated index, including:
 *   - halfLife: Half-life bucket category
 *   - mainDecayMode: Main decay mode category
 *   - nuclearRadius: Optional nuclear radius category
 *   - massExcess: Optional mass excess category
 *   - atomicMass: Optional atomic mass category
 *   - bindingEnergy: Optional binding energy category
 */
export type NuclideIndexEntry< Z extends number, N extends number > = Collection< {
    z: Distinct< Z >;
    n: Distinct< N >;
    m: Distinct< number >;
    nuclide: Distinct< NuclideIdentifier >;
    element: Distinct< ElementSymbol >;
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
 * Type for the generated nuclide index, keyed by z,n coordinate.
 * 
 * The index is structured as a nested record where the first level keys are atomic numbers (Z),
 * the second level keys are neutron numbers (N), and the values are NuclideIndexEntry objects
 * containing the relevant properties for each nuclide.
 */
export type NuclideIndex = Collection< {
    [ Z in number ]?: {
        [ N in number ]?: NuclideIndexEntry< Z, N >;
    };
} >;

/** Decay chains */

/**
 * Type definition for a single decay chain link in the generated decay chain export.
 * 
 * @param nuclide - Identifier of the nuclide in this decay chain link
 * @param mode - Decay mode for this link (null if stable)
 * @param probability - Optional decay probability for this link
 */
export type NuclideDecayChainLink = Group< {
    nuclide: Distinct< NuclideIdentifier >;
    mode: Distinct< DecayMode >;
    probability: Distinct< number | null >;
} >;

/**
 * Type for a single decay chain entry in the generated decay chain export.
 * 
 * @param nuclide - Identifier of the nuclide for this decay chain entry
 * @param z - Atomic number (Z) of the nuclide
 * @param n - Neutron number (N) of the nuclide
 * @param m - Mass number (A) of the nuclide
 * @param element - Element symbol for the nuclide
 * @param halfLife - Half-life of the nuclide (null if stable)
 * @param stable - Whether the nuclide is stable or not
 * @param daughterChains - List of daughter decay chain links for this nuclide
 * @param parentChains - List of parent decay chain links for this nuclide
 * @param chainDepth - Depth of this nuclide in the decay chain (0 for primordial)
 * @param isTerminal - Whether this nuclide is a terminal node
 */
export type NuclideDecayChainEntry< N extends NuclideIdentifier > = Collection< {
    nuclide: Distinct< N >;
    z: Distinct< number >;
    n: Distinct< number >;
    m: Distinct< number >;
    element: Distinct< ElementSymbol >;
    halfLife: Distinct< number | null >;
    stable: Distinct< boolean >;
    daughterChains: Distinct< NuclideDecayChainLink[] >;
    parentChains: Distinct< NuclideDecayChainLink[] >;
    chainDepth: Distinct< number >;
    isTerminal: Distinct< boolean >;
} >;

/**
 * Type for the generated decay chain export containing decay chain information for all nuclides.
 * 
 * The structure is a record where the keys are nuclide identifiers (e.g. "99mTc") and
 * the values are NuclideDecayChainEntry objects containing the relevant decay chain
 * information for each nuclide.
 */
export type NuclideDecayChains = Collection< {
    [ N in NuclideIdentifier ]?: NuclideDecayChainEntry< N >;
} >;

/**
 * Main nuclide entity type containing the main nuclide collection, the generated nuclide index,
 * and the generated decay chain export.
 * 
 * @param nuclides - Main collection of nuclides grouped by element and nuclide identifier
 * @param index - Generated nuclide index keyed by z,n coordinate
 * @param decayChains - Generated decay chain export containing decay chain information for all nuclides
 */
export type NuclideCollection = Collection< {
    nuclides: Nuclides;
    index: NuclideIndex;
    decayChains: NuclideDecayChains;
} >;
