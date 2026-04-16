import type { Collection } from '../abstract/collection';
import type { AbundanceCollection } from '../collection/abundance';
import type { ChemistryCollection } from '../collection/chemistry';
import type { CrystallographyCollection } from '../collection/crystallography';
import type { DescriptiveCollection } from '../collection/descriptive';
import type { GenericCollection } from '../collection/generic';
import type { PhysicsCollection } from '../collection/physics';
import type { SafetyCollection } from '../collection/safety';

export type Substance< C extends Collection< unknown > > = Collection< {
  classification: C;
  descriptive: DescriptiveCollection;
  generic?: GenericCollection;
  abundance?: AbundanceCollection;
  physics?: PhysicsCollection;
  crystallography?: CrystallographyCollection;
  chemistry?: ChemistryCollection;
  safety?: SafetyCollection;
} >;
