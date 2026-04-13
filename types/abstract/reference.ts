import type { ExtractFrom, RequireAtLeastOne, RequireExactlyOne, StrictSubset } from 'devtypes/types/constraint';
import type { Brand, Expand } from 'devtypes/types/util';
import type { ReferenceType } from '../enum/abstract';

export type BaseReference< T extends ReferenceType > = Brand< {
  accessed?: string;
  url?: string;
  doi?: string;
}, T, 'type', true >;

export interface BibTeXFields {
  address?: string;
  author?: string | string[];
  booktitle?: string;
  chapter?: string;
  edition?: string;
  editor?: string | string[];
  howpublished?: string;
  institution?: string;
  isbn?: string;
  journal?: string;
  month?: string;
  note?: string;
  number?: number | string;
  organization?: string;
  pages?: number | string;
  publisher?: string;
  reportType?: string;
  series?: string;
  school?: string;
  title?: string;
  volume?: number | string;
  year?: number | string;
}

type Thesis< T extends ReferenceType.MASTERSTHESIS | ReferenceType.THESIS | ReferenceType.PHDTHESIS > = Expand<
  BaseReference< T > &
  StrictSubset<
    BibTeXFields,
    'author' | 'school' | 'title' | 'year',
    'address' | 'month' | 'note' | 'reportType'
  >
>;

type Conference< T extends ReferenceType.CONFERENCE | ReferenceType.INPROCEEDINGS > = Expand<
  BaseReference< T > &
  StrictSubset<
    BibTeXFields,
    'author' | 'booktitle' | 'title' | 'year',
    'address' | 'editor' | 'month' | 'note' | 'number' | 'organization' | 'pages' | 'publisher' | 'series' | 'volume'
  >
>;

export type ArticleReference = Expand<
  BaseReference< ReferenceType.ARTICLE > &
  StrictSubset<
    BibTeXFields,
    'author' | 'journal' | 'title' | 'year',
    'month' | 'note' | 'number' | 'pages' | 'volume'
  >
>;

export type BookReference = Expand<
  BaseReference< ReferenceType.BOOK > &
  RequireExactlyOne< BibTeXFields, 'author' | 'editor' > &
  StrictSubset<
    BibTeXFields,
    'publisher' | 'title' | 'year',
    'address' | 'edition' | 'isbn' | 'month' | 'note' | 'number' | 'series' | 'volume'
  >
>;

export type BookletReference = Expand<
  BaseReference< ReferenceType.BOOKLET > &
  StrictSubset<
    BibTeXFields,
    'title',
    'address' | 'author' | 'howpublished' | 'month' | 'note' | 'year'
  >
>;

export type ConferenceReference = Conference< ReferenceType.CONFERENCE >;

export type InbookReference = Expand<
  BaseReference< ReferenceType.INBOOK > &
  RequireExactlyOne< BibTeXFields, 'author' | 'editor' > &
  RequireAtLeastOne<
    StrictSubset<
      BibTeXFields,
      'booktitle' | 'chapter' | 'pages' | 'publisher' | 'title' | 'year',
      'address' | 'edition' | 'month' | 'note' | 'number' | 'reportType' | 'series' | 'volume'
    >,
    'chapter' | 'pages'
  >
>;

export type IncollectionReference = Expand<
  BaseReference< ReferenceType.INCOLLECTION > &
  StrictSubset<
    BibTeXFields,
    'author' | 'booktitle' | 'publisher' | 'title' | 'year',
    'address' | 'chapter' | 'edition' | 'editor' | 'month' | 'note' | 'number' | 'pages' | 'reportType' | 'series' | 'volume'
  >
>;

export type InproceedingsReference = Conference< ReferenceType.INPROCEEDINGS >;

export type ManualReference = Expand<
  BaseReference< ReferenceType.MANUAL > &
  StrictSubset<
    BibTeXFields,
    'title',
    'address' | 'author' | 'edition' | 'month' | 'note' | 'organization' | 'year'
  >
>;

export type MastersthesisReference = Thesis< ReferenceType.MASTERSTHESIS >;

export type ThesisReference = Thesis< ReferenceType.THESIS >;

export type MiscReference = Expand<
  BaseReference< ReferenceType.MISC > &
  ExtractFrom<
    BibTeXFields,
    'author' | 'howpublished' | 'month' | 'note' | 'title' | 'year'
  >
>;

export type PhdthesisReference = Thesis< ReferenceType.PHDTHESIS >;

export type ProceedingsReference = Expand<
  BaseReference< ReferenceType.PROCEEDINGS > &
  StrictSubset<
    BibTeXFields,
    'title' | 'year',
    'address' | 'editor' | 'month' | 'note' | 'number' | 'organization' | 'publisher' | 'series' | 'volume'
  >
>;

export type TechreportReference = Expand<
  BaseReference< ReferenceType.TECHREPORT > &
  StrictSubset<
    BibTeXFields,
    'author' | 'institution' | 'title' | 'year',
    'address' | 'month' | 'note' | 'number' | 'reportType'
  >
>;

export type UnpublishedReference = Expand<
  BaseReference< ReferenceType.UNPUBLISHED > &
  StrictSubset<
    BibTeXFields,
    'author' | 'note' | 'title',
    'month' | 'year'
  >
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

export type ReferenceCollection = Record< RefId, Reference >;
