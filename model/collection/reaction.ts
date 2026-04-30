import type { Brand } from 'devtypes/types/util';
import type {
  ReactionAnnotation, ReactionEffect, ReactionModifier, ReactionSpecies,
  ReactionState, ReactionTransition
} from '../../enum/collection/reaction';
import type { ElementSymbol } from '../../enum/domain/element';
import type { CompoundId } from '../domain/compound';
import type { MineralId } from '../domain/mineral';
import type { MixtureId } from '../domain/mixture';
import type { RefId } from '../registry/reference';
import type { Condition } from '../base/condition';
import type { Collection, Distinct } from '../base/modifier';
import type { NumberValue } from '../base/value';

export type ReactionTerm = {
  reactant:
    | { type: ReactionSpecies.ELEMENT, id: ElementSymbol }
    | { type: ReactionSpecies.COMPOUND, id: CompoundId }
    | { type: ReactionSpecies.MINERAL, id: MineralId }
    | { type: ReactionSpecies.MIXTURE, id: MixtureId }
    | { type: ReactionSpecies.SELF }
    | { type: ReactionSpecies.FORMULA, formula: string };
  coefficient: number;
  charge?: number;
  state?: ReactionState;
  effect?: ReactionEffect;
};

export type ReactionStep = {
  transition: ReactionTransition;
  terms: ReactionTerm[];
  condition?: Condition;
  modifiers?: Array<
    | { type: ReactionModifier.CATALYST, value: ReactionTerm }
    | { type: ReactionModifier.ENERGY_HEAT | ReactionModifier.ENERGY_LIGHT, value?: number }
    | { type: ReactionModifier.ACID | ReactionModifier.BASE, value?: string }
  >;
  annotations?: Array< {
    term: ReactionTerm;
    position: ReactionAnnotation;
  } >;
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
