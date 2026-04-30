/**
 * @file model/base/form.ts
 * @description Models structural, allotropic, and phase variations of chemical species,
 * allowing for property overrides.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { Phase } from '../../enum/science/physics';
import type { FormType } from '../../enum/system/form';
import type { Condition } from './condition';
import type { Collection, DeepOptional } from './modifier';

/**
 * Structural framework for a specific manifestation of a chemical entity,
 * supporting property overrides.
 * 
 * @template T The architectural type of the form.
 * @template C The collection structure being overridden.
 */
type BaseForm< T extends FormType, C extends Collection< unknown > > = Brand< {
  /** Property overrides specific to this structural form. */
  overrides: DeepOptional< C >;
  /** Environmental conditions associated with this manifestation. */
  conditions?: Condition;
  /** Additional qualitative notes regarding the structural form. */
  notes?: string;
}, T, 'type', true >;

/**
 * Representation of an elemental variation (e.g., Graphite vs. Diamond).
 * 
 * @template C The collection structure being overridden.
 */
export type AllotropeForm< C extends Collection< unknown > > = Expand< BaseForm< FormType.ALLOTROPE, C > >;

/**
 * Representation of a specific molecular arrangement or aggregate.
 * 
 * @template C The collection structure being overridden.
 */
export type MolecularForm< C extends Collection< unknown > > = Expand< BaseForm< FormType.MOLECULAR, C > & {
  /** The chemical formula specific to this molecular manifestation. */
  formula: string;
} >;

/**
 * Representation of a substance in a specific state of matter (Solid, Liquid, Gas).
 * 
 * @template C The collection structure being overridden.
 */
export type PhaseForm< C extends Collection< unknown > > = Expand< BaseForm< FormType.PHASE, C > & {
  /** The thermodynamic phase of the substance. */
  phase: Phase;
} >;

/**
 * Representation of a compound in a specific crystal structure (e.g., Rutile vs. Anatase).
 * 
 * @template C The collection structure being overridden.
 */
export type PolymorphForm< C extends Collection< unknown > > = Expand< BaseForm< FormType.POLYMORPH, C > >;

/**
 * Miscellaneous structural manifestations not covered by standard categories.
 * 
 * @template C The collection structure being overridden.
 */
export type OtherForm< C extends Collection< unknown > > = Expand< BaseForm< FormType.OTHER, C > >;

/** Unique identifier for a specific structural form. */
export type FormId = Brand< string, 'formId' >;

/**
 * A collection of diverse structural manifestations indexed by their unique identifiers.
 * 
 * @template C The collection structure of the underlying entities.
 */
export type FormCollection< C extends Collection< unknown > > = {
  [ K in FormId ]: Collection<
    | AllotropeForm< C >
    | MolecularForm< C >
    | PhaseForm< C >
    | PolymorphForm< C >
    | OtherForm< C >
  >;
};
