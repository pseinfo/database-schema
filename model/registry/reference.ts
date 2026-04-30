/**
 * @file model/registry/reference.ts
 * @description Bibliographic registry supporting standard BibTeX reference types for
 * citing scientific literature and data sources.
 */

import type { RequireAtLeastOne, RequireExactlyOneFrom } from 'devtypes/types/constraint';
import type { Brand, Expand } from 'devtypes/types/util';
import type { RegistryType } from '../../enum/system/domain';
import type { LangCode } from '../../enum/system/locale';
import type { ReferenceType } from '../../enum/system/reference';
import type { Factory } from '../base/factory';
import type { Collection, Distinct } from '../base/modifier';
import type { IsoDate, UrlString } from '../base/primitive';

/**
 * Structural framework for bibliographic entries, integrating digital identifiers and language metadata.
 * 
 * @template R The specific type of bibliographic reference.
 */
type BaseReference< R extends ReferenceType > = Brand< {
  /** Digital Object Identifier (DOI) for the referenced work. */
  doi?: `doi:${ string }`;
  /** Direct digital location (URL) of the referenced work. */
  url?: UrlString;
  /** Timestamp of the last digital access to the resource. */
  accessed?: IsoDate;
  /** The primary language of the referenced work. */
  language?: LangCode;
}, R, 'type', true >;

/** Fundamental bibliographic fields shared across most reference types. */
type CoreFields = {
  /** The full title of the referenced work. */
  title?: string;
  /** The year of publication or release. */
  year?: number | string;
  /** The month of publication or release. */
  month?: string;
  /** Additional qualitative information regarding the reference. */
  note?: string;
};

/** Fields for identifying individuals responsible for the work. */
type PersonFields = {
  /** List of primary authors responsible for the content. */
  author?: string | string[];
  /** List of editors responsible for the publication. */
  editor?: string | string[];
};

/** Fields for specifying the physical or digital location within a larger work. */
type LocFields = {
  /** The volume of a journal, periodical, or multi-volume book. */
  volume?: number | string;
  /** The specific issue number of a journal or technical report. */
  number?: number | string;
  /** Page range or specific page identifiers within the larger work. */
  pages?: number | string;
  /** Specific chapter number or title within a book. */
  chapter?: string;
};

/** Fields for identifying the publication venue, publisher, or institution. */
type VenueFields = {
  /** The official name of the scientific journal. */
  journal?: string;
  /** The title of the book if the reference is a part of it. */
  booktitle?: string;
  /** The organization or company responsible for publication. */
  publisher?: string;
  /** The institution hosting a conference or scientific event. */
  organization?: string;
  /** The organization sponsoring or issuing a technical report. */
  institution?: string;
  /** The academic institution where a thesis was submitted. */
  school?: string;
};

/** Secondary metadata for specific bibliographic reference types. */
type MetaFields = {
  /** Geographic location of the publisher or conference venue. */
  address?: string;
  /** The version or edition identifier of a book. */
  edition?: string;
  /** The title of a series if the work is part of a larger collection. */
  series?: string;
  /** Description of the publication method for non-standard or unconventional works. */
  howpublished?: string;
  /** International Standard Book Number (ISBN). */
  isbn?: string;
  /** Specific classification of a technical report or academic thesis. */
  reportType?: string;
};

/** Aggregated collection of all bibliographic data fields. */
type Fields = CoreFields & PersonFields & LocFields & VenueFields & MetaFields;

/** Helper for marking a bibliographic field as required. */
type Req< K extends keyof Fields > = Required< Pick< Fields, K > >;
/** Helper for marking a bibliographic field as optional. */
type Opt< K extends keyof Fields > = Pick< Fields, K >;

/** Basic requirements for most formal publications. */
type CoreBase = Req< 'title' | 'year' > & Opt< 'month' | 'note' >;
/** Requirements for works defined by their authorship. */
type Authored = CoreBase & Req< 'author' >;
/** Location parameters for periodicals and series. */
type VolNum = Opt< 'volume' | 'number' >;
/** Structural base for conference-related citations. */
type ConfBase = Authored & VolNum & Req< 'booktitle' > & Opt< 'editor' | 'series' | 'pages' | 'address' | 'organization' | 'publisher' >;
/** Structural base for academic theses and dissertations. */
type ThesisBase = Authored & Req< 'school' > & Opt< 'reportType' | 'address' >;

/** Citation for a scientific article in a journal or periodical. */
export type ArticleReference = Expand<
  BaseReference< ReferenceType.ARTICLE > &
  Authored & VolNum &
  Req< 'journal' > & Opt< 'pages' >
>;

/** Citation for a published book or monograph. */
export type BookReference = Expand<
  BaseReference< ReferenceType.BOOK > &
  CoreBase & VolNum &
  Req< 'publisher' > & Opt< 'series' | 'address' | 'edition' | 'isbn' > &
  RequireExactlyOneFrom< Fields, 'author' | 'editor' >
>;

/** Citation for a printed work without a formal publisher or sponsoring institution. */
export type BookletReference = Expand<
  BaseReference< ReferenceType.BOOKLET > &
  Req< 'title' > & Opt< 'author' | 'howpublished' | 'address' | 'month' | 'year' | 'note' >
>;

/** Citation for papers presented at scientific conferences (BibTeX alias). */
export type ConferenceReference = Expand< BaseReference< ReferenceType.CONFERENCE > & ConfBase >;

/** Citation for a specific part or chapter of a book, usually without its own title. */
export type InbookReference = Expand<
  BaseReference< ReferenceType.INBOOK > &
  CoreBase & VolNum &
  Req< 'publisher' > & Opt< 'series' | 'reportType' | 'address' | 'edition' > &
  RequireExactlyOneFrom< Fields, 'author' | 'editor' > &
  RequireAtLeastOne< Fields, 'chapter' | 'pages' >
>;

/** Citation for a part of a book having its own title and usually its own authors. */
export type IncollectionReference = Expand<
  BaseReference< ReferenceType.INCOLLECTION > &
  Authored & VolNum &
  Req< 'booktitle' | 'publisher' > &
  Opt< 'editor' | 'series' | 'reportType' | 'chapter' | 'pages' | 'address' | 'edition' >
>;

/** Citation for a paper in the published proceedings of a conference or symposium. */
export type InproceedingsReference = Expand< BaseReference< ReferenceType.INPROCEEDINGS > & ConfBase >;

/** Citation for technical documentation or user manuals. */
export type ManualReference = Expand<
  BaseReference< ReferenceType.MANUAL > &
  Req< 'title' > &
  Opt< 'author' | 'organization' | 'address' | 'edition' | 'month' | 'note' | 'year' >
>;

/** Citation for a thesis submitted for a Master's degree. */
export type MastersthesisReference = Expand< BaseReference< ReferenceType.MASTERSTHESIS > & ThesisBase >;

/** General citation for an academic thesis not covered by specific categories. */
export type ThesisReference = Expand< BaseReference< ReferenceType.THESIS > & ThesisBase >;

/** Citation for a dissertation submitted for a doctoral degree. */
export type PhdthesisReference = Expand< BaseReference< ReferenceType.PHDTHESIS > & ThesisBase >;

/** Citation for works that do not fit into other standard categories. */
export type MiscReference = Expand<
  BaseReference< ReferenceType.MISC > &
  Opt< 'author' | 'title' | 'howpublished' | 'month' | 'year' | 'note' >
>;

/** Citation for the published proceedings of a conference or workshop. */
export type ProceedingsReference = Expand<
  BaseReference< ReferenceType.PROCEEDINGS > &
  CoreBase & VolNum &
  Opt< 'editor' | 'series' | 'address' | 'organization' | 'publisher' >
>;

/** Citation for a technical report issued by an institution or organization. */
export type TechreportReference = Expand<
  BaseReference< ReferenceType.TECHREPORT > &
  Authored &
  Req< 'institution' > & Opt< 'reportType' | 'note' | 'number' | 'address' >
>;

/** Citation for a work that has not yet been formally published. */
export type UnpublishedReference = Expand<
  BaseReference< ReferenceType.UNPUBLISHED > &
  Req< 'author' | 'title' | 'note' > & Opt< 'month' | 'year' >
>;

/** Union of all supported bibliographic reference models. */
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

/** Unique identifier for a bibliographic entry within the registry. */
export type RefId = Brand< string, 'refId' >;

/** System-wide collection of bibliographic references indexed by their unique IDs. */
export type ReferenceRegistry = Collection< {
  [ K in RefId ]: Distinct< Reference >;
} >;

/** Helper type for generating type-safe bibliographic entries for the database. */
export type ReferenceFactory = Factory< RegistryType.REFERENCE, Reference, {
  /** Unique registry identifier of the bibliographic reference. */
  refId: RefId;
} >;
