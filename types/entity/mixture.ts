import type { Brand, Expand } from 'devtypes/types/util';
import type { Collection, Distinct } from '../abstract/collection';
import type { MetaData } from '../abstract/util';
import type { AbundanceCollection } from '../collection/abundance';
import type { ChemistryCollection } from '../collection/chemistry';
import type { CompositionCollection } from '../collection/composition';
import type { CrystallographyCollection } from '../collection/crystallography';
import type { DescriptiveCollection } from '../collection/descriptive';
import type { GenericCollection } from '../collection/generic';
import type { PhysicsCollection } from '../collection/physics';
import type { SafetyCollection } from '../collection/safety';
import type { Phase } from '../enum/generic';
import type { MixtureCategory, MixtureHomogeneity, MixtureProperty, MixtureType } from '../enum/mixture';

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

export type SingleMixture = Collection< {
  descriptive: DescriptiveCollection;
  classification: MixtureClassification;
  composition: CompositionCollection;
  generic?: GenericCollection;
  abundance?: AbundanceCollection;
  physics?: PhysicsCollection;
  crystallography?: CrystallographyCollection;
  chemistry?: ChemistryCollection;
  safety?: SafetyCollection;
} >;

export type Mixture = Expand< MetaData & SingleMixture >;

export type MixtureEntity = Collection< {
  [ key: MixtureID ]: Mixture;
} >;
