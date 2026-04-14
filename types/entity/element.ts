import type { Expand } from 'devtypes/types/util';
import type { Collection } from '../abstract/collection';
import type { DescriptiveCollection } from '../collection/descriptive';
import type { MetaData } from '../collection/generic';
import type { ElementSymbol } from '../enum/generic';

export type SingleElement = {
  descriptive: DescriptiveCollection;
};

export type Element = Expand< MetaData & SingleElement >;

export type ElementEntity = Collection< {
  [ K in ElementSymbol ]: Element;
} >;
