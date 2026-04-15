import type { Brand, Expand } from 'devtypes/types/util';
import type { Collection } from '../abstract/collection';
import type { MetaData } from '../abstract/util';

export type MixtureID = Brand< string, 'mixtureID' >;

export type SingleMixture = Collection< {} >;

export type Mixture = Expand< MetaData & SingleMixture >;

export type MixtureEntity = Collection< {
  [ key: MixtureID ]: Mixture;
} >;
