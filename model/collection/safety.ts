/**
 * @file model/collection/safety.ts
 * @description Comprehensive safety and regulatory data, including hazard classifications,
 * labeling, and toxicological information.
 */

import type {
  ADRClass, DOTClass, GHSClass, GHSPictogram, NFPACode, NFPANotice, Organism, SignalWord,
  ToxicityApplication, ToxicityOrganism, ToxicityType, WHMISClass
} from '../../enum/science/safety';
import type { Collection, Group, Many, One } from '../base/modifier';
import type { LangGroup } from '../base/primitive';
import type { PrimitiveProperty, StructProperty } from '../base/property';
import type { RangeValue, SingleValue } from '../base/value';

/** GHS Hazard statement code (H-statement). */
export type HStatement = `H${ '2' | '3' | '4' | '5' }${ number }`;
/** GHS Precautionary statement code (P-statement). */
export type PStatement = `P${ '1' | '2' | '3' | '4' | '5' }${ number }`;
/** Supplemental EU-specific hazard statement code. */
export type EUHStatement = `EUH${ '0' | '2' | '3' | '4' }${ number }`;

/** Kemler Code or Hazard Identification Number. */
export type HazardIdentification = `${ 'X' | '' }${ number }`;
/** Four-digit number identifying dangerous goods in international transport. */
export type UNNumber = `${ '0' | '1' | '2' | '3' | '8' | '9' }${ number }`;

/** Standardized phrases for describing chemical hazards and precautions. */
export type HazardStatements = {
  /** Globally Harmonized System (GHS) hazard statements. */
  hazard?: HStatement[];
  /** GHS precautionary statements for handling and storage. */
  precautionary?: PStatement[];
  /** Supplemental European Union hazard statements. */
  eu?: EUHStatement[];
};

/** Fire protection association rating for emergency response. */
export type NFPA = {
  /** Level of health hazard. */
  health: NFPACode;
  /** Flammability rating. */
  fire: NFPACode;
  /** Chemical reactivity or instability rating. */
  reactivity: NFPACode;
  /** Special notices for emergency responders. */
  specific?: NFPANotice[];
};

/** Regulatory identification numbers for transport and handling. */
export type SafetyLabel = {
  /** Hazard identification number. */
  hazNo?: HazardIdentification;
  /** United Nations substance identification number. */
  unNo?: UNNumber;
};

/** Collection of regulatory identifiers and qualitative safety data. */
export type HazardGroup = Group< {
  /** Set of applicable GHS or EU hazard phrases. */
  statements?: One< StructProperty< HazardStatements > >;
  /** GHS Signal word (Danger or Warning). */
  signalWord?: One< PrimitiveProperty< SignalWord > >;
  /** Visual GHS hazard symbols. */
  pictograms?: Many< PrimitiveProperty< GHSPictogram > >;
  /** NFPA 704 'Fire Diamond' ratings. */
  nfpa?: One< StructProperty< NFPA > >;
  /** Regulatory classifications across different systems. */
  classes?: Group< {
    /** GHS hazard classification. */
    ghs?: Many< PrimitiveProperty< GHSClass > >;
    /** Workplace Hazardous Materials Information System classification. */
    whmis?: Many< PrimitiveProperty< WHMISClass > >;
    /** European Agreement concerning the International Carriage of Dangerous Goods by Road. */
    adr?: Many< PrimitiveProperty< ADRClass > >;
    /** Department of Transportation classification (USA). */
    dot?: Many< PrimitiveProperty< DOTClass > >;
  } >;
  /** Regulatory labels for transport containers. */
  labels?: Many< StructProperty< SafetyLabel > >;
  /** Localized qualitative safety remarks and instructions. */
  remarks?: LangGroup< Many< PrimitiveProperty< string > >, never >;
} >;

/** Quantitative measure of the adverse effects of a substance on living organisms. */
export type Toxicity = {
  /** Classification of the toxicity endpoint (e.g., LD50, LC50). */
  type: ToxicityType;
  /** Route of biological exposure. */
  application?: ToxicityApplication;
  /** Biological species or system used in the toxicity test. */
  organism: 
    | { type: ToxicityOrganism.ORGANISM, value: Organism }
    | { type: ToxicityOrganism.OTHER, value: string };
  /** Quantitative toxicological limit or range. */
  value:
    | SingleValue< 'massFraction' >
    | SingleValue< 'massPerMass' >
    | RangeValue< 'massFraction' >
    | RangeValue< 'massPerMass' >;
  /** Temporal period of exposure during the test. */
  duration?:
    | SingleValue< 'time' >
    | RangeValue< 'time' >;
};

/** Grouping of all safety and toxicological properties. */
export type SafetyCollection = Collection< {
  /** Hazard classification and regulatory labeling data. */
  hazard?: HazardGroup;
  /** Quantified toxicological data. */
  toxicity?: Many< StructProperty< Toxicity > >;
} >;
