import type { Brand, Expand } from 'devtypes/types/util';
import type { Collection, Distinct } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { MetaData } from '../abstract/util';
import type { AbundanceCollection } from '../collection/abundance';
import type { ChemistryCollection } from '../collection/chemistry';
import type { CompositionCollection } from '../collection/composition';
import type { DescriptiveCollection } from '../collection/descriptive';
import type { GenericCollection } from '../collection/generic';
import type { PhysicsCollection } from '../collection/physics';
import type { SafetyCollection } from '../collection/safety';
import type { MineralCategory, MineralClass } from '../enum/mineral';

export type MineralID = Brand< string, 'mineralID' >;

export type MineralClassification = Collection< {
  category: Distinct< MineralCategory >;
  class: Distinct< MineralClass >;
  imaSymbol: Distinct< string >;
  strunz8: Distinct< string >;
  strunz9: Distinct< string >;
  dana: Distinct< string >;
  lapis: Distinct< string >;
} >;

export type SingleMineral = Collection< {
  descriptive: DescriptiveCollection;
  classification: MineralClassification;
  composition: CompositionCollection;
  generic?: GenericCollection;
  abundance?: AbundanceCollection;
  physics?: PhysicsCollection;
  chemistry?: ChemistryCollection;
  safety?: SafetyCollection;
} >;

export type Mineral = Expand< MetaData & SingleMineral & {
  forms?: FormCollection< SingleMineral >;
} >;

export type MineralEntity = Collection< {
  [ key: MineralID ]: Mineral;
} >;
