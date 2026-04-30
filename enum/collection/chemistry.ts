export enum AcidBaseCharacter {
  NEUTRAL = 'neutral',
  STRONG_ACIDIC = 'strongAcidic',
  ACIDIC = 'acidic',
  MODERATE_ACIDIC = 'moderateAcidic',
  WEAK_ACIDIC = 'weakAcidic',
  AMPHOTERIC = 'amphoteric',
  WEAK_BASIC = 'weakBasic',
  MODERATE_BASIC = 'moderateBasic',
  BASIC = 'basic',
  STRONG_BASIC = 'strongBasic'
};

export enum BasicityType {
  ACID = 'acid',
  BASE = 'base'
};

export enum HSAB {
  HARD = 'hard',
  EDGE = 'edge',
  SOFT = 'soft'
};

export enum Goldschmidt {
  ATMOPHILE = 'atmophile',
  CHALCOPHILE = 'chalcophile',
  LITHOPHILE = 'lithophile',
  SIDEROPHILE = 'siderophile',
  SYNTHETIC = 'synthetic'
};

export enum LewisModel {
  STRONG = 'strong',
  MODERATE = 'moderate',
  WEAK = 'weak',
  NONE = 'none'
};

export enum BronstedCharacter {
  ACID = 'acid',
  BASE = 'base',
  AMPHOTERIC = 'amphoteric',
  NEUTRAL = 'neutral'
};

export enum OxideCharacter {
  ACIDIC = 'acidic',
  AMPHOTERIC = 'amphoteric',
  BASIC = 'basic'
};

export enum SolubilityQualifier {
  VERY_SOLUBLE = 'verySoluble',
  FREELY_SOLUBLE = 'freelySoluble',
  SOLUBLE = 'soluble',
  SPARINGLY_SOLUBLE = 'sparinglySoluble',
  SLIGHTLY_SOLUBLE = 'slightlySoluble',
  VERY_SLIGHTLY_SOLUBLE = 'verySlightlySoluble',
  PRACTICALLY_INSOLUBLE = 'practicallyInsoluble'
};

export enum MolecularShape {
  LINEAR = 'linear',
  TRIGONAL_PLANAR = 'trigonalPlanar',
  BENT = 'bent',
  TETRAHEDRAL = 'tetrahedral',
  TRIGONAL_PYRAMIDAL = 'trigonalPyramidal',
  TRIGONAL_BIPYRAMIDAL = 'trigonalBipyramidal',
  SEESAW = 'seesaw',
  T_SHAPED = 'tShaped',
  OCTAHEDRAL = 'octahedral',
  SQUARE_PYRAMIDAL = 'squarePyramidal',
  SQUARE_PLANAR = 'squarePlanar',
  PENTAGONAL_BIPYRAMIDAL = 'pentagonalBipyramidal',
  PENTAGONAL_PYRAMIDAL = 'pentagonalPyramidal',
  PENTAGONAL_PLANAR = 'pentagonalPlanar',
  SQUARE_ANTIPRISMATIC = 'squareAntiprismatic',
  TRICAPPED_TRIGONAL_PRISMATIC = 'tricappedTrigonalPrismatic'
};

export enum BondType {
  IONIC = 'ionic',
  COVALENT = 'covalent',
  METALLIC = 'metallic',
  VDW = 'vdw',
  HYDROGEN = 'hydrogen'
};

export enum Hybridization {
  SD2 = 'sd2',
  SD3 = 'sd3',
  SD4 = 'sd4',
  SD5 = 'sd5',
  SP = 'sp',
  SP2 = 'sp2',
  SP3 = 'sp3',
  SP2D = 'sp2d',
  SP3D = 'sp3d',
  SP3D2 = 'sp3d2',
  SP3D3 = 'sp3d3',
  SP3D4 = 'sp3d4',
  SP3D5 = 'sp3d5'
};

export enum CrystalFamily {
  TRICLINIC = 'triclinic',
  MONOCLINIC = 'monoclinic',
  ORTHORHOMBIC = 'orthorhombic',
  TRIGONAL = 'trigonal',
  HEXAGONAL = 'hexagonal',
  TETRAGONAL = 'tetragonal',
  CUBIC = 'cubic'
};

export enum CrystalSystem {
  HEXAGONAL = 'hexagonal',
  HEXAGONAL_CLOSE_PACKED = 'hexagonalClosePacked',
  BODY_CENTERED_CUBIC = 'bodyCenteredCubic',
  RHOMBOHEDRAL = 'rhombohedral',
  SIMPLE_CUBIC = 'simpleCubic',
  FACE_CENTERED_CUBIC = 'faceCenteredCubic',
  DIAMOND_CUBIC = 'diamondCubic',
  ORTHORHOMBIC = 'orthorhombic',
  TETRAGONAL = 'tetragonal',
  DOUBLE_HEXAGONAL_CLOSE_PACKED = 'doubleHexagonalClosePacked',
  MONOCLINIC = 'monoclinic',
  TRICLINIC = 'triclinic'
};

export enum CrystalHabit {
  ACICULAR = 'acicular',
  ARBORESCENT = 'arborescent',
  CAPILLARY = 'capillary',
  COLLOFORM = 'colloform',
  CONCENTRIC = 'concentric',
  DENDRITIC = 'dendritic',
  DRUSE = 'druse',
  FIBROUS = 'fibrous',
  FOLIATED = 'foliated',
  GRANULAR = 'granular',
  HOPPER = 'hopper',
  OOLITHIC = 'oolithic',
  PISOLITIC = 'pisolitic',
  PLATY = 'platy',
  PLUMOSE = 'plumose',
  RADIAL = 'radial',
  RETICULATED = 'reticulated',
  ROSETTE = 'rosette',
  STALACTITIC = 'stalactitic',
  STELLATE = 'stellate',
  AMYGDALOIDAL = 'amygdaloidal',
  HEMIMORPHIC = 'hemimorphic',
  MASSIVE = 'massive',
  SCEPTERED = 'sceptered',
  CUBIC = 'cubic',
  DODECAHEDRAL = 'dodecahedral',
  ENANTIOMORPHIC = 'enantiomorphic',
  HEXAGONAL = 'hexagonal',
  ICOSITETRAHEDRAL = 'icositetrahedral',
  OCTAHEDRAL = 'octahedral',
  PRISMATIC = 'prismatic',
  RHOMBOHEDRAL = 'rhombohedral',
  SCALENOEHEDRAL = 'scalenohedral',
  TETRAHEDRAL = 'tetrahedral',
  BOTRYOIDAL = 'botryoidal',
  GLOBULAR = 'globular',
  MAMMILLARY = 'mammillary',
  RENIFORM = 'reniform'
};

export enum CleavageType {
  BASAL = 'basal',
  PRISMATIC = 'prismatic',
  CUBIC = 'cubic',
  RHOMBOHEDRAL = 'rhombohedral',
  OCTAHEDRAL = 'octahedral',
  DODECAHEDRAL = 'dodecahedral'
};

export enum TwinningType {
  CONTACT = 'contact',
  PENETRATION = 'penetration',
  POLYSYNTHETIC = 'polysynthetic',
  CYCLIC = 'cyclic'
};

export enum TwinningMode {
  GROWTH = 'growth',
  TRANSFORMATION = 'transformation',
  DEFORMATION = 'deformation'
};

export enum CleavageQuality {
  PERFECT = 'perfect',
  GOOD = 'good',
  IMPERFECT = 'imperfect',
  INDISTINCT = 'indistinct',
  NONE = 'none'
};

export enum FractureType {
  CONCHOIDAL = 'conchoidal',
  UNEVEN = 'uneven',
  SMOOTH = 'smooth',
  FIBROUS = 'fibrous',
  HACKLY = 'hackly',
  SPLINTERY = 'splintery',
  EARTHY = 'earthy'
};

export enum Tenacity {
  BRITTLE = 'brittle',
  MALLEABLE = 'malleable',
  DUCTILE = 'ductile',
  SECTILE = 'sectile',
  ELASTIC = 'elastic',
  PLASTIC = 'plastic'
};
