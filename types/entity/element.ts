import type { Expand } from 'devtypes/types/util';
import type { Collection, Distinct } from '../abstract/collection';
import type { AbundanceCollection } from '../collection/abundance';
import type { DescriptiveCollection } from '../collection/descriptive';
import type { MetaData } from '../collection/generic';
import type { SafetyCollection } from '../collection/safety';
import type { Phase, PTColumn, PTPeriod } from '../enum/generic';
import type { ElementBlock, ElementGroup, ElementProperty, ElementSet, ElementSymbol } from '../enum/element';

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
  properties: Distinct< ElementProperty[] >;
} >;

export type SingleElement = {
  descriptive: DescriptiveCollection;
  classification: ElementClassification;
  abundance?: AbundanceCollection;
  safety?: SafetyCollection;
};

export type Element = Expand< MetaData & SingleElement >;

export type ElementEntity = Collection< {
  [ K in ElementSymbol ]: Element;
} >;
