/**
 * Abstract Form Collection
 * Defines the structure for various form types of substances.
 * 
 * @module abstract/form
 */

import type { RequireFrom, StrictSubset } from 'devtypes/types/constraint';
import type { DeepPartial } from 'devtypes/types/transform';
import type { Brand } from 'devtypes/types/util';
import type { Collection, Distinct } from '@/abstract/collection';
import type { CrystalStructure, Phase, FormType } from '@/enums/generic';


/**
 * Branded common fields for all form types.
 * 
 * @template T - Form type
 * @template C - Collection type for properties
 * @param type - type for substance form (branding)
 * @param properties - Partial collection of properties specific to the form
 * @param note - Additional notes about the form
 */
export type BaseFields< T extends FormType, C extends Collection< any > > = Brand< {
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
 * 
 * @required properties, note, formula, phase, crystalStructure, pearsonSymbol, spaceGroup
 */
export type AllotropeForm< C extends Collection< any > > =
    BaseFields< FormType.ALLOTROPE | FormType.OTHER, C > &
    FormFields;

/**
 * Form type for molecular forms.
 * 
 * @required properties, note, formula
 */
export type MolecularForm< C extends Collection< any > > =
    BaseFields< FormType.MOLECULAR, C > &
    RequireFrom< FormFields, 'formula' >;

/**
 * Form type for specific phases of substances.
 * 
 * @required properties, note, phase
 */
export type PhaseForm< C extends Collection< any > > =
    BaseFields< FormType.PHASE, C > &
    RequireFrom< FormFields, 'phase' >;

/**
 * Form type for polymorphs and amorphous forms.
 * 
 * @required properties, note, crystalStructure
 * @optional pearsonSymbol, spaceGroup
 */
export type PolymorphForm< C extends Collection< any > > =
    BaseFields< FormType.POLYMORPH | FormType.AMORPHOUS, C > &
    StrictSubset< FormFields, 'crystalStructure', 'pearsonSymbol' | 'spaceGroup' >;

/** Branded form IDs used in other parts of the data model */
export type FormId = Brand< string, 'formId' >;

/**
 * Collection of forms for substances.
 * 
 * @template C - Collection type for properties
 */
export type FormCollection< C extends Collection< any > > = Record< FormId, Collection<
    AllotropeForm< C > | MolecularForm< C > | PhaseForm< C > | PolymorphForm< C >
> >;
