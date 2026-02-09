/**
 * Condition Type
 * Defines a mapping of physical quantities as conditions for properties.
 */

import { Primitive } from 'devtypes/types/primitive';
import { PhysicalQuantity } from './unit';
import { Value } from './value';

/** Definition of standard conditions */
export const StandardCondition = [
    'STP',          // T=0     P=100      IUPAC (STP) since 1982
    'STP_ATM',      // T=0     P=101.325  NIST, ISO 10780, former IUPAC STP
    'NTP',          // T=20    P=101.325  EPA, NIST
    'ISA',          // T=15    P=101.325  ICAO ISA, ISO 13443, EEA, EGIA (SI)
    'AAPM',         // T=22    P=101.325  American Association of Physicists in Medicine
    'SATP',         // T=25    P=101.325  SATP, EPA
    'CAGI',         // T=20    P=100      CAGI
    'SPE',          // T=15    P=100      SPE
    'ISO_5011',     // T=20    P=101.3    ISO 5011
    'GOST_2939_63', // T=20    P=101.33   GOST 2939-63
    'EGIA',         // T=15.56 P=101.6    EGIA (Imperial System)
    'SCF',          // T=15.56 P=101.35   U.S. DOT (SCF)
    'AMCA',         // T=21.11 P=101.3    AMCA
    'FAA',          // T=15    P=101.3    FAA
    'ISO_13443',    // T=15    P=101.325  ISO 2533, ISO 13443, ISO 7504
    'DIN_1343'      // T=0     P=101.325  DIN 1343:1990
] as const;

export type StandardCondition = ( typeof StandardCondition )[ number ];

/**
 * Conditions
 * Type description of a mapping of physical quantities to values as conditions.
 * Either standard conditions or custom set of properties.
 * 
 * @template Q - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type Conditions<
    Q extends PhysicalQuantity = PhysicalQuantity,
    T extends Primitive = Primitive
> = StandardCondition | {
    [ K in Q ]?: Value< K, T >;
};
