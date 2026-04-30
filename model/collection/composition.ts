import type { Brand, Expand } from 'devtypes/types/util';
import type { CompositionType } from '../../enum/science/composition';
import type { ElementSymbol } from '../../enum/science/element';
import type { DomainType } from '../../enum/system/domain';
import type { Collection, Distinct } from '../base/modifier';
import type { CompoundId } from '../domain/compound';
import type { MineralId } from '../domain/mineral';
import type { MixtureId } from '../domain/mixture';

type BaseComponent< T extends CompositionType > = Brand< {
  ref:
    | { type: DomainType.ELEMENT, id: ElementSymbol }
    | { type: DomainType.COMPOUND, id: CompoundId }
    | { type: DomainType.MIXTURE, id: MixtureId }
    | { type: DomainType.MINERAL, id: MineralId };
  charge?: number;
}, T, 'type', true >;

type StoichiometryComponent = Expand< BaseComponent< CompositionType.STOICHIOMETRY > & {
  amount: number;
} >;

type RangeComponent = Expand< BaseComponent< CompositionType.RANGE > & {
  amount: {
    min: number;
    max: number;
  };
} >;

type FractionComponent = Expand< BaseComponent< CompositionType.FRACTION > & {
  fraction: number;
} >;

export type CompositionCollection< D extends DomainType > = Collection< {
  components: Distinct<
    D extends DomainType.COMPOUND ? StoichiometryComponent :
    D extends DomainType.MINERAL ? StoichiometryComponent | RangeComponent :
    D extends DomainType.MIXTURE ? FractionComponent :
    never
  >[];
} >;
