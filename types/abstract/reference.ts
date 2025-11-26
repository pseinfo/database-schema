/**
 * Reference System
 * Types and structures for bibliographic references based on BibTeX
 */

import { Brand } from 'devtypes/types/base';

/** Reference types based on BibTeX */
export const ReferenceType = [ 'article', 'book', 'booklet', 'conference', 'inbook', 'incollection', 'inproceedings', 'manual', 'mastersthesis', 'thesis', 'misc', 'phdthesis', 'proceedings', 'techreport', 'unpublished' ] as const;
export type ReferenceType = ( typeof ReferenceType )[ number ];

/**
 * BaseFields
 * Common fields for all reference types
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

/** Fields for bibliographic references based on BibTeX */
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
