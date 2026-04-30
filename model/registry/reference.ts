import type { Brand } from 'devtypes/types/util';
import type { LangCode } from '../../enum/base/locale';
import type { ReferenceType } from '../../enum/registry/reference';
import type { IsoDate, UrlString } from '../base/primitives';

type BaseReference< R extends ReferenceType > = Brand< {
  doi?: `doi:${ string }`;
  url?: UrlString;
  accessed?: IsoDate;
  language?: LangCode;
}, R, 'type', true >;

type CoreFields = {
  title?: string;
  year?: number | string;
  month?: string;
  note?: string;
};

type PersonFields = {
  author?: string | string[];
  editor?: string | string[];
};

type LocFields = {
  volume?: number | string;
  number?: number | string;
  pages?: number | string;
  chapter?: string;
};

type VenueFields = {
  journal?: string;
  booktitle?: string;
  publisher?: string;
  organization?: string;
  institution?: string;
  school?: string;
};

type MetaFields = {
  address?: string;
  edition?: string;
  series?: string;
  howpublished?: string;
  isbn?: string;
  reportType?: string;
};

type Fields = CoreFields & PersonFields & LocFields & VenueFields & MetaFields;

type Req< K extends keyof Fields > = Required< Pick< Fields, K > >;
type Opt< K extends keyof Fields > = Pick< Fields, K >;

type CoreBase = Req< 'title' | 'year' > & Opt< 'month' | 'note' >;
type Authored = CoreBase & Req< 'author' >;
type VolNum = Opt< 'volume' | 'number' >;
type ConfBase = Authored & VolNum & Req< 'booktitle' > & Opt< 'editor' | 'series' | 'pages' | 'address' | 'organization' | 'publisher' >;
type ThesisBase = Authored & Req< 'school' > & Opt< 'reportType' | 'address' >;
