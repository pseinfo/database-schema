import type { Brand, Expand } from 'devtypes/types/util';
import type { CompoundCategory, CompoundClass, CompoundComposition, CompoundProperty } from '../../enum/science/compound';
import type { Phase } from '../../enum/science/physics';
import type { SubstanceProperty } from '../../enum/science/substance';
import type { DomainType } from '../../enum/system/domain';
import type { Factory } from '../base/factory';
import type { FormCollection } from '../base/form';
import type { Collection, Distinct } from '../base/modifier';
import type { Metadata } from '../utility/meta';
import type { ComposedSubstance } from './substance';

export type CompoundId = Brand< string, 'compoundId' >;

export type CompoundClassification = Collection< {
  category: Distinct< CompoundCategory >;
  composition: Distinct< CompoundComposition >;
  class: Distinct< CompoundClass >;
  phase: Distinct< Phase >;
  properties: Distinct< SubstanceProperty | CompoundProperty >[];
} >;

export type SingleCompound = ComposedSubstance< DomainType.COMPOUND, CompoundClassification >;

export type CompoundData = Expand< SingleCompound & {
  forms?: FormCollection< SingleCompound >;
} >;

export type Compound = Metadata< CompoundData >;

export type CompoundDomain = Collection< {
  [ key: CompoundId ]: Compound;
} >;

export type CompoundFactory = Factory< DomainType.COMPOUND, CompoundData, {
  compoundId: CompoundId;
} >;
