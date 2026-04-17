/**
 * @file value.ts
 * @description Core value representations for scientific data.
 * This file provides the abstraction layer for primitive, structured, and physical values,
 * supporting complex formats like uncertainty-aware ranges and coupled physical quantities.
 */

import type { RequireAtLeastOne, RequireExactlyOneFrom, RequireFrom, StrictSubset } from 'devtypes/types/constraint';
import type { Primitive } from 'devtypes/types/primitive';
import type { Brand, Expand } from 'devtypes/types/util';
import type { ValueConfidence, ValueType } from '../../enum/util';
import type { Uncertainty } from './uncertainty';
import type { PhysicalQuantity, UnitId } from './unit';

/**
 * Generic structural type for complex property values.
 */
export type StructType = Record< string | number, unknown >;

/**
 * Branded base attributes for all scientific value types.
 * @template T The classification of the value (Primitive, Struct, Single, etc.).
 */
type BaseValue< T extends ValueType > = Brand< {
  /** The degree of scientific certainty or validation status of the data. */
  confidence?: ValueConfidence;
  /** Experimental or statistical uncertainty associated with the value. */
  uncertainty?: Uncertainty;
  /** Contextual information or remarks regarding the specific value or measurement. */
  note?: string;
}, T, 'type', true >;

/**
 * Interface defining the possible fields for various value representations.
 * @template Q The physical quantity (e.g., 'temperature', 'mass').
 * @template T The primitive data type (e.g., string, boolean).
 * @template S The structure of complex objects.
 */
interface ValueFields<
  Q extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive,
  S extends StructType = StructType
> {
  /** A single data point. */
  value?: T;
  /** A collection of discrete data points. */
  values?: T[];
  /** A continuous range between two boundary conditions. */
  range?: RequireAtLeastOne< Record< 'lower' | 'upper', {
    /** The boundary value. */
    value: number;
    /** Uncertainty specific to this boundary. */
    uncertainty?: Uncertainty;
    /** Whether the boundary value is part of the set. */
    inclusive?: boolean;
  } > >;
  /** The unit identification for physical quantities. */
  unit?: UnitId< Q >;
  /** Structured object for complex data sets. */
  struct?: S;
}

/**
 * Represents a standard primitive value (string, number, boolean).
 * Requires either a single value or an array of values.
 * @template T The specific primitive type.
 */
export type PrimitiveValue< T extends Primitive = Primitive > = Expand<
  BaseValue< ValueType.PRIMITIVE > &
  RequireExactlyOneFrom< ValueFields< never, T >, 'value' | 'values' >
>;

/**
 * Represents a complex structured object.
 * Requires the presence of the 'struct' field.
 * @template T The structure definition.
 */
export type StructValue< T extends StructType = StructType > = Expand<
  BaseValue< ValueType.STRUCT > &
  RequireFrom< ValueFields< never, never, T >, 'struct' >
>;

/**
 * Represents a single measurement of a physical quantity with a unit.
 * Requires a single value. Optionally includes a physical quantity unit.
 * @template Q The physical quantity.
 */
export type SingleValue< Q extends PhysicalQuantity = PhysicalQuantity > = Expand<
  BaseValue< ValueType.SINGLE > &
  StrictSubset< ValueFields< Q, number >, 'value', 'unit' >
>;

/**
 * Represents an array of measurements for a physical quantity with a common unit.
 * Requires an array of values. Optionally includes a physical quantity unit.
 * @template Q The physical quantity.
 */
export type ArrayValue< Q extends PhysicalQuantity = PhysicalQuantity > = Expand<
  BaseValue< ValueType.ARRAY > &
  StrictSubset< ValueFields< Q, number >, 'values', 'unit' >
>;

/**
 * Represents a numeric interval for a physical quantity.
 * Requires a range of values. Optionally includes a physical quantity unit and single value.
 * @template Q The physical quantity.
 */
export type RangeValue< Q extends PhysicalQuantity = PhysicalQuantity > = Expand<
  BaseValue< ValueType.RANGE > &
  StrictSubset< ValueFields< Q, number >, 'range', 'value' | 'unit' >
>;

/**
 * Represents multiple numeric physical quantities that are measured or defined together.
 * @template Q The union of physical quantities involved.
 */
export type CoupledNumberValue< Q extends PhysicalQuantity = PhysicalQuantity > = Expand<
  BaseValue< ValueType.COUPLED > & {
    /** A mapping of quantities to their respective single, array, or range values. */
    properties: RequireAtLeastOne< {
      [ K in Q ]?:
        | SingleValue< K >
        | ArrayValue< K >
        | RangeValue< K >;
    } >;
  }
>;

/**
 * Represents a heterogeneous coupling of physical, primitive, and structured values.
 * @template Q The physical quantities.
 * @template T The primitives.
 * @template S The structures.
 */
export type CoupledValue<
  Q extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive,
  S extends StructType = StructType
> = Expand<
  BaseValue< ValueType.COUPLED > & {
    /** A registry of various value types grouped under a single coupled entity. */
    properties: RequireAtLeastOne< {
      [ K in Q ]?:
        | PrimitiveValue< T >
        | StructValue< S >
        | SingleValue< K >
        | ArrayValue< K >
        | RangeValue< K >;
    } >;
  }
>;

/**
 * Generic numeric value for any physical quantity.
 * @template Q The physical quantity.
 */
export type NumberValue< Q extends PhysicalQuantity = PhysicalQuantity > =
  | SingleValue< Q >
  | ArrayValue< Q >
  | RangeValue< Q >
  | CoupledNumberValue< Q >;

/**
 * The most abstract representation of a data value in the system.
 * @template Q The physical quantities.
 * @template T The primitives.
 * @template S The structures.
 */
export type Value<
  Q extends PhysicalQuantity = PhysicalQuantity,
  T extends Primitive = Primitive,
  S extends StructType = StructType
> =
  | NumberValue< Q >
  | PrimitiveValue< T >
  | StructValue< S >
  | CoupledValue< Q, T, S >;
