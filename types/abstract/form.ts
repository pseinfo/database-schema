/**
 * Abstract Form Collection
 * Defines the structure for various form types of substances.
 */

import { Brand } from 'devtypes/types/base';
import { DeepPartial } from 'devtypes/types/collections';
import { CrystalStructure, Phase } from '../utils/const';
import { Collection, Distinct } from './collection';

/** Form types for substances */
export const FormType = [ 'allotrope', 'molecular', 'phase', 'polymorph', 'amorphous', 'other' ] as const;
export type FormType = ( typeof FormType )[ number ];

/**
 * BaseFields
 * Common fields for all form types
 * 
 * @template T - Form type
 * @template C - Collection type for properties
 * @param properties - Partial collection of properties specific to the form
 * @param note - Additional notes about the form
 */
type BaseFields< T extends FormType, C extends Collection< any > > = Brand< {
    properties?: DeepPartial< C >;
    note?: Distinct< string >;
}, T >;

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
