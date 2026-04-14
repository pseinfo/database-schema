import type { Brand } from 'devtypes/types/util';
import { units } from '../../config/units';
import type { MetricSystem, SIDimension } from '../enum/util';

export type SIPrefix = keyof typeof SIPrefix;
export const SIPrefix = {
  Y: 1e24, Z: 1e21, E: 1e18, P: 1e15, T: 1e12, G: 1e9, M: 1e6, k: 1e3,
  h: 1e2, da: 1e1, d: 1e-1, c: 1e-2, m: 1e-3, µ: 1e-6, n: 1e-9, p: 1e-12,
  f: 1e-15, a: 1e-18, z: 1e-21, y: 1e-24
} as const;

export type Units = typeof units;
export type PhysicalQuantity = keyof typeof units;

export type BaseUnitSymbols< Q extends PhysicalQuantity > = Units[ Q ][ 'base' ][ number ];
export type PrefixableUnitSymbols< Q extends PhysicalQuantity > = Units[ Q ][ 'prefixable' ][ number ];

export type PrefixedSymbols< Q extends PhysicalQuantity > =
  | BaseUnitSymbols< Q >
  | `${ SIPrefix }${ PrefixableUnitSymbols< Q > }`;

export type DimensionVector = [ number, number, number, number, number, number, number ];

export type Unit< Q extends PhysicalQuantity, U extends BaseUnitSymbols< Q > > = Brand< {
  name?: string;
  isBase?: boolean;
  prefixable?: U extends PrefixableUnitSymbols< Q > ? true : false;
  system?: MetricSystem;
  conversion?: {
    factor: number;
    offset?: number;
  };
}, U, 'symbol', true >;

export type Quantity< Q extends PhysicalQuantity > = {
  dimension?: {
    symbol: string;
    name: string;
    si: Q extends SIDimension ? true : false;
    vector: DimensionVector;
  };
  baseUnit: BaseUnitSymbols< Q >;
  units: {
    [ U in BaseUnitSymbols< Q > ]: Unit< Q, U >;
  };
};

export type UnitId< Q extends PhysicalQuantity = PhysicalQuantity > = Brand<
  [ Q, PrefixedSymbols< Q > ],
  'unitId'
>;

export type UnitCollection = {
  [ Q in PhysicalQuantity ]?: Quantity< Q >;
};
