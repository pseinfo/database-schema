/**
 * Abstract Collection Types
 * Utility types for defining collections of properties with various structures.
 * 
 * @module abstract/collection
 */

import type { Property } from '@/abstract/property';


/**
 * Represents a single property or an array of properties.
 * 
 * @template T -Property type
 */
export type Single< T extends Property > = T | T[];

/**
 * Represents a distinct value or collection of values.
 * 
 * @template T - Distinct value type (default: unknown)
 */
export type Distinct< T = unknown > = T;

/**
 * Represents a group of properties.
 * 
 * @template T - Group definition mapping string keys to Single or Distinct types
 */
export type Group< T extends Record< string, Single< Property > | Distinct< unknown > > > = T;

/**
 * Transforms a collection definition into its corresponding structure.
 * 
 * @template T - Collection definition
 */
export type Collection< T > = {
    [ K in keyof T ]:
        T[ K ] extends Single< infer P > ? P :
        T[ K ] extends Group< infer G > ? { [ GK in keyof G ]: Collection< G[ GK ] > } :
        T[ K ] extends Distinct< infer D > ? Distinct< D > :
        T[ K ] extends Property ? T[ K ] :
        never;
};
