import type { LangCode } from '../../enum/system/locale';
import type { IsoDate, LangGroup, UrlString } from '../base/primitive';

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
