import type { LangCode } from '../../enum/base/locale';
import type { IsoDate, LangGroup, UrlString } from '../base/primitives';

export type Weblinks = {
  links?: Array< {
    url: UrlString;
    title?: string;
    description?: string;
    archiveUrl?: UrlString;
    accessed?: IsoDate;
    language?: LangCode;
  } >;
  wiki?: LangGroup;
};
