/**
 * @file model/collection/generic.ts
 * @description General non-chemical properties, including market value and economic data
 * associated with a substance.
 */

import type { RequireAtLeastOne } from 'devtypes/types/constraint';
import type { PriceContext, PriceTax, PriceValue } from '../../enum/science/generic';
import type { Currency } from '../../enum/system/locale';
import type { Collection, Many } from '../base/modifier';
import type { IsoDate } from '../base/primitive';
import type { StructProperty } from '../base/property';
import type { NumberValue } from '../base/value';
import type { PhysicalQuantity } from '../registry/unit';

/** Structural model for representing the market price of a scientific commodity. */
export type Price = {
  /** The quantitative cost of the substance. */
  value:
    /** Exact market price. */
    | { type: PriceValue.EXACT, value: number }
    /** Price range for bulk or varying grades. */
    | { type: PriceValue.RANGE, min: number, max: number }
    /** Starting price for custom orders. */
    | { type: PriceValue.FROM, value: number };
  /** The currency unit used for the price specification. */
  currency: Currency;
  /** The temporal period or point in time for which the price was verified. */
  validity?: { at: IsoDate } | RequireAtLeastOne< { from?: IsoDate, to?: IsoDate }, 'from' | 'to' >;
  /** Administrative and market context of the price data. */
  context?: {
    /** Classification of the price (e.g., Industrial, Laboratory grade). */
    type?: PriceContext;
    /** Information regarding included or excluded value-added taxes. */
    tax?: PriceTax;
    /** The amount of substance for which the price is specified. */
    quantity?: NumberValue< PhysicalQuantity >;
    /** Geographic or organizational market where the price applies. */
    market?: string;
  };
};

/** Collection of diverse non-scientific properties. */
export type GenericCollection = Collection< {
  /** Market price entries for the substance. */
  price: Many< StructProperty< Price > >;
} >;
