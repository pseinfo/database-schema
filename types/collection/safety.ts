/**
 * @file safety.ts
 * @description Defines properties and classifications for chemical safety, hazard identification,
 * and toxicological risks based on international regulatory standards.
 */

import type {
  ADRClass, DOTClass, GHSClass, GHSPictogram, NFPACode, NFPANotice, SignalWord,
  ToxicityApplication, ToxicityType, WHMISClass
} from '../../enum/safety';
import type { Collection, Distinct, Group, Single } from '../abstract/collection';
import type { StructProperty } from '../abstract/property';
import type { RefId } from '../abstract/reference';
import type { RangeValue, SingleValue } from '../abstract/value';

/** Hazard statements (H-phrases) defined by the GHS. */
export type HStatement = `H${ '2' | '3' | '4' | '5' }${ string }`;
/** Precautionary statements (P-phrases) defined by the GHS. */
export type PStatement = `P${ '1' | '2' | '3' | '4' | '5' }${ string }`;
/** Supplemental hazard information specific to the European Union (EUH-phrases). */
export type EUHStatement = `EUH${ '0' | '2' | '3' | '4' }${ string }`;

/** Kemler Code or Hazard Identification Number for dangerous goods transport. */
export type HazardIdentification = `${ 'X' | '' }${ number }`;
/** Four-digit United Nations number used to identify hazardous substances in commerce. */
export type UNNumber = `${ '0' | '1' | '2' | '3' | '8' | '9' }${ number }`;

/**
 * Standard ratings for the NFPA 704 "hazard diamond" used by emergency responders.
 */
export type NFPA = {
  /** Health hazard rating (0-4). */
  health: NFPACode;
  /** Flammability rating (0-4). */
  fire: NFPACode;
  /** Instability/reactivity rating (0-4). */
  reactivity: NFPACode;
  /** Special hazards like water reactivity or oxidizing properties. */
  specific?: NFPANotice;
};

/**
 * Grouping of properties related to the immediate physical and health risks of a substance.
 */
export type HazardGroup = Group< {
  /** Collection of standardized phrases describing the nature and prevention of hazards. */
  statements?: Group< {
    /** Phrases describing the nature of physical, health, and environmental hazards. */
    hazard?: Distinct< HStatement[] >;
    /** Phrases describing mandatory measures to minimize or prevent adverse effects. */
    precautionary?: Distinct< PStatement[] >;
    /** Supplemental hazard statements specific to EU regulatory frameworks. */
    eu?: Distinct< EUHStatement[] >;
  } >;
  /** A word used to indicate the relative level of severity of a hazard (e.g., "danger"). */
  signalWord?: Distinct< SignalWord >;
  /** Graphic elements intended to convey specific information on the hazard concerned. */
  pictograms?: Distinct< GHSPictogram[] >;
  /** Classification of substances into categories defined by various safety frameworks. */
  classes?: Group< {
    /** Categories defined by the Globally Harmonized System of Classification and Labelling of Chemicals. */
    ghs?: Distinct< GHSClass[] >;
    /** Categories defined by the Workplace Hazardous Materials Information System. */
    whmis?: Distinct< WHMISClass[] >;
    /** Categories defined by the Agreement concerning the International Carriage of Dangerous Goods by Road. */
    adr?: Distinct< ADRClass[] >;
    /** Categories defined by the U.S. Department of Transportation. */
    dot?: Distinct< DOTClass[] >;
  } >;
  /** Transportation labels and identification numbers. */
  label?: Distinct< {
    /** The Hazard Identification Number. */
    hazNo: HazardIdentification;
    /** The UN identification number. */
    unNo: UNNumber;
  }[] >;
  /** The NFPA 704 fire diamond rating for the substance. */
  nfpa?: Distinct< NFPA >;
  /** Additional scientific or regulatory remarks concerning the safety profile. */
  note?: Distinct< string >;
  /** References to safety data sheets (SDS). */
  references?: RefId[];
} >;

/**
 * Quantitative toxicological metrics for exposure to a substance.
 */
export type Toxicity = {
  /** The specific toxicological metric being reported (e.g., LD50). */
  type: Distinct< ToxicityType >;
  /** The biological species upon which the toxicological effect was observed. */
  organism: Distinct< string >;
  /** The numerical value of the dose or concentration causing the effect. */
  value: SingleValue< 'massFraction' > | RangeValue< 'massFraction' >;
  /** The route by which the substance entered the body (e.g., oral, dermal). */
  application?: Distinct< ToxicityApplication >;
  /** The time period over which the exposure or observation occurred. */
  duration?: SingleValue< 'time' > | RangeValue< 'time' >;
  /** Additional scientific or regulatory remarks concerning the toxicological effect. */
  notes?: Distinct< string >;
  /** References to toxicological reports. */
  references?: RefId[];
};

/**
 * Registry of properties defining the safety, transport, and toxicological profile of a substance.
 */
export type SafetyCollection = Collection< {
  /** Information regarding physical, health, and environmental hazards. */
  hazard?: HazardGroup;
  /** Detailed metrics describing the harmful effects on living organisms. */
  toxicity?: Single< StructProperty< Toxicity > >;
} >;
