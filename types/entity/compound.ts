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
import type { CompoundCategory, CompoundProperty, CompoundUnion } from '../enum/compound';
import type { Phase } from '../enum/generic';

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

export type SingleCompound = Collection< {
  descriptive: DescriptiveCollection;
  classification: CompoundClassification;
  composition: CompositionCollection
  generic?: GenericCollection;
  abundance?: AbundanceCollection;
  physics?: PhysicsCollection;
  chemistry?: ChemistryCollection;
  safety?: SafetyCollection;
} >;

export type Compound = Expand< MetaData & SingleCompound & {
  forms?: FormCollection< SingleCompound >; 
} >;

export type CompoundEntity = Collection< {
  [ key: CompoundID ]: Compound;
} >;
