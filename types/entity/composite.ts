import type { Expand } from 'devtypes/types/util';
import type { Collection } from '../abstract/collection';
import type { CompositionCollection } from '../collection/composition';
import type { Substance } from './substance';

export type Composite< C extends Collection< unknown > > = Expand< Substance< C > & {
  composition: CompositionCollection;
} >;
