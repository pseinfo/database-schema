import type { Expand } from 'devtypes/types/util';
import type { Collection } from '../abstract/collection';
import type { MetaData } from '../abstract/util';

export type SingleMixture = Collection< {} >;

export type Mixture = Expand< MetaData & SingleMixture >;

export type MixtureEntity = Collection< {
  [ key: MixtureID ]: Mixture;
} >;
