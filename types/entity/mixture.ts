import { Collection } from '../abstract/collection';

export type MixtureEntity = Collection< {
  [ key: MixtureID ]: Mixture;
} >;
