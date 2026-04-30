/**
 * @file enum/system/blob.ts
 * @description Defines enums for Binary Large Objects (BLOBs) used for scientific data storage and representation.
 */

/**
 * Classification of binary data based on its scientific or structural content.
 */
export enum BlobType {
  /** Visual representation of a chemical or physical entity. */
  IMAGE = 'image',
  /** Three-dimensional geometric representation of a molecular or crystal structure (e.g., PDB, MOL). */
  MODEL_3D = 'model_3d',
  /** Visualization of complex, structural formulas of molecules and crystals. */
  FORMULA = 'formula',
  /** Analytical data representing measured electromagnetic or mass distribution. */
  SPECTRUM = 'spectrum',
  /** Textual or graphical documentation such as scientific papers or safety data sheets. */
  DOCUMENT = 'document',
  /** Raw numerical or structured data not covered by other categories. */
  DATA = 'data',
  /** Miscellaneous binary content. */
  OTHER = 'other'
};

/**
 * Data transformation methods used for storing or transmitting binary content as text.
 */
export enum BlobEncoding {
  /** Binary-to-text encoding using a 64-character set. */
  BASE_64 = 'base64',
  /** Standard variable-width character encoding for Unicode. */
  UTF_8 = 'utf8',
  /** Raw, unencoded binary data. */
  BINARY = 'binary'
};

/**
 * Technical methods for referencing or accessing stored binary content.
 */
export enum StorageType {
  /** Content stored directly within the data structure. */
  RAW = 'raw',
  /** Relative or absolute file system path to the content. */
  PATH = 'path',
  /** Universal Resource Locator for network-accessible content. */
  URL = 'url'
};

/**
 * Standardized media types for scientific and general-purpose binary files.
 */
export enum MimeType {
  /** Portable Network Graphics: lossless raster image. */
  PNG = 'image/png',
  /** Joint Photographic Experts Group: lossy raster image. */
  JPEG = 'image/jpeg',
  /** Graphics Interchange Format: limited-color raster image. */
  GIF = 'image/gif',
  /** Scalable Vector Graphics: XML-based vector image. */
  SVG = 'image/svg+xml',
  /** Web Picture: high-efficiency image format. */
  WEBP = 'image/webp',
  /** Portable Document Format: fixed-layout document representation. */
  PDF = 'application/pdf',
  /** Simple unformatted text. */
  TXT = 'text/plain',
  /** JavaScript Object Notation: lightweight data-interchange format. */
  JSON = 'application/json',
  /** Extensible Markup Language: structured data representation. */
  XML = 'application/xml',
  /** Comma-Separated Values: tabular data in plain text. */
  CSV = 'text/csv',
  /** Protein Data Bank format for macromolecular structures. */
  PDB = 'chemical/x-pdb',
  /** MDL Molfile: chemical table format for molecular connectivity. */
  MOL = 'chemical/x-mdl-molfile',
  /** Structure-Data File: wrapper for multiple MDL Molfiles and data. */
  SDF = 'chemical/x-sdf',
  /** Cartesian coordinate format for molecular geometry. */
  XYZ = 'chemical/x-xyz',
  /** Crystallographic Information File: standard for structural chemistry and mineralogy. */
  CIF = 'chemical/x-cif',
  /** Fallback media type for arbitrary binary data. */
  STREAM = 'application/octet-stream'
};

/**
 * Specialized file formats for 3D molecular and crystal structure visualization.
 */
export enum Model3DType {
  /** Standard for protein and macromolecular structures. */
  PDB = 'pdb',
  /** Classic chemical table format for small molecules. */
  MOL = 'mol',
  /** Format used for transporting structural and associated metadata. */
  SDF = 'sdf',
  /** Simple representation using XYZ coordinates. */
  XYZ = 'xyz',
  /** Universal standard for crystallographic data exchange. */
  CIF = 'cif'
};

/**
 * Analytical techniques used to study the interaction of matter with electromagnetic radiation.
 */
export enum SpectrumType {
  /** Light emitted when electrons transition to lower energy levels. */
  EMISSION = 'emission',
  /** Light absorbed when electrons transition to higher energy levels. */
  ABSORPTION = 'absorption',
  /** Probes molecular vibrations and rotations in the infrared range. */
  IR = 'ir',
  /** Nuclear Magnetic Resonance: probes the magnetic environment of atomic nuclei. */
  NMR = 'nmr',
  /** Probes electronic transitions in the ultraviolet and visible range. */
  UV = 'uv',
  /** Probes inner-shell electronic transitions or diffraction patterns. */
  XRAY = 'xray'
};

/**
 * Functional categories of textual documentation in a scientific context.
 */
export enum DocumentType {
  /** Technical specifications or datasheets. */
  SPEC = 'spec',
  /** Safety Data Sheet: information on chemical hazards and safety. */
  SDS = 'sds',
  /** Scientific publication, journal article, or preprint. */
  PAPER = 'paper',
  /** General or uncategorized documentation. */
  OTHER = 'other'
};
