import type { RequireFrom } from 'devtypes/types/constraint';
import type { Brand, Expand } from 'devtypes/types/util';
import type { UncertaintyType } from '../enum/util';

export type BaseUncertainty< T extends UncertaintyType > = Brand< {
  confidence?: number;
  note?: string;
}, T, 'type', true >;

export interface UncertaintyFields {
  absolute?: number;
  relative?: number;
  plus?: number;
  minus?: number;
}

export type AbsoluteUncertainty = Expand<
  BaseUncertainty< UncertaintyType.ABSOLUTE > &
  RequireFrom< UncertaintyFields, 'absolute' >
>;

export type RelativeUncertainty = Expand<
  BaseUncertainty< UncertaintyType.RELATIVE > &
  RequireFrom< UncertaintyFields, 'relative' >
>;

export type AsymmetricalUncertainty = Expand<
  BaseUncertainty< UncertaintyType.ASYMMETRICAL > &
  RequireFrom< UncertaintyFields, 'plus' | 'minus' >
>;

export type Uncertainty =
  | AbsoluteUncertainty
  | RelativeUncertainty
  | AsymmetricalUncertainty;
