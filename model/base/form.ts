import type { Brand, Expand } from 'devtypes/types/util';
import type { Phase } from '../../enum/science/physics';
import type { FormType } from '../../enum/system/form';
import type { Condition } from './condition';
import type { Collection, DeepOptional } from './modifier';

type BaseForm< T extends FormType, C extends Collection< unknown > > = Brand< {
  overrides: DeepOptional< C >;
  conditions?: Condition;
  note?: string;
}, T, 'type', true >;

export type AllotropeForm< C extends Collection< unknown > > = Expand< BaseForm< FormType.ALLOTROPE, C > >;

export type MolecularForm< C extends Collection< unknown > > = Expand< BaseForm< FormType.MOLECULAR, C > & {
  formula: string;
} >;

export type PhaseForm< C extends Collection< unknown > > = Expand< BaseForm< FormType.PHASE, C > & {
  phase: Phase;
} >;

export type PolymorphForm< C extends Collection< unknown > > = Expand< BaseForm< FormType.POLYMORPH, C > >;

export type OtherForm< C extends Collection< unknown > > = Expand< BaseForm< FormType.OTHER, C > >;

export type FormId = Brand< string, 'formId' >;

export type FormCollection< C extends Collection< unknown > > = {
  [ K in FormId ]: Collection<
    | AllotropeForm< C >
    | MolecularForm< C >
    | PhaseForm< C >
    | PolymorphForm< C >
    | OtherForm< C >
  >;
};
