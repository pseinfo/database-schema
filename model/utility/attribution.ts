/**
 * @file model/utility/attribution.ts
 * @description Manages authorship, licensing, and access metadata for external resources, especially images.
 */

import type { IsoDate, UrlString } from '../base/primitive';

/** Structured attribution for copyrighted resources. */
export type Attribution = {
  /** The individual or group responsible for the creation of the resource. */
  author?: string;
  /** The legal framework under which the resource is made available (e.g., CC BY 4.0). */
  license: string;
  /** Required acknowledgement of original creators or institutions. */
  credits: string;
  /** Timestamp indicating when the resource was last retrieved or verified. */
  accessed?: IsoDate;
  /** Direct digital location (URL) where the original resource can be found. */
  source?: UrlString;
};
