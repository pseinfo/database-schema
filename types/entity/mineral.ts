import type { Brand, Expand } from 'devtypes/types/util';
import type { Collection } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { MetaData } from '../abstract/util';

export type MineralID = Brand< string, 'mineralID' >;

export type SingleMineral = Collection< {} >;

export type Mineral = Expand< MetaData & SingleMineral & {
  forms?: FormCollection< SingleMineral >; 
} >;

export type MineralEntity = Collection< {
  [ key: MineralID ]: Mineral;
} >;
