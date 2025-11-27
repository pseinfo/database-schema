/**
 * Reference System
 * Types and structures for bibliographic references based on BibTeX.
 */

import { Brand } from 'devtypes/types/base';
import { ExtractFrom, RequireAtLeastOne, RequireExactlyOne, StrictSubset } from 'devtypes/types/constraints';

/** Reference types based on BibTeX */
export const ReferenceType = [ 'article', 'book', 'booklet', 'conference', 'inbook', 'incollection', 'inproceedings', 'manual', 'mastersthesis', 'thesis', 'misc', 'phdthesis', 'proceedings', 'techreport', 'unpublished' ] as const;
export type ReferenceType = ( typeof ReferenceType )[ number ];

/**
 * BaseFields
 * Common fields for all reference types.
 * 
 * @template T - Reference type
 * @param accessed - date when the reference was accessed (for online resources)
 * @param url - URL of the reference
 * @param doi - DOI of the reference
 */
type BaseFields< T extends ReferenceType > = Brand< {
    accessed?: string;
    url?: string;
    doi?: string;
}, T >;

/**
 * BibTeXFields
 * Fields for bibliographic references based on BibTeX.
 * 
 * @param address - address of the publisher or institution
 * @param author - author(s) of the work
 * @param booktitle - title of the book or conference proceedings
 * @param chapter - chapter number or name
 * @param edition - edition of the book
 * @param editor - editor(s) of the work
 * @param howpublished - how the work was published
 * @param institution - institution associated with the work
 * @param isbn - ISBN number of the book
 * @param journal - journal name
 * @param month - month of publication
 * @param note - additional notes about the reference
 * @param number - number of the journal, volume, or report
 * @param organization - organization associated with the work
 * @param pages - page numbers
 * @param publisher - publisher of the work
 * @param school - school associated with the thesis
 * @param series - series name
 * @param title - title of the work
 * @param type - type of report or thesis
 * @param volume - volume number
 * @param year - year of publication
 */
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

/** Helper types for specific reference types */
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
        'editor' | 'volume' | 'number' | 'series' | 'pages' | 'address' | 'month' | 'organization' | 'publisher' | 'note'
    >;

/** Specific reference types */

/**
 * ArticleReference
 * Type describtion of an article reference.
 * 
 * Fields: author, title, journal, year
 * Optional Fields: volume, number, pages, month, note
 */
export type ArticleReference =
    BaseFields< 'article' > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'journal' | 'year',
        'volume' | 'number' | 'pages' | 'month' | 'note'
    >;

/**
 * BookReference
 * Type describtion of a book reference.
 * 
 * Fields: author/editor, title, publisher, year
 * Optional Fields: volume, number, series, address, edition, month, note, isbn
 */
export type BookReference =
    BaseFields< 'book' > &
    RequireExactlyOne< BibTeXFields, 'author' | 'editor' > &
    StrictSubset<
        BibTeXFields,
        'title' | 'publisher' | 'year',
        'volume' | 'number' | 'series' | 'address' | 'edition' | 'month' | 'note' | 'isbn'
    >;

/**
 * BookletReference
 * Type describtion of a booklet reference.
 * 
 * Fields: title
 * Optional Fields: author, howpublished, address, month, year, note
 */
export type BookletReference = BaseFields< 'booklet' > &
    StrictSubset<
        BibTeXFields,
        'title',
        'author' | 'howpublished' | 'address' | 'month' | 'year' | 'note'
    >;

/**
 * ConferenceReference
 * Type describtion of a conference reference.
 * 
 * Fields: author, title, booktitle, year
 * Optional Fields: editor, volume, number, series, pages, address, month, organization, publisher, note
 */
export type ConferenceReference = Conference< 'conference' >;

/**
 * InbookReference
 * Type describtion of an inbook reference.
 * 
 * Fields: author/editor, title, booktitle, chapter/pages, publisher, year
 * Optional Fields: volume, number, series, type, address, edition, month, note
 */
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

/**
 * IncollectionReference
 * Type describtion of an incollection reference.
 * 
 * Fields: author, title, booktitle, publisher, year
 * Optional Fields: editor, volume, number, series, type, chapter, pages, address, edition, month, note
 */
export type IncollectionReference =
    BaseFields< 'incollection' > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'booktitle' | 'publisher' | 'year',
        'editor' | 'volume' | 'number' | 'series' | 'type' | 'chapter' | 'pages' | 'address' | 'edition' | 'month' | 'note'
    >;

/**
 * InproceedingsReference
 * Type describtion of an inproceedings reference.
 * 
 * Fields: author, title, booktitle, year
 * Optional Fields: editor, volume, number, series, pages, address, month, organization, publisher, note
 */
export type InproceedingsReference = Conference< 'inproceedings' >;

/**
 * ManualReference
 * Type describtion of a manual reference.
 * 
 * Fields: title
 * Optional Fields: author, organization, address, edition, month, year, note
 */
export type ManualReference =
    BaseFields< 'manual' > &
    StrictSubset<
        BibTeXFields,
        'title',
        'author' | 'organization' | 'address' | 'edition' | 'month' | 'year' | 'note'
    >;

/**
 * MastersthesisReference
 * Type describtion of a mastersthesis reference.
 * 
 * Fields: author, title, school, year
 * Optional Fields: type, address, month, note
 */
export type MastersthesisReference = Thesis< 'mastersthesis' >;

/**
 * ThesisReference
 * Type describtion of a thesis reference.
 * 
 * Fields: author, title, school, year
 * Optional Fields: type, address, month, note
 */
export type ThesisReference = Thesis< 'thesis' >;

/**
 * MiscReference
 * Type describtion of a miscellaneous reference.
 * 
 * Optional Fields: author, title, howpublished, month, year, note
 */
export type MiscReference =
    BaseFields< 'misc' > &
    ExtractFrom< BibTeXFields, 'author' | 'title' | 'howpublished' | 'month' | 'year' | 'note' >;

/**
 * PhdthesisReference
 * Type describtion of a phdthesis reference.
 * 
 * Fields: author, title, school, year
 * Optional Fields: type, address, month, note
 */
export type PhdthesisReference = Thesis< 'phdthesis' >;

/**
 * ProceedingsReference
 * Type describtion of a proceedings reference.
 * 
 * Fields: title, year
 * Optional Fields: editor, volume, number, series, address, month, organization, publisher, note
 */
export type ProceedingsReference =
    BaseFields< 'proceedings' > &
    StrictSubset<
        BibTeXFields,
        'title' | 'year',
        'editor' | 'volume' | 'number' | 'series' | 'address' | 'month' | 'organization' | 'publisher' | 'note'
    >;

/**
 * TechreportReference
 * Type describtion of a techreport reference.
 * 
 * Fields: author, title, institution, year
 * Optional Fields: type, number, address, month, note
 */
export type TechreportReference =
    BaseFields< 'techreport' > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'institution' | 'year',
        'type' | 'number' | 'address' | 'month' | 'note'
    >;

/**
 * UnpublishedReference
 * Type describtion of an unpublished reference.
 * 
 * Fields: author, title, note
 * Optional Fields: month, year
 */
export type UnpublishedReference =
    BaseFields< 'unpublished' > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'note',
        'month' | 'year'
    >;

/** Union type for any reference */
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

/** Reference IDs used in other parts of the data model */
export type RefId = string;

/** Collection of references indexed by a unique key */
export type ReferenceCollection = Record< RefId, Reference >;
