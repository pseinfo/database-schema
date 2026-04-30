import type { Expand } from 'devtypes/types/util';
import type { Collection, Distinct } from '../base/modifier';
import type { IsoDate, RepoBase } from '../base/primitive';

export type Metadata< T extends Collection< unknown > > = Expand< T & {
  '@metadata': Distinct< {
    readonly schemaVersion: 1;
    lastModified: IsoDate;
    permalink: `${ RepoBase }/blob/${ string }/data/${ string }.ts`
    commit: string;
    hash: string;
  } >;
} >;

export type DBMeta = Distinct< {
  readonly schemaVersion: 1;
  readonly license: 'MIT';
  title: Distinct< string >;
  description: Distinct< string >;
  version: string;
  revision: string;
  lastModified: IsoDate;
  contributors: Array< {
    name: string;
    contact?: string;
  } >;
  permalink: `${ RepoBase }/releases/tag/v${ string }`
} >;
