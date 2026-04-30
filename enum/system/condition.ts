/**
 * @file enum/system/condition.ts
 * @description Defines enums for standardized environmental conditions used in scientific measurements.
 */

/**
 * Logic for defining environmental parameters such as temperature and pressure.
 */
export enum ConditionType {
  /** Predefined set of temperature and pressure values (e.g., STP). */
  STANDARD = 'standard',
  /** Specific, custom-defined values for a particular measurement. */
  DISCRETE = 'discrete'
};

/**
 * Internationally recognized reference sets of temperature and pressure.
 */
export enum StandardCondition {
  /** IUPAC Standard Temperature and Pressure: 273.15 K and 100 kPa. */
  STP = 'STP',
  /** Historical STP based on 1 atm (101.325 kPa). */
  STP_ATM = 'STP_ATM',
  /** Normal Temperature and Pressure: typically 293.15 K and 101.325 kPa. */
  NTP = 'NTP',
  /** International Standard Atmosphere: 288.15 K and 101.325 kPa. */
  ISA = 'ISA',
  /** American Association of Physicists in Medicine reference conditions. */
  AAPM = 'AAPM',
  /** Standard Ambient Temperature and Pressure: 298.15 K and 100 kPa. */
  SATP = 'SATP',
  /** Compressed Air and Gas Institute reference conditions. */
  CAGI = 'CAGI',
  /** Standard Personnel Environment conditions. */
  SPE = 'SPE',
  /** ISO 5011: Intake air conditioning for internal combustion engines. */
  ISO_5011 = 'ISO_5011',
  /** GOST 2939-63: Russian standard for gas measurement (20°C, 101.325 kPa). */
  GOST_2939_63 = 'GOST_2939_63',
  /** Electricity and Gas Inspection Act (Canada) reference. */
  EGIA = 'EGIA',
  /** Standard Cubic Foot reference conditions. */
  SCF = 'SCF',
  /** Air Movement and Control Association reference conditions. */
  AMCA = 'AMCA',
  /** Federal Aviation Administration reference conditions. */
  FAA = 'FAA',
  /** ISO 13443: Natural gas standard reference conditions. */
  ISO_13443 = 'ISO_13443',
  /** DIN 1343: German standard for reference conditions (0°C, 101.325 kPa). */
  DIN_1343 = 'DIN_1343'
};
