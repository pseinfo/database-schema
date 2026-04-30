import type { Brand, Expand } from 'devtypes/types/util';
import type { MineralClass, MineralProperty, MineralStructure, MineralSubClass } from '../../enum/science/mineral';
import type { Phase } from '../../enum/science/physics';
import type { SubstanceProperty } from '../../enum/science/substance';
import type { DomainType } from '../../enum/system/domain';
import type { Factory } from '../base/factory';
import type { FormCollection } from '../base/form';
import type { Collection, Distinct, Group } from '../base/modifier';
import type { Metadata } from '../utility/meta';
import type { ComposedSubstance } from './substance';

export type MineralId = Brand< string, 'mineralId' >;

export type MineralClassification = Collection< {
  class: Distinct< MineralClass >;
  subclass?: Distinct< MineralSubClass >;
  series?: Distinct< string >;
  structure: Distinct< MineralStructure >;
  system: Group< {
    imaSymbol: Distinct< string >;
    strunz8?: Distinct< string >;
    strunz9?: Distinct< string >;
    dana?: Distinct< string >;
    lapis?: Distinct< string >;
  } >;
  phase: Distinct< Phase.SOLID >;
  properties: Distinct< SubstanceProperty | MineralProperty >[];
} >;

export type SingleMineral = ComposedSubstance< DomainType.MINERAL, MineralClassification >;

export type MineralData = Expand< SingleMineral & {
  forms?: FormCollection< SingleMineral >;
} >;

export type Mineral = Metadata< MineralData >;

export type MineralDomain = Collection< {
  [ key: MineralId ]: Mineral;
} >;

export type MineralFactory = Factory< DomainType.MINERAL, MineralData, {
  mineralId: MineralId;
} >;
