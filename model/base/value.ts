/**
 * @file model/base/value.ts
 * @description Defines the core data structures for scientific values, supporting units,
 * uncertainty, and diverse origin types.
 */

import type { RequireAtLeastOne } from 'devtypes/types/constraint';
import type { Primitive } from 'devtypes/types/primitive';
import type { Brand, Expand } from 'devtypes/types/util';
import type { ValueOrigin, ValueType } from '../../enum/system/value';
import type { NoUnit, PhysicalQuantity, UnitId } from '../registry/unit';
import type { Struct } from './primitive';
import type { Uncertainty } from './uncertainty';

/**
 * Conditional field for attaching a physical unit to a measurement.
 * Only applicable to quantified values.
 * 
 * @template Q The physical quantity of the unit.
 */
type UnitField< Q extends PhysicalQuantity | NoUnit > = [ Q ] extends [ NoUnit ] ? {} : {
  /** The specific unit used for the measurement (e.g., 'K' for temperature). */
  unit: UnitId< Q >;
};

/**
 * Conditional field for attaching statistical error margins to applicable value types.
 * Only applicable to quantified values.
 * 
 * @template T The type of the associated value.
 */
type UncertaintyField< T extends ValueType > = T extends ValueType.SINGLE | ValueType.RANGE | ValueType.ARRAY ? {
  /** Statistical reliability and error margins of the data. */
  uncertainty?: Uncertainty;
} : {};

/**
 * Shared metadata for all value types, tracking scientific origin and descriptive context.
 * 
 * @template T The architectural type of the value.
 */
type BaseValue< T extends ValueType > = Brand< {
  /** The scientific or methodology-based source of the data value. */
  origin?: ValueOrigin;
  /** Descriptive context regarding the measurement environment or methodology. */
  context?: string;
  /** Additional qualitative notes regarding the data value. */
  notes?: string;
} & UncertaintyField< T >, T, 'type', true >;

/** Quantitative interval for representing measurement spans. */
type Range = RequireAtLeastOne< Record< 'lower' | 'upper', {
  /** The numerical boundary of the range. */
  value: number;
  /** Indicates if the boundary value itself is excluded from the interval. */
  exclusive?: boolean;
} > >;

/**
 * Basic non-numerical data like names, symbols, or qualitative descriptors.
 * 
 * @template P The type of the primitive value.
 */
export type PrimitiveValue< P extends Primitive = Primitive > = Expand<
  BaseValue< ValueType.PRIMITIVE > & ( { value: P } | { values: P[] } )
>;

/**
 * Complex structured data for multi-dimensional scientific properties.
 * 
 * @template S The structure of the scientific data.
 */
export type StructValue< S extends Struct = Struct > = Expand<
  BaseValue< ValueType.STRUCT > & { struct: S }
>;

/**
 * A single quantitative measurement associated with a physical unit.
 * 
 * @template Q The physical quantity of the measurement.
 */
export type SingleValue< Q extends PhysicalQuantity | NoUnit = PhysicalQuantity > = Expand<
  BaseValue< ValueType.SINGLE > & { value: number } & UnitField< Q >
>;

/**
 * A sequence of quantitative measurements sharing the same physical unit.
 * 
 * @template Q The physical quantity of the measurements.
 */
export type ArrayValue< Q extends PhysicalQuantity | NoUnit = PhysicalQuantity > = Expand<
  BaseValue< ValueType.ARRAY > & { values: number[] } & UnitField< Q >
>;

/**
 * A quantitative interval representing a spread of measurements.
 * 
 * @template Q The physical quantity of the range boundaries.
 */
export type RangeValue< Q extends PhysicalQuantity | NoUnit = PhysicalQuantity > = Expand<
  BaseValue< ValueType.RANGE > & {
    /** The lower and upper boundaries of the measurement span. */
    range: Range,
    /** An optional representative single value for the range (e.g., mean). */
    value?: number
  } & UnitField< Q >
>;

/**
 * Group of related numerical properties (e.g., thermodynamic coordinates of a state point).
 * 
 * @template Q The physical quantities included in the coupled set.
 */
export type CoupledNumberValue< Q extends PhysicalQuantity | NoUnit = PhysicalQuantity > = Expand<
  BaseValue< ValueType.COUPLED > & {
    /** Collection of physical properties measured or calculated as a single set. */
    properties: RequireAtLeastOne< {
      [ K in Q ]?:
        | SingleValue< K >
        | ArrayValue< K >
        | RangeValue< K >;
    } >;
  }
>;

/**
 * General grouping of related properties of any data type.
 * 
 * @template Q The physical quantities of numerical properties.
 * @template P The type of primitive properties.
 * @template S The type of structured properties.
 */
export type CoupledValue<
  Q extends PhysicalQuantity | NoUnit = PhysicalQuantity,
  P extends Primitive = Primitive,
  S extends Struct = Struct
> = Expand<
  BaseValue< ValueType.COUPLED > & {
    /** Collection of properties grouped together for scientific context. */
    properties: RequireAtLeastOne< {
      [ K in Q ]?:
        | PrimitiveValue< P >
        | StructValue< S >
        | SingleValue< K >
        | ArrayValue< K >
        | RangeValue< K >;
    } >;
  }
>;

/**
 * Union of all numerical measurement representations.
 * 
 * @template Q The physical quantity of the measurements.
 */
export type NumberValue< Q extends PhysicalQuantity | NoUnit = PhysicalQuantity > =
  | SingleValue< Q >
  | ArrayValue< Q >
  | RangeValue< Q >
  | CoupledNumberValue< Q >;

/**
 * Comprehensive union of all data types supported in the database.
 * 
 * @template Q The physical quantity of numerical properties.
 * @template P The type of primitive properties.
 * @template S The type of structured properties.
 */
export type Value<
  Q extends PhysicalQuantity | NoUnit = PhysicalQuantity,
  P extends Primitive = Primitive,
  S extends Struct = Struct
> =
  | NumberValue< Q >
  | PrimitiveValue< P >
  | StructValue< S >
  | CoupledValue< Q, P, S >;
