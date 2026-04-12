/**
 * Safety Collection
 * Defines the structure for safety-related information in the database schema.
 * 
 * @module collections/safety
 */

import type { Collection, Distinct, Group, Single } from '@/abstract/collection';
import type { StructProperty } from '@/abstract/property';
import type { RefId } from '@/abstract/reference';
import type { RangeValue, SingleValue } from '@/abstract/value';
import type {
    ADRClass, DOTClass, GHSClass, GHSPictogram, NFPACode, NFPANotice, SignalWord,
    ToxicityApplication, ToxicityType, WHMISClass
} from '@/enums/safety';


/** Hazard statements */
export type HStatement = `H${ '2' | '3' | '4' | '5' }${ string }`;
export type PStatement = `P${ '1' | '2' | '3' | '4' | '5' }${ string }`;
export type EUHStatement = `EUH${ '0' | '2' | '3' | '4' }${ string }`;

/** (ADR) warning label */
export type HazardIdentification = `${ 'X' | '' }${ number }`;
export type UNNumber = `${ '0' | '1' | '2' | '3' | '8' | '9' }${ number }`;

/**
 * The NFPA 704 standard is a hazard rating system used to identify the risks associated with hazardous materials.
 * 
 * @param health - Health hazard rating
 * @param fire - Fire hazard rating
 * @param reactivity - Reactivity hazard rating
 * @param specific - Specific hazard rating
 */
export type NFPA = {
    health: NFPACode;
    fire: NFPACode;
    reactivity: NFPACode;
    specific?: NFPANotice;
};

/**
 * Group for hazard information of substances.
 * 
 * @param statements - Hazard, precautionary, and EU hazard statements
 * @param signalWord - GHS signal word
 * @param pictograms - GHS pictograms
 * @param classes - Hazard classification systems (GHS, WHMIS, ADR, DOT)
 * @param label - Hazard identification and UN numbers
 * @param nfpa - NFPA 704 hazard rating
 * @param note - Additional safety notes
 * @param references - References for the hazard data
 */
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

/**
 * Type definition for toxicity data.
 * 
 * @param type - Type of toxicity measurement (e.g., LD50, LC50)
 * @param organism - Organism used in the toxicity test
 * @param value - Measured toxicity value (single or range)
 * @param application - Method of exposure
 * @param duration - Duration of exposure
 */
export type Toxicity = {
    type: Distinct< ToxicityType >;
    organism: Distinct< string >;
    value: SingleValue< 'massFraction' > | RangeValue< 'massFraction' >;
    application?: Distinct< ToxicityApplication >;
    duration?: SingleValue< 'time' > | RangeValue< 'time' >;
};

/**
 * Safety collection combining hazard and toxicity information.
 * 
 * @param hazard - Hazard information group
 * @param toxicity - Toxicity data
 */
export type SafetyCollection = Collection< {
    hazard?: HazardGroup;
    toxicity?: Single< StructProperty< Toxicity > >;
} >;
