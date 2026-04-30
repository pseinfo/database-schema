/**
 * @file model/registry/blob.ts
 * @description Registry for binary assets, supporting diverse scientific data formats and storage methods.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { BlobEncoding, BlobType, MimeType, StorageType } from '../../enum/system/blob';
import type { RegistryType } from '../../enum/system/domain';
import type { Factory } from '../base/factory';
import type { Collection, Distinct } from '../base/modifier';
import type { IsoDate, UrlString } from '../base/primitive';
import type { Attribution } from '../utility/attribution';

/**
 * Mapping of scientific data types to their authoritative Internet Media Types (MIME).
 * 
 * @template T The architectural type of the binary asset.
 */
export type AllowedMimeTypes< T extends BlobType > =
  T extends BlobType.IMAGE | BlobType.FORMULA | BlobType.SPECTRUM
    ? MimeType.PNG | MimeType.JPEG | MimeType.GIF | MimeType.SVG | MimeType.WEBP
    : T extends BlobType.MODEL_3D
      ? MimeType.PDB | MimeType.MOL | MimeType.SDF | MimeType.XYZ | MimeType.CIF
      : T extends BlobType.DOCUMENT
        ? MimeType.PDF | MimeType.TXT
        : T extends BlobType.DATA
          ? MimeType.JSON | MimeType.XML | MimeType.CSV
          : T extends BlobType.OTHER
            ? MimeType.STREAM
            : never;

/**
 * Structural model for a binary asset, including its physical storage and descriptive metadata.
 * 
 * @template T The architectural type of the binary asset.
 */
export type Blob< T extends BlobType > = Expand< Brand< {
  /** The media type standard used for the binary data. */
  mimeType: AllowedMimeTypes< T >;
  /** Method used to retrieve or reference the binary content. */
  storage:
    /** Data is embedded directly as a string or base64. */
    | { type: StorageType.RAW, value: string }
    /** Data is stored at a specific file path within the repository. */
    | { type: StorageType.PATH, value: string }
    /** Data is accessible via a remote URL. */
    | { type: StorageType.URL, value: UrlString };
  /** The character or binary encoding of the data (e.g., UTF-8). */
  encoding: BlobEncoding;
  /** Total size of the asset in bytes. */
  size?: number;
  /** Cryptographic fingerprint for data integrity verification. */
  hash?: string;
  /** Concise descriptive label for the asset. */
  title?: string;
  /** Detailed summary of the asset's content and purpose. */
  description?: string;
  /** Qualitative technical notes regarding the data. */
  notes?: string;
  /** Authorship and licensing information for the asset. */
  attribution?: Attribution;
  /** Timestamp of the asset's initial creation or ingestion. */
  created?: IsoDate;
}, T, 'type', true > >;

/**
 * Unique identifier for a binary asset, branded by its data type.
 * 
 * @template T The architectural type of the binary asset.
 */
export type BlobId< T extends BlobType > = Brand< string, `blobId:${ T }` >;

/** System-wide collection of binary assets indexed by their type and unique IDs. */
export type BlobRegistry = Collection< {
  [ T in BlobType ]?: {
    [ K in BlobId< T > ]: Distinct< Blob< T > >;
  };
} >;

/**
 * Helper type for generating type-safe binary asset entries for the database.
 * 
 * @template T The architectural type of the binary asset.
 */
export type BlobFactory< T extends BlobType > = Factory< RegistryType.BLOB, Blob< T >, {
  /** Unique registry identifier of the binary asset. */
  blobId: BlobId< T >;
} >;
