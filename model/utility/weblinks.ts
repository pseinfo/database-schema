/**
 * @file model/utility/weblinks.ts
 * @description External digital resources and encyclopedia references associated with an entity.
 */

import type { LangCode } from '../../enum/system/locale';
import type { IsoDate, LangGroup, UrlString } from '../base/primitive';

/** Collection of URLs and structured links to external scientific information. */
export type Weblinks = {
  /** List of supplementary web resources providing additional context or data. */
  links?: Array< {
    /** Direct address of the external web resource. */
    url: UrlString;
    /** Descriptive name of the linked resource. */
    title?: string;
    /** Summary of the information available at the linked location. */
    description?: string;
    /** Link to a persistent web archive to prevent link rot (e.g. https://web.archive.org/). */
    archiveUrl?: UrlString;
    /** Timestamp of the last successful verification of the external link. */
    accessed?: IsoDate;
    /** The primary language used in the linked resource. */
    language?: LangCode;
  } >;
  /** Grouping of Wikipedia references across different language editions. */
  wiki?: LangGroup;
};
