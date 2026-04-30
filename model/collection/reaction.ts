/**
 * @file model/collection/reaction.ts
 * @description Detailed modeling of chemical and nuclear reactions, including stoichiometry,
 * transition steps, conditions, and thermodynamics.
 */

import type { Brand } from 'devtypes/types/util';
import type {
  ReactionAnnotation, ReactionEffect, ReactionModifier, ReactionSpecies,
  ReactionState, ReactionTransition
} from '../../enum/science/reaction';
import type { ElementSymbol } from '../../enum/science/element';
import type { CompoundId } from '../domain/compound';
import type { MineralId } from '../domain/mineral';
import type { MixtureId } from '../domain/mixture';
import type { RefId } from '../registry/reference';
import type { Condition } from '../base/condition';
import type { Collection, Distinct } from '../base/modifier';
import type { NumberValue } from '../base/value';

/** Structural model for a participant (reactant or product) in a reaction step. */
export type ReactionTerm = {
  /** The specific scientific species involved in the reaction. */
  reactant:
    /** Reference to a chemical element. */
    | { type: ReactionSpecies.ELEMENT, id: ElementSymbol }
    /** Reference to a chemical compound. */
    | { type: ReactionSpecies.COMPOUND, id: CompoundId }
    /** Reference to a mineral species. */
    | { type: ReactionSpecies.MINERAL, id: MineralId }
    /** Reference to a chemical mixture. */
    | { type: ReactionSpecies.MIXTURE, id: MixtureId }
    /** Reference to the entity itself (self-reacting). */
    | { type: ReactionSpecies.SELF }
    /** Direct structural formula representation. */
    | { type: ReactionSpecies.FORMULA, formula: string };
  /** Stoichiometric coefficient defining the molar ratio. */
  coefficient: number;
  /** Net electrical charge of the species in the reaction context. */
  charge?: number;
  /** Physical state of the reactant (e.g., Aqueous, Gas). */
  state?: ReactionState;
  /** Visual or chemical side-effects associated with the species. */
  effect?: ReactionEffect;
};

/** A discrete transformation within a chemical reaction. */
export type ReactionStep = {
  /** Nature of the chemical transformation (e.g., Forward, Reverse, Equilibrium). */
  transition: ReactionTransition;
  /** List of reactants and products participating in this step. */
  terms: ReactionTerm[];
  /** Environmental parameters required for this specific step. */
  condition?: Condition;
  /** External agents or energies influencing the reaction. */
  modifiers?: Array<
    /** Chemical agent that increases the reaction rate. */
    | { type: ReactionModifier.CATALYST, value: ReactionTerm }
    /** Energy input in the form of heat or light. */
    | { type: ReactionModifier.ENERGY_HEAT | ReactionModifier.ENERGY_LIGHT, value?: number }
    /** Environmental pH modifiers. */
    | { type: ReactionModifier.ACID | ReactionModifier.BASE, value?: string }
  >;
  /** Qualitative notes or descriptors attached to specific terms. */
  annotations?: Array< {
    /** The participant being annotated. */
    term: ReactionTerm;
    /** Relative position or nature of the annotation. */
    position: ReactionAnnotation;
  } >;
};

/** Comprehensive description of a multi-step chemical or nuclear process. */
export type Reaction = {
  /** Sequential steps defining the reaction pathway. */
  steps: ReactionStep[];
  /** Global conditions applicable to the entire reaction. */
  condition?: Condition;
  /** Molar heat change (enthalpy of reaction) associated with the process. */
  enthalpy?: NumberValue< 'molarEnergy' >;
  /** Typographic representation of the reaction equation in LaTeX. */
  latex?: string;
  /** Qualitative scientific notes and context. */
  context?: string;
  /** Bibliographic evidence supporting the reaction data. */
  references?: RefId[];
};

/** Unique reference identifier for a reaction entry. */
export type ReactionRef = Brand< string, 'reactionRef' >;

/** Registry of documented reactions, indexed by unique references. */
export type ReactionCollection = Collection< {
  [ K in ReactionRef ]: Distinct< Reaction >;
} >;
