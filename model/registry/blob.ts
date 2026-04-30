import type { Brand, Expand } from 'devtypes/types/util';
import type { BlobEncoding, BlobType, MimeType, StorageType } from '../../enum/registry/blob';
import type { RegistryType } from '../../enum/registry/system';
import type { Factory } from '../base/factory';
import type { Collection, Distinct } from '../base/modifier';
import type { IsoDate, UrlString } from '../base/primitives';
import type { Attribution } from '../utility/attribution';

export type AllowedMimeTypes< T extends BlobType > =
  T extends BlobType.IMAGE | BlobType.STRUCTURE | BlobType.SPECTRUM
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

export type Blob< T extends BlobType > = Expand< Brand< {
  mimeType: AllowedMimeTypes< T >;
  storage:
    | { type: StorageType.RAW, value: string }
    | { type: StorageType.PATH, value: string }
    | { type: StorageType.URL, value: UrlString };
  encoding: BlobEncoding;
  size?: number;
  hash?: string;
  title?: string;
  description?: string;
  notes?: string;
  attribution?: Attribution;
  created?: IsoDate;
}, T, 'type', true > >;

export type BlobId< T extends BlobType > = Brand< string, `blobId:${ T }` >;

export type BlobRegistry = Collection< {
  [ T in BlobType ]?: {
    [ K in BlobId< T > ]: Distinct< Blob< T > >;
  };
} >;

export type BlobFactory< T extends BlobType > = Factory< RegistryType.BLOB, Blob< T >, {
  blobId: BlobId< T >;
} >;
