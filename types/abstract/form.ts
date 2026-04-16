import type { RequireFrom } from 'devtypes/types/constraint';
import type { DeepPartial } from 'devtypes/types/transform';
import type { Brand, Expand } from 'devtypes/types/util';
import type { Phase } from '../../enum/generic';
import type { FormType } from '../../enum/util';
import type { Collection, Distinct } from './collection';

export type BaseForm< T extends FormType, C extends Collection< any > > = Brand< {
  properties?: DeepPartial< C >;
  note?: Distinct< string >;
}, T, 'type', true >;

export interface FormFields {
  formula?: Distinct< string >;
  phase?: Distinct< Phase >;
}

export type AllotropeForm< C extends Collection< any > > = Expand<
  BaseForm< FormType.ALLOTROPE | FormType.OTHER, C > &
  FormFields
>;

export type MolecularForm< C extends Collection< any > > = Expand<
  BaseForm< FormType.MOLECULAR, C > &
  RequireFrom< FormFields, 'formula' >
>;

export type PhaseForm< C extends Collection< any > > = Expand<
  BaseForm< FormType.PHASE, C > &
  RequireFrom< FormFields, 'phase' >
>;

export type PolymorphForm< C extends Collection< any > > = Expand<
  BaseForm< FormType.POLYMORPH | FormType.AMORPHOUS, C >
>;

export type FormId = Brand< string, 'formId' >;

export type FormCollection< C extends Collection< any > > = Record< FormId, Collection<
  AllotropeForm< C > | MolecularForm< C > | PhaseForm< C > | PolymorphForm< C >
> >;
