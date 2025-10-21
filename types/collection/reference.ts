/**
 * Reference System
 * Defines types and structures for bibliographic references based on BibTeX.
 */

import { ExtractFrom, RequireAtLeastOne, RequireExactlyOne, StrictSubset } from '../abstract/utils';

// Reference types based on BibTeX
export const ReferenceType = [
    'article', 'book', 'booklet', 'conference', 'inbook', 'incollection', 'inproceedings',
    'manual', 'mastersthesis', 'thesis', 'misc', 'phdthesis', 'proceedings', 'techreport',
    'unpublished'
] as const;

export type ReferenceType = ( typeof ReferenceType )[ number ];

// Field definitions for reference types
interface BaseFields< T extends ReferenceType > {
    readonly __type__: T;
    accessed?: string;
    url?: string;
    doi?: string;
}

interface BibTeXFields {
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

// Helper types for specific reference types
type Thesis< T extends 'mastersthesis' | 'thesis' | 'phdthesis' > =
    BaseFields< T > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'school' | 'year',
        'type' | 'address' | 'month' | 'note'
    >;

type Conference< T extends 'conference' | 'inproceedings' > =
    BaseFields< T > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'booktitle' | 'year',
        'editor' | 'volume' | 'number' | 'series' | 'pages' | 'address' | 'month' |
        'organization' | 'publisher' | 'note'
    >;

// Specific reference types
export type ArticleReference =
    BaseFields< 'article' > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'journal' | 'year',
        'volume' | 'number' | 'pages' | 'month' | 'note'
    >;

export type BookReference =
    BaseFields< 'book' > &
    RequireExactlyOne< BibTeXFields, 'author' | 'editor' > &
    StrictSubset<
        BibTeXFields,
        'title' | 'publisher' | 'year',
        'volume' | 'number' | 'series' | 'address' | 'edition' | 'month' | 'note' | 'isbn'
    >;

export type BookletReference =
    BaseFields< 'booklet' > &
    StrictSubset<
        BibTeXFields,
        'title',
        'author' | 'howpublished' | 'address' | 'month' | 'year' | 'note'
    >;

export type ConferenceReference = Conference< 'conference' >;

export type InbookReference =
    BaseFields< 'inbook' > &
    RequireExactlyOne< BibTeXFields, 'author' | 'editor' > &
    RequireAtLeastOne<
        StrictSubset<
            BibTeXFields,
            'title' | 'booktitle' | 'chapter' | 'pages' | 'publisher' | 'year',
            'volume' | 'number' | 'series' | 'type' | 'address' | 'edition' | 'month' | 'note'
        >,
        'chapter' | 'pages'
    >;

export type IncollectionReference =
    BaseFields< 'incollection' > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'booktitle' | 'publisher' | 'year',
        'editor' | 'volume' | 'number' | 'series' | 'type' | 'chapter' | 'pages' |
        'address' | 'edition' | 'month' | 'note'
    >;

export type InproceedingsReference = Conference< 'inproceedings' >;

export type ManualReference =
    BaseFields< 'manual' > &
    StrictSubset<
        BibTeXFields,
        'title',
        'author' | 'organization' | 'address' | 'edition' | 'month' | 'year' | 'note'
    >;

export type MastersthesisReference = Thesis< 'mastersthesis' >;

export type ThesisReference = Thesis< 'thesis' >;

export type MiscReference =
    BaseFields< 'misc' > &
    ExtractFrom<
        BibTeXFields,
        'author' | 'title' | 'howpublished' | 'month' | 'year' | 'note'
    >;

export type PhdthesisReference = Thesis< 'phdthesis' >;

export type ProceedingsReference =
    BaseFields< 'proceedings' > &
    StrictSubset<
        BibTeXFields,
        'title' | 'year',
        'editor' | 'volume' | 'number' | 'series' | 'address' | 'month' |
        'organization' | 'publisher' | 'note'
    >;

export type TechreportReference =
    BaseFields< 'techreport' > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'institution' | 'year',
        'type' | 'number' | 'address' | 'month' | 'note'
    >;

export type UnpublishedReference =
    BaseFields< 'unpublished' > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'note',
        'month' | 'year'
    >;

// Union type for any reference
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

// Reference IDs used in other parts of the data model
export type RefId = string;

// Collection of references indexed by a unique key
export type ReferenceCollection = Record< RefId, Reference >;
