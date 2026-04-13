/**
 * Abstract Collection Types
 * Utility types for defining collections of properties with various structures.
 * 
 * @module abstract/collection
 */

import type { Expand } from 'devtypes/types/util';
import type { Property } from './property';


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
 * Recursively transforms a collection definition into its corresponding structure.
 * Handles Single, Group, Property, Distinct, and nested object types.
 * 
 * @template T - Collection definition
 */
export type CollectionValue< T > =
    [ T ] extends [ Single< infer P > ] ? P :
    [ T ] extends [ Group< infer G > ] ? { [ GK in keyof G ]: Collection< G[ GK ] > } :
    [ T ] extends [ Property ] ? T :
    [ T ] extends [ Distinct< infer D > ] ? Distinct< D > :
    [ T ] extends [ object ] ? Expand< T > :
    T;

/**
 * Main Collection type transforming a collection definition into its structure.
 * 
 * @template T - Collection definition
 */
export type Collection< T > = {
    [ K in keyof T ]: CollectionValue< T[ K ] >;
};
