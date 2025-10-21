/**
 * Safety Collection
 * Defines the structure for safety-related information in the database schema.
 */

import { Collection, Distinct, Group } from '../abstract/collection';
import { RangeValue, SingleValue } from '../abstract/value';

// Hazard statements
export type HStatement = `H${ '2' | '3' | '4' | '5' }${ string }`;
export type PStatement = `P${ '1' | '2' | '3' | '4' | '5' }${ string }`;
export type EUHStatement = `EUH${ '0' | '2' | '3' | '4' }${ string }`;

// Hazard signal words
export const SignalWord = [ 'danger', 'warning', 'caution' ] as const;
export type SignalWord = ( typeof SignalWord )[ number ];

// GHS pictograms
export const GHSPictogram = [
    'explosive', 'flammable', 'oxidizing', 'compressedGas', 'corrosive',
    'toxic', 'harmful', 'healthHazard', 'environmentalHazard'
] as const;

export type GHSPictogram = ( typeof GHSPictogram )[ number ];

// GHS hazard classes
export const GHSClass = [ '01', '02', '03', '04', '05', '06', '07', '08', '09' ] as const;
export type GHSClass = ( typeof GHSClass )[ number ];

// WHMIS classes
export const WHMISClass = [ 'A', 'B', 'C', 'D-1', 'D-2', 'D-3', 'E', 'F' ] as const;
export type WHMISClass = ( typeof WHMISClass )[ number ];

// ADR hazard classes
export const ADRClass = [
    '1', '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '2.1', '2.2', '2.3',
    '3', '4.1', '4.2', '4.3', '5.1', '5.2', '6.1', '6.2', '7A', '7B', '7C',
    '7E', '8', '9', '9A', 'HOT', 'POL'
] as const;

export type ADRClass = ( typeof ADRClass )[ number ];

// DOT hazard classes
export const DOTClass = [
    '1.1', '1.2', '1.3', '1.4', '1.5', '1.6', '2.1', '2.2', '2.3', '3',
    '4.1', '4.2', '4.3', '5.1', '5.2', '6.1', '6.2', '7', '8', '9'
] as const;

export type DOTClass = ( typeof DOTClass )[ number ];

// (ADR) warning label
export type HazardIdentification = `${ 'X' | '' }${ number }`;
export type UNNumber = `${ '0' | '1' | '2' | '3' | '8' | '9' }${ number }`;

// NFPA 704 standard
export type NFPA = {
    health: 0 | 1 | 2 | 3 | 4;
    fire: 0 | 1 | 2 | 3 | 4;
    reactivity: 0 | 1 | 2 | 3 | 4;
    specific?: 'W' | 'OX' | 'SA' | 'COR' | 'ACID' | 'ALK' | 'BIO' | 'POI' | 'RAD' | 'CRY';
};

// Group with hazardous information
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
} >;

// Toxicity information
export type Toxicity = Distinct< {
    type: 'EC50' | 'LC50' | 'LD50' | 'TD50' | 'LOAEL' | 'LOEL' | 'NOAEL' | 'NOEL';
    organism: string;
    value: SingleValue< 'massFraction' > | RangeValue< 'massFraction' >;
    application?: 'oral' | 'dermal' | 'inhalation' | 'intravenous' | 'intraperitoneal' | 'subcutaneous';
    duration?: string;
}[] >;

// Safety collection combining hazard and toxicity information
export type SafetyCollection = Collection< {
    hazard?: HazardGroup;
    toxicity?: Toxicity;
} >;
