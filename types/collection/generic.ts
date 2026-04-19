/**
 * @file generic.ts
 * @description Defines general-purpose properties that do not fit into specific scientific domains,
 * such as economic data or cross-domain metadata.
 */

import type { Collection, Single } from '../abstract/collection';
import type { StructProperty } from '../abstract/property';
import type { NumberValue } from '../abstract/value';

/**
 * Registry of non-scientific or general properties associated with a substance.
 */
export type GenericCollection = Collection< {
  /** The commercial market value of the substance at a specific point in time. */
  price: Single< StructProperty< {
    /** The numerical amount and currency of the price. */
    value: NumberValue< 'currency' >;
    /** The ISO 8601 date when this specific price was recorded. */
    date?: `${number}-${number}-${number}T${number}:${number}:${number}Z`;
    /** The specific stock exchange or commercial market where the price was observed. */
    market?: string;
    /** External URL for the price source or market documentation. */
    url?: string;
  } > >;
} >;
