import type { Brand } from 'devtypes/types/util';
import type { ElementSymbol } from '../../enum/science/element';
import type { DecayMode, SpinParity } from '../../enum/science/nuclear';
import type { NuclideOrigin, NuclideProperty, NuclideStability, NuclideState } from '../../enum/science/nuclide';
import type { Collection, Distinct } from '../base/modifier';

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
