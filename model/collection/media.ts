/**
 * @file model/collection/media.ts
 * @description Visual and digital assets associated with a scientific entity,
 * including spectra, models, and documentation.
 */

import type { Expand } from 'devtypes/types/util';
import type { BlobType, DocumentType, Model3DType, SpectrumType } from '../../enum/system/blob';
import type { Collection, Distinct } from '../base/modifier';
import type { BlobId } from '../registry/blob';

/** Mapping of media types to their specific classification enums. */
type MediaSubtypeMap = {
  [ BlobType.IMAGE ]: never;
  [ BlobType.MODEL_3D ]: Model3DType;
  [ BlobType.FORMULA ]: never;
  [ BlobType.SPECTRUM ]: SpectrumType;
  [ BlobType.DOCUMENT ]: DocumentType;
  [ BlobType.DATA ]: never;
  [ BlobType.OTHER ]: never;
};

/**
 * Conditional field for subtype classification based on blob type.
 * 
 * @template T The architectural type of the binary asset.
 */
type SubtypeField< T extends BlobType > = [ MediaSubtypeMap[ T ] ] extends [ never ] ? {} : {
  /** Specific classification of the media (e.g., IR spectrum, PDB model). */
  subtype: MediaSubtypeMap[ T ];
};

/**
 * Structural grouping of binary assets with shared context and classification.
 * 
 * @template T The architectural type of the binary asset.
 */
export type MediaEntry< T extends BlobType > = Expand< {
  /** List of identifiers for the binary data files. */
  blobs: BlobId< T >[];
  /** Descriptive information regarding the purpose or environment of the media assets. */
  context?: string;
} & SubtypeField< T > >;

/** Registry-like collection of all digital assets categorized by their primary data type. */
export type MediaCollection = Collection< {
  [ T in BlobType ]?: Distinct< MediaEntry< T > >[];
} >;
