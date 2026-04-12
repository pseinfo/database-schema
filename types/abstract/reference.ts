/**
 * Reference System
 * Types and structures for bibliographic references based on BibTeX.
 * 
 * @module abstract/reference
 */

import type { ExtractFrom, RequireAtLeastOne, RequireExactlyOne, StrictSubset } from 'devtypes/types/constraint';
import type { Brand } from 'devtypes/types/util';
import type { ReferenceType } from '@/enums/abstract';


/**
 * Branded common fields for all reference types.
 * 
 * @template T - Reference type
 * @param type - Type of reference (branding)
 * @param accessed - Date when the reference was accessed (for online resources)
 * @param url - URL of the reference
 * @param doi - DOI of the reference
 */
export type BaseReference< T extends ReferenceType > = Brand< {
    accessed?: string;
    url?: string;
    doi?: string;
}, T, 'type', true >;

/**
 * Fields for bibliographic references based on BibTeX.
 * 
 * @param address - Address of the publisher or institution
 * @param author - Author(s) of the work
 * @param booktitle - Title of the book or conference proceedings
 * @param chapter - Chapter number or name
 * @param edition - Edition of the book
 * @param editor - Editor(s) of the work
 * @param howpublished - How the work was published
 * @param institution - Institution associated with the work
 * @param isbn - ISBN number of the book
 * @param journal - Journal name
 * @param month - Month of publication
 * @param note - Additional notes about the reference
 * @param number - Number of the journal, volume, or report
 * @param organization - Organization associated with the work
 * @param pages - Page numbers
 * @param publisher - Publisher of the work
 * @param school - School associated with the thesis
 * @param series - Series name
 * @param title - Title of the work
 * @param type - Type of report or thesis
 * @param volume - Volume number
 * @param year - Year of publication
 */
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

/** Helper types for specific reference types */

type Thesis< T extends ReferenceType.MASTERSTHESIS | ReferenceType.THESIS | ReferenceType.PHDTHESIS > =
    BaseReference< T > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'school' | 'year',
        'type' | 'address' | 'month' | 'note'
    >;

type Conference< T extends ReferenceType.CONFERENCE | ReferenceType.INPROCEEDINGS > =
    BaseReference< T > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'booktitle' | 'year',
        'editor' | 'volume' | 'number' | 'series' | 'pages' | 'address' | 'month' | 'organization' | 'publisher' | 'note'
    >;

/** Specific reference types */

/**
 * Type description of an article reference.
 * Includes required fields for author, title, journal, and year.
 * Optional fields include volume, number, pages, month, and note.
 */
export type ArticleReference =
    BaseReference< ReferenceType.ARTICLE > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'journal' | 'year',
        'volume' | 'number' | 'pages' | 'month' | 'note'
    >;

/**
 * Type description of a book reference.
 * Includes required fields for author/editor, title, publisher, and year.
 * Optional fields include volume, number, series, address, edition, month, note, and isbn.
 */
export type BookReference =
    BaseReference< ReferenceType.BOOK > &
    RequireExactlyOne< BibTeXFields, 'author' | 'editor' > &
    StrictSubset<
        BibTeXFields,
        'title' | 'publisher' | 'year',
        'volume' | 'number' | 'series' | 'address' | 'edition' | 'month' | 'note' | 'isbn'
    >;

/**
 * Type description of a booklet reference.
 * Includes required fields for title.
 * Optional fields include author, howpublished, address, month, year, and note.
 */
export type BookletReference = BaseReference< ReferenceType.BOOKLET > &
    StrictSubset<
        BibTeXFields,
        'title',
        'author' | 'howpublished' | 'address' | 'month' | 'year' | 'note'
    >;

/**
 * Type description of a conference reference.
 * Includes required fields for author, title, booktitle, and year.
 * Optional fields include editor, volume, number, series, pages, address, month, organization, publisher, and note.
 */
export type ConferenceReference = Conference< ReferenceType.CONFERENCE >;

/**
 * Type description of an inbook reference.
 * Includes required fields for author/editor, title, booktitle, chapter/pages, publisher, and year.
 * Optional fields include volume, number, series, type, address, edition, month, and note.
 */
export type InbookReference =
    BaseReference< ReferenceType.INBOOK > &
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
 * Type description of an incollection reference.
 * Includes required fields for author, title, booktitle, publisher, and year.
 * Optional fields include editor, volume, number, series, type, chapter, pages, address, edition, month, and note.
 */
export type IncollectionReference =
    BaseReference< ReferenceType.INCOLLECTION > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'booktitle' | 'publisher' | 'year',
        'editor' | 'volume' | 'number' | 'series' | 'type' | 'chapter' | 'pages' | 'address' | 'edition' | 'month' | 'note'
    >;

/**
 * Type description of an inproceedings reference.
 * Includes required fields for author, title, booktitle, and year.
 * Optional fields include editor, volume, number, series, pages, address, month, organization, publisher, and note.
 */
export type InproceedingsReference = Conference< ReferenceType.INPROCEEDINGS >;

/**
 * Type description of a manual reference.
 * Includes required fields for title.
 * Optional fields include author, organization, address, edition, month, year, and note.
 */
export type ManualReference =
    BaseReference< ReferenceType.MANUAL > &
    StrictSubset<
        BibTeXFields,
        'title',
        'author' | 'organization' | 'address' | 'edition' | 'month' | 'year' | 'note'
    >;

/**
 * Type description of a mastersthesis reference.
 * Includes required fields for author, title, school, and year.
 * Optional fields include type, address, month, and note.
 */
export type MastersthesisReference = Thesis< ReferenceType.MASTERSTHESIS >;

/**
 * Type description of a thesis reference.
 * Includes required fields for author, title, school, and year.
 * Optional fields include type, address, month, and note.
 */
export type ThesisReference = Thesis< ReferenceType.THESIS >;

/**
 * Type description of a miscellaneous reference.
 * Optional fields include author, title, howpublished, month, year, and note.
 */
export type MiscReference =
    BaseReference< ReferenceType.MISC > &
    ExtractFrom<
        BibTeXFields,
        'author' | 'title' | 'howpublished' | 'month' | 'year' | 'note'
    >;

/**
 * Type description of a phdthesis reference.
 * Includes required fields for author, title, school, and year.
 * Optional fields include type, address, month, and note.
 */
export type PhdthesisReference = Thesis< ReferenceType.PHDTHESIS >;

/**
 * Type description of a proceedings reference.
 * Includes required fields for title and year.
 * Optional fields include editor, volume, number, series, address, month, organization, publisher, and note.
 */
export type ProceedingsReference =
    BaseReference< ReferenceType.PROCEEDINGS > &
    StrictSubset<
        BibTeXFields,
        'title' | 'year',
        'editor' | 'volume' | 'number' | 'series' | 'address' | 'month' | 'organization' | 'publisher' | 'note'
    >;

/**
 * Type description of a techreport reference.
 * Includes required fields for author, title, institution, and year.
 * Optional fields include type, number, address, month, and note.
 */
export type TechreportReference =
    BaseReference< ReferenceType.TECHREPORT > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'institution' | 'year',
        'type' | 'number' | 'address' | 'month' | 'note'
    >;

/**
 * Type description of an unpublished reference.
 * Includes required fields for author, title, and note.
 * Optional fields include month and year.
 */
export type UnpublishedReference =
    BaseReference< ReferenceType.UNPUBLISHED > &
    StrictSubset<
        BibTeXFields,
        'author' | 'title' | 'note',
        'month' | 'year'
    >;

/** Common types for the reference system */

/** Union type for any BibTeX reference. */
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

/** Branded reference IDs used in other parts of the data model. */
export type RefId = Brand< string, 'refId' >; 

/** Collection of references indexed by a unique key. */
export type ReferenceCollection = Record< RefId, Reference >;
