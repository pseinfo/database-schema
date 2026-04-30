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

export type NuclideId< E extends ElementSymbol = ElementSymbol > = Brand<
  `${ E }-${ `${ number }` | `${ number }m` | `${ number }m${ number }` }`, 'nuclideID'
>;

export type NuclideClassification< K extends ElementSymbol > = Collection< {
  element: Distinct< K >;
  atomicNumber: Distinct< number >;
  neutronNumber: Distinct< number >;
  massNumber: Distinct< number >;
  state: Distinct< NuclideState >;
  stability: Distinct< NuclideStability >;
  origin: Distinct< NuclideOrigin >;
  mainDecayMode: Distinct< DecayMode | null >;
  parity: Distinct< SpinParity >;
  properties: Distinct< NuclideProperty >[];
} >;

export type SingleNuclide< K extends ElementSymbol > = Collection< {
  classification: NuclideClassification< K >;
  descriptive: DescriptiveCollection;
  generic?: GenericCollection;
  history?: HistoryCollection;
  nuclear?: NuclearCollection;
  media?: MediaCollection;
  weblinks?: Weblinks;
} >;

export type NuclideData< K extends ElementSymbol > = SingleNuclide< K >;

export type Nuclide< K extends ElementSymbol > = Metadata< NuclideData< K > >;

export type NuclideCollection = Collection< {
  [ K in ElementSymbol ]?: Collection< {
    [ N in NuclideId< K > ]?: Nuclide< K >;
  } >;
} >;

export type NuclideFactory< K extends ElementSymbol > = Factory< DomainType.NUCLIDE, NuclideData< K >, {
  element: K;
  nuclide: NuclideId< K >;
  z: number;
  n: number;
} >;


export type NuclideIndexEntry< Z extends number, N extends number > = {
  nuclide: NuclideId;
  z: Z;
  n: N;
  a: number;
  element: ElementSymbol;
  layer: {
    halfLife?: number;
    mainDecayMode?: DecayMode;
    minStepsToStable?: number;
    nuclearRadius?: number;
    massExcess?: number;
    atomicMass?: number;
    bindingEnergy?: number;
    discovery?: number;
  };
};

export type NuclideIndex = Collection< {
  [ Z in number ]?: Collection< {
    [ N in number ]?: Distinct< NuclideIndexEntry< Z, N > >;
  } >;
} >;


export type NuclideDecayChainLink = {
  nuclide: NuclideId;
  mode: DecayMode;
  probability: number | null;
};

export type NuclideDecayChainEntry< N extends NuclideId > = {
  nuclide: N;
  z: number;
  n: number;
  a: number;
  element: ElementSymbol;
  halfLife: number | null;
  stable: boolean;
  daughterChains: NuclideDecayChainLink[];
  parentChains: NuclideDecayChainLink[];
  chainDepth: number;
  minStepsToStable: number;
  isTerminal: boolean;
};

export type NuclideDecayChains = Collection< {
  [ N in NuclideId ]?: Distinct< NuclideDecayChainEntry< N > >;
} >;
