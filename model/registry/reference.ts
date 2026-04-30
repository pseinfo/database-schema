import type { RequireAtLeastOne, RequireExactlyOneFrom } from 'devtypes/types/constraint';
import type { Brand, Expand } from 'devtypes/types/util';
import type { LangCode } from '../../enum/system/locale';
import type { ReferenceType } from '../../enum/system/reference';
import type { RegistryType } from '../../enum/system/domain';
import type { Factory } from '../base/factory';
import type { Collection, Distinct } from '../base/modifier';
import type { IsoDate, UrlString } from '../base/primitive';

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

export type ArticleReference = Expand<
  BaseReference< ReferenceType.ARTICLE > &
  Authored & VolNum &
  Req< 'journal' > & Opt< 'pages' >
>;

export type BookReference = Expand<
  BaseReference< ReferenceType.BOOK > &
  CoreBase & VolNum &
  Req< 'publisher' > & Opt< 'series' | 'address' | 'edition' | 'isbn' > &
  RequireExactlyOneFrom< Fields, 'author' | 'editor' >
>;

export type BookletReference = Expand<
  BaseReference< ReferenceType.BOOKLET > &
  Req< 'title' > & Opt< 'author' | 'howpublished' | 'address' | 'month' | 'year' | 'note' >
>;

export type ConferenceReference = Expand< BaseReference< ReferenceType.CONFERENCE > & ConfBase >;

export type InbookReference = Expand<
  BaseReference< ReferenceType.INBOOK > &
  CoreBase & VolNum &
  Req< 'publisher' > & Opt< 'series' | 'reportType' | 'address' | 'edition' > &
  RequireExactlyOneFrom< Fields, 'author' | 'editor' > &
  RequireAtLeastOne< Fields, 'chapter' | 'pages' >
>;

export type IncollectionReference = Expand<
  BaseReference< ReferenceType.INCOLLECTION > &
  Authored & VolNum &
  Req< 'booktitle' | 'publisher' > &
  Opt< 'editor' | 'series' | 'reportType' | 'chapter' | 'pages' | 'address' | 'edition' >
>;

export type InproceedingsReference = Expand< BaseReference< ReferenceType.INPROCEEDINGS > & ConfBase >;

export type ManualReference = Expand<
  BaseReference< ReferenceType.MANUAL > &
  Req< 'title' > &
  Opt< 'author' | 'organization' | 'address' | 'edition' | 'month' | 'note' | 'year' >
>;

export type MastersthesisReference = Expand< BaseReference< ReferenceType.MASTERSTHESIS > & ThesisBase >;
export type ThesisReference = Expand< BaseReference< ReferenceType.THESIS > & ThesisBase >;
export type PhdthesisReference = Expand< BaseReference< ReferenceType.PHDTHESIS > & ThesisBase >;

export type MiscReference = Expand<
  BaseReference< ReferenceType.MISC > &
  Opt< 'author' | 'title' | 'howpublished' | 'month' | 'year' | 'note' >
>;

export type ProceedingsReference = Expand<
  BaseReference< ReferenceType.PROCEEDINGS > &
  CoreBase & VolNum &
  Opt< 'editor' | 'series' | 'address' | 'organization' | 'publisher' >
>;

export type TechreportReference = Expand<
  BaseReference< ReferenceType.TECHREPORT > &
  Authored &
  Req< 'institution' > & Opt< 'reportType' | 'note' | 'number' | 'address' >
>;

export type UnpublishedReference = Expand<
  BaseReference< ReferenceType.UNPUBLISHED > &
  Req< 'author' | 'title' | 'note' > & Opt< 'month' | 'year' >
>;

export type Reference =
  | ArticleReference
  | BookReference
  | BookletReference
  | ConferenceReference
  | InbookReference
  | IncollectionReference
  | InproceedingsReference
  | ManualReference
  | MastersthesisReference
  | ThesisReference
  | MiscReference
  | PhdthesisReference
  | ProceedingsReference
  | TechreportReference
  | UnpublishedReference;

export type RefId = Brand< string, 'refId' >;

export type ReferenceRegistry = Collection< {
  [ K in RefId ]: Distinct< Reference >;
} >;

export type ReferenceFactory = Factory< RegistryType.REFERENCE, Reference, {
  refId: RefId;
} >;
