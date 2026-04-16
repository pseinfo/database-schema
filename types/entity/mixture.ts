import type { Phase } from '../../enum/generic';
import type { MixtureCategory, MixtureHomogeneity, MixtureProperty, MixtureType } from '../../enum/mixture';
import type { Brand, Expand } from 'devtypes/types/util';
import type { Collection, Distinct } from '../abstract/collection';
import type { MetaData } from '../abstract/util';
import type { Composite } from './composite';

export type MixtureID = Brand< string, 'mixtureID' >;

export type MixtureClassification = Collection< {
  type: Distinct< MixtureType >;
  homogeneity: Distinct< MixtureHomogeneity >;
  category: Distinct< MixtureCategory >;
  phase: Distinct< Phase >;
  mediumPhase: Distinct< Phase >;
  dispersedPhase: Distinct< Phase >;
  radioactive: Distinct< boolean >;
  synthetic: Distinct< boolean >;
  properties: Distinct< MixtureProperty[] >;
} >;

export type SingleMixture = Composite< MixtureClassification >;

export type Mixture = Expand< MetaData & SingleMixture >;

export type MixtureEntity = Collection< {
  [ key: MixtureID ]: Mixture;
} >;
