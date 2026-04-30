import type { IsoDate, UrlString } from '../base/primitive';

export type Attribution = {
  author?: string;
  license: string;
  credits: string;
  accessed?: IsoDate;
  source?: UrlString;
};
