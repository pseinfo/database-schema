import type { Brand } from 'devtypes/types/util';
import type {
  ReactionAnnotation, ReactionEffect, ReactionModifier, ReactionSpecies,
  ReactionState, ReactionTransition
} from '../../enum/collection/reaction';
import type { ElementSymbol } from '../../enum/domain/element';
import type { CompoundId } from '../entity/compound';
import type { MineralId } from '../entity/mineral';
import type { MixtureId } from '../entity/mixture';
import type { RefId } from '../registry/reference';
import type { Condition } from '../base/condition';
import type { Collection, Distinct } from './modifiers';
import type { NumberValue } from '../base/value';

type Reactant =
  | { type: ReactionSpecies.ELEMENT, id: ElementSymbol }
  | { type: ReactionSpecies.COMPOUND, id: CompoundId }
  | { type: ReactionSpecies.MINERAL, id: MineralId }
  | { type: ReactionSpecies.MIXTURE, id: MixtureId }
  | { type: ReactionSpecies.SELF }
  | { type: ReactionSpecies.FORMULA, formula: string };

type Modifier =
  | { type: ReactionModifier.CATALYST, value: ReactionTerm }
  | { type: ReactionModifier.ENERGY_HEAT | ReactionModifier.ENERGY_LIGHT, value?: number }
  | { type: ReactionModifier.ACID | ReactionModifier.BASE, value?: string };

type Annotation = {
  term: ReactionTerm;
  position: ReactionAnnotation;
};

export type ReactionTerm = {
  reactant: Reactant;
  coefficient: number;
  charge?: number;
  state?: ReactionState;
  effect?: ReactionEffect;
};

export type ReactionStep = {
  transition: ReactionTransition;
  terms: ReactionTerm[];
  condition?: Condition;
  modifiers?: Modifier[];
  annotations?: Annotation[];
};

export type Reaction = {
  steps: ReactionStep[];
  condition?: Condition;
  enthalpy?: NumberValue< 'molarEnergy' >;
  latex?: string;
  notes?: string;
  references?: RefId[];
};

export type ReactionRef = Brand< string, 'reactionRef' >;

export type ReactionCollection = Collection< {
  [ K in ReactionRef ]: Distinct< Reaction >;
} >;
