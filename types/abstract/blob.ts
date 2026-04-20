/**
 * @file blob.ts
 * @description Defines the core scientific blob representations for binary assets.
 * This module handles multi-media assets, 3D structural models, and complex datasets
 * stored as binary data within the database.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { BlobType, D3Format, ImageFormat } from '../../enum/util';
import type { RefId } from './reference';
import type { Attribution, Factory } from './util';

/**
 * Branded base attributes for all binary large objects.
 * @template T The classification of the blob (Image, 3D Model, etc.).
 */
type BaseBlob< T extends BlobType > = Brand< {
  /** The cryptographic hash (e.g., SHA-256) for data integrity. */
  hash?: string;
  /** The total size of the binary data in bytes. */
  size?: number;
  /** Legal and creative attribution for the binary asset. */
  attribution?: Attribution;
  /** Internal remarks or scientific context regarding the asset. */
  note?: string;
  /** Citations and verifiable sources for the binary content. */
  references?: RefId[];
}, T, 'type', true >;

/**
 * Represents a photographic or diagrammatic image asset.
 */
export type ImageBlob = Expand< BaseBlob< BlobType.IMAGE > & {
  /** The raster or vector format of the image. */
  format: ImageFormat;
  /** The raw base64 encoded payload or internal data URI. */
  data: string;
  /** Physical width of the asset in pixels. */
  width?: number;
  /** Physical height of the asset in pixels. */
  height?: number;
} >;

/**
 * Represents a three-dimensional structural or molecular model.
 */
export type Model3DBlob = Expand< BaseBlob< BlobType.MODEL_3D > & {
  /** The chemical or spatial data format (e.g., CIF, PDB). */
  format: D3Format;
  /** The structural data payload. */
  data: string;
} >;

/**
 * Represents a general-purpose scientific data blob.
 */
export type DataBlob = Expand< BaseBlob< BlobType.DATA > & {
  /** The formal IANA media type (Mime-Type). */
  mimeType: string;
  /** The binary payload encoded as base64. */
  data: string;
} >;

/**
 * Union of all supported binary asset representations.
 */
export type Blob = ImageBlob | Model3DBlob | DataBlob;

/**
 * Branded identifier for a specific binary asset.
 */
export type BlobId = Brand< string, 'blobId' >;

/**
 * A registry collecting multiple binary scientific assets indexed by their unique IDs.
 */
export type BlobCollection = Record< BlobId, Blob >;

/**
 * Factory type for defining binary assets in the database repository.
 * 
 * @example
 * ```typescript
 * import type { BlobFactory } from '@pseinfo/database-schema/abstract/blob';
 * 
 * export default ( {
 *   type: 'blob',
 *   blobId: 'XXXXXXX',
 *   data: {
 *     // ...
 *   }
 * } ) as const satisfies BlobFactory;
 * ```
 */
export type BlobFactory = Factory< 'blob', Blob, {
  /** The unique, branded identifier for this binary asset. */
  blobId: BlobId;
} >;
