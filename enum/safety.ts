/**
 * @file safety.ts
 * @description Defines enums for chemical safety, hazard classification, and toxicity.
 * This module includes NFPA, GHS, WHMIS, ADR, and DOT international safety standards.
 */

/**
 * Standard signal words used on hazard labels to indicate relative severity.
 */
export enum SignalWord {
  /** Serious health or environmental risk. */
  DANGER = 'danger',
  /** Moderate health or environmental risk. */
  WARNING = 'warning',
  /** Lower level of potential injury or hazard. */
  CAUTION = 'caution'
};

/**
 * National Fire Protection Association (NFPA) 704 numerical ratings for hazard severity.
 */
export enum NFPACode {
  /** No significant hazard. */
  NONE = 0,
  /** Slight hazard; caution required. */
  SLIGHT = 1,
  /** Moderate hazard; potential for injury. */
  MODERATE = 2,
  /** Serious hazard; specialized equipment needed. */
  SERIOUS = 3,
  /** Severe hazard; life-threatening. */
  SEVERE = 4
};

/**
 * Special notices for specific chemical hazards defined by NFPA 704.
 */
export enum NFPANotice {
  /** Substance with oxidizing properties. */
  OXIDIZER = 'OX',
  /** Reacts violently or explosively with water; do not extinguish with water. */
  WATER_REACTIVE = 'W',
  /** Gases that displace air and can cause suffocation. */
  SIMPLE_ASPHYXIANT = 'SA',
  /** Causes destruction of human tissue or corrosion of metals. */
  CORROSIVE = 'COR',
  /** Specifically acidic material. */
  ACID = 'ACID',
  /** Specifically alkaline (basic) material. */
  ALKALINE = 'ALK',
  /** Contains pathogenic biological agents. */
  BIOHAZARDOUS = 'BIO',
  /** Highly toxic or lethal substance. */
  POISONOUS = 'POI',
  /** Emits ionizing radiation. */
  RADIOACTIVE = 'RAD',
  /** Specifically cold-stored liquids or materials. */
  CRYOGENIC = 'CRY',
  /** Oxidizing gas specifically at standard conditions. */
  OXYGEN_GAS = 'G OX'
};

/**
 * Globally Harmonized System (GHS) visual symbols for hazard communication.
 */
export enum GHSPictogram {
  /** Unstable explosives or items with mass explosion hazard. */
  EXPLOSIVE = 'explosive',
  /** Flammable gases, aerosols, liquids, or solids. */
  FLAMMABLE = 'flammable',
  /** Oxidizing gases, liquids, or solids. */
  OXIDIZING = 'oxidizing',
  /** Gases under pressure in a cylinder. */
  COMPRESSED_GAS = 'compressedGas',
  /** Skin corrosion, serious eye damage, or metal corrosion. */
  CORROSIVE = 'corrosive',
  /** Acute toxicity (fatal or toxic if ingested or inhaled). */
  TOXIC = 'toxic',
  /** Skin and eye irritation, sensitization, or narcotic effects. */
  HARMFUL = 'harmful',
  /** Respiratory sensitizer, mutagen, or carcinogen. */
  HEALTH_HAZARD = 'healthHazard',
  /** Acute or chronic aquatic toxicity. */
  ENVIRONMENTAL_HAZARD = 'environmentalHazard'
};

/**
 * GHS hazard categories based on the nature of the chemical risk.
 */
export enum GHSClass {
  /** Explosives */
  CLASS_01 = '01',
  /** Flammable gases and aerosols */
  CLASS_02 = '02',
  /** Oxidizing gases */
  CLASS_03 = '03',
  /** Gases under pressure */
  CLASS_04 = '04',
  /** Flammable liquids */
  CLASS_05 = '05',
  /** Flammable solids */
  CLASS_06 = '06',
  /** Self-reactive substances */
  CLASS_07 = '07',
  /** Pyrophoric liquids and solids */
  CLASS_08 = '08',
  /** Self-heating substances */
  CLASS_09 = '09'
};

/**
 * Workplace Hazardous Materials Information System (WHMIS) classification codes.
 */
export enum WHMISClass {
  /** Class A: Compressed gas */
  COMPRESSED_GAS = 'A',
  /** Class B: Flammable and combustible material */
  FLAMMABLE = 'B',
  /** Class C: Oxidizing material */
  OXIDIZING = 'C',
  /** Class D-1: Poisonous and infectious material (immediate) */
  TOXIC_ACUTE = 'D-1',
  /** Class D-2: Poisonous and infectious material (other) */
  TOXIC_OTHER = 'D-2',
  /** Class D-3: Biohazardous infectious material */
  BIOHAZARDOUS = 'D-3',
  /** Class E: Corrosive material */
  CORROSIVE = 'E',
  /** Class F: Dangerously reactive material */
  DANGEROUSLY_REACTIVE = 'F'
};

/**
 * Agreement concerning the International Carriage of Dangerous Goods by Road (ADR).
 */
export enum ADRClass {
  /** Explosive substances and articles */
  CLASS_1 = '1',
  /** Substances with high explosion hazard */
  DIV_1_1 = '1.1',
  /** Projectile hazard but no mass explosion */
  DIV_1_2 = '1.2',
  /** Fire hazard with minor blast or projection hazard */
  DIV_1_3 = '1.3',
  /** Minor explosion hazard confined to packaging */
  DIV_1_4 = '1.4',
  /** Very insensitive substances with mass explosion hazard */
  DIV_1_5 = '1.5',
  /** Extremely insensitive articles with no mass explosion */
  DIV_1_6 = '1.6',
  /** Flammable gases */
  DIV_2_1 = '2.1',
  /** Non-flammable, non-toxic gases */
  DIV_2_2 = '2.2',
  /** Toxic gases */
  DIV_2_3 = '2.3',
  /** Flammable liquids */
  CLASS_3 = '3',
  /** Flammable solids */
  DIV_4_1 = '4.1',
  /** Substances liable to spontaneous combustion */
  DIV_4_2 = '4.2',
  /** Substances emitting flammable gases in contact with water */
  DIV_4_3 = '4.3',
  /** Oxidizing substances */
  DIV_5_1 = '5.1',
  /** Organic peroxides */
  DIV_5_2 = '5.2',
  /** Toxic substances */
  DIV_6_1 = '6.1',
  /** Infectious substances */
  DIV_6_2 = '6.2',
  /** Radioactive material (White label I) */
  CAT_7A = '7A',
  /** Radioactive material (Yellow label II) */
  CAT_7B = '7B',
  /** Radioactive material (Yellow label III) */
  CAT_7C = '7C',
  /** Fissile material (specifically containing U-235) */
  CAT_7E = '7E',
  /** Corrosive substances */
  CLASS_8 = '8',
  /** Miscellaneous dangerous substances and articles */
  CLASS_9 = '9',
  /** Specifically lithium batteries or related electronics */
  CLASS_9A = '9A',
  /** Substance transported at elevated temperatures */
  HOT = 'HOT',
  /** Marine pollutants */
  POL = 'POL'
};

/**
 * U.S. Department of Transportation (DOT) hazardous material classification.
 */
export enum DOTClass {
  /** Mass explosion hazard */
  DIV_1_1 = '1.1',
  /** Projection hazard */
  DIV_1_2 = '1.2',
  /** Predominantly fire hazard */
  DIV_1_3 = '1.3',
  /** No significant blast hazard */
  DIV_1_4 = '1.4',
  /** Very insensitive mass explosion hazard */
  DIV_1_5 = '1.5',
  /** Extremely insensitive articles */
  DIV_1_6 = '1.6',
  /** Flammable gases */
  DIV_2_1 = '2.1',
  /** Non-flammable, non-toxic gases */
  DIV_2_2 = '2.2',
  /** Toxic gases */
  DIV_2_3 = '2.3',
  /** Flammable liquids */
  CLASS_3 = '3',
  /** Flammable solids */
  DIV_4_1 = '4.1',
  /** Substances liable to spontaneous combustion */
  DIV_4_2 = '4.2',
  /** Dangerous when wet */
  DIV_4_3 = '4.3',
  /** Oxidizers */
  DIV_5_1 = '5.1',
  /** Organic peroxides */
  DIV_5_2 = '5.2',
  /** Toxic substances */
  DIV_6_1 = '6.1',
  /** Infectious substances */
  DIV_6_2 = '6.2',
  /** Radioactive material */
  CLASS_7 = '7',
  /** Corrosive material */
  CLASS_8 = '8',
  /** Miscellaneous hazard */
  CLASS_9 = '9'
};

/**
 * Standard metrics for determining the toxicity of a chemical substance.
 */
export enum ToxicityType {
  /** Half maximal effective concentration causing a response in 50% of people. */
  EC50 = 'EC50',
  /** Lethal concentration resulting in death for 50% of the population. */
  LC50 = 'LC50',
  /** Lethal dose resulting in death for 50% of the population. */
  LD50 = 'LD50',
  /** Toxic dose causing adverse effects in 50% of the population. */
  TD50 = 'TD50',
  /** Lowest Observed Adverse Effect Level. */
  LOAEL = 'LOAEL',
  /** Lowest Observed Effect Level. */
  LOEL = 'LOEL',
  /** No Observed Adverse Effect Level. */
  NOAEL = 'NOAEL',
  /** No Observed Effect Level. */
  NOEL = 'NOEL'
};

/**
 * Route of exposure used during toxicological testing.
 */
export enum ToxicityApplication {
  /** Through direct contact with the skin. */
  DERMAL = 'dermal',
  /** Through breathing of gas, vapor, or particulates. */
  INHALATION = 'inhalation',
  /** Injection into the body cavity. */
  INTRAPERITONEAL = 'intraperitoneal',
  /** Direct injection into a vein. */
  INTRAVENOUS = 'intravenous',
  /** Ingestion through the mouth. */
  ORAL = 'oral',
  /** Injection under the skin. */
  SUBCUTANEOUS = 'subcutaneous'
};
