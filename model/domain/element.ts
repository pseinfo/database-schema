import type { Expand } from 'devtypes/types/util';
import type {
  ElementGroup, ElementProperty, ElementSet, ElementSymbol, PeriodicTableColumn,
  PeriodicTablePeriod, Subshell
} from '../../enum/science/element';
import type { Phase } from '../../enum/science/physics';
import type { SubstanceProperty } from '../../enum/science/substance';
import type { DomainType } from '../../enum/system/domain';
import type { Factory } from '../base/factory';
import type { FormCollection } from '../base/form';
import type { Collection, Distinct } from '../base/modifier';
import type { AtomicCollection } from '../collection/atomic';
import type { Metadata } from '../utility/meta';
import type { Substance } from './substance';

export type ElementClassification = {
  symbol: Distinct< string >;
  atomicNumber: Distinct< number >;
  block: Distinct< Subshell >;
  column: Distinct< PeriodicTableColumn >;
  period: Distinct< PeriodicTablePeriod >;
  set: Distinct< ElementSet >;
  group: Distinct< ElementGroup >;
  phase: Distinct< Phase >;
  properties: Distinct< SubstanceProperty | ElementProperty >[];
};

export type SingleElement = Substance< ElementClassification, {
  atomic?: AtomicCollection;
} >;

export type ElementData = Expand< SingleElement & {
  forms?: FormCollection< SingleElement >;
} >;

export type Element = Metadata< ElementData >;

export type ElementDomain = Collection< {
  [ K in ElementSymbol ]: Element;
} >;

export type ElementFactory = Factory< DomainType.ELEMENT, ElementData, {
  elementSymbol: ElementSymbol;
} >;
