/**
 * @file enum/science/generic.ts
 * @description Defines generic enums for non-scientific contexts.
 */

/**
 * Precision level of economic values associated with chemical substances.
 */
export enum PriceValue {
  /** A confirmed, single-point market value at a specific time. */
  EXACT = 'exact',
  /** Minimum and maximum observed values reflecting market volatility. */
  RANGE = 'range',
  /** A starting price indicator for bulk or industrial quantities. */
  FROM = 'from'
};

/**
 * The commercial or analytical context in which a price or value is defined.
 */
export enum PriceContext {
  /** Consumer-level pricing for small, purified quantities or laboratory reagents. */
  RETAIL = 'retail',
  /** Industrial-scale pricing for large volumes or raw materials. */
  WHOLESALE = 'wholesale',
  /** A calculated or approximated value based on production costs or rarity. */
  ESTIMATE = 'estimate',
  /** Recorded past prices used for longitudinal economic analysis. */
  HISTORICAL = 'historical'
};

/**
 * Tax status of economic values, relevant for global trade and procurement.
 */
export enum PriceTax {
  /** Total cost including all applicable value-added or sales taxes. */
  GROSS = 'gross',
  /** Base cost before taxes, typically used in B2B and scientific procurement. */
  NET = 'net',
  /** Undefined tax status in the provided data source. */
  UNKNOWN = 'unknown'
};
