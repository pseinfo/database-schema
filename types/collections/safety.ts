/**
 * Safety Collection
 * Defines the structure for safety-related information in the database schema.
 */

import type { Collection, Distinct, Group, Single } from '@/abstract/collection';
import type { StructProperty } from '@/abstract/property';
import type { RefId } from '@/abstract/reference';
import type { RangeValue, SingleValue } from '@/abstract/value';

/** Hazard statements */
export type HStatement = `H${ '2' | '3' | '4' | '5' }${ string }`;
export type PStatement = `P${ '1' | '2' | '3' | '4' | '5' }${ string }`;
export type EUHStatement = `EUH${ '0' | '2' | '3' | '4' }${ string }`;

/** Hazard signal words */
export type SignalWord = ( typeof SignalWord )[ number ];
export const SignalWord = [ 'danger', 'warning', 'caution' ] as const;

/** GHS pictograms */
export type GHSPictogram = ( typeof GHSPictogram )[ number ];
export const GHSPictogram = [
    'explosive', 'flammable', 'oxidizing', 'compressedGas', 'corrosive', 'toxic',
    'harmful', 'healthHazard', 'environmentalHazard'
] as const;

/** GHS hazard classes */
export type GHSClass = ( typeof GHSClass )[ number ];
export const GHSClass = [ '01', '02', '03', '04', '05', '06', '07', '08', '09' ] as const;

/** WHMIS classes */
export type WHMISClass = ( typeof WHMISClass )[ number ];
export const WHMISClass = [ 'A', 'B', 'C', 'D-1', 'D-2', 'D-3', 'E', 'F' ] as const;

/** ADR hazard classes */
export type ADRClass = ( typeof ADRClass )[ number ];
export const ADRClass = [
    '1', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '2.1', '2.2', '2.3',
    '3', '4.1', '4.2', '4.3', '5.1', '5.2', '6.1', '6.2', '7A', '7B', '7C',
    '7E', '8', '9', '9A', 'HOT', 'POL'
] as const;

/** DOT hazard classes */
export type DOTClass = ( typeof DOTClass )[ number ];
export const DOTClass = [
    '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '2.1', '2.2', '2.3', '3',
    '4.1', '4.2', '4.3', '5.1', '5.2', '6.1', '6.2', '7', '8', '9'
] as const;

/** (ADR) warning label */
export type HazardIdentification = `${ 'X' | '' }${ number }`;
export type UNNumber = `${ '0' | '1' | '2' | '3' | '8' | '9' }${ number }`;

/**
 * NFPA 704 standard
 * The NFPA 704 standard is a hazard rating system used to identify the risks
 * associated with hazardous materials.
 * 
 * @param health - Health hazard rating
 * @param fire - Fire hazard rating
 * @param reactivity - Reactivity hazard rating
 * @param specific - Specific hazard rating
 */
export type NFPA = {
    health: 0 | 1 | 2 | 3 | 4;
    fire: 0 | 1 | 2 | 3 | 4;
    reactivity: 0 | 1 | 2 | 3 | 4;
    specific?: 'W' | 'OX' | 'SA' | 'COR' | 'ACID' | 'ALK' | 'BIO' | 'POI' | 'RAD' | 'CRY';
};

/**
 * HazardGroup
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

/** Toxicity types */
export type ToxicityType = ( typeof ToxicityType )[ number ];
export const ToxicityType = [ 'EC50', 'LC50', 'LD50', 'TD50', 'LOAEL', 'LOEL', 'NOAEL', 'NOEL' ] as const;

/** Toxicity applications */
export type ToxicityApplication = ( typeof ToxicityApplication )[ number ];
export const ToxicityApplication = [
    'oral', 'dermal', 'inhalation', 'intravenous', 'intraperitoneal', 'subcutaneous'
] as const;

/**
 * Toxicity
 * Represents toxicity data for substances.
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
    duration?: Distinct< string >;  
};

/**
 * SafetyCollection
 * Safety collection combining hazard and toxicity information.
 * 
 * @param hazard - Hazard information group
 * @param toxicity - Toxicity data
 */
export type SafetyCollection = Collection< {
    hazard?: HazardGroup;
    toxicity?: Single< StructProperty< Toxicity > >;
} >;
