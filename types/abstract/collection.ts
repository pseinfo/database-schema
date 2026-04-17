/**
 * @file collection.ts
 * @description Provides the structural logic for grouping scientific properties into collections.
 * This file handles the recursive mapping of properties and nested groups, ensuring that
 * the database schema remains modular and highly structured.
 */

import type { Expand } from 'devtypes/types/util';
import type { Property } from './property';

/**
 * Identity type wrapper to mark a value as a distinct entity in the collection tree.
 * @template T The underlying type.
 */
export type Distinct< T = unknown > = T;

/**
 * Represents either a single property or an array of properties of the same type.
 * @template T The property definition.
 */
export type Single< T extends Property > = T | T[];

/**
 * A group of properties or distinct metadata entries organized in a record.
 * @template T The record structure.
 */
export type Group< T extends Record< string, Single< Property > | Distinct< unknown > > > = T;

/**
 * Helper type that recursively resolves a value within a collection.
 * It differentiates between nested properties, groups, distinct values, and general objects.
 * @template T The type to be processed into a collection value.
 */
type CollectionValue< T > =
  /** If it's a single property or array of properties, return the base property type */
  [ T ] extends [ Single< infer P > ] ? P :
  /** If it's a group, recurse into the group members */
  [ T ] extends [ Group< infer G > ] ? { [ GK in keyof G ]: Collection< G[ GK ] > } :
  /** Direct property match */
  [ T ] extends [ Property ] ? T :
  /** Distinct metadata/utility match */
  [ T ] extends [ Distinct< infer D > ] ? Distinct< D > :
  /** Expand any other object structures */
  [ T ] extends [ object ] ? Expand< T > :
  /** Fallback for primitives */
  T;

/**
 * Transforms a definition object into a concrete collection of resolved scientific properties.
 * @template T The definition structure of the collection.
 */
export type Collection< T > = {
  /** Map each key of the definition to its resolved collection value */
  [ K in keyof T ]: CollectionValue< T[ K ] >;
};
