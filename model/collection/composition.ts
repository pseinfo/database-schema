/**
 * @file model/collection/composition.ts
 * @description Defines the chemical makeup of substances, supporting stoichiometric
 * ratios, concentration ranges, and fractional distributions.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { CompositionType } from '../../enum/science/composition';
import type { ElementSymbol } from '../../enum/science/element';
import type { DomainType } from '../../enum/system/domain';
import type { Collection, Distinct } from '../base/modifier';
import type { CompoundId } from '../domain/compound';
import type { MineralId } from '../domain/mineral';
import type { MixtureId } from '../domain/mixture';

/**
 * Structural framework for a single constituent within a chemical composition.
 * 
 * @template T The type of composition representation.
 */
type BaseComponent< T extends CompositionType > = Brand< {
  /** Reference to the chemical entity forming the constituent. */
  ref:
    | { type: DomainType.ELEMENT, id: ElementSymbol }
    | { type: DomainType.COMPOUND, id: CompoundId }
    | { type: DomainType.MIXTURE, id: MixtureId }
    | { type: DomainType.MINERAL, id: MineralId };
  /** The ionic charge state of the constituent within the structure. */
  charge?: number;
}, T, 'type', true >;

/** Constituent defined by a fixed integral or decimal ratio (e.g., in a chemical formula). */
type StoichiometryComponent = Expand< BaseComponent< CompositionType.STOICHIOMETRY > & {
  /** The stoichiometric coefficient or molar ratio of the constituent. */
  amount: number;
} >;

/** Constituent defined by a concentration span, typical for minerals and natural materials. */
type RangeComponent = Expand< BaseComponent< CompositionType.RANGE > & {
  /** The lower and upper boundaries of the constituent's prevalence. */
  amount: {
    /** Minimum concentration or ratio. */
    min: number;
    /** Maximum concentration or ratio. */
    max: number;
  };
} >;

/** Constituent defined by its relative mass or molar fraction within a mixture. */
type FractionComponent = Expand< BaseComponent< CompositionType.FRACTION > & {
  /** The quantitative portion of the constituent relative to the whole. */
  fraction: number;
} >;

/**
 * Domain-specific collection of constituents forming a compound, mineral, or mixture.
 * 
 * @template D The scientific domain of the substance.
 */
export type CompositionCollection< D extends DomainType > = Collection< {
  /** List of constituents forming the substance. */
  components: Distinct<
    D extends DomainType.COMPOUND ? StoichiometryComponent :
    D extends DomainType.MINERAL ? StoichiometryComponent | RangeComponent :
    D extends DomainType.MIXTURE ? FractionComponent :
    never
  >[];
} >;
