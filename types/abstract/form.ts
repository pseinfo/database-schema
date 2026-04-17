/**
 * @file form.ts
 * @description Defines the physical and structural forms of chemical entities.
 * This file allows for the representation of allotropes, polymorphs, and phase-specific
 * data, capturing the complexity of matter beyond simple elemental composition.
 */

import type { RequireFrom } from 'devtypes/types/constraint';
import type { DeepPartial } from 'devtypes/types/transform';
import type { Brand, Expand } from 'devtypes/types/util';
import type { Phase } from '../../enum/generic';
import type { FormType } from '../../enum/util';
import type { Collection, Distinct } from './collection';

/**
 * Base infrastructure for a specific physical form of a substance.
 * @template T The classification of the form (Allotrope, Polymorph, etc.).
 * @template C The collection of scientific properties applicable to this form.
 */
type BaseForm< T extends FormType, C extends Collection< any > > = Brand< {
  /** Partial override of properties specific to this physical form */
  properties?: DeepPartial< C >;
  /** Descriptive note clarifying the nature or source of this specific form */
  note?: Distinct< string >;
}, T, 'type', true >;

/**
 * Common descriptive fields for chemical forms.
 */
interface FormFields {
  /** Specific chemical or structural formula for the form */
  formula?: Distinct< string >;
  /** The primary physical state (solid, liquid, gas, plasma) of this form */
  phase?: Distinct< Phase >;
}

/**
 * Represents an allotropic variation (e.g., O2 vs O3) or other distinct modification.
 * Includes standard formula and phase fields.
 */
export type AllotropeForm< C extends Collection< any > > = Expand<
  BaseForm< FormType.ALLOTROPE | FormType.OTHER, C > &
  FormFields
>;

/**
 * Represents a molecular species with a strictly defined formula.
 * Requires a chemical formula.
 */
export type MolecularForm< C extends Collection< any > > = Expand<
  BaseForm< FormType.MOLECULAR, C > &
  RequireFrom< FormFields, 'formula' >
>;

/**
 * Represents data specific to a certain physical state or phase transition.
 * Requires the definition of the physical state.
 */
export type PhaseForm< C extends Collection< any > > = Expand<
  BaseForm< FormType.PHASE, C > &
  RequireFrom< FormFields, 'phase' >
>;

/**
 * Represents crystalline modifications (e.g., alpha-iron vs gamma-iron) or amorphous states.
 */
export type PolymorphForm< C extends Collection< any > > = Expand<
  BaseForm< FormType.POLYMORPH | FormType.AMORPHOUS, C >
>;

/**
 * Branded identifier for a specific physical form within a collection.
 */
export type FormId = Brand< string, 'formId' >;

/**
 * A registry of multiple physical forms associated with a master chemical collection.
 * @template C The base property collection for the substance.
 */
export type FormCollection< C extends Collection< any > > = Record< FormId, Collection<
  /** Mapping to one of the supported physical form representations */
  | AllotropeForm< C >
  | MolecularForm< C >
  | PhaseForm< C >
  | PolymorphForm< C >
> >;
