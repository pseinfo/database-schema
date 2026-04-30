import type { Brand, Expand } from 'devtypes/types/util';
import type { ConfidenceType, UncertaintyShape, UncertaintyType } from '../../enum/system/uncertainty';

type BaseUncertainty< T extends UncertaintyType > = Expand< Brand< {
  shape:
    | { type: UncertaintyShape.SYMMETRICAL, value: number }
    | { type: UncertaintyShape.ASYMMETRICAL, plus: number, minus: number }
    | { type: UncertaintyShape.INTERVAL, min: number, max: number }
    | { type: UncertaintyShape.UNKNOWN };
  confidence?:
    | { type: ConfidenceType.LEVEL, value: number }
    | { type: ConfidenceType.SIGMA, value: number };
  meta?: {
    source?: string;
    method?: string;
  };
  note?: string;
}, T, 'type', true > >;

export type AbsoluteUncertainty = BaseUncertainty< UncertaintyType.ABSOLUTE >;

export type RelativeUncertainty = BaseUncertainty< UncertaintyType.RELATIVE >;

export type Uncertainty = AbsoluteUncertainty | RelativeUncertainty;
