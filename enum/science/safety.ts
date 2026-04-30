export enum SignalWord {
  DANGER = 'danger',
  WARNING = 'warning'
};

export enum GHSPictogram {
  EXPLOSIVE = 'explosive',
  FLAMMABLE = 'flammable',
  OXIDIZING = 'oxidizing',
  COMPRESSED_GAS = 'compressedGas',
  CORROSIVE = 'corrosive',
  TOXIC = 'toxic',
  HARMFUL = 'harmful',
  HEALTH_HAZARD = 'healthHazard',
  ENVIRONMENTAL_HAZARD = 'environmentalHazard'
};

export enum NFPACode {
  NONE = 0,
  SLIGHT = 1,
  MODERATE = 2,
  SERIOUS = 3,
  SEVERE = 4
};

export enum NFPANotice {
  OXIDIZER = 'OX',
  WATER_REACTIVE = 'W',
  SIMPLE_ASPHYXIANT = 'SA',
  CORROSIVE = 'COR',
  ACID = 'ACID',
  ALKALINE = 'ALK',
  BIOHAZARDOUS = 'BIO',
  POISONOUS = 'POI',
  RADIOACTIVE = 'RAD',
  CRYOGENIC = 'CRY',
  OXYGEN_GAS = 'G OX'
};

export enum GHSClass {
  CLASS_01 = '01',
  CLASS_02 = '02',
  CLASS_03 = '03',
  CLASS_04 = '04',
  CLASS_05 = '05',
  CLASS_06 = '06',
  CLASS_07 = '07',
  CLASS_08 = '08',
  CLASS_09 = '09'
};

export enum WHMISClass {
  COMPRESSED_GAS = 'A',
  FLAMMABLE = 'B',
  OXIDIZING = 'C',
  TOXIC_ACUTE = 'D-1',
  TOXIC_OTHER = 'D-2',
  BIOHAZARDOUS = 'D-3',
  CORROSIVE = 'E',
  DANGEROUSLY_REACTIVE = 'F'
};

export enum ADRClass {
  CLASS_1 = '1',
  DIV_1_1 = '1.1',
  DIV_1_2 = '1.2',
  DIV_1_3 = '1.3',
  DIV_1_4 = '1.4',
  DIV_1_5 = '1.5',
  DIV_1_6 = '1.6',
  DIV_2_1 = '2.1',
  DIV_2_2 = '2.2',
  DIV_2_3 = '2.3',
  CLASS_3 = '3',
  DIV_4_1 = '4.1',
  DIV_4_2 = '4.2',
  DIV_4_3 = '4.3',
  DIV_5_1 = '5.1',
  DIV_5_2 = '5.2',
  DIV_6_1 = '6.1',
  DIV_6_2 = '6.2',
  CAT_7A = '7A',
  CAT_7B = '7B',
  CAT_7C = '7C',
  CAT_7E = '7E',
  CLASS_8 = '8',
  CLASS_9 = '9',
  CLASS_9A = '9A',
  HOT = 'HOT',
  POL = 'POL'
};

export enum DOTClass {
  DIV_1_1 = '1.1',
  DIV_1_2 = '1.2',
  DIV_1_3 = '1.3',
  DIV_1_4 = '1.4',
  DIV_1_5 = '1.5',
  DIV_1_6 = '1.6',
  DIV_2_1 = '2.1',
  DIV_2_2 = '2.2',
  DIV_2_3 = '2.3',
  CLASS_3 = '3',
  DIV_4_1 = '4.1',
  DIV_4_2 = '4.2',
  DIV_4_3 = '4.3',
  DIV_5_1 = '5.1',
  DIV_5_2 = '5.2',
  DIV_6_1 = '6.1',
  DIV_6_2 = '6.2',
  CLASS_7 = '7',
  CLASS_8 = '8',
  CLASS_9 = '9'
};

export enum ToxicityType {
  EC50 = 'EC50',
  LC50 = 'LC50',
  LD50 = 'LD50',
  TD50 = 'TD50',
  LOAEL = 'LOAEL',
  LOEL = 'LOEL',
  NOAEL = 'NOAEL',
  NOEL = 'NOEL'
};

export enum ToxicityApplication {
  DERMAL = 'dermal',
  INHALATION = 'inhalation',
  INTRAPERITONEAL = 'intraperitoneal',
  INTRAVENOUS = 'intravenous',
  ORAL = 'oral',
  SUBCUTANEOUS = 'subcutaneous'
};

export enum ToxicityOrganism {
  ORGANISM = 'organism',
  OTHER = 'other'
};

export enum Organism {
  RAT = 'rat',
  MOUSE = 'mouse',
  RABBIT = 'rabbit',
  FISH = 'fish',
  ALGAE = 'algae',
  HUMAN = 'human'
};
