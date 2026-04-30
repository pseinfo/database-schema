import type { DomainType } from '../../enum/system/domain';
import type { Collection } from '../base/modifier';
import type { AbundanceCollection } from '../collection/abundance';
import type { ChemistryCollection } from '../collection/chemistry';
import type { CompositionCollection } from '../collection/composition';
import type { DescriptiveCollection } from '../collection/descriptive';
import type { FormulaCollection } from '../collection/formula';
import type { GenericCollection } from '../collection/generic';
import type { HistoryCollection } from '../collection/history';
import type { IdentificationCollection } from '../collection/identification';
import type { MediaCollection } from '../collection/media';
import type { PhysicsCollection } from '../collection/physics';
import type { ReactionCollection } from '../collection/reaction';
import type { SafetyCollection } from '../collection/safety';
import type { StructureCollection } from '../collection/structure';
import type { Weblinks } from '../utility/weblinks';

export type Substance<
  C extends Collection< unknown >,
  T extends object = {}
> = Collection< {
  classification: C;
  identification?: IdentificationCollection;
  structure?: StructureCollection;
  formula?: FormulaCollection;
  descriptive?: DescriptiveCollection;
  generic?: GenericCollection;
  history?: HistoryCollection;
  physics?: PhysicsCollection;
  chemistry?: ChemistryCollection;
  reaction?: ReactionCollection;
  abundance?: AbundanceCollection;
  safety?: SafetyCollection;
  media?: MediaCollection;
  weblinks?: Weblinks;
} & T >;

export type ComposedSubstance<
  D extends DomainType,
  C extends Collection< unknown >,
  T extends object = {}
> = Substance< C, T & {
  composition: CompositionCollection< D >;
} >;
