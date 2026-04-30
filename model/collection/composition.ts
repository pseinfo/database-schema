import type { Brand, Expand } from 'devtypes/types/util';
import type { CompositionType } from '../../enum/collection/composition';
import type { ElementSymbol } from '../../enum/domain/element';
import type { EntityType } from '../../enum/registry/system';
import type { Collection, Distinct } from '../base/modifier';
import type { CompoundId } from '../domain/compound';
import type { MineralId } from '../domain/mineral';
import type { MixtureId } from '../domain/mixture';

type BaseComponent< T extends CompositionType > = Brand< {
  ref:
    | { type: EntityType.ELEMENT, id: ElementSymbol }
    | { type: EntityType.COMPOUND, id: CompoundId }
    | { type: EntityType.MIXTURE, id: MixtureId }
    | { type: EntityType.MINERAL, id: MineralId };
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

export type CompositionCollection< E extends EntityType > = Collection< {
  components: Distinct<
    E extends EntityType.COMPOUND ? StoichiometryComponent :
    E extends EntityType.MINERAL ? StoichiometryComponent | RangeComponent :
    E extends EntityType.MIXTURE ? FractionComponent :
    never
  >[];
} >;
