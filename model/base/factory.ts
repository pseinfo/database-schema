/**
 * @file model/base/factory.ts
 * @description Helper types for generating type-safe database entities across different domains and registries.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { DomainType, RegistryType } from '../../enum/system/domain';
import type { Collection } from './modifier';
import type { Struct } from './primitive';

/**
 * Structural template for creating database entries, ensuring domain-specific branding and data integrity.
 * 
 * @template T The scientific domain or system registry of the entity.
 * @template C The collection structure defining the entity's data.
 * @template K The unique identifiers and metadata associated with the entity.
 */
export type Factory<
  T extends DomainType | RegistryType,
  C extends Collection< unknown >,
  K extends Struct< string | number >
> = Expand< Brand< K & {
  /** Scientific or administrative data of the entity. */
  data: C
}, T, 'type', true > >;
