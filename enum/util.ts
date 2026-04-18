/**
 * @file util.ts
 * @description Defines technical enums for data structuring, metadata, and scientific standards.
 * This module includes value types, confidence levels, standard conditions, and units of measurement.
 */

/**
 * Technical representation models for data values within the schema.
 */
export enum ValueType {
  /** A single, primitive data point (e.g., number or string). */
  PRIMITIVE = 'primitive',
  /** A complex object containing nested fields and sub-properties. */
  STRUCT = 'struct',
  /** A discrete individual measurement or value. */
  SINGLE = 'single',
  /** A collection of values of the same type. */
  ARRAY = 'array',
  /** A continuous interval between two numeric bounds. */
  RANGE = 'range',
  /** Coupled values for entries based on multiple physical properties. */
  COUPLED = 'coupled'
};

/**
 * Degree of scientific reliability and origin of a specific data point.
 */
export enum ValueConfidence {
  /** Obtained through direct physical observation or instrumentation. */
  MEASURED = 'measured',
  /** Derived from established formulas or numerical simulations. */
  CALCULATED = 'calculated',
  /** Approximated through heuristic models or incomplete data. */
  ESTIMATED = 'estimated',
  /** Validated through specific, controlled scientific experiments. */
  EXPERIMENTAL = 'experimental',
  /** Based on theoretical physics or chemical principles without empirical validation. */
  THEORETICAL = 'theoretical'
};

/**
 * Structural classification for a variant of a substance; see allotropes.
 */
export enum FormType {
  /** Elemental variants in the same physical state (e.g., Diamond vs Graphite). */
  ALLOTROPE = 'allotrope',
  /** Based on the connectivity or arrangement of atoms in a molecule. */
  MOLECULAR = 'molecular',
  /** Corresponding to a specific state of matter (Solid, Liquid, Gas). */
  PHASE = 'phase',
  /** Solid crystalline forms of the same compound (e.g., Quartz vs Cristobalite). */
  POLYMORPH = 'polymorph',
  /** Non-crystalline solid lacking long-range atomic order. */
  AMORPHOUS = 'amorphous',
  /** Categorized into a non-standard or miscellaneous structural type. */
  OTHER = 'other'
};

/**
 * Systems of units used to represent physical quantities.
 */
export enum MetricSystem {
  /** The International System of Units (SI) or its variants. */
  METRIC = 'metric',
  /** Historical system used primarily in the UK. */
  IMPERIAL = 'imperial',
  /** Customary system used in the United States. */
  US = 'us',
  /** Non-standard or application-specific unit set. */
  CUSTOM = 'custom',
  /** System of measurement is not specified or recognized. */
  UNKNOWN = 'unknown'
};

/**
 * Standard conditions for temperature and pressure in scientific measurements.
 */
export enum StandardCondition {
  /** T=0°C (273.15K); P=100kPa (1 bar). IUPAC standard since 1982. */
  STP = 'STP',
  /** T=0°C; P=101.325kPa (1 atm). Older NIST and ISO standard. */
  STP_ATM = 'STP_ATM',
  /** T=20°C; P=101.325kPa. EPA and NIST standard conditions. */
  NTP = 'NTP',
  /** T=15°C; P=101.325kPa. International Standard Atmosphere. */
  ISA = 'ISA',
  /** T=22°C; P=101.325kPa. Medical physics standard (AAPM). */
  AAPM = 'AAPM',
  /** T=25°C; P=101.325kPa. Standard Ambient Temperature and Pressure. */
  SATP = 'SATP',
  /** T=20°C; P=100kPa. Compressed Air and Gas Institute standard. */
  CAGI = 'CAGI',
  /** T=15°C; P=100kPa. Society of Petroleum Engineers standard. */
  SPE = 'SPE',
  /** T=20°C; P=101.3kPa. ISO internal combustion engine standard. */
  ISO_5011 = 'ISO_5011',
  /** T=20°C; P=101.33kPa. Former Soviet Union GOST standard. */
  GOST_2939_63 = 'GOST_2939_63',
  /** T=15.56°C (60°F); P=101.6kPa. Energy-related industrial standard. */
  EGIA = 'EGIA',
  /** T=15.56°C; P=101.35kPa. U.S. Department of Transportation standard. */
  SCF = 'SCF',
  /** T=21.11°C (70°F); P=101.3kPa. Air Movement and Control Association. */
  AMCA = 'AMCA',
  /** T=15°C; P=101.3kPa. Federal Aviation Administration standard. */
  FAA = 'FAA',
  /** T=15°C; P=101.325kPa. Standard reference for natural gas (ISO). */
  ISO_13443 = 'ISO_13443',
  /** T=0°C; P=101.325kPa. Industrial standard from DIN 1343. */
  DIN_1343 = 'DIN_1343'
};

/**
 * Types of statistical or measurement errors associated with data points.
 */
export enum UncertaintyType {
  /** Expressed in the same units as the measurement itself. */
  ABSOLUTE = 'absolute',
  /** Expressed as a ratio or percentage of the measured value. */
  RELATIVE = 'relative',
  /** Upper and lower bounds are not equidistant from the mean value. */
  ASYMMETRICAL = 'asymmetrical'
};

/**
 * Classification of bibliographic references and data sources based on BibTeX.
 */
export enum ReferenceType {
  /** Peer-reviewed paper in a scientific journal. */
  ARTICLE = 'article',
  /** Complete published work on a specific subject. */
  BOOK = 'book',
  /** Small, unbound publication or pamphlet. */
  BOOKLET = 'booklet',
  /** Paper presented at a professional meeting or symposium. */
  CONFERENCE = 'conference',
  /** Specific section or chapter within a book. */
  INBOOK = 'inbook',
  /** Article within a collection edited by others. */
  INCOLLECTION = 'incollection',
  /** Full transcript or record of a conference. */
  INPROCEEDINGS = 'inproceedings',
  /** Technical documentation or user guide. */
  MANUAL = 'manual',
  /** Academic work for a Master's degree. */
  MASTERSTHESIS = 'mastersthesis',
  /** General classification for academic dissertations. */
  THESIS = 'thesis',
  /** Fallback for sources that do not fit standard categories. */
  MISC = 'misc',
  /** Academic work for a Doctor of Philosophy degree. */
  PHDTHESIS = 'phdthesis',
  /** Published minutes or records of a scientific meeting. */
  PROCEEDINGS = 'proceedings',
  /** Formal report on research or technical developments. */
  TECHREPORT = 'techreport',
  /** Document that has not yet been formally published. */
  UNPUBLISHED = 'unpublished'
};

/**
 * Standard digital image encodings supported for visual assets.
 */
export enum ImageFormat {
  /** Compressed photographic format with lossy encoding. */
  JPG = 'jpg',
  /** Lossless raster format with transparency support. */
  PNG = 'png',
  /** Vector format based on XML for resolution-independent graphics. */
  SVG = 'svg',
  /** Modern high-performance container for lossy and lossless images. */
  WEBP = 'webp'
};

/**
 * Chemical and spatial file formats for 3D molecular structures.
 */
export enum D3Format {
  /** Protein Data Bank format for three-dimensional structures. */
  PDB = 'pdb',
  /** MDL Molfile format for chemical bonding and structure. */
  MOL = 'mol',
  /** Structure-Data File for handling chemical data sets. */
  SDF = 'sdf',
  /** Simple Cartesian coordinates for atomic positions. */
  XYZ = 'xyz',
  /** Crystallographic Information File for crystal structures. */
  CIF = 'cif'
};

/**
 * Two-letter ISO 639-1 language identifiers for scientific nomenclature.
 */
export enum LangCode {
  ARABIC = 'ar', BENGALI = 'bn', BULGARIAN = 'bg', CHINESE = 'zh', CROATIAN = 'hr', CZECH = 'cs',
  DANISH = 'da', DUTCH = 'nl', ENGLISH = 'en', ESTONIAN = 'et', FINNISH = 'fi', FRENCH = 'fr',
  GERMAN = 'de', GREEK = 'el', HEBREW = 'he', HINDI = 'hi', HUNGARIAN = 'hu', INDONESIAN = 'id',
  IRISH = 'ga', ITALIAN = 'it', JAPANESE = 'ja', KOREAN = 'ko', LATIN = 'la', LATVIAN = 'lv',
  LITHUANIAN = 'lt', MALAY = 'ms', NORWEGIAN = 'no', PERSIAN = 'fa', POLISH = 'pl', PORTUGUESE = 'pt',
  ROMANIAN = 'ro', RUSSIAN = 'ru', SLOVAK = 'sk', SLOVENIAN = 'sl', SPANISH = 'es', SWEDISH = 'sv',
  THAI = 'th', TURKISH = 'tr', UKRAINIAN = 'uk', VIETNAMESE = 'vi'
};
