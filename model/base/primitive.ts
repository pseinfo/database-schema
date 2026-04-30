/**
 * @file model/base/primitive.ts
 * @description Fundamental utility types and constants used throughout the database schema
 * for data structure and localization.
 */

import type { Expand } from 'devtypes/types/util';
import type { LangCode } from '../../enum/system/locale';

/** The authoritative GitHub repository for the scientific database. */
export type RepoBase = 'https://github.com/pseinfo/database';

/** Standardized ISO 8601 UTC timestamp format for data versioning and event logging. */
export type IsoDate = `${ number }:${ number }:${ number }T${ number }:${ number }:${ number }Z`;

/** Type-safe representation of HTTP/HTTPS URLs for external resources and citations. */
export type UrlString = `https://${ string }` | `http://${ string }`;

/**
 * A flexible key-value record used for defining structured chemical or physical properties.
 * 
 * @template T The data type of the record values.
 * @template K The type of keys used in the record.
 */
export type Struct< T = unknown, K extends PropertyKey = string > = Record< K, T >;

/**
 * Grouping of localized strings, requiring English as the primary scientific language.
 * 
 * @template T The data type of the localized content.
 * @template L The primary language code for required content.
 */
export type LangGroup< T = string, L extends LangCode = LangCode.ENGLISH > = Expand<
  Required< { [ K in L ]: T } > &
  Partial< { [ K in Exclude< LangCode, L > ]: T } >
>;
