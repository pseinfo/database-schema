import type { Collection, Group } from './base/modifier';
import type { BlobRegistry } from './registry/blob';
import type { OrganizationRegistry } from './registry/organization';
import type { PersonRegistry } from './registry/person';
import type { ReferenceRegistry } from './registry/reference';
import type { DBMeta } from './utility/meta';

export type Database = Collection< {
  meta: DBMeta;
  registries: Group< {
    blobs: BlobRegistry;
    references: ReferenceRegistry;
    orgs: OrganizationRegistry;
    persons: PersonRegistry;
  } >;
} >;
