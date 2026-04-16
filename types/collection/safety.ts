import type {
  ADRClass, DOTClass, GHSClass, GHSPictogram, NFPACode, NFPANotice, SignalWord,
  ToxicityApplication, ToxicityType, WHMISClass
} from '../../enum/safety';
import type { Collection, Distinct, Group, Single } from '../abstract/collection';
import type { StructProperty } from '../abstract/property';
import type { RefId } from '../abstract/reference';
import type { RangeValue, SingleValue } from '../abstract/value';

export type HStatement = `H${ '2' | '3' | '4' | '5' }${ string }`;
export type PStatement = `P${ '1' | '2' | '3' | '4' | '5' }${ string }`;
export type EUHStatement = `EUH${ '0' | '2' | '3' | '4' }${ string }`;

export type HazardIdentification = `${ 'X' | '' }${ number }`;
export type UNNumber = `${ '0' | '1' | '2' | '3' | '8' | '9' }${ number }`;

export type NFPA = {
  health: NFPACode;
  fire: NFPACode;
  reactivity: NFPACode;
  specific?: NFPANotice;
};

export type HazardGroup = Group< {
  statements?: Group< {
    hazard?: Distinct< HStatement[] >;
    precautionary?: Distinct< PStatement[] >;
    eu?: Distinct< EUHStatement[] >;
  } >;
  signalWord?: Distinct< SignalWord >;
  pictograms?: Distinct< GHSPictogram[] >;
  classes?: Group< {
    ghs?: Distinct< GHSClass[] >;
    whmis?: Distinct< WHMISClass[] >;
    adr?: Distinct< ADRClass[] >;
    dot?: Distinct< DOTClass[] >;
  } >;
  label?: Distinct< {
    hazNo: HazardIdentification;
    unNo: UNNumber;
  }[] >;
  nfpa?: Distinct< NFPA >;
  note?: Distinct< string >;
  references?: RefId[];
} >;

export type Toxicity = {
  type: Distinct< ToxicityType >;
  organism: Distinct< string >;
  value: SingleValue< 'massFraction' > | RangeValue< 'massFraction' >;
  application?: Distinct< ToxicityApplication >;
  duration?: SingleValue< 'time' > | RangeValue< 'time' >;
};

export type SafetyCollection = Collection< {
  hazard?: HazardGroup;
  toxicity?: Single< StructProperty< Toxicity > >;
} >;
