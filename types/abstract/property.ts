/**
 * @file property.ts
 * @description Defines the abstract scientific property model.
 * A property in this context is more than just a value; it encapsulates the measured data
 * along with the experimental conditions and the verifiable sources (references).
 */

import type { Primitive } from 'devtypes/types/primitive';
import type { Expand } from 'devtypes/types/util';
import type { Conditions } from './condition';
import type { RefId } from './reference';
import type { PhysicalQuantity } from './unit';
import type * as value from './value';

/**
 * Base infrastructure for scientific properties, including environmental context and citations.
 * @template C Physical quantities defining measurement conditions.
 * @template T Primitive types for condition values.
 */
interface BaseProperty<
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> {
  /** The state of environment (Temp, Press, etc.) during measurement. */
  conditions?: Conditions< C, T >;
  /** Array of reference IDs pointing to the data source. */
  references?: RefId[];
}

/**
 * Property carrying a primitive value (string, boolean, etc.).
 * Incorporates primitive value structure.
 * @template P The primitive type.
 * @template C The physical quantities defining measurement conditions.
 * @template T Primitive types for condition values.
 */
export type PrimitiveProperty<
  P extends Primitive = Primitive,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand<
  BaseProperty< C, T > &
  value.PrimitiveValue< P >
>;

/**
 * Property carrying a complex structured object.
 * Incorporates structured value definition.
 * @template S The structure definition.
 * @template C The physical quantities defining measurement conditions.
 * @template T Primitive types for condition values.
 */
export type StructProperty<
  S extends value.StructType = value.StructType,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand<
  BaseProperty< C, T > &
  value.StructValue< S >
>;

/**
 * Property carrying a single physical measurement (Value + Unit).
 * Incorporates single quantity value struct.
 * @template Q The physical quantity.
 * @template C The physical quantities defining measurement conditions.
 * @template T Primitive types for condition values.
 */
export type SingleProperty<
  Q extends PhysicalQuantity = PhysicalQuantity,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand<
  BaseProperty< C, T > &
  value.SingleValue< Q >
>;

/**
 * Property carrying multiple measurement points for a single quantity.
 * Incorporates array of quantity values.
 * @template Q The physical quantity.
 * @template C The physical quantities defining measurement conditions.
 * @template T Primitive types for condition values.
 */
export type ArrayProperty<
  Q extends PhysicalQuantity = PhysicalQuantity,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand<
  BaseProperty< C, T > &
  value.ArrayValue< Q >
>;

/**
 * Property carrying a numeric range (interval) for a physical quantity.
 * Incorporates range value definition.
 * @template Q The physical quantity.
 * @template C The physical quantities defining measurement conditions.
 * @template T Primitive types for condition values.
 */
export type RangeProperty<
  Q extends PhysicalQuantity = PhysicalQuantity,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand<
  BaseProperty< C, T > &
  value.RangeValue< Q >
>;

/**
 * Property carrying multiple coupled numeric physical quantities.
 * Incorporates coupled numeric values.
 * @template Q The physical quantity.
 * @template C The physical quantities defining measurement conditions.
 * @template T Primitive types for condition values.
 */
export type CoupledNumberProperty<
  Q extends PhysicalQuantity = PhysicalQuantity,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand<
  BaseProperty< C, T > &
  value.CoupledNumberValue< Q >
>;

/**
 * Property carrying a heterogeneous coupling of various value types.
 * Incorporates heterogeneous coupled values.
 * @template Q The physical quantity.
 * @template P The primitive type.
 * @template C The physical quantities defining measurement conditions.
 * @template T Primitive types for condition values.
 * @template S The structure definition.
 */
export type CoupledProperty<
  Q extends PhysicalQuantity = PhysicalQuantity,
  P extends Primitive = Primitive,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive,
  S extends value.StructType = value.StructType
> = Expand<
  BaseProperty< C, T > &
  value.CoupledValue< Q, P, S >
>;

/**
 * General numeric physical property.
 * Union of all numeric value representations.
 * @template Q The physical quantity.
 * @template C The physical quantities defining measurement conditions.
 * @template T Primitive types for condition values.
 */
export type NumberProperty<
  Q extends PhysicalQuantity = PhysicalQuantity,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive
> = Expand<
  BaseProperty< C, T > &
  value.NumberValue< Q >
>;

/**
 * The most abstract representation of a scientific property in the database.
 * Union of all supported value types.
 * @template Q The physical quantity.
 * @template P The primitive type.
 * @template C The physical quantities defining measurement conditions.
 * @template T Primitive types for condition values.
 * @template S The structure definition.
 */
export type Property<
  Q extends PhysicalQuantity = PhysicalQuantity,
  P extends Primitive = Primitive,
  C extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive,
  S extends value.StructType = value.StructType
> = Expand<
  BaseProperty< C, T > &
  value.Value< Q, P, S >
>;
