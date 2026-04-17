/**
 * @file index.ts
 * @description The primary entry point for the chemical and physical database schema.
 * This file aggregates all entities (Elements, Compounds, Minerals, Mixtures, Nuclides)
 * and high-level registries into a single unified data model.
 */

import type { Collection } from './abstract/collection';
import type { ReferenceCollection } from './abstract/reference';
import type { UnitCollection } from './abstract/unit';
import type { MetaData } from './abstract/util';
import type { CompoundEntity } from './entity/compound';
import type { ElementEntity } from './entity/element';
import type { MineralEntity } from './entity/mineral';
import type { MixtureEntity } from './entity/mixture';
import type { NuclideEntity } from './entity/nuclide';
import type { StatsCollection } from './collection/stats';

/**
 * The high-level root of the scientific repository.
 * Aggregates metadata, scientific entity data, and global registries (units, references)
 * into a single structured object.
 */
export type Database = Collection< {
  /** Global administrative metadata including internal database statistics. */
  meta: Collection< MetaData & {
    /** Detailed metrics on entity distribution and contributor activity. */
    stats: StatsCollection;
  } >;

  /** The primary scientific datasets grouped by entity domain. */
  data: Collection< {
    /** Comprehensive registry of chemical elements and their physical properties. */
    elements: ElementEntity;
    /** Extensive network of isotopes, nuclear states, and decay relationships. */
    nuclides: NuclideEntity;
    /** Large-scale collection of chemical compounds and their structural data. */
    compounds: CompoundEntity;
    /** Geological registry of mineral species and their diagnostic characteristics. */
    minerals: MineralEntity;
    /** Physical chemistry database for solutions, colloids, and specialized mixtures. */
    mixtures: MixtureEntity;
  } >;

  /** The global registry of physical quantities and their supported scientific units. */
  unit: UnitCollection;
  /** The centralized repository of all scientific citations and verifiable data sources. */
  refs: ReferenceCollection;
} >;
