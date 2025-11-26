/**
 * Abstract Collection Types
 * Utility types for defining collections of properties with various structures.
 */

import { LiteralUnion } from 'devtypes/types/primitives';
import { Property } from './property';

/** Utility types */

/**
 * Single
 * A type representing a single property or an array of properties.
 * 
 * @template T - The type of the property
 */
export type Single< T extends Property > = T | T[];

/**
 * Distinct
 * A type representing a distinct value or collection of values.
 * 
 * @template T - The type of the distinct value (default is unknown)
 */
export type Distinct< T = unknown > = T;

/**
 * Group
 * A collection of properties grouped by string keys.
 * 
 * @template T - The group definition mapping string keys to Single or Distinct types
 */
export type Group< T extends Record< string, Single< Property > | Distinct< unknown > > > = T;

/**
 * Language Group
 * A specialized group type for handling language-specific collections.
 * 
 * @template L - The language code type (default is 'en')
 * @template T - The type of the values in the group (default is string)
 */
export type LangGroup< L extends string = 'en', T = string > = Group< {
    [ K in LiteralUnion< L > ]: Distinct< T >;
} >;

/**
 * Collection
 * Generic collection mapper that transforms a collection definition into its corresponding structure.
 * 
 * @template T - The collection definition
 */
export type Collection< T > = {
    [ K in keyof T ]:
        T[ K ] extends Single< infer P > ? P :
        T[ K ] extends Group< infer G > ? { [ GK in keyof G ]: Collection< G[ GK ] > } :
        T[ K ] extends Distinct< infer D > ? Distinct< D > :
        T[ K ] extends Property ? T[ K ] :
        never
};
