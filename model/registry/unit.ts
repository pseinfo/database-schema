import type { Brand, Expand } from 'devtypes/types/util';
import type { RegistryType } from '../../enum/registry/system';
import type { MeasurementSystem } from '../../enum/registry/unit';
import type { Factory } from '../base/factory';
import type { Collection, Distinct } from '../base/modifier';
import type { LangGroup } from '../base/primitives';

import { ValidUnits } from '../../config/units';
export type PhysicalQuantity = keyof typeof ValidUnits;
export type ValidUnits = typeof ValidUnits;

export type NoUnit = never;

export type SIDimension = ( typeof SIDimension )[ number ];
export const SIDimension = [
    'time', 'length', 'mass', 'electricCurrent', 'temperature',
    'amountOfSubstance', 'luminousIntensity'
] as const;

export type SIPrefix = keyof typeof SIPrefix;
export const SIPrefix = {
  Y: 1e24, Z: 1e21, E: 1e18, P: 1e15, T: 1e12, G: 1e9, M: 1e6,
  k: 1e3, h: 1e2, da: 1e1, d: 1e-1, c: 1e-2, m: 1e-3, µ: 1e-6,
  n: 1e-9, p: 1e-12, f: 1e-15, a: 1e-18, z: 1e-21, y: 1e-24
} as const;

type BaseUnitSymbols< Q extends PhysicalQuantity > = ValidUnits[ Q ][ 'units' ][ number ];
type PrefixableUnitSymbols< Q extends PhysicalQuantity > = ValidUnits[ Q ][ 'prefixableUnits' ][ number ];

type PrefixedSymbols< Q extends PhysicalQuantity > =
  | BaseUnitSymbols< Q >
  | `${ SIPrefix }${ PrefixableUnitSymbols< Q > }`;

type ConversionField< T extends boolean > = T extends true ? {} : {
  conversion: {
    factor: number;
    offset?: number;
  };
};

export type Unit<
  Q extends PhysicalQuantity, U extends BaseUnitSymbols< Q >,
  isBase extends boolean = U extends ValidUnits[ Q ][ 'baseUnit' ] ? true : false
> = Expand< Brand< {
  name: LangGroup;
  latex: string;
  isBase: isBase;
  prefixable: U extends PrefixableUnitSymbols< Q > ? true : false;
  system?: MeasurementSystem;
} & ConversionField< isBase >, U, 'symbol', true > >;

export type Quantity< Q extends PhysicalQuantity > = Expand< Brand< {
  dimension: {
    si: Q extends SIDimension ? true : false;
    vector: ValidUnits[ Q ][ 'vector' ];
  };
  name: LangGroup;
  latex: string;
  baseUnit: ValidUnits[ Q ][ 'baseUnit' ];
  units: {
    [ U in BaseUnitSymbols< Q > ]: Unit< Q, U >;
  };
}, ValidUnits[ Q ][ 'symbol' ], 'symbol', true > >;

export type UnitId< Q extends PhysicalQuantity = PhysicalQuantity > = Brand<
  [ Q, PrefixedSymbols< Q > ],
  `unitId:${ Q }`
>;

export type UnitRegistry = Collection< {
  [ Q in PhysicalQuantity ]?: Distinct< Quantity< Q > >;
} >;

export type UnitFactory< Q extends PhysicalQuantity > = Factory< RegistryType.UNIT, Quantity< Q >, {
  quantity: Q;
} >;
