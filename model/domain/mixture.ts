import type { Brand, Expand } from 'devtypes/types/util';
import type { MixtureHomogeneity, MixtureProperty, MixtureSystem, MixtureType } from '../../enum/science/mixture';
import type { Phase } from '../../enum/science/physics';
import type { SubstanceProperty } from '../../enum/science/substance';
import type { DomainType } from '../../enum/system/domain';
import type { Factory } from '../base/factory';
import type { FormCollection } from '../base/form';
import type { Collection, Distinct } from '../base/modifier';
import type { Metadata } from '../utility/meta';
import type { ComposedSubstance } from './substance';

export type MixtureId = Brand< string, 'mixtureId' >;

export type MixtureClassification = Collection< {
  type: Distinct< MixtureType >;
  homogeneity: Distinct< MixtureHomogeneity >;
  system: Distinct< MixtureSystem >;
  phase: Distinct< Phase >;
  mediumPhase?: Distinct< Phase >;
  dispersedPhase?: Distinct< Phase >;
  properties: Distinct< SubstanceProperty | MixtureProperty >[];
} >;

export type SingleMixture = ComposedSubstance< DomainType.MIXTURE, MixtureClassification >;

export type MixtureData = Expand< SingleMixture & {
  forms?: FormCollection< SingleMixture >;
} >;

export type Mixture = Metadata< MixtureData >;

export type MixtureDomain = Collection< {
  [ key: MixtureId ]: Mixture;
} >;

export type MixtureFactory = Factory< DomainType.MIXTURE, MixtureData, {
  mixtureId: MixtureId;
} >;
