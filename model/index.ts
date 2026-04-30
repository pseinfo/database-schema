/**
 * @file model/index.ts
 * @description
 * Central entry point for the PSE-Info database schema. This architecture provides a strictly typed,
 * scientifically grounded framework for modeling the entire spectrum of chemical and physical entities.
 * 
 * The schema is organized into three primary architectural layers:
 * 1. **Domains**: Scientifically delimited data silos representing fundamental entities like chemical
 *    elements, nuclides, compounds, minerals, and mixtures.
 * 2. **Registries**: Centralized repositories for shared scientific metadata, including bibliographic
 *    references, physical units, organizational data, and digital assets.
 * 3. **Base/Utility**: Core technical primitives and modifiers that ensure data integrity, versioning,
 *    and automated schema generation.
 * 
 * This model prioritizes scientific accuracy and data normalization, facilitating the construction
 * of a comprehensive knowledge graph for the chemical sciences.
 */

import type { Collection, Group } from './base/modifier';
import type { CompoundDomain } from './domain/compound';
import type { ElementDomain } from './domain/element';
import type { MineralDomain } from './domain/mineral';
import type { MixtureDomain } from './domain/mixture';
import type { NuclideDomain } from './domain/nuclide';
import type { BlobRegistry } from './registry/blob';
import type { OrganizationRegistry } from './registry/organization';
import type { PersonRegistry } from './registry/person';
import type { ReferenceRegistry } from './registry/reference';
import type { UnitRegistry } from './registry/unit';
import type { DBMeta } from './utility/meta';

/** The complete database model, integrating all scientific domains and registries. */
export type Database = Collection< {
  /** Repository-wide metadata, versioning information, and system statistics. */
  meta: DBMeta;
  /** Categorized scientific domains containing the core data entities. */
  domains: Group< {
    /** Primary database of chemical elements and their periodic properties. */
    elements: ElementDomain;
    /** Comprehensive registry of atomic nuclei, isotopes, and decay networks. */
    nuclides: NuclideDomain;
    /** Registry of chemical compounds classified by category and class. */
    compounds: CompoundDomain;
    /** Mineralogical database including structural and geological classifications. */
    minerals: MineralDomain;
    /** Registry of homogeneous and heterogeneous chemical mixtures. */
    mixtures: MixtureDomain;
  } >;
  /** Centralized scientific registries for shared metadata and assets. */
  registries: Group< {
    /** Storage registry for binary assets, spectra, and visual models. */
    blobs: BlobRegistry;
    /** Registry for physical units, measurement systems, and conversion factors. */
    units: UnitRegistry;
    /** Bibliographic citation registry for scientific peer-reviewed sources. */
    references: ReferenceRegistry;
    /** Registry of research institutions, laboratories, and organizations. */
    orgs: OrganizationRegistry;
    /** Registry of scientific contributors and historical researchers. */
    persons: PersonRegistry;
  } >;
} >;
