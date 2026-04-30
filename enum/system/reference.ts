/**
 * @file enum/system/reference.ts
 * @description Defines enums for scientific reference types based on standard BibTeX classifications.
 */

/**
 * Categories of published and unpublished scientific works used for citations.
 */
export enum ReferenceType {
  /** An article from a journal or magazine. */
  ARTICLE = 'article',
  /** A book with an explicit publisher. */
  BOOK = 'book',
  /** A bound work without a formal publisher or sponsoring institution. */
  BOOKLET = 'booklet',
  /** A paper presented at a scientific conference or workshop. */
  CONFERENCE = 'conference',
  /** A part of a book, such as a chapter or a range of pages. */
  INBOOK = 'inbook',
  /** A part of a book having its own title, usually in a collection. */
  INCOLLECTION = 'incollection',
  /** An article in a conference proceedings. */
  INPROCEEDINGS = 'inproceedings',
  /** Technical documentation or a user guide. */
  MANUAL = 'manual',
  /** A Master's thesis. */
  MASTERSTHESIS = 'mastersthesis',
  /** A general academic thesis (fallback category). */
  THESIS = 'thesis',
  /** Miscellaneous reference type for works that do not fit elsewhere. */
  MISC = 'misc',
  /** A Ph.D. thesis or dissertation. */
  PHDTHESIS = 'phdthesis',
  /** The full proceedings of a conference. */
  PROCEEDINGS = 'proceedings',
  /** A report published by a school or other institution, usually numbered. */
  TECHREPORT = 'techreport',
  /** A document that has not been formally published. */
  UNPUBLISHED = 'unpublished'
};
