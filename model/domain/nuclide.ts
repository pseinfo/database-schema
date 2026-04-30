import type { Brand } from 'devtypes/types/util';
import type { ElementSymbol } from '../../enum/domain/element';

export type NuclideId< E extends ElementSymbol = ElementSymbol > = Brand<
  `${ E }-${ `${ number }` | `${ number }m` | `${ number }m${ number }` }`, 'nuclideID'
>;
