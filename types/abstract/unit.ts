/**
 * Physical Units System
 * Type system for physical units.
 */

/** Metric systems */
export const MetricSystem = [ 'metric', 'imperial', 'us', 'custom', 'unknown' ] as const;
export type MetricSystem = ( typeof MetricSystem )[ number ];

/** SI base dimensions */
export const SIDimension = [ 'time', 'length', 'mass', 'electricCurrent', 'temperature', 'amountOfSubstance', 'luminousIntensity' ] as const;
export type SIDimension = ( typeof SIDimension )[ number ];

/** List of valid quantities and their units */
export const ValidUnits = {
    time: [ 's', 'm', 'h', 'd', 'a' ],
    length: [ 'm', 'in', 'ft', 'yd', 'mi' ],
    mass: [ 'g', 't', 'oz', 'lb' ],
    electricCurrent: [ 'A' ],
    temperature: [ 'K', 'C', 'F' ],
    amountOfSubstance: [ 'mol' ],
    luminousIntensity: [ 'cd' ]
} as const;

export type ValidUnits = typeof ValidUnits;
