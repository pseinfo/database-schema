import type {
  ADRClass, DOTClass, GHSClass, GHSPictogram, NFPACode, NFPANotice, Organism, SignalWord,
  ToxicityApplication, ToxicityOrganism, ToxicityType, WHMISClass
} from '../../enum/science/safety';
import type { Collection, Group, Many, One } from '../base/modifier';
import type { LangGroup } from '../base/primitive';
import type { PrimitiveProperty, StructProperty } from '../base/property';
import type { RangeValue, SingleValue } from '../base/value';

export type HStatement = `H${ '2' | '3' | '4' | '5' }${ number }`;
export type PStatement = `P${ '1' | '2' | '3' | '4' | '5' }${ number }`;
export type EUHStatement = `EUH${ '0' | '2' | '3' | '4' }${ number }`;

export type HazardIdentification = `${ 'X' | '' }${ number }`;
export type UNNumber = `${ '0' | '1' | '2' | '3' | '8' | '9' }${ number }`;

export type HazardStatements = {
  hazard?: HStatement[];
  precautionary?: PStatement[];
  eu?: EUHStatement[];
};

export type NFPA = {
  health: NFPACode;
  fire: NFPACode;
  reactivity: NFPACode;
  specific?: NFPANotice[];
};

export type SafetyLabel = {
  hazNo?: HazardIdentification;
  unNo?: UNNumber;
};

export type HazardGroup = Group< {
  statements?: One< StructProperty< HazardStatements > >;
  signalWord?: One< PrimitiveProperty< SignalWord > >;
  pictograms?: Many< PrimitiveProperty< GHSPictogram > >;
  nfpa?: One< StructProperty< NFPA > >;
  classes?: Group< {
    ghs?: Many< PrimitiveProperty< GHSClass > >;
    whmis?: Many< PrimitiveProperty< WHMISClass > >;
    adr?: Many< PrimitiveProperty< ADRClass > >;
    dot?: Many< PrimitiveProperty< DOTClass > >;
  } >;
  labels?: Many< StructProperty< SafetyLabel > >;
  remarks?: LangGroup< Many< PrimitiveProperty< string > >, never >;
} >;

export type Toxicity = {
  type: ToxicityType;
  application?: ToxicityApplication;
  organism: 
    | { type: ToxicityOrganism.ORGANISM, value: Organism }
    | { type: ToxicityOrganism.OTHER, value: string };
  value:
    | SingleValue< 'massFraction' >
    | SingleValue< 'massPerMass' >
    | RangeValue< 'massFraction' >
    | RangeValue< 'massPerMass' >;
  duration?:
    | SingleValue< 'time' >
    | RangeValue< 'time' >;
};

export type SafetyCollection = Collection< {
  hazard?: HazardGroup;
  toxicity?: Many< StructProperty< Toxicity > >;
} >;
