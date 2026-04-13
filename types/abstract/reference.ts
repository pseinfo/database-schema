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
  school?: string;
  series?: string;
  title?: string;
  type?: string;
  volume?: number | string;
  year?: number | string;
}

type Thesis< T extends ReferenceType.MASTERSTHESIS | ReferenceType.THESIS | ReferenceType.PHDTHESIS > = Expand<
  BaseReference< T > &
  StrictSubset<
    BibTeXFields,
    'author' | 'title' | 'school' | 'year',
    'type' | 'address' | 'month' | 'note'
  >
>;

type Conference< T extends ReferenceType.CONFERENCE | ReferenceType.INPROCEEDINGS > = Expand<
  BaseReference< T > &
  StrictSubset<
    BibTeXFields,
    'author' | 'title' | 'booktitle' | 'year',
    'editor' | 'volume' | 'number' | 'series' | 'pages' | 'address' | 'month' | 'organization' | 'publisher' | 'note'
  >
>;

export type ArticleReference = Expand<
  BaseReference< ReferenceType.ARTICLE > &
  StrictSubset<
    BibTeXFields,
    'author' | 'title' | 'journal' | 'year',
    'volume' | 'number' | 'pages' | 'month' | 'note'
  >
>;

export type BookReference = Expand<
  BaseReference< ReferenceType.BOOK > &
  RequireExactlyOne< BibTeXFields, 'author' | 'editor' > &
  StrictSubset<
    BibTeXFields,
    'title' | 'publisher' | 'year',
    'volume' | 'number' | 'series' | 'address' | 'edition' | 'month' | 'note' | 'isbn'
  >
>;

export type BookletReference = Expand<
  BaseReference< ReferenceType.BOOKLET > &
  StrictSubset<
    BibTeXFields,
    'title',
    'author' | 'howpublished' | 'address' | 'month' | 'year' | 'note'
  >
>;

export type ConferenceReference = Conference< ReferenceType.CONFERENCE >;

export type InbookReference = Expand<
  BaseReference< ReferenceType.INBOOK > &
  RequireExactlyOne< BibTeXFields, 'author' | 'editor' > &
  RequireAtLeastOne<
    StrictSubset<
      BibTeXFields,
      'title' | 'booktitle' | 'chapter' | 'pages' | 'publisher' | 'year',
      'volume' | 'number' | 'series' | 'type' | 'address' | 'edition' | 'month' | 'note'
    >,
    'chapter' | 'pages'
  >
>;

export type IncollectionReference = Expand<
  BaseReference< ReferenceType.INCOLLECTION > &
  StrictSubset<
    BibTeXFields,
    'author' | 'title' | 'booktitle' | 'publisher' | 'year',
    'editor' | 'volume' | 'number' | 'series' | 'type' | 'chapter' | 'pages' | 'address' | 'edition' | 'month' | 'note'
  >
>;

export type InproceedingsReference = Conference< ReferenceType.INPROCEEDINGS >;

export type ManualReference = Expand<
  BaseReference< ReferenceType.MANUAL > &
  StrictSubset<
    BibTeXFields,
    'title',
    'author' | 'organization' | 'address' | 'edition' | 'month' | 'year' | 'note'
  >
>;

export type MastersthesisReference = Thesis< ReferenceType.MASTERSTHESIS >;

export type ThesisReference = Thesis< ReferenceType.THESIS >;

export type MiscReference = Expand<
  BaseReference< ReferenceType.MISC > &
  ExtractFrom<
    BibTeXFields,
    'author' | 'title' | 'howpublished' | 'month' | 'year' | 'note'
  >
>;

export type PhdthesisReference = Thesis< ReferenceType.PHDTHESIS >;

export type ProceedingsReference = Expand<
  BaseReference< ReferenceType.PROCEEDINGS > &
  StrictSubset<
    BibTeXFields,
    'title' | 'year',
    'editor' | 'volume' | 'number' | 'series' | 'address' | 'month' | 'organization' | 'publisher' | 'note'
  >
>;

export type TechreportReference = Expand<
  BaseReference< ReferenceType.TECHREPORT > &
  StrictSubset<
    BibTeXFields,
    'author' | 'title' | 'institution' | 'year',
    'type' | 'number' | 'address' | 'month' | 'note'
  >
>;

export type UnpublishedReference = Expand<
  BaseReference< ReferenceType.UNPUBLISHED > &
  StrictSubset<
    BibTeXFields,
    'author' | 'title' | 'note',
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
