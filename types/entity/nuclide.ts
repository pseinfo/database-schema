/**
 * @file nuclide.ts
 * @description Defines the schema for nuclides (isotopes), including their classification,
 * stability, and complex decay network structures.
 */

import type { Brand } from 'devtypes/types/util';
import type { ElementSymbol } from '../../enum/element';
import type { DecayMode, NuclideProperty, NuclideStability, NuclideState, SpinParity } from '../../enum/nuclear';
import type { Collection, Distinct, Group } from '../abstract/collection';
import type { Factory, MetaData } from '../abstract/util';
import type { DescriptiveCollection } from '../collection/descriptive';
import type { GenericCollection } from '../collection/generic';
import type { NuclearCollection } from '../collection/nuclear';

/**
 * Formal identifier for a specific isotope or nuclear isomer.
 * Format: A or Am or Amm where A is the mass number and m denotes a metastable state.
 */
export type NuclideId = Brand< `${number}` | `${number}m` | `${number}m${number}`, 'nuclideID' >;

/**
 * Fundamental nuclear classification and identification metrics.
 * @template K - The specific chemical element symbol associated with this nuclide.
 */
export type NuclideClassification< K extends ElementSymbol > = Collection< {
  /** The chemical element to which this isotope belongs. */
  element: Distinct< K >;
  /** The number of protons (Z) in the nucleus. */
  atomicNumber: Distinct< number >;
  /** The number of neutrons (N) in the nucleus. */
  neutronNumber: Distinct< number >;
  /** The total number of nucleons (A = Z + N) in the nucleus. */
  massNumber: Distinct< number >;
  /** The energy state of the nucleus (e.g., ground state or meta-stable isomer). */
  state: Distinct< NuclideState >;
  /** The level of radioactive persistence (Stable vs. Unstable). */
  stability: Distinct< NuclideStability >;
  /** The symmetry properties and parity of the nuclear spin state. */
  parity: Distinct< SpinParity >;
  /** List of characteristic properties associated with this specific nuclide. */
  properties: Distinct< NuclideProperty[] >;
} >;

/**
 * Representation of a single nuclide including its nuclear structure data.
 * @template K - The specific chemical element symbol associated with this nuclide.
 */
export type SingleNuclide< K extends ElementSymbol > = Collection< {
  /** Human-readable names and historical discovery context. */
  descriptive: DescriptiveCollection;
  /** Primary nuclear identification and taxonomic data. */
  classification: NuclideClassification< K >;
  /** Generic, non-scientific data associated with the isotope. */
  generic?: GenericCollection;
  /** Detailed spectral and energy-level properties of the nucleus. */
  nuclear?: NuclearCollection;
} >;

/**
 * The core data structure for a nuclide, excluding metadata.
 * Designed for file-based database construction where metadata is enriched automatically.
 * @template K - The specific chemical element symbol associated with this nuclide.
 */
export type NuclideData< K extends ElementSymbol > = SingleNuclide< K >;

/**
 * The complete nuclide entity, including automatically enriched metadata.
 * @template K - The specific chemical element symbol associated with this nuclide.
 */
export type Nuclide< K extends ElementSymbol > = MetaData< NuclideData< K > >;

/**
 * Global registry of nuclides grouped by element and identified by their mass number.
 */
export type NuclideCollection = Collection< {
  /** The set of all isotopes associated with a specific chemical element. */
  [ K in ElementSymbol ]?: Collection< {
    [ N in NuclideId ]?: Nuclide< K >;
  } >;
} >;

/**
 * Factory for creating a nuclide entity.
 * @template K - The specific chemical element symbol associated with this nuclide.
 */
export type NuclideFactory< K extends ElementSymbol > = Factory<
  `data/nuclide/${ K }`, 'nuclide', NuclideId, NuclideData< K >
>;

/**
 * A dense summary record for a specific nuclide used in the auto-generated nuclide index.
 * @template Z - The nuclear charge (proton count) for this nuclide.
 * @template N - The neutron count for this nuclide.
 */
export type NuclideIndexEntry< Z extends number, N extends number > = Collection< {
  /** The unique mass-number based identifier for the isotope. */
  nuclide: Distinct< NuclideId >;
  /** The nuclear charge (Proton count). */
  z: Distinct< Z >;
  /** The neutron count. */
  n: Distinct< N >;
  /** The mass number. */
  a: Distinct< number >;
  /** The associated chemical element symbol. */
  element: Distinct< ElementSymbol >;
  /** Nuclear data for performance optimization and visualization. */
  layer: Group< {
    /** The characteristic time for half of a sample to decay. */
    halfLife?: Distinct< number >;
    /** The primary mechanism by which the unstable nucleus transforms. */
    mainDecayMode?: Distinct< DecayMode >;
    /** The effective root-mean-square radius of the nucleus. */
    nuclearRadius?: Distinct< number >;
    /** The difference between the actual isotope mass and its mass number. */
    massExcess?: Distinct< number >;
    /** The physical mass of the neutral atom. */
    atomicMass?: Distinct< number >;
    /** The energy equivalent of the nuclear mass deficit. */
    bindingEnergy?: Distinct< number >;
  } >;
} >;

/**
 * A multi-dimensional grid of all isotopes indexed by proton (Z) and neutron (N) count.
 * This will be auto-generated from the nuclide collection.
 * @template Z - The nuclear charge (proton count) used as the first key for indexing.
 * @template N - The neutron count used as the second key for indexing.
 */
export type NuclideIndex = Collection< {
  [ Z in number ]?: {
    [ N in number ]?: NuclideIndexEntry< Z, N >;
  };
} >;

/**
 * A directed edge in a nuclear decay network representing a single transformation step.
 */
export type NuclideDecayChainLink = Group< {
  /** The child nuclide (daughter) resulting from the decay. */
  nuclide: Distinct< NuclideId >;
  /** The mode of the radioactive transformation. */
  mode: Distinct< DecayMode >;
  /** The probability fraction of the parent decaying into this specific daughter. */
  probability: Distinct< number | null >;
} >;

/**
 * Detailed node in a radioactive decay chain, capturing parents and daughters.
 * @template N - The specific nuclide identifier type used as the key for the decay chain entries.
 */
export type NuclideDecayChainEntry< N extends NuclideId > = Collection< {
  /** The current nuclide in the decay network. */
  nuclide: Distinct< N >;
  /** The nuclear charge (Proton count). */
  z: Distinct< number >;
  /** The neutron count. */
  n: Distinct< number >;
  /** The mass number. */
  a: Distinct< number >;
  /** The associated chemical element symbol. */
  element: Distinct< ElementSymbol >;
  /** The characteristic time for half of a sample to decay. */
  halfLife: Distinct< number | null >;
  /** Whether the decay chain ends at this nuclear state. */
  stable: Distinct< boolean >;
  /** The possible decay paths leading from this nuclide to daughters. */
  daughterChains: Distinct< NuclideDecayChainLink[] >;
  /** The possible parent nuclides that decay into this nuclide. */
  parentChains: Distinct< NuclideDecayChainLink[] >;
  /** The distance from the primordial or starting parent in the network. */
  chainDepth: Distinct< number >;
  /** Whether this nuclide represents the final stable endpoint. */
  isTerminal: Distinct< boolean >;
} >;

/**
 * The complete network of all isotopic decay relationships in the database.
 * This will be auto-generated from the nuclide collection.
 * @template N - The specific nuclide identifier type used as the key for the decay chain entries.
 */
export type NuclideDecayChains = Collection< {
  [ N in NuclideId ]?: NuclideDecayChainEntry< N >;
} >;

/**
 * The comprehensive entity for all nuclear and isotopic data in the repository.
 */
export type NuclideEntity = {
  /** Detailed scientific records for each individual nuclide. */
  nuclides: NuclideCollection;
  /** Auto-generated index for fast lookup by proton/neutron counts. */
  index: NuclideIndex;
  /** Auto-generated graph of all radioactive decay paths and parent-child relationships. */
  decayChains: NuclideDecayChains;
};
