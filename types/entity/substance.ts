import type { Expand } from 'devtypes/types/util';
import type { Collection } from '../abstract/collection';
import type { MetaData } from '../abstract/util';
import type { AbundanceCollection } from '../collection/abundance';
import type { ChemistryCollection } from '../collection/chemistry';
import type { CrystallographyCollection } from '../collection/crystallography';
import type { DescriptiveCollection } from '../collection/descriptive';
import type { GenericCollection } from '../collection/generic';
import type { PhysicsCollection } from '../collection/physics';
import type { SafetyCollection } from '../collection/safety';

export type Substance< C extends Collection< unknown > > = Expand< MetaData & {
  descriptive: DescriptiveCollection;
  classification: C;
  generic?: GenericCollection;
  abundance?: AbundanceCollection;
  physics?: PhysicsCollection;
  crystallography?: CrystallographyCollection;
  chemistry?: ChemistryCollection;
  safety?: SafetyCollection;
} >;
