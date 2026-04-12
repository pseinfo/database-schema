/**
 * Abstract Form Collection
 * Defines the structure for various form types of substances.
 * 
 * @module abstract/form
 */

import type { RequireFrom, StrictSubset } from 'devtypes/types/constraint';
import type { DeepPartial } from 'devtypes/types/transform';
import type { Brand, Expand } from 'devtypes/types/util';
import type { Collection, Distinct } from '@/abstract/collection';
import type { FormType } from '@/enums/abstract';
import type { CrystalStructure, Phase } from '@/enums/generic';


/**
 * Branded common fields for all form types.
 * 
 * @template T - Form type
 * @template C - Collection type for properties
 * @param type - Type for substance form (branding)
 * @param properties - Partial collection of properties specific to the form
 * @param note - Additional notes about the form
 */
export type BaseForm< T extends FormType, C extends Collection< any > > = Brand< {
    properties?: DeepPartial< C >;
    note?: Distinct< string >;
}, T, 'type', true >;

/**
 * Specific fields for form properties.
 * 
 * @param formula - Chemical formula of the form
 * @param phase - Phase of the substance (solid, liquid, gas, plasma)
 * @param crystalStructure - Crystal structure type
 * @param pearsonSymbol - Pearson symbol notation
 * @param spaceGroup - Space group notation
 */
export interface FormFields {
    formula?: Distinct< string >;
    phase?: Distinct< Phase >;
    crystalStructure?: Distinct< CrystalStructure >;
    pearsonSymbol?: Distinct< string >;
    spaceGroup?: Distinct< string >;
}

/** Specific form types */

/**
 * Form type for allotropes and other unspecified forms.
 * Includes required fields for formula, phase, crystal structure, pearson symbol, and space group.
 * 
 * @template C - Collection type for properties
 */
export type AllotropeForm< C extends Collection< any > > = Expand<
    BaseForm< FormType.ALLOTROPE | FormType.OTHER, C > &
    FormFields
>;

/**
 * Form type for molecular forms.
 * Includes required fields for formula.
 * 
 * @template C - Collection type for properties
 */
export type MolecularForm< C extends Collection< any > > = Expand<
    BaseForm< FormType.MOLECULAR, C > &
    RequireFrom< FormFields, 'formula' >
>;

/**
 * Form type for specific phases of substances.
 * Includes required fields for phase.
 * 
 * @template C - Collection type for properties
 */
export type PhaseForm< C extends Collection< any > > = Expand<
    BaseForm< FormType.PHASE, C > &
    RequireFrom< FormFields, 'phase' >
>;

/**
 * Form type for polymorphs and amorphous forms.
 * Includes required fields for crystal structure, optionally pearson symbol and space group.
 * 
 * @template C - Collection type for properties
 */
export type PolymorphForm< C extends Collection< any > > = Expand<
    BaseForm< FormType.POLYMORPH | FormType.AMORPHOUS, C > &
    StrictSubset< FormFields, 'crystalStructure', 'pearsonSymbol' | 'spaceGroup' >
>;

/** Branded form IDs used in other parts of the data model. */
export type FormId = Brand< string, 'formId' >;

/**
 * Collection of forms for substances.
 * 
 * @template C - Collection type for properties
 */
export type FormCollection< C extends Collection< any > > = Record< FormId, Collection<
    AllotropeForm< C > | MolecularForm< C > | PhaseForm< C > | PolymorphForm< C >
> >;
