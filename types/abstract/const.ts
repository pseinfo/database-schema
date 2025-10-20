/**
 * Constants
 * Defines constant values and enumerations used across the database schema.
 */

// Phase of matter
export const Phase = [ 'solid', 'gaseous', 'liquid', 'plasma', 'unknown' ] as const;
export type Phase = ( typeof Phase )[ number ];
