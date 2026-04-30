/**
 * @file model/base/modifier.ts
 * @description Utility types for modifying and grouping scientific properties within
 * collections and registry definitions.
 */

import type { Expand } from 'devtypes/types/util';
import type { PropertyWrapper } from './property';

/**
 * Marker for values that should be treated as unique entities rather than simple properties.
 * 
 * @template T The data type of the distinct entity.
 */
export type Distinct< T = unknown > = T;

/**
 * Flexible representation of either a single property instance or an array of instances.
 *
 * @template T The property type.
 */
export type OneOrMany< T extends PropertyWrapper > = T | T[];

/**
 * Explicit single instance of a property.
 * 
 * @template T The property type.
 */
export type One< T extends PropertyWrapper > = T;

/**
 * Explicit collection of property instances.
 * 
 * @template T The property type.
 */
export type Many< T extends PropertyWrapper > = T[];

/**
 * Logical grouping of related properties and distinct data entities.
 * 
 * @template T The structure of the grouping.
 */
export type Group< T extends Record< string, OneOrMany< PropertyWrapper > | Distinct< unknown > > > = T;

/**
 * Keyed collection of data grouped by a specific string literal (e.g., by element symbol).
 * 
 * @template L The string literal type for the keys.
 * @template T The data type of the mapped values.
 */
export type Mapping< L extends string, T = unknown > = Group< { [ K in L ]?: T } >;

/**
 * Recursive resolver for property types within a collection structure.
 * 
 * @template T The raw data type to resolve.
 */
type CollectionValue< T > =
  [ T ] extends [ OneOrMany< infer P > ] ? P | P[] :
  [ T ] extends [ Group< infer G > ] ? { [ GK in keyof G ]: Collection< G[ GK ] > } :
  [ T ] extends [ PropertyWrapper ] ? Expand< T > :
  [ T ] extends [ Distinct< infer D > ] ? Distinct< D > :
  [ T ] extends [ object ] ? Expand< T > :
  T;

/**
 * A structured set of properties and data entities forming a functional data unit.
 * 
 * @template T The template structure for the collection.
 */
export type Collection< T > = {
  [ K in keyof T ]: CollectionValue< T[ K ] >;
};

/**
 * Recursive utility to make all fields of a collection structure optional for overrides
 * but keep property types as is.
 * 
 * @template T The structure to make optional.
 */
export type DeepOptional< T > =
  T extends PropertyWrapper ? T :
  T extends ( infer U )[] ? DeepOptional< U >[] :
  T extends object ? { [ K in keyof T ]?: DeepOptional< T[ K ] > } :
  T;
