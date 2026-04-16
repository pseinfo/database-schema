import type { Brand, Expand } from 'devtypes/types/util';
import type { Collection, Distinct } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { MetaData } from '../abstract/util';
import type { CompoundCategory, CompoundProperty, CompoundUnion } from '../enum/compound';
import type { Phase } from '../enum/generic';
import type { Composite } from './composite';

export type CompoundID = Brand< string, 'compoundID' >;

export type CompoundClassification = Collection< {
  category: Distinct< CompoundCategory >;
  union: Distinct< CompoundUnion >;
  organic: Distinct< boolean >;
  phase: Distinct< Phase >;
  radioactive: Distinct< boolean >;
  synthetic: Distinct< boolean >;
  properties: Distinct< CompoundProperty[] >;
} >;

export type SingleCompound = Composite< CompoundClassification >;

export type Compound = Expand< MetaData & SingleCompound & {
  forms?: FormCollection< SingleCompound >;
} >;

export type CompoundEntity = Collection< {
  [ key: CompoundID ]: Compound;
} >;
