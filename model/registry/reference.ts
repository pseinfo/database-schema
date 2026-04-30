import type { Brand } from 'devtypes/types/util';
import type { LangCode } from '../../enum/base/locale';
import type { ReferenceType } from '../../enum/registry/reference';
import type { IsoDate, UrlString } from '../base/primitives';

type BaseReference< R extends ReferenceType > = Brand< {
  doi?: `doi:${string}`;
  url?: UrlString;
  accessed?: IsoDate;
  language?: LangCode;
}, R, 'type', true >;
