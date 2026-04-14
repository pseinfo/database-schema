import type { Expand } from 'devtypes/types/util';
import type { Collection, Distinct } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { MetaData } from '../abstract/util';
import type { AbundanceCollection } from '../collection/abundance';
import type { AtomicsCollection } from '../collection/atomics';
import type { ChemistryCollection } from '../collection/chemistry';
import type { DescriptiveCollection } from '../collection/descriptive';
import type { GenericCollection } from '../collection/generic';
import type { PhysicsCollection } from '../collection/physics';
import type { SafetyCollection } from '../collection/safety';
import type { ElementBlock, ElementGroup, ElementProperty, ElementSet, ElementSymbol } from '../enum/element';
import type { Phase, PTColumn, PTPeriod } from '../enum/generic';

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

export type SingleElement = {
  descriptive: DescriptiveCollection;
  classification: ElementClassification;
  generic?: GenericCollection;
  abundance?: AbundanceCollection;
  atomics?: AtomicsCollection;
  physics?: PhysicsCollection;
  chemistry?: ChemistryCollection;
  safety?: SafetyCollection;
};

export type Element = Expand< MetaData & SingleElement & {
  forms?: FormCollection< SingleElement >;
} >;

export type ElementEntity = Collection< {
  [ K in ElementSymbol ]: Element;
} >;
