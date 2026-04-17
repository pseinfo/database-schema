import type { Expand } from 'devtypes/types/util';
import type { ElementBlock, ElementGroup, ElementProperty, ElementSet, ElementSymbol, PTColumn, PTPeriod } from '../../enum/element';
import type { Phase } from '../../enum/physics';
import type { Collection, Distinct } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { MetaData } from '../abstract/util';
import type { AtomicsCollection } from '../collection/atomics';
import type { Substance } from './substance';

export type ElementClassification = Collection< {
  symbol: Distinct< string >;
  atomicNumber: Distinct< number >;
  block: Distinct< ElementBlock >;
  group: Distinct< ElementGroup >;
  column: Distinct< PTColumn >;
  period: Distinct< PTPeriod >;
  phase: Distinct< Phase >;
  set: Distinct< ElementSet >;
  radioactive: Distinct< boolean >;
  synthetic: Distinct< boolean >;
  properties: Distinct< ElementProperty[] >;
} >;

export type SingleElement = Expand< Substance< ElementClassification > & {
  atomics?: AtomicsCollection;
} >;

export type Element = Expand< MetaData & SingleElement & {
  forms?: FormCollection< SingleElement >;
} >;

export type ElementEntity = Collection< {
  [ K in ElementSymbol ]: Element;
} >;
