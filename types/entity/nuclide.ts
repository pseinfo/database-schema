import { Brand } from 'devtypes/types/util';
import type { Collection, Distinct, Group } from '../abstract/collection';
import type { ElementSymbol } from '../enum/element';

export type NuclideIdentifier = Brand< `${number}` | `${number}m` | `${number}m${number}`, 'nuclideID' >;

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
  nuclides: any;
  index: any;
  decayChains: NuclideDecayChains;
};
