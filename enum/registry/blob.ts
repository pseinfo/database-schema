export enum BlobType {
  IMAGE = 'image',
  MODEL_3D = 'model_3d',
  STRUCTURE = 'structure',
  SPECTRUM = 'spectrum',
  DOCUMENT = 'document',
  DATA = 'data',
  OTHER = 'other'
};

export enum BlobEncoding {
  BASE_64 = 'base64',
  UTF_8 = 'utf8',
  BINARY = 'binary'
};

export enum StorageType {
  RAW = 'raw',
  PATH = 'path',
  URL = 'url'
};

export enum MimeType {
  PNG = 'image/png',
  JPEG = 'image/jpeg',
  GIF = 'image/gif',
  SVG = 'image/svg+xml',
  WEBP = 'image/webp',
  PDF = 'application/pdf',
  TXT = 'text/plain',
  JSON = 'application/json',
  XML = 'application/xml',
  CSV = 'text/csv',
  PDB = 'chemical/x-pdb',
  MOL = 'chemical/x-mdl-molfile',
  SDF = 'chemical/x-sdf',
  XYZ = 'chemical/x-xyz',
  CIF = 'chemical/x-cif',
  STREAM = 'application/octet-stream'
};

export enum Model3DType {
  PDB = 'pdb',
  MOL = 'mol',
  SDF = 'sdf',
  XYZ = 'xyz',
  CIF = 'cif'
};

export enum SpectrumType {
  EMISSION = 'emission',
  ABSORPTION = 'absorption',
  IR = 'ir',
  NMR = 'nmr',
  UV = 'uv',
  XRAY = 'xray'
};

export enum DocumentType {
  SPEC = 'spec',
  SDS = 'sds',
  PAPER = 'paper',
  OTHER = 'other'
};
