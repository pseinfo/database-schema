/**
 * Generic Enumerations
 * This module contains generic enumerations used throughout the database schema.
 * 
 * @module enums/generic
 */


/** Enumeration of standard conditions for physical quantities. */
export enum StandardCondition {
    /** T=0     P=100       IUPAC (STP) since 1982 */
    STP = 'STP',
    /** T=0     P=101.325   NIST, ISO 10780, former IUPAC STP */
    STP_ATM = 'STP_ATM',
    /** T=20    P=101.325   EPA, NIST */
    NTP = 'NTP',
    /** T=15    P=101.325   ICAO ISA, ISO 13443, EEA, EGIA (SI) */
    ISA = 'ISA',
    /** T=22    P=101.325   American Association of Physicists in Medicine */
    AAPM = 'AAPM',
    /** T=25    P=101.325   SATP, EPA */
    SATP = 'SATP',
    /** T=20    P=100       CAGI */
    CAGI = 'CAGI',
    /** T=15    P=100       SPE */
    SPE = 'SPE',
    /** T=20    P=101.3     ISO 5011 */
    ISO_5011 = 'ISO_5011',
    /** T=20    P=101.33    GOST 2939-63 */
    GOST_2939_63 = 'GOST_2939_63',
    /** T=15.56 P=101.6     EGIA (Imperial System) */
    EGIA = 'EGIA',
    /** T=15.56 P=101.35    U.S. DOT (SCF) */
    SCF = 'SCF',
    /** T=21.11 P=101.3     AMCA */
    AMCA = 'AMCA',
    /** T=15    P=101.3     FAA */
    FAA = 'FAA',
    /** T=15    P=101.325   ISO 2533, ISO 13443, ISO 7504 */
    ISO_13443 = 'ISO_13443',
    /** T=0     P=101.325   DIN 1343:1990 */
    DIN_1343 = 'DIN_1343'
};
