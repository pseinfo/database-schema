import type { Expand } from 'devtypes/types/util';
import type { LangCode } from '../../enum/generic';
import type { Distinct, Group } from '../abstract/collection';

export type MetaData = Distinct< {
  '@metadata': {
    schemaVersion: 1;
    lastModified: string;
    hash: string;
  };
} >;

export type LangGroup< L extends LangCode = LangCode.ENGLISH, T = string > = Group< Expand<
  Required< { [ K in L ]: Distinct< T > } > &
  Partial< { [ K in Exclude< LangCode, L > ]: Distinct< T > } >
> >;
