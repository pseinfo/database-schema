/**
 * Abstract Form Collection
 * Defines the structure for various form types of substances.
 */

import { Brand } from 'devtypes/types/base';
import { DeepPartial } from 'devtypes/types/collections';
import { Collection, Distinct } from './collection';

/** Form types for substances */
export const FormType = [ 'allotrope', 'molecular', 'phase', 'polymorph', 'amorphous', 'other' ] as const;
export type FormType = ( typeof FormType )[ number ];

// Field definitions for form types
type BaseFields< T extends FormType, C extends Collection< any > > = Brand< {
    properties?: DeepPartial< C >;
    note?: Distinct< string >;
}, T >;

interface FormFields {
    formula?: Distinct< string >;
    phase?: Distinct< Phase >;
    crystalStructure?: Distinct< CrystalStructure >;
    pearsonSymbol?: Distinct< string >;
    spaceGroup?: Distinct< string >;
}
