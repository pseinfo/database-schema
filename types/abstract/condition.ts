/**
 * Condition Type
 * Defines a mapping of physical quantities as conditions for properties.
 */

import { Primitive } from 'devtypes/types/primitives';
import { PhysicalQuantity } from './unit';
import { Value } from './value';

/** Definition of special standard conditions */
export const SpecialCondition = [

    // Standard conditions
    'STP',              // Standard temperature and pressure (0 °C, 1 atm)
    'NTP',              // Normal temperature and pressure (20 °C, 1 atm)
    'SATP',             // Standard ambient temperature and pressure (25 °C, 1 bar)

    // IUPAC reference conditions
    'IUPAC_1990',       // 25 °C, 1 bar (recommended standard condition since 1990)
    'IUPAC_1982',       // 0 °C, 1 atm (older IUPAC standard condition)

    // Gas standards
    'DIN_1343',         // 0 °C, 1 atm (normal conditions for gases)
    'ISO_10780',        // 0 °C, 101.3 kPa (standard volume for exhaust gas/emission measurements)
    'EPA_40CFR',        // 20 °C, 760 mmHg (US EPA standard volume)

    // Thermodynamic reference conditions
    'STD_STATE',        // Standard thermodynamic state: 1 bar, 25 °C
    'TP_STANDARD',      // Triple point of water (0.01 °C, ≈611.657 Pa)

    // Industrial conditions (gas)
    'GAS_STD_US',       // 60 °F, 14.696 psi (US Standard Cubic Foot)
    'GAS_STD_EU',       // 15 °C, 1 bar (EU standard cubic meter)

    // Chemical measurement standards
    'PH_STD_25C',       // pH/electrochemistry standard: 25 °C
    'CAL_20C'           // Calibration 20 °C (Titration, density)

] as const;

export type SpecialCondition = ( typeof SpecialCondition )[ number ];

/**
 * Conditions
 * A mapping of physical quantities as conditions for properties.
 * Allows for special standard conditions.
 * 
 * @template Q - Physical quantities used as conditions
 * @template T - Primitive types for the condition values
 */
export type Conditions< Q extends PhysicalQuantity = PhysicalQuantity, T extends Primitive = Primitive > = {
    [ K in Q ]?: Value< K, T >;
} & {
    special?: SpecialCondition;
};
