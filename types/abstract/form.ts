/**
 * Abstract Form Collection
 * Defines the structure for various form types of substances.
 */

import { Collection, Distinct } from './collection';
import { CrystalStructure, Phase } from './const';
import { DeepPartial, RequireFrom, StrictSubset } from './utils';

// Form types for substances
export const FormType = [ 'allotrope', 'molecular', 'phase', 'polymorph', 'amorphous', 'other' ] as const;
export type FormType = ( typeof FormType )[ number ];

// Field definitions for form types
interface BaseFields< T extends FormType, C extends Collection< any > > {
    readonly __type__: T;
    properties?: DeepPartial< C >;
    note?: Distinct< string >;
}

interface FormFields {
    formula?: Distinct< string >;
    phase?: Distinct< Phase >;
    crystalStructure?: Distinct< CrystalStructure >;
    pearsonSymbol?: Distinct< string >;
    spaceGroup?: Distinct< string >;
}

// Specific form types
export type AllotropeForm< C extends Collection< any > > =
    BaseFields< 'allotrope' | 'other', C > & FormFields;

export type MolecularForm< C extends Collection< any > > =
    BaseFields< 'molecular', C > & RequireFrom< FormFields, 'formula' >;

export type PhaseForm< C extends Collection< any > > =
    BaseFields< 'phase', C > & RequireFrom< FormFields, 'phase' >;

export type PolymorphForm< C extends Collection< any > > =
    BaseFields< 'polymorph' | 'amorphous', C > & StrictSubset<
        FormFields, 'crystalStructure', 'pearsonSymbol' | 'spaceGroup'
    >;

// Form IDs used in other parts of the data model
export type FormId = string;

// Collection of forms for substances
export type FormCollection< C extends Collection< any > > = Record< FormId, Collection<
    AllotropeForm< C > | MolecularForm< C > | PhaseForm< C > | PolymorphForm< C >
> >;
