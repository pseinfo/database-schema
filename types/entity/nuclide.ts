import type { Brand, Expand } from 'devtypes/types/util';
import type { Collection, Distinct, Group } from '../abstract/collection';
import type { MetaData } from '../abstract/util';
import type { ElementSymbol } from '../enum/element';
import type { DecayMode } from '../enum/nuclide';

export type NuclideIdentifier = Brand< `${number}` | `${number}m` | `${number}m${number}`, 'nuclideID' >;

export type SingleNuclide = any;

export type Nuclide = Expand< MetaData & SingleNuclide >;

export type NuclideCollection = Collection< {
  [ K in ElementSymbol ]?: Collection< {
    [ N in NuclideIdentifier ]?: Nuclide;
  } >;
} >;

export type NuclideIndexEntry< Z extends number, N extends number > = Collection< {
  nuclide: Distinct< NuclideIdentifier >;
  z: Distinct< Z >;
  n: Distinct< N >;
  m: Distinct< number >;
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

export type NuclideIndex = Collection< {
  [ Z in number ]?: {
    [ N in number ]?: NuclideIndexEntry< Z, N >;
  };
} >;

export type NuclideDecayChainLink = Group< {
  nuclide: Distinct< NuclideIdentifier >;
  mode: Distinct< DecayMode >;
  probability: Distinct< number | null >;
} >;

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

export type NuclideDecayChains = Collection< {
  [ N in NuclideIdentifier ]?: NuclideDecayChainEntry< N >;
} >;

export type NuclideEntity = {
  nuclides: NuclideCollection;
  index: NuclideIndex;
  decayChains: NuclideDecayChains;
};
