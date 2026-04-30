/**
 * @file enum/science/safety.ts
 * @description Defines enums for chemical safety, hazard classification, and toxicity monitoring.
 * Covers international standards like GHS, NFPA, ADR, and DOT.
 */

/**
 * Standard words used on safety labels to indicate the relative severity of a hazard.
 */
export enum SignalWord {
  /** Indicates a high level of risk which, if not avoided, will result in death or serious injury. */
  DANGER = 'danger',
  /** Indicates a medium level of risk which, if not avoided, could result in death or serious injury. */
  WARNING = 'warning'
};

/**
 * Graphical symbols used to communicate specific information about the hazards of a chemical.
 */
export enum GHSPictogram {
  /** Substances capable of rapidly releasing energy through detonation or deflagration. */
  EXPLOSIVE = 'explosive',
  /** Substances that catch fire easily in contact with air or water. */
  FLAMMABLE = 'flammable',
  /** Substances that can cause or contribute to the combustion of other material. */
  OXIDIZING = 'oxidizing',
  /** Gases stored under pressure which may explode if heated. */
  COMPRESSED_GAS = 'compressedGas',
  /** Chemicals that destroy living tissue or metal on contact. */
  CORROSIVE = 'corrosive',
  /** Substances that can cause death or acute toxicity even in small quantities. */
  TOXIC = 'toxic',
  /** Substances causing less severe health effects like skin irritation or respiratory sensitization. */
  HARMFUL = 'harmful',
  /** Substances with long-term health effects such as carcinogenicity or mutagenicity. */
  HEALTH_HAZARD = 'healthHazard',
  /** Chemicals toxic to aquatic life or with long-lasting environmental effects. */
  ENVIRONMENTAL_HAZARD = 'environmentalHazard'
};

/**
 * Numerical ratings (0-4) used in the NFPA 704 "fire diamond" for health, flammability, and instability.
 */
export enum NFPACode {
  /** Minimal hazard: poses no health, fire, or reactivity risk. */
  NONE = 0,
  /** Slight hazard: may cause irritation or require only minor safety precautions. */
  SLIGHT = 1,
  /** Moderate hazard: requires significant precautions or limited exposure. */
  MODERATE = 2,
  /** Serious hazard: high risk requiring specialized protective equipment. */
  SERIOUS = 3,
  /** Severe hazard: extreme risk of death or permanent injury. */
  SEVERE = 4
};

/**
 * Specific hazard notices and symbols used in the white section of the NFPA 704 diamond.
 */
export enum NFPANotice {
  /** Strong oxidizer: enhances the combustion of other materials. */
  OXIDIZER = 'OX',
  /** Reacts unusually or dangerously with water (e.g., Alkali metals). */
  WATER_REACTIVE = 'W',
  /** Simple asphyxiant gas: displaces oxygen in the air. */
  SIMPLE_ASPHYXIANT = 'SA',
  /** Corrosive substance: destroys living tissue or metals. */
  CORROSIVE = 'COR',
  /** Strong acidic properties. */
  ACID = 'ACID',
  /** Strong alkaline/basic properties. */
  ALKALINE = 'ALK',
  /** Biological hazard: poses a threat to human health or the environment. */
  BIOHAZARDOUS = 'BIO',
  /** Highly poisonous or toxic substance. */
  POISONOUS = 'POI',
  /** Emits ionizing radiation. */
  RADIOACTIVE = 'RAD',
  /** Extremely low-temperature materials (e.g., Liquid Nitrogen). */
  CRYOGENIC = 'CRY',
  /** Pure oxygen or oxygen-enriched environment. */
  OXYGEN_GAS = 'G OX'
};

/**
 * Globally Harmonized System (GHS) hazard classes for physical and health risks.
 */
export enum GHSClass {
  /** Class 01: Explosives and unstable explosives. */
  CLASS_01 = '01',
  /** Class 02: Flammable gases and aerosols. */
  CLASS_02 = '02',
  /** Class 03: Oxidizing gases, liquids, and solids. */
  CLASS_03 = '03',
  /** Class 04: Gases under pressure. */
  CLASS_04 = '04',
  /** Class 05: Flammable liquids. */
  CLASS_05 = '05',
  /** Class 06: Flammable solids and self-reactive substances. */
  CLASS_06 = '06',
  /** Class 07: Pyrophoric liquids and solids. */
  CLASS_07 = '07',
  /** Class 08: Self-heating substances and mixtures. */
  CLASS_08 = '08',
  /** Class 09: Substances that emit flammable gases in contact with water. */
  CLASS_09 = '09'
};

/**
 * Workplace Hazardous Materials Information System (Canada) classifications.
 */
export enum WHMISClass {
  /** Compressed Gas: contents under pressure. */
  COMPRESSED_GAS = 'A',
  /** Flammable and Combustible Material. */
  FLAMMABLE = 'B',
  /** Oxidizing Material: increases fire risk. */
  OXIDIZING = 'C',
  /** Poisonous and Infectious Material: Immediate and serious toxic effects. */
  TOXIC_ACUTE = 'D-1',
  /** Poisonous and Infectious Material: Other toxic effects (long-term). */
  TOXIC_OTHER = 'D-2',
  /** Biohazardous Infectious Material. */
  BIOHAZARDOUS = 'D-3',
  /** Corrosive Material. */
  CORROSIVE = 'E',
  /** Dangerously Reactive Material. */
  DANGEROUSLY_REACTIVE = 'F'
};

/**
 * European Agreement concerning the International Carriage of Dangerous Goods by Road.
 */
export enum ADRClass {
  /** Class 1: Explosive substances and articles. */
  CLASS_1 = '1',
  /** Division 1.1: Mass explosion hazard. */
  DIV_1_1 = '1.1',
  /** Division 1.2: Projection hazard but no mass explosion. */
  DIV_1_2 = '1.2',
  /** Division 1.3: Fire hazard and minor blast/projection hazard. */
  DIV_1_3 = '1.3',
  /** Division 1.4: No significant hazard beyond the package. */
  DIV_1_4 = '1.4',
  /** Division 1.5: Very insensitive substances with mass explosion hazard. */
  DIV_1_5 = '1.5',
  /** Division 1.6: Extremely insensitive articles with no mass explosion. */
  DIV_1_6 = '1.6',
  /** Division 2.1: Flammable gases. */
  DIV_2_1 = '2.1',
  /** Division 2.2: Non-flammable, non-toxic gases. */
  DIV_2_2 = '2.2',
  /** Division 2.3: Toxic gases. */
  DIV_2_3 = '2.3',
  /** Class 3: Flammable liquids. */
  CLASS_3 = '3',
  /** Division 4.1: Flammable solids and self-reactive substances. */
  DIV_4_1 = '4.1',
  /** Division 4.2: Substances liable to spontaneous combustion. */
  DIV_4_2 = '4.2',
  /** Division 4.3: Substances emitting flammable gases in contact with water. */
  DIV_4_3 = '4.3',
  /** Division 5.1: Oxidizing substances. */
  DIV_5_1 = '5.1',
  /** Division 5.2: Organic peroxides. */
  DIV_5_2 = '5.2',
  /** Division 6.1: Toxic substances. */
  DIV_6_1 = '6.1',
  /** Division 6.2: Infectious substances. */
  DIV_6_2 = '6.2',
  /** Category 7A: Radioactive materials (White I). */
  CAT_7A = '7A',
  /** Category 7B: Radioactive materials (Yellow II). */
  CAT_7B = '7B',
  /** Category 7C: Radioactive materials (Yellow III). */
  CAT_7C = '7C',
  /** Category 7E: Fissile materials. */
  CAT_7E = '7E',
  /** Class 8: Corrosive substances. */
  CLASS_8 = '8',
  /** Class 9: Miscellaneous dangerous substances and articles. */
  CLASS_9 = '9',
  /** Class 9A: Lithium batteries (specific classification). */
  CLASS_9A = '9A',
  /** Elevated temperature substances. */
  HOT = 'HOT',
  /** Environmentally hazardous substances. */
  POL = 'POL'
};

/**
 * U.S. Department of Transportation (DOT) classifications for hazardous materials transport.
 */
export enum DOTClass {
  /** Mass explosion hazard. */
  DIV_1_1 = '1.1',
  /** Projection hazard. */
  DIV_1_2 = '1.2',
  /** Fire hazard and minor blast/projection hazard. */
  DIV_1_3 = '1.3',
  /** Minor explosion hazard. */
  DIV_1_4 = '1.4',
  /** Very insensitive mass explosion hazard. */
  DIV_1_5 = '1.5',
  /** Extremely insensitive articles. */
  DIV_1_6 = '1.6',
  /** Flammable gas. */
  DIV_2_1 = '2.1',
  /** Non-flammable gas. */
  DIV_2_2 = '2.2',
  /** Poisonous gas. */
  DIV_2_3 = '2.3',
  /** Flammable liquid. */
  CLASS_3 = '3',
  /** Flammable solid. */
  DIV_4_1 = '4.1',
  /** Spontaneously combustible material. */
  DIV_4_2 = '4.2',
  /** Dangerous when wet material. */
  DIV_4_3 = '4.3',
  /** Oxidizer. */
  DIV_5_1 = '5.1',
  /** Organic peroxide. */
  DIV_5_2 = '5.2',
  /** Poisonous (toxic) material. */
  DIV_6_1 = '6.1',
  /** Infectious substance. */
  DIV_6_2 = '6.2',
  /** Radioactive material. */
  CLASS_7 = '7',
  /** Corrosive material. */
  CLASS_8 = '8',
  /** Miscellaneous hazardous material. */
  CLASS_9 = '9'
};

/**
 * Standard toxicity metrics used to quantify the lethal or effective dose of a chemical.
 */
export enum ToxicityType {
  /** Half maximal effective concentration: dose required for 50% effect. */
  EC50 = 'EC50',
  /** Median lethal concentration: concentration in air or water required to kill 50% of subjects. */
  LC50 = 'LC50',
  /** Median lethal dose: amount of substance required to kill 50% of test subjects. */
  LD50 = 'LD50',
  /** Median toxic dose: dose at which toxicity occurs in 50% of cases. */
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
 * Routes of administration for toxicological studies.
 */
export enum ToxicityApplication {
  /** Application to the skin. */
  DERMAL = 'dermal',
  /** Intake through breathing. */
  INHALATION = 'inhalation',
  /** Injection into the abdominal cavity. */
  INTRAPERITONEAL = 'intraperitoneal',
  /** Injection directly into the bloodstream. */
  INTRAVENOUS = 'intravenous',
  /** Intake through the mouth. */
  ORAL = 'oral',
  /** Injection under the skin. */
  SUBCUTANEOUS = 'subcutaneous'
};

/**
 * Metadata categories for toxicological test subjects.
 */
export enum ToxicityOrganism {
  /** Standard biological species used in testing. */
  ORGANISM = 'organism',
  /** Specialized or non-standard test subjects. */
  OTHER = 'other'
};

/**
 * Standard model organisms and target species for toxicological and biological studies.
 */
export enum Organism {
  /** Rattus norvegicus: standard rodent model for human metabolism. */
  RAT = 'rat',
  /** Mus musculus: widely used genetic and physiological model. */
  MOUSE = 'mouse',
  /** Oryctolagus cuniculus: used for skin and eye irritation tests. */
  RABBIT = 'rabbit',
  /** Various aquatic species used for environmental toxicity assessment. */
  FISH = 'fish',
  /** Photosynthetic organisms used for ecological impact studies. */
  ALGAE = 'algae',
  /** Homo sapiens: clinical and epidemiological data. */
  HUMAN = 'human'
};
