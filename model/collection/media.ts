import type { Expand } from 'devtypes/types/util';
import type { BlobType, DocumentType, Model3DType, SpectrumType } from '../../enum/registry/blob';
import type { Collection, Distinct } from '../base/modifier';
import type { BlobId } from '../registry/blob';

type MediaSubtypeMap = {
  [ BlobType.IMAGE ]: never;
  [ BlobType.MODEL_3D ]: Model3DType;
  [ BlobType.STRUCTURE ]: never;
  [ BlobType.SPECTRUM ]: SpectrumType;
  [ BlobType.DOCUMENT ]: DocumentType;
  [ BlobType.DATA ]: never;
  [ BlobType.OTHER ]: never;
};

type SubtypeField< T extends BlobType > = [ MediaSubtypeMap[ T ] ] extends [ never ] ? {} : {
  subtype: MediaSubtypeMap[ T ];
};

export type MediaEntry< T extends BlobType > = Expand< {
  blobs: BlobId< T >[];
  context?: string;
} & SubtypeField< T > >;

export type MediaCollection = Collection< {
  [ T in BlobType ]?: Distinct< MediaEntry< T > >[];
} >;
