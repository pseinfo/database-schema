import type { EntityType } from '../../enum/util';
import type { Collection, Distinct } from './collection';
import type { ISO8601Date } from './util';

export type Contributor = {
  name: string;
  contact?: string;
};

export type DBMeta = Collection< {
  readonly schemaVersion: 1;
  revision: string;
  lastModified: ISO8601Date;
  contributors: Contributor[];
  license: string;
  source: string;
} >;

export type DBStats = Collection< {
  size: Distinct< number >;
  entities: Distinct< {
    [ E in EntityType ]: {
      count: number;
      bytes: number;
    }
  } >;
  contributors: Distinct< Contributor & {
    lastModified: ISO8601Date;
    edits: number;
    bytes: number;
  }[] >;
} >;
