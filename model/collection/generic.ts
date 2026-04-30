import type { RequireAtLeastOne } from 'devtypes/types/constraint';
import type { Currency } from '../../enum/base/locale';
import type { PriceContext, PriceTax, PriceValue } from '../../enum/collection/generic';
import type { Collection, Many } from '../base/modifier';
import type { IsoDate } from '../base/primitive';
import type { StructProperty } from '../base/property';
import type { NumberValue } from '../base/value';
import type { PhysicalQuantity } from '../registry/unit';

export type Price = {
  value:
    | { type: PriceValue.EXACT, value: number }
    | { type: PriceValue.RANGE, min: number, max: number }
    | { type: PriceValue.FROM, value: number };
  currency: Currency;
  validity?:
    | { at: IsoDate }
    | RequireAtLeastOne< { from?: IsoDate, to?: IsoDate }, 'from' | 'to' >;
  context?: {
    type?: PriceContext;
    tax?: PriceTax;
    quantity?: NumberValue< PhysicalQuantity >;
    market?: string;
  };
};

export type GenericCollection = Collection< {
  price: Many< StructProperty< Price > >;
} >;
