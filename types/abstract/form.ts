/**
 * Abstract Form Collection
 * Defines the structure for various form types of substances.
 */

import type { RequireFrom, StrictSubset } from 'devtypes/types/constraint';
import type { DeepPartial } from 'devtypes/types/transform';
import type { Brand } from 'devtypes/types/util';
import type { Collection, Distinct } from '@/abstract/collection';
import type { CrystalStructure, Phase } from '@/utils/const';

/** Form types for substances */
export type FormType = ( typeof FormType )[ number ];
export const FormType = [ 'allotrope', 'molecular', 'phase', 'polymorph', 'amorphous', 'other' ] as const;

/**
 * BaseFields
 * Common fields for all form types
 * 
 * @template T - Form type
 * @template C - Collection type for properties
 * @param type - type for substance form (branding)
 * @param properties - Partial collection of properties specific to the form
 * @param note - Additional notes about the form
 */
type BaseFields< T extends FormType, C extends Collection< any > > = Brand< {
    properties?: DeepPartial< C >;
    note?: Distinct< string >;
}, T, 'type', true >;

/**
 * FormFields
 * Specific fields for form properties
 * 
 * @param formula - Chemical formula of the form
 * @param phase - Phase of the substance (solid, liquid, gas, plasma)
 * @param crystalStructure - Crystal structure type
 * @param pearsonSymbol - Pearson symbol notation
 * @param spaceGroup - Space group notation
 */
interface FormFields {
    formula?: Distinct< string >;
    phase?: Distinct< Phase >;
    crystalStructure?: Distinct< CrystalStructure >;
    pearsonSymbol?: Distinct< string >;
    spaceGroup?: Distinct< string >;
}

/** Specific form types */

/**
 * AllotropeForm
 * Form type for allotropes and other unspecified forms
 * 
 * Fields: properties, note, formula, phase, crystalStructure, pearsonSymbol, spaceGroup
 */
export type AllotropeForm< C extends Collection< any > > =
    BaseFields< 'allotrope' | 'other', C > &
    FormFields;

/**
 * MolecularForm
 * Form type for molecular forms
 * 
 * Fields: properties, note, formula
 */
export type MolecularForm< C extends Collection< any > > =
    BaseFields< 'molecular', C > &
    RequireFrom< FormFields, 'formula' >;

/**
 * PhaseForm
 * Form type for specific phases of substances
 * 
 * Fields: properties, note, phase
 */
export type PhaseForm< C extends Collection< any > > =
    BaseFields< 'phase', C > &
    RequireFrom< FormFields, 'phase' >;

/**
 * PolymorphForm
 * Form type for polymorphs and amorphous forms
 * 
 * Fields: properties, note, crystalStructure
 * Optional fields: pearsonSymbol, spaceGroup
 */
export type PolymorphForm< C extends Collection< any > > =
    BaseFields< 'polymorph' | 'amorphous', C > &
    StrictSubset< FormFields, 'crystalStructure', 'pearsonSymbol' | 'spaceGroup' >;

/** Form IDs used in other parts of the data model */
export type FormId = string;

/**
 * FormCollection
 * Collection of forms for substances
 * 
 * @template C - Collection type for properties
 */
export type FormCollection< C extends Collection< any > > = Record< FormId, Collection<
    AllotropeForm< C > | MolecularForm< C > | PhaseForm< C > | PolymorphForm< C >
> >;
