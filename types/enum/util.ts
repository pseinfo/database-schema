export enum ValueType {
  PRIMITIVE = 'primitive',
  STRUCT = 'struct',
  SINGLE = 'single',
  ARRAY = 'array',
  RANGE = 'range',
  COUPLED = 'coupled'
};

export enum ValueConfidence {
  MEASURED = 'measured',
  CALCULATED = 'calculated',
  ESTIMATED = 'estimated',
  EXPERIMENTAL = 'experimental',
  THEORETICAL = 'theoretical'
};

export enum FormType {
  ALLOTROPE = 'allotrope',
  MOLECULAR = 'molecular',
  PHASE = 'phase',
  POLYMORPH = 'polymorph',
  AMORPHOUS = 'amorphous',
  OTHER = 'other'
};

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

export enum PhysicalQuantity {
  TIME = 'time',
  LENGTH = 'length',
  MASS = 'mass',
  ELECTRIC_CURRENT = 'electricCurrent',
  TEMPERATURE = 'temperature',
  AMOUNT_OF_SUBSTANCE = 'amountOfSubstance',
  LUMINOUS_INTENSITY = 'luminousIntensity',
  VELOCITY = 'velocity',
  ACCELERATION = 'acceleration',
  FORCE = 'force',
  SURFACE_TENSION = 'surfaceTension',
  PRESSURE = 'pressure',
  ENERGY = 'energy',
  POWER = 'power',
  DENSITY = 'density',
  ABSORPTION_COEFFICIENT = 'absorptionCoefficient',
  ATTENUATION_COEFFICIENT = 'attenuationCoefficient',
  COMPRESSIBILITY = 'compressibility',
  ENTHALPY = 'enthalpy',
  ENTROPY = 'entropy',
  HEAT_CAPACITY = 'heatCapacity',
  SPECIFIC_HEAT_CAPACITY = 'specificHeatCapacity',
  TEMP_COEFFICIENT = 'tempCoefficient',
  THERMAL_CONDUCTIVITY = 'thermalConductivity',
  THERMAL_EXPANSION = 'thermalExpansion',
  THERMAL_DIFFUSIVITY = 'thermalDiffusivity',
  ELECTRIC_CHARGE = 'electricCharge',
  ELECTRIC_POTENTIAL = 'electricPotential',
  ELECTRIC_RESISTANCE = 'electricResistance',
  ELECTRIC_CONDUCTANCE = 'electricConductance',
  ELECTRIC_CONDUCTIVITY = 'electricConductivity',
  ELECTRIC_RESISTIVITY = 'electricResistivity',
  DIPOLE_MOMENT = 'dipoleMoment',
  MAGNETIC_FLUX = 'magneticFlux',
  MAGNETIC_FLUX_DENSITY = 'magneticFluxDensity',
  MAGNETIC_SUSCEPTIBILITY = 'magneticSusceptibility',
  MAGNETIC_MOMENT = 'magneticMoment',
  MAGNETIC_FIELD_STRENGTH = 'magneticFieldStrength',
  MAGNETIC_PERMEABILITY = 'magneticPermeability',
  MOLAR_MAGNETIC_SUSCEPTIBILITY = 'molarMagneticSusceptibility',
  MASS_MAGNETIC_SUSCEPTIBILITY = 'massMagneticSusceptibility',
  LUMINOUS_FLUX = 'luminousFlux',
  ILLUMINANCE = 'illuminance',
  SOUND_SPEED = 'soundSpeed',
  ACOUSTIC_IMPEDANCE = 'acousticImpedance',
  MOLAR_MASS = 'molarMass',
  MOLAR_VOLUME = 'molarVolume',
  CONCENTRATION = 'concentration',
  MOLARITY = 'molarity',
  MOLALITY = 'molality',
  MOLE_FRACTION = 'moleFraction',
  MOLAR_HEAT_CAPACITY = 'molarHeatCapacity',
  DYNAMIC_VISCOSITY = 'dynamicViscosity',
  KINEMATIC_VISCOSITY = 'kinematicViscosity',
  ACTIVITY = 'activity',
  ABSORBED_DOSE = 'absorbedDose',
  GYROMAGNETIC_RATIO = 'gyromagneticRatio',
  FREQUENCY = 'frequency',
  ANGLE = 'angle',
  MASS_FRACTION = 'massFraction',
  AREA = 'area',
  QUANTITY = 'quantity',
  CURRENCY = 'currency'
};

export enum StandardCondition {
  /** T=0;     P=100;       IUPAC (STP) since 1982 */
  STP = 'STP',
  /** T=0;     P=101.325;   NIST, ISO 10780, former IUPAC STP */
  STP_ATM = 'STP_ATM',
  /** T=20;    P=101.325;   EPA, NIST */
  NTP = 'NTP',
  /** T=15;    P=101.325;   ICAO ISA, ISO 13443, EEA, EGIA (SI) */
  ISA = 'ISA',
  /** T=22;    P=101.325;   American Association of Physicists in Medicine */
  AAPM = 'AAPM',
  /** T=25;    P=101.325;   SATP, EPA */
  SATP = 'SATP',
  /** T=20;    P=100;       CAGI */
  CAGI = 'CAGI',
  /** T=15;    P=100;       SPE */
  SPE = 'SPE',
  /** T=20;    P=101.3;     ISO 5011 */
  ISO_5011 = 'ISO_5011',
  /** T=20;    P=101.33;    GOST 2939-63 */
  GOST_2939_63 = 'GOST_2939_63',
  /** T=15.56; P=101.6;     EGIA (Imperial System) */
  EGIA = 'EGIA',
  /** T=15.56; P=101.35;    U.S. DOT (SCF) */
  SCF = 'SCF',
  /** T=21.11; P=101.3;     AMCA */
  AMCA = 'AMCA',
  /** T=15;    P=101.3;     FAA */
  FAA = 'FAA',
  /** T=15;    P=101.325;   ISO 2533, ISO 13443, ISO 7504 */
  ISO_13443 = 'ISO_13443',
  /** T=0;     P=101.325;   DIN 1343:1990 */
  DIN_1343 = 'DIN_1343'
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

export enum ImageFormat {
  JPG = 'jpg',
  PNG = 'png',
  SVG = 'svg',
  WEBP = 'webp'
};

export enum D3Format {
  PDB = 'pdb',
  MOL = 'mol',
  SDF = 'sdf',
  XYZ = 'xyz',
  CIF = 'cif'
};
