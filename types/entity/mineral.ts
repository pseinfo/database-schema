import type { Phase } from '../../enum/generic';
import type { MineralCategory, MineralClass, MineralProperty } from '../../enum/mineral';
import type { Brand, Expand } from 'devtypes/types/util';
import type { Collection, Distinct } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { MetaData } from '../abstract/util';
import type { Composite } from './composite';

export type MineralID = Brand< string, 'mineralID' >;

export type MineralClassification = Collection< {
  category: Distinct< MineralCategory >;
  class: Distinct< MineralClass >;
  imaSymbol: Distinct< string >;
  strunz8: Distinct< string >;
  strunz9: Distinct< string >;
  dana: Distinct< string >;
  lapis: Distinct< string >;
  phase: Distinct< Phase >;
  radioactive: Distinct< boolean >;
  synthetic: Distinct< boolean >;
  properties: Distinct< MineralProperty[] >;
} >;

export type SingleMineral = Composite< MineralClassification >;

export type Mineral = Expand< MetaData & SingleMineral & {
  forms?: FormCollection< SingleMineral >;
} >;

export type MineralEntity = Collection< {
  [ key: MineralID ]: Mineral;
} >;
