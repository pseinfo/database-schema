/**
 * Safety Enumerations
 * This module contains safety-related enumerations used throughout the database schema.
 * 
 * @module enums/safety
 */


/** Enumeration of hazard signal words. */
export enum SignalWord {
    /** Danger signal word */
    DANGER = 'danger',
    /** Warning signal word */
    WARNING = 'warning',
    /** Caution signal word */
    CAUTION = 'caution'
};

/** Enumeration of GHS pictograms. */
export enum GHSPictogram {
    /** Explosive pictogram */
    EXPLOSIVE = 'explosive',
    /** Flammable pictogram */
    FLAMMABLE = 'flammable',
    /** Oxidizing pictogram */
    OXIDIZING = 'oxidizing',
    /** Compressed gas pictogram */
    COMPRESSED_GAS = 'compressedGas',
    /** Corrosive pictogram */
    CORROSIVE = 'corrosive',
    /** Toxic pictogram */
    TOXIC = 'toxic',
    /** Harmful pictogram */
    HARMFUL = 'harmful',
    /** Health hazard pictogram */
    HEALTH_HAZARD = 'healthHazard',
    /** Environmental hazard pictogram */
    ENVIRONMENTAL_HAZARD = 'environmentalHazard'
};

/** Enumeration of GHS hazard classes. */
export enum GHSClass {
    /** GHS Class 01 */
    CLASS_01 = '01',
    /** GHS Class 02 */
    CLASS_02 = '02',
    /** GHS Class 03 */
    CLASS_03 = '03',
    /** GHS Class 04 */
    CLASS_04 = '04',
    /** GHS Class 05 */
    CLASS_05 = '05',
    /** GHS Class 06 */
    CLASS_06 = '06',
    /** GHS Class 07 */
    CLASS_07 = '07',
    /** GHS Class 08 */
    CLASS_08 = '08',
    /** GHS Class 09 */
    CLASS_09 = '09'
};

/** Enumeration of WHMIS (Workplace Hazardous Materials Information System) classes. */
export enum WHMISClass {
    /** Compressed gas */
    A = 'A',
    /** Flammable and combustible material */
    B = 'B',
    /** Oxidizing material */
    C = 'C',
    /** Poisonous and infectious material (Immediate and serious toxic effects) */
    D1 = 'D-1',
    /** Poisonous and infectious material (Other toxic effects) */
    D2 = 'D-2',
    /** Poisonous and infectious material (Biohazardous infectious material) */
    D3 = 'D-3',
    /** Corrosive material */
    E = 'E',
    /** Dangerously reactive material */
    F = 'F'
};

/** Enumeration of ADR (European Agreement concerning the International Carriage of Dangerous Goods by Road) hazard classes. */
export enum ADRClass {
    /** Explosive substances and articles */
    CLASS_1 = '1',
    /** Division 1.1 */
    DIV_1_1 = '1.1',
    /** Division 1.2 */
    DIV_1_2 = '1.2',
    /** Division 1.3 */
    DIV_1_3 = '1.3',
    /** Division 1.4 */
    DIV_1_4 = '1.4',
    /** Division 1.5 */
    DIV_1_5 = '1.5',
    /** Division 1.6 */
    DIV_1_6 = '1.6',
    /** Flammable gases */
    DIV_2_1 = '2.1',
    /** Non-flammable, non-toxic gases */
    DIV_2_2 = '2.2',
    /** Toxic gases */
    DIV_2_3 = '2.3',
    /** Flammable liquids */
    CLASS_3 = '3',
    /** Flammable solids, self-reactive substances, polymerizing substances and solid desensitized explosives */
    DIV_4_1 = '4.1',
    /** Substances liable to spontaneous combustion */
    DIV_4_2 = '4.2',
    /** Substances which, in contact with water, emit flammable gases */
    DIV_4_3 = '4.3',
    /** Oxidizing substances */
    DIV_5_1 = '5.1',
    /** Organic peroxides */
    DIV_5_2 = '5.2',
    /** Toxic substances */
    DIV_6_1 = '6.1',
    /** Infectious substances */
    DIV_6_2 = '6.2',
    /** Radioactive material (Category I-WHITE) */
    CAT_7A = '7A',
    /** Radioactive material (Category II-YELLOW) */
    CAT_7B = '7B',
    /** Radioactive material (Category III-YELLOW) */
    CAT_7C = '7C',
    /** Radioactive material (Fissile) */
    CAT_7E = '7E',
    /** Corrosive substances */
    CLASS_8 = '8',
    /** Miscellaneous dangerous substances and articles */
    CLASS_9 = '9',
    /** Miscellaneous dangerous substances and articles (Lithium batteries) */
    CLASS_9A = '9A',
    /** Elevated temperature substance */
    HOT = 'HOT',
    /** Environmentally hazardous substance (Marine pollutant) */
    POL = 'POL'
};

/** Enumeration of DOT (Department of Transportation) hazard classes. */
export enum DOTClass {
    /** Explosives 1.1 */
    DIV_1_1 = '1.1',
    /** Explosives 1.2 */
    DIV_1_2 = '1.2',
    /** Explosives 1.3 */
    DIV_1_3 = '1.3',
    /** Explosives 1.4 */
    DIV_1_4 = '1.4',
    /** Explosives 1.5 */
    DIV_1_5 = '1.5',
    /** Explosives 1.6 */
    DIV_1_6 = '1.6',
    /** Flammable Gas 2.1 */
    DIV_2_1 = '2.1',
    /** Non-Flammable Gas 2.2 */
    DIV_2_2 = '2.2',
    /** Poison Gas 2.3 */
    DIV_2_3 = '2.3',
    /** Flammable Liquid 3 */
    CLASS_3 = '3',
    /** Flammable Solid 4.1 */
    DIV_4_1 = '4.1',
    /** Spontaneously Combustible 4.2 */
    DIV_4_2 = '4.2',
    /** Dangerous When Wet 4.3 */
    DIV_4_3 = '4.3',
    /** Oxidizer 5.1 */
    DIV_5_1 = '5.1',
    /** Organic Peroxide 5.2 */
    DIV_5_2 = '5.2',
    /** Poison 6.1 */
    DIV_6_1 = '6.1',
    /** Infectious Substance 6.2 */
    DIV_6_2 = '6.2',
    /** Radioactive 7 */
    CLASS_7 = '7',
    /** Corrosive 8 */
    CLASS_8 = '8',
    /** Miscellaneous 9 */
    CLASS_9 = '9'
};

/** Enumeration of toxicity measurement types. */
export enum ToxicityType {
    /** Half maximal effective concentration */
    EC50 = 'EC50',
    /** Half maximal lethal concentration */
    LC50 = 'LC50',
    /** Half maximal lethal dose */
    LD50 = 'LD50',
    /** Median toxic dose */
    TD50 = 'TD50',
    /** Lowest-observed-adverse-effect level */
    LOAEL = 'LOAEL',
    /** Lowest-observed-effect level */
    LOEL = 'LOEL',
    /** No-observed-adverse-effect level */
    NOAEL = 'NOAEL',
    /** No-observed-effect level */
    NOEL = 'NOEL'
};

/** Enumeration of toxicity application methods. */
export enum ToxicityApplication {
    /** Oral application */
    ORAL = 'oral',
    /** Dermal application */
    DERMAL = 'dermal',
    /** Inhalation application */
    INHALATION = 'inhalation',
    /** Intravenous application */
    INTRAVENOUS = 'intravenous',
    /** Intraperitoneal application */
    INTRAPERITONEAL = 'intraperitoneal',
    /** Subcutaneous application */
    SUBCUTANEOUS = 'subcutaneous'
};
