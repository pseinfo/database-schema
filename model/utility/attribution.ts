import type { IsoDate, UrlString } from '../base/primitives';

export type Attribution = {
  author?: string;
  license: string;
  credits: string;
  accessed?: IsoDate;
  source?: UrlString;
};
