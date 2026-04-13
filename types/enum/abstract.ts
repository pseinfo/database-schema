export enum MetricSystem {
  METRIC = 'metric',
  IMPERIAL = 'imperial',
  US = 'us',
  CUSTOM = 'custom',
  UNKNOWN = 'unknown'
};

export enum SIDimension {
  TIME = 'time',
  LENGTH = 'length',
  MASS = 'mass',
  ELECTRIC_CURRENT = 'electricCurrent',
  TEMPERATURE = 'temperature',
  AMOUNT_OF_SUBSTANCE = 'amountOfSubstance',
  LUMINOUS_INTENSITY = 'luminousIntensity'
};

export enum UncertaintyType {
  ABSOLUTE = 'absolute',
  RELATIVE = 'relative',
  ASYMMETRICAL = 'asymmetrical'
};

export enum ReferenceType {
    ARTICLE = 'article',
    BOOK = 'book',
    BOOKLET = 'booklet',
    CONFERENCE = 'conference',
    INBOOK = 'inbook',
    INCOLLECTION = 'incollection',
    INPROCEEDINGS = 'inproceedings',
    MANUAL = 'manual',
    MASTERSTHESIS = 'mastersthesis',
    THESIS = 'thesis',
    MISC = 'misc',
    PHDTHESIS = 'phdthesis',
    PROCEEDINGS = 'proceedings',
    TECHREPORT = 'techreport',
    UNPUBLISHED = 'unpublished'
};
