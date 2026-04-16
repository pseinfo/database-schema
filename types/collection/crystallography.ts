import type { Collection, Single } from '../abstract/collection';
import type { PrimitiveProperty, StructProperty } from '../abstract/property';
import type { NumberValue } from '../abstract/value';
import type {
  CleavageQuality, CleavageType, CrystalFamily, CrystalHabit, CrystalSystem,
  FractureType, Tenacity, TwinningMode, TwinningType
} from '../enum/crystallography';
import type { ElementSymbol } from '../enum/element';

export type PointGroup = {
  number: number;
  name: string;
  hermannMauguin?: string;
  schoenflies?: string;
};

export type SpaceGroup = {
  number: number;
  symbol: string;
};

export type UnitCell = {
  a?: NumberValue< 'length' >;
  b?: NumberValue< 'length' >;
  c?: NumberValue< 'length' >;
  alpha?: NumberValue< 'angle' >;
  beta?: NumberValue< 'angle' >;
  gamma?: NumberValue< 'angle' >;
  Z?: number;
};

export type Ligancy = {
  [ K in ElementSymbol ]?: number;
};

export type Twinning = {
  type?: TwinningType;
  mode?: TwinningMode;
  law?: string;
  operation?: string;
};

export type Cleavage = {
  type?: CleavageType;
  quality?: CleavageQuality;
  millerIndex?: string;
};

export type Fracture = {
  type?: FractureType;
  toughness?: NumberValue< 'energy' >;
  tenacity?: Tenacity;
};

export type CrystallographyCollection = Collection< {
  family?: Single< PrimitiveProperty< CrystalFamily > >;
  system?: Single< PrimitiveProperty< CrystalSystem > >;
  pearsonSymbol?: Single< PrimitiveProperty< string > >;
  pointGroup?: Single< StructProperty< PointGroup > >;
  laueGroup?: Single< PrimitiveProperty< string > >;
  spaceGroup?: Single< StructProperty< SpaceGroup > >;
  unitCell?: Single< StructProperty< UnitCell > >;
  ligancy?: Single< StructProperty< Ligancy > >;
  crystalHabit?: Single< PrimitiveProperty< CrystalHabit > >;
  twinning?: Single< StructProperty< Twinning > >;
  cleavage?: Single< StructProperty< Cleavage > >;
  fracture?: Single< StructProperty< Fracture > >;
} >;
