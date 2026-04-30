/**
 * @file model/base/property.ts
 * @description Extends scientific values with experimental conditions, reaction contexts,
 * and literature references.
 */

import type { Primitive } from 'devtypes/types/primitive';
import type { Expand } from 'devtypes/types/util';
import type { ReactionRef } from '../collection/reaction';
import type { RefId } from '../registry/reference';
import type { NoUnit, PhysicalQuantity } from '../registry/unit';
import type { Condition } from './condition';
import type { Struct } from './primitive';
import type * as v from './value';

/**
 * Shared structural framework for properties, integrating environmental conditions
 * and bibliographic metadata.
 * 
 * @template C The physical quantity of the environmental conditions.
 * @template T Additional structural fields for the property.
 */
type BaseProperty< C extends PhysicalQuantity, T extends Struct = {} > = {
  /** Environmental parameters (temperature, pressure, etc.) during measurement. */
  conditions?: Condition< C >;
  /** References to chemical reactions associated with this property. */
  reactions?: ReactionRef[];
  /** Citations of scientific literature supporting this data. */
  references?: RefId[];
} & T;

/**
 * A qualitative property associated with specific experimental conditions.
 * 
 * @template P The type of the primitive value.
 * @template T Additional structural fields for the property.
 * @template C The physical quantity of the environmental conditions.
 */
export type PrimitiveProperty<
  P extends Primitive = Primitive,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.PrimitiveValue< P >
>;

/**
 * A complex structured property associated with specific experimental conditions.
 * 
 * @template S The structure of the scientific data.
 * @template T Additional structural fields for the property.
 * @template C The physical quantity of the environmental conditions.
 */
export type StructProperty<
  S extends Struct = Struct,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.StructValue< S >
>;

/**
 * A sequence of quantitative measurements sharing common experimental conditions.
 * 
 * @template Q The physical quantity of the measurements.
 * @template T Additional structural fields for the property.
 * @template C The physical quantity of the environmental conditions.
 */
export type ArrayProperty<
  Q extends PhysicalQuantity | NoUnit,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.ArrayValue< Q >
>;

/**
 * A quantitative measurement span associated with specific experimental conditions.
 * 
 * @template Q The physical quantity of the range boundaries.
 * @template T Additional structural fields for the property.
 * @template C The physical quantity of the environmental conditions.
 */
export type RangeProperty<
  Q extends PhysicalQuantity | NoUnit,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.RangeValue< Q >
>;

/**
 * A group of related numerical measurements (e.g., critical point data) sharing the same conditions.
 * 
 * @template Q The physical quantities included in the coupled set.
 * @template T Additional structural fields for the property.
 * @template C The physical quantity of the environmental conditions.
 */
export type CoupledNumberProperty<
  Q extends PhysicalQuantity | NoUnit,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.CoupledNumberValue< Q >
>;

/**
 * A general grouping of related properties of any data type sharing common conditions.
 * 
 * @template Q The physical quantities of numerical properties.
 * @template P The type of primitive properties.
 * @template S The type of structured properties.
 * @template T Additional structural fields for the property.
 * @template C The physical quantity of the environmental conditions.
 */
export type CoupledProperty<
  Q extends PhysicalQuantity | NoUnit,
  P extends Primitive = Primitive,
  S extends Struct = Struct,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.CoupledValue< Q, P, S >
>;

/**
 * Union of all quantitative property representations.
 * 
 * @template Q The physical quantity of the measurements.
 * @template T Additional structural fields for the property.
 * @template C The physical quantity of the environmental conditions.
 */
export type NumberProperty<
  Q extends PhysicalQuantity | NoUnit,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.NumberValue< Q >
>;

/**
 * Comprehensive union of all scientific property models supported in the database.
 * 
 * @template Q The physical quantity of numerical properties.
 * @template P The type of primitive properties.
 * @template S The type of structured properties.
 * @template T Additional structural fields for the property.
 * @template C The physical quantity of the environmental conditions.
 */
export type Property<
  Q extends PhysicalQuantity | NoUnit,
  P extends Primitive = Primitive,
  S extends Struct = Struct,
  T extends Struct = {},
  C extends PhysicalQuantity = PhysicalQuantity
> = Expand<
  BaseProperty< C, T > &
  v.Value< Q, P, S >
>;

/** Utility type for handling both quantified and non-quantified properties. */
export type PropertyWrapper = Property< PhysicalQuantity > | Property< NoUnit >;
