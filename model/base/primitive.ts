import type { Expand } from 'devtypes/types/util';
import type { LangCode } from '../../enum/base/locale';

export type RepoBase = 'https://github.com/pseinfo/database';

export type IsoDate = `${ number }:${ number }:${ number }T${ number }:${ number }:${ number }Z`;

export type UrlString = `https://${ string }` | `http://${ string }`;

export type Struct< T = unknown, K extends PropertyKey = string > = Record< K, T >;

export type LangGroup< T = string, L extends LangCode = LangCode.ENGLISH > = Expand<
  Required< { [ K in L ]: T } > &
  Partial< { [ K in Exclude< LangCode, L > ]: T } >
>;
