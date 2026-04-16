/**
 * @file reference.ts
 * @description Provides the bibliographic data models for scientific references.
 * The structures are strictly aligned with BibTeX standards to ensure compatibility
 * with academic citation workflows and publication metadata.
 */

import type { ExtractFrom, RequireAtLeastOne, RequireExactlyOneFrom, StrictSubset } from 'devtypes/types/constraint';
import type { Brand, Expand } from 'devtypes/types/util';
import type { ReferenceType } from '../../enum/util';

/**
 * Base metadata shared by all bibliographic reference types.
 * @template T The classification of the reference (Article, Book, etc.).
 */
export type BaseReference< T extends ReferenceType > = Brand< {
  /** ISO 8601 date when the source was last accessed (crucial for web resources) */
  accessed?: string;
  /** Direct link to the source material */
  url?: string;
  /** Digital Object Identifier - the unique permanent identifier for scholarly work */
  doi?: string;
}, T, 'type', true >;

/**
 * Collection of standard BibTeX fields for academic citations.
 */
export interface BibTeXFields {
  /** Physical or electronic address of the publisher or institution */
  address?: string;
  /** Primary creator(s) of the work */
  author?: string | string[];
  /** Title of the book when the reference is a chapter or paper within it */
  booktitle?: string;
  /** Specific chapter number within a larger work */
  chapter?: string;
  /** Version or edition of the publication (e.g., "3rd ed.") */
  edition?: string;
  /** Person(s) responsible for assembling the collection or volume */
  editor?: string | string[];
  /** Alternative publication method for non-traditional sources */
  howpublished?: string;
  /** Official entity sponsoring a technical report or thesis */
  institution?: string;
  /** International Standard Book Number */
  isbn?: string;
  /** Name of the periodical in which the article was published */
  journal?: string;
  /** Month of publication */
  month?: string;
  /** Unstructured supplemental information or remarks */
  note?: string;
  /** Issue number within a volume */
  number?: number | string;
  /** Sponsoring organization for proceedings or manuals */
  organization?: string;
  /** Page numbers or physical extent (e.g., "123--145") */
  pages?: number | string;
  /** Entity responsible for the distribution of the work */
  publisher?: string;
  /** Categorization of technical documents (e.g., "Research Memo") */
  reportType?: string;
  /** The larger collection or series a book belongs to */
  series?: string;
  /** Academic institution where a thesis was defended */
  school?: string;
  /** The full title of the cited work */
  title?: string;
  /** Numerical volume of a journal or multi-volume book */
  volume?: number | string;
  /** Year of publication */
  year?: number | string;
}

/**
 * Internal helper for thesis types (Master's, PhD, or general Thesis).
 * @template T The specific thesis reference type.
 */
type Thesis< T extends ReferenceType.MASTERSTHESIS | ReferenceType.THESIS | ReferenceType.PHDTHESIS > = Expand<
  /** Base reference metadata */
  BaseReference< T > &
  /** Subset of BibTeX fields mandatory for theses */
  StrictSubset<
    BibTeXFields,
    'author' | 'school' | 'title' | 'year',
    'address' | 'month' | 'note' | 'reportType'
  >
>;

/**
 * Internal helper for conference-related types (Inproceedings or Conference).
 * @template T The specific conference reference type.
 */
type Conference< T extends ReferenceType.CONFERENCE | ReferenceType.INPROCEEDINGS > = Expand<
  /** Base reference metadata */
  BaseReference< T > &
  /** Subset of BibTeX fields mandatory for conference papers */
  StrictSubset<
    BibTeXFields,
    'author' | 'booktitle' | 'title' | 'year',
    'address' | 'editor' | 'month' | 'note' | 'number' | 'organization' | 'pages' | 'publisher' | 'series' | 'volume'
  >
>;

/**
 * Represents a standard academic journal article.
 */
export type ArticleReference = Expand<
  /** Extends base reference with Article type branding */
  BaseReference< ReferenceType.ARTICLE > &
  /** Mandatory: author, journal, title, year */
  StrictSubset<
    BibTeXFields,
    'author' | 'journal' | 'title' | 'year',
    'month' | 'note' | 'number' | 'pages' | 'volume'
  >
>;

/**
 * Represents a published book or monograph.
 */
export type BookReference = Expand<
  /** Extends base reference with Book type branding */
  BaseReference< ReferenceType.BOOK > &
  /** Must have either an author or an editor, but not both */
  RequireExactlyOneFrom< BibTeXFields, 'author' | 'editor' > &
  /** Mandatory: publisher, title, year */
  StrictSubset<
    BibTeXFields,
    'publisher' | 'title' | 'year',
    'address' | 'edition' | 'isbn' | 'month' | 'note' | 'number' | 'series' | 'volume'
  >
>;

/**
 * Represents a bound work without a formal publisher (e.g., self-published research).
 */
export type BookletReference = Expand<
  /** Extends base reference with Booklet type branding */
  BaseReference< ReferenceType.BOOKLET > &
  /** Mandatory: title */
  StrictSubset<
    BibTeXFields,
    'title',
    'address' | 'author' | 'howpublished' | 'month' | 'note' | 'year'
  >
>;

/**
 * Represents a paper presented at a scientific conference.
 */
export type ConferenceReference = Conference< ReferenceType.CONFERENCE >;

/**
 * Represents a specific part or chapter within a book.
 */
export type InbookReference = Expand<
  /** Extends base reference with Inbook type branding */
  BaseReference< ReferenceType.INBOOK > &
  /** Choice between primary author or book editor */
  RequireExactlyOneFrom< BibTeXFields, 'author' | 'editor' > &
  /** Requires at least a chapter number or page range */
  RequireAtLeastOne<
    StrictSubset<
      BibTeXFields,
      'booktitle' | 'chapter' | 'pages' | 'publisher' | 'title' | 'year',
      'address' | 'edition' | 'month' | 'note' | 'number' | 'reportType' | 'series' | 'volume'
    >,
    'chapter' | 'pages'
  >
>;

/**
 * Represents a standalone work published within a larger collection.
 */
export type IncollectionReference = Expand<
  /** Extends base reference with Incollection type branding */
  BaseReference< ReferenceType.INCOLLECTION > &
  /** Mandatory bibliographical data for collection items */
  StrictSubset<
    BibTeXFields,
    'author' | 'booktitle' | 'publisher' | 'title' | 'year',
    'address' | 'chapter' | 'edition' | 'editor' | 'month' | 'note' | 'number' | 'pages' | 'reportType' | 'series' | 'volume'
  >
>;

/**
 * Represents a paper in conference proceedings (aliased to Proceeding paper).
 */
export type InproceedingsReference = Conference< ReferenceType.INPROCEEDINGS >;

/**
 * Represents technical documentation or instruction manuals.
 */
export type ManualReference = Expand<
  /** Extends base reference with Manual type branding */
  BaseReference< ReferenceType.MANUAL > &
  /** Mandatory: title */
  StrictSubset<
    BibTeXFields,
    'title',
    'address' | 'author' | 'edition' | 'month' | 'note' | 'organization' | 'year'
  >
>;

/**
 * Represents a Master's thesis.
 */
export type MastersthesisReference = Thesis< ReferenceType.MASTERSTHESIS >;

/**
 * Represents a general academic thesis.
 */
export type ThesisReference = Thesis< ReferenceType.THESIS >;

/**
 * Represents miscellaneous sources not fitting standard types (e.g., data sets).
 */
export type MiscReference = Expand<
  /** Extends base reference with Misc type branding */
  BaseReference< ReferenceType.MISC > &
  /** Allows any standard fields without strict constraints */
  ExtractFrom<
    BibTeXFields,
    'author' | 'howpublished' | 'month' | 'note' | 'title' | 'year'
  >
>;

/**
 * Represents a Doctoral dissertation.
 */
export type PhdthesisReference = Thesis< ReferenceType.PHDTHESIS >;

/**
 * Represents the full volume of conference proceedings.
 */
export type ProceedingsReference = Expand<
  /** Extends base reference with Proceedings type branding */
  BaseReference< ReferenceType.PROCEEDINGS > &
  /** Mandatory: title, year */
  StrictSubset<
    BibTeXFields,
    'title' | 'year',
    'address' | 'editor' | 'month' | 'note' | 'number' | 'organization' | 'publisher' | 'series' | 'volume'
  >
>;

/**
 * Represents a formal report from an institution or organization.
 */
export type TechreportReference = Expand<
  /** Extends base reference with Techreport type branding */
  BaseReference< ReferenceType.TECHREPORT > &
  /** Mandatory: author, institution, title, year */
  StrictSubset<
    BibTeXFields,
    'author' | 'institution' | 'title' | 'year',
    'address' | 'month' | 'note' | 'number' | 'reportType'
  >
>;

/**
 * Represents scholarly work not yet formally published (e.g., pre-prints).
 */
export type UnpublishedReference = Expand<
  /** Extends base reference with Unpublished type branding */
  BaseReference< ReferenceType.UNPUBLISHED > &
  /** Mandatory: author, note, title */
  StrictSubset<
    BibTeXFields,
    'author' | 'note' | 'title',
    'month' | 'year'
  >
>;

/**
 * Union type containing all supported scientific reference models.
 */
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

/**
 * A unique, branded string identifier for a reference within a registry.
 */
export type RefId = Brand< string, 'refId' >;

/**
 * A registry collecting multiple scientific references indexed by their unique IDs.
 */
export type ReferenceCollection = Record< RefId, Reference >;

