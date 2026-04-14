import type { Brand, Expand } from 'devtypes/types/util';
import type { Collection } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { MetaData } from '../abstract/util';
import type { AbundanceCollection } from '../collection/abundance';
import type { ChemistryCollection } from '../collection/chemistry';
import type { DescriptiveCollection } from '../collection/descriptive';
import type { GenericCollection } from '../collection/generic';
import type { PhysicsCollection } from '../collection/physics';
import type { SafetyCollection } from '../collection/safety';

export type CompoundID = Brand< string, 'compoundID' >;

export type SingleCompound = Collection< {
  descriptive: DescriptiveCollection;
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
