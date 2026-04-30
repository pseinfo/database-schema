import type { Collection, Group } from './base/modifier';
import type { ElementDomain } from './domain/element';
import type { BlobRegistry } from './registry/blob';
import type { OrganizationRegistry } from './registry/organization';
import type { PersonRegistry } from './registry/person';
import type { ReferenceRegistry } from './registry/reference';
import type { UnitRegistry } from './registry/unit';
import type { DBMeta } from './utility/meta';

export type Database = Collection< {
  meta: DBMeta;
  domains: Group< {
    elements: ElementDomain;
  } >;
  registries: Group< {
    blobs: BlobRegistry;
    units: UnitRegistry;
    references: ReferenceRegistry;
    orgs: OrganizationRegistry;
    persons: PersonRegistry;
  } >;
} >;
