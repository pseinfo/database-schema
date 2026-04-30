/**
 * @file model/domain/nuclide.ts
 * @description Models atomic nuclei (nuclides), defining their nuclear properties,
 * isotopic relationships, and decay characteristics.
 */

import type { Brand } from 'devtypes/types/util';
import type { ElementSymbol } from '../../enum/science/element';
import type { DecayMode, SpinParity } from '../../enum/science/nuclear';
import type { NuclideOrigin, NuclideProperty, NuclideStability, NuclideState } from '../../enum/science/nuclide';
import type { DomainType } from '../../enum/system/domain';
import type { Factory } from '../base/factory';
import type { Collection, Distinct } from '../base/modifier';
import type { DescriptiveCollection } from '../collection/descriptive';
import type { GenericCollection } from '../collection/generic';
import type { HistoryCollection } from '../collection/history';
import type { MediaCollection } from '../collection/media';
import type { NuclearCollection } from '../collection/nuclear';
import type { Metadata } from '../utility/meta';
import type { Weblinks } from '../utility/weblinks';

/**
 * Unique identifier for a nuclide, combining the element symbol with its mass number and isomer state.
 * 
 * @template E The chemical element symbol.
 */
export type NuclideId< E extends ElementSymbol = ElementSymbol > = Brand<
  `${ E }-${ `${ number }` | `${ number }m` | `${ number }m${ number }` }`, 'nuclideID'
>;

/**
 * Fundamental classification and nuclear parameters of a nuclide.
 * 
 * @template K The chemical element symbol.
 */
export type NuclideClassification< K extends ElementSymbol > = Collection< {
  /** The parent chemical element of the nuclide. */
  element: Distinct< K >;
  /** The number of protons (Z) in the nucleus. */
  atomicNumber: Distinct< number >;
  /** The number of neutrons (N) in the nucleus. */
  neutronNumber: Distinct< number >;
  /** The total number of nucleons (A = Z + N). */
  massNumber: Distinct< number >;
  /** Excitation state of the nuclide (Ground state or Isomer). */
  state: Distinct< NuclideState >;
  /** Nuclear stability classification (Stable or Radioactive). */
  stability: Distinct< NuclideStability >;
  /** Natural or artificial origin of the nuclide. */
  origin: Distinct< NuclideOrigin >;
  /** The primary physical mode of radioactive decay. */
  mainDecayMode: Distinct< DecayMode | null >;
  /** Total angular momentum and parity of the ground state. */
  parity: Distinct< SpinParity >;
  /** List of primary scientific properties associated with this nuclide. */
  properties: Distinct< NuclideProperty >[];
} >;

/**
 * Representation of a single nuclide as a discrete nuclear entity.
 * 
 * @template K The chemical element symbol.
 */
export type SingleNuclide< K extends ElementSymbol > = Collection< {
  /** Fundamental nuclear classification data. */
  classification: NuclideClassification< K >;
  /** Qualitative observations and localized names. */
  descriptive: DescriptiveCollection;
  /** General non-scientific and economic properties. */
  generic?: GenericCollection;
  /** Chronological documentation of discovery and characterization. */
  history?: HistoryCollection;
  /** Comprehensive nuclear structure and radiation data. */
  nuclear?: NuclearCollection;
  /** Visual assets and digital nuclear documentation. */
  media?: MediaCollection;
  /** External links to nuclear databases (e.g., ENSDF). */
  weblinks?: Weblinks;
} >;

/**
 * Complete data model for a nuclide.
 * 
 * @template K The chemical element symbol.
 */
export type NuclideData< K extends ElementSymbol > = SingleNuclide< K >;

/**
 * A nuclide enriched with system and versioning metadata.
 * 
 * @template K The chemical element symbol.
 */
export type Nuclide< K extends ElementSymbol > = Metadata< NuclideData< K > >;

/** Nested collection of all nuclides, categorized by element and nuclide ID. */
export type NuclideCollection = Collection< {
  [ K in ElementSymbol ]?: Collection< {
    [ N in NuclideId< K > ]?: Nuclide< K >;
  } >;
} >;

/**
 * Factory for constructing standardized nuclide entities.
 * 
 * @template K The chemical element symbol.
 */
export type NuclideFactory< K extends ElementSymbol > = Factory< DomainType.NUCLIDE, NuclideData< K >, {
  /** The parent element symbol. */
  element: K;
  /** The specific nuclide identifier. */
  nuclide: NuclideId< K >;
  /** Number of protons. */
  z: number;
  /** Number of neutrons. */
  n: number;
} >;

/**
 * Compact indexing structure for efficient nuclide lookup and data overlays.
 * This structure is automatically generated from the primary nuclide dataset.
 * 
 * @template Z The atomic number.
 * @template N The neutron number.
 */
export type NuclideIndexEntry< Z extends number, N extends number > = {
  /** The target nuclide identifier. */
  nuclide: NuclideId;
  /** Proton count. */
  z: Z;
  /** Neutron count. */
  n: N;
  /** Nucleon count (A). */
  a: number;
  /** Parent chemical element. */
  element: ElementSymbol;
  /** Selection of pre-calculated nuclear parameters for indexing. */
  layer: {
    /** Documented half-life in seconds. */
    halfLife?: number;
    /** Primary radioactive decay mode. */
    mainDecayMode?: DecayMode;
    /** Minimum number of transitions to reach a stable state. */
    minStepsToStable?: number;
    /** Nuclear charge radius. */
    nuclearRadius?: number;
    /** Mass excess in energy units. */
    massExcess?: number;
    /** Atomic mass of the neutral atom. */
    atomicMass?: number;
    /** Average binding energy per nucleon. */
    bindingEnergy?: number;
    /** Year of initial discovery or observation. */
    discovery?: number;
  };
};

/**
 * Multi-dimensional index of all nuclides, organized by Z and N coordinates.
 * Used for rendering the nuclide chart and is automatically generated.
 */
export type NuclideIndex = Collection< {
  [ Z in number ]?: Collection< {
    [ N in number ]?: Distinct< NuclideIndexEntry< Z, N > >;
  } >;
} >;

/** Represents a single link within a nuclear decay chain. */
export type NuclideDecayChainLink = {
  /** Target nuclide in the decay sequence. */
  nuclide: NuclideId;
  /** The specific mode of transition. */
  mode: DecayMode;
  /** Mathematical probability of the specific decay branch. */
  probability: number | null;
};

/**
 * Comprehensive entry defining the position of a nuclide within global decay networks.
 * These entries are automatically generated by analyzing radioactive transitions.
 * 
 * @template N The nuclide identifier.
 */
export type NuclideDecayChainEntry< N extends NuclideId > = {
  /** The specific nuclide identifier. */
  nuclide: N;
  /** Proton count. */
  z: number;
  /** Neutron count. */
  n: number;
  /** Nucleon count. */
  a: number;
  /** Parent chemical element. */
  element: ElementSymbol;
  /** Half-life of the nuclide or null if stable. */
  halfLife: number | null;
  /** Indicates if the nuclide is stable. */
  stable: boolean;
  /** Documented transitions to subsequent nuclides. */
  daughterChains: NuclideDecayChainLink[];
  /** Documented transitions from precursor nuclides. */
  parentChains: NuclideDecayChainLink[];
  /** Total number of steps from the initial primordial source. */
  chainDepth: number;
  /** Number of steps until reaching a terminal stable nuclide. */
  minStepsToStable: number;
  /** Indicates if the nuclide is a terminal point in a decay chain. */
  isTerminal: boolean;
};

/**
 * Collection of all decay chain data, indexed by nuclide ID.
 * This registry is automatically generated to model nuclear transformation pathways.
 */
export type NuclideDecayChains = Collection< {
  [ N in NuclideId ]?: Distinct< NuclideDecayChainEntry< N > >;
} >;

/** The complete nuclide domain, integrating primary data, indices, and decay networks. */
export type NuclideDomain = Collection< {
  /** Registry of detailed nuclide data. */
  nuclides: NuclideCollection;
  /** Coordinate-based lookup index (auto-generated). */
  index: NuclideIndex;
  /** Network-based radioactive decay chains (auto-generated). */
  decayChains: NuclideDecayChains;
} >;
