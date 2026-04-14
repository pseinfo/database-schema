import type { Brand, Expand } from 'devtypes/types/util';
import type { Collection } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { MetaData } from '../abstract/util';

export type CompoundID = Brand< string, 'compoundID' >;

export type SingleCompound = Collection< {} >;

export type Compound = Expand< MetaData & SingleCompound & {
  forms?: FormCollection< SingleCompound >; 
} >;

export type CompoundEntity = Collection< {
  [ key: CompoundID ]: Compound;
} >;
