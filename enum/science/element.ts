/**
 * @file enum/science/element.ts
 * @description Defines enums related to chemical elements and their periodic classification.
 * This module covers elemental symbols, periodic table structure, blocks, chemical sets,
 * and specific elemental properties.
 */

/**
 * Unique chemical symbols for all known elements in the periodic table.
 * These symbols follow IUPAC nomenclature and represent elements from Hydrogen to Oganesson.
 */
export enum ElementSymbol {
  /** Hydrogen */
  H = 'h',
  /** Helium */
  He = 'he',
  /** Lithium */
  Li = 'li',
  /** Beryllium */
  Be = 'be',
  /** Boron */
  B = 'b',
  /** Carbon */
  C = 'c',
  /** Nitrogen */
  N = 'n',
  /** Oxygen */
  O = 'o',
  /** Fluorine */
  F = 'f',
  /** Neon */
  Ne = 'ne',
  /** Sodium */
  Na = 'na',
  /** Magnesium */
  Mg = 'mg',
  /** Aluminium */
  Al = 'al',
  /** Silicon */
  Si = 'si',
  /** Phosphorus */
  P = 'p',
  /** Sulfur */
  S = 's',
  /** Chlorine */
  Cl = 'cl',
  /** Argon */
  Ar = 'ar',
  /** Potassium */
  K = 'k',
  /** Calcium */
  Ca = 'ca',
  /** Scandium */
  Sc = 'sc',
  /** Titanium */
  Ti = 'ti',
  /** Vanadium */
  V = 'v',
  /** Chromium */
  Cr = 'cr',
  /** Manganese */
  Mn = 'mn',
  /** Iron */
  Fe = 'fe',
  /** Cobalt */
  Co = 'co',
  /** Nickel */
  Ni = 'ni',
  /** Copper */
  Cu = 'cu',
  /** Zinc */
  Zn = 'zn',
  /** Gallium */
  Ga = 'ga',
  /** Germanium */
  Ge = 'ge',
  /** Arsenic */
  As = 'as',
  /** Selenium */
  Se = 'se',
  /** Bromine */
  Br = 'br',
  /** Krypton */
  Kr = 'kr',
  /** Rubidium */
  Rb = 'rb',
  /** Strontium */
  Sr = 'sr',
  /** Yttrium */
  Y = 'y',
  /** Zirconium */
  Zr = 'zr',
  /** Niobium */
  Nb = 'nb',
  /** Molybdenum */
  Mo = 'mo',
  /** Technetium */
  Tc = 'tc',
  /** Ruthenium */
  Ru = 'ru',
  /** Rhodium */
  Rh = 'rh',
  /** Palladium */
  Pd = 'pd',
  /** Silver */
  Ag = 'ag',
  /** Cadmium */
  Cd = 'cd',
  /** Indium */
  In = 'in',
  /** Tin */
  Sn = 'sn',
  /** Antimony */
  Sb = 'sb',
  /** Tellurium */
  Te = 'te',
  /** Iodine */
  I = 'i',
  /** Xenon */
  Xe = 'xe',
  /** Caesium */
  Cs = 'cs',
  /** Barium */
  Ba = 'ba',
  /** Lanthanum */
  La = 'la',
  /** Cerium */
  Ce = 'ce',
  /** Praseodymium */
  Pr = 'pr',
  /** Neodymium */
  Nd = 'nd',
  /** Promethium */
  Pm = 'pm',
  /** Samarium */
  Sm = 'sm',
  /** Europium */
  Eu = 'eu',
  /** Gadolinium */
  Gd = 'gd',
  /** Terbium */
  Tb = 'tb',
  /** Dysprosium */
  Dy = 'dy',
  /** Holmium */
  Ho = 'ho',
  /** Erbium */
  Er = 'er',
  /** Thulium */
  Tm = 'tm',
  /** Ytterbium */
  Yb = 'yb',
  /** Lutetium */
  Lu = 'lu',
  /** Hafnium */
  Hf = 'hf',
  /** Tantalum */
  Ta = 'ta',
  /** Tungsten */
  W = 'w',
  /** Rhenium */
  Re = 're',
  /** Osmium */
  Os = 'os',
  /** Iridium */
  Ir = 'ir',
  /** Platinum */
  Pt = 'pt',
  /** Gold */
  Au = 'au',
  /** Mercury */
  Hg = 'hg',
  /** Thallium */
  Tl = 'tl',
  /** Lead */
  Pb = 'pb',
  /** Bismuth */
  Bi = 'bi',
  /** Polonium */
  Po = 'po',
  /** Astatine */
  At = 'at',
  /** Radon */
  Rn = 'rn',
  /** Francium */
  Fr = 'fr',
  /** Radium */
  Ra = 'ra',
  /** Actinium */
  Ac = 'ac',
  /** Thorium */
  Th = 'th',
  /** Protactinium */
  Pa = 'pa',
  /** Uranium */
  U = 'u',
  /** Neptunium */
  Np = 'np',
  /** Plutonium */
  Pu = 'pu',
  /** Americium */
  Am = 'am',
  /** Curium */
  Cm = 'cm',
  /** Berkelium */
  Bk = 'bk',
  /** Californium */
  Cf = 'cf',
  /** Einsteinium */
  Es = 'es',
  /** Fermium */
  Fm = 'fm',
  /** Mendelevium */
  Md = 'md',
  /** Nobelium */
  No = 'no',
  /** Lawrencium */
  Lr = 'lr',
  /** Rutherfordium */
  Rf = 'rf',
  /** Dubnium */
  Db = 'db',
  /** Seaborgium */
  Sg = 'sg',
  /** Bohrium */
  Bh = 'bh',
  /** Hassium */
  Hs = 'hs',
  /** Meitnerium */
  Mt = 'mt',
  /** Darmstadtium */
  Ds = 'ds',
  /** Roentgenium */
  Rg = 'rg',
  /** Copernicium */
  Cn = 'cn',
  /** Nihonium */
  Nh = 'nh',
  /** Flerovium */
  Fl = 'fl',
  /** Moscovium */
  Mc = 'mc',
  /** Livermorium */
  Lv = 'lv',
  /** Tennessine */
  Ts = 'ts',
  /** Oganesson */
  Og = 'og'
};

/**
 * Classifies elements into groups with similar physical and chemical characteristics.
 */
export enum ElementSet {
  /** Elements lacking metallic properties, typically highly electronegative. */
  NON_METAL = 'nonMetal',
  /** Chemically inert, monoatomic gases at standard conditions with full valence shells. */
  NOBLE_GAS = 'nobleGas',
  /** Highly reactive metals in group 1 that readily lose one electron to form cations. */
  ALKALI_METAL = 'alkaliMetal',
  /** Shiny, silvery-white, somewhat reactive metals in group 2. */
  ALKALINE_EARTH_METAL = 'alkalineEarthMetal',
  /** Elements with properties intermediate between those of metals and solid nonmetals. */
  METALLOID = 'metalloid',
  /** Group 17 elements that form strongly acidic compounds with hydrogen and salts with metals. */
  HALOGEN = 'halogen',
  /** General classification for elements that are good conductors of heat and electricity. */
  METAL = 'metal',
  /** Elements whose atoms have a partially filled d sub-shell, characterized by multiple oxidation states. */
  TRANSITION_METAL = 'transitionMetal',
  /** Fifteen metallic elements with atomic numbers 57 through 71, characterized by filling the 4f subshell. */
  LANTHANOIDE = 'lanthanoid',
  /** Fifteen metallic elements with atomic numbers 89 through 103, all being radioactive. */
  ACTINOIDE = 'actinoide'
};

/**
 * Standard group names for the vertical columns in the periodic table.
 */
export enum ElementGroup {
  /** Elements in the first vertical column, excluding hydrogen. */
  ALKALI_METAL = 'alkaliMetal',
  /** Elements in the second vertical column. */
  ALKALINE_EARTH_METAL = 'alkalineEarthMetal',
  /** Elements in the third vertical column. */
  SCANDIUM_GROUP = 'scandiumGroup',
  /** Elements in the fourth vertical column. */
  TITANIUM_GROUP = 'titaniumGroup',
  /** Elements in the fifth vertical column. */
  VANADIUM_GROUP = 'vanadiumGroup',
  /** Elements in the sixth vertical column. */
  CHROMIUM_GROUP = 'chromiumGroup',
  /** Elements in the seventh vertical column. */
  MANGANESE_GROUP = 'manganeseGroup',
  /** Elements in the eighth vertical column. */
  IRON_GROUP = 'ironGroup',
  /** Elements in the ninth vertical column. */
  COBALT_GROUP = 'cobaltGroup',
  /** Elements in the tenth vertical column. */
  NICKEL_GROUP = 'nickelGroup',
  /** Elements in the eleventh vertical column. */
  COPPER_GROUP = 'copperGroup',
  /** Elements in the twelfth vertical column. */
  ZINC_GROUP = 'zincGroup',
  /** Elements in column 13, also known as the icosagens. */
  BORON_GROUP = 'boronGroup',
  /** Elements in column 14, also known as the crystallogens. */
  CARBON_GROUP = 'carbonGroup',
  /** Elements in column 15, known for forming stable nitrides and phosphides. */
  PNICTOGEN = 'pnictogen',
  /** Elements in column 16, known as the ore-forming elements. */
  CHALCOGEN = 'chalcogen',
  /** Elements in column 17, highly reactive nonmetals. */
  HALOGEN = 'halogen',
  /** Elements in column 18, characterized by minimal chemical reactivity. */
  NOBLE_GAS = 'nobleGas',
  /** The series of elements from lanthanum to lutetium. */
  LANTHANOID_SERIES = 'lanthanoidSeries',
  /** The series of elements from actinium to lawrencium. */
  ACTINOID_SERIES = 'actinoidSeries'
};

/**
 * Qualitative properties and descriptors associated with chemical elements.
 */
export enum ElementProperty {
  /** Known and used by ancient civilizations before the modern era. */
  ANTIQUITY = 'antiquity',
  /** Elements occurring in nature as a single stable isotope. */
  MONONUCLEIDE = 'mononuclide',
  /** Elements that are resistant to corrosion and oxidation in moist air. */
  NOBLE = 'noble',
  /** Metals that occur in their native elemental form in nature. */
  NATIVE_METAL = 'nativeMetal',
  /** The lanthanide elements plus scandium and yttrium, known for their magnetic and optical properties. */
  RARE_EARTH = 'rareEarth',
  /** Six transition metal elements (Ru, Rh, Pd, Os, Ir, Pt) known for their catalytic activity and corrosion resistance. */
  PLATINUM_METAL = 'platinumMetal',
  /** Metals with extremely high melting points and resistance to thermal deformation. */
  REFRACTORY_METAL = 'refractoryMetal',
  /** Precious metals are rare, naturally occurring metallic chemical elements that have high economic value. */
  PRECIOUS_METAL = 'preciousMetal',
  /** Metals that are used to make coins. */
  COINAGE_METALS = 'coinageMetals',
  /** Metals with low density and atomic weight. */
  LIGHT_METAL = 'lightMetal',
  /** Metals with high density, atomic weight, or atomic number, often toxic to life forms. */
  HEAVY_METAL = 'heavyMetal',
  /** Metals with high atomic number and mass, often radioactive. */
  SUPERHEAVY_METAL = 'superheavyMetal',
  /** Elements that exist as diatomic molecules. */
  DIATOMIC = 'diatomic',
  /** Elements that can exist in multiple crystalline forms. */
  ALLOTROPIC = 'allotropic'
};

/**
 * Electron shell models used to describe electron configurations.
 */
export enum ShellModel {
  /** First electron shell (n=1). */
  K = 'k',
  /** Second electron shell (n=2). */
  L = 'l',
  /** Third electron shell (n=3). */
  M = 'm',
  /** Fourth electron shell (n=4). */
  N = 'n',
  /** Fifth electron shell (n=5). */
  O = 'o',
  /** Sixth electron shell (n=6). */
  P = 'p',
  /** Seventh electron shell (n=7). */
  Q = 'q'
};

/**
 * Electron subshells used to describe electron configurations.
 */
export enum Subshell {
  /** s orbital, which can hold up to 2 electrons. */
  S = 's',
  /** p orbital, which can hold up to 6 electrons. */
  P = 'p',
  /** d orbital, which can hold up to 10 electrons. */
  D = 'd',
  /** f orbital, which can hold up to 14 electrons. */
  F = 'f'
};

/**
 * Pauling spin states used in electron configurations.
 */
export enum PaulingSpin {
  /** Electron spin pointing up. */
  UP = 'up',
  /** Electron spin pointing down. */
  DOWN = 'down',
  /** Electron spin pointing in both directions. */
  BOTH = 'both'
};

/**
 * The 18 vertical columns of the periodic table representing groups of elements.
 */
export enum PeriodicTableColumn {
  /** Group 1: Alkali metals and Hydrogen. */
  COLUMN_1 = 1,
  /** Group 2: Alkaline earth metals. */
  COLUMN_2 = 2,
  /** Group 3: Scandium group. */
  COLUMN_3 = 3,
  /** Group 4: Titanium group. */
  COLUMN_4 = 4,
  /** Group 5: Vanadium group. */
  COLUMN_5 = 5,
  /** Group 6: Chromium group. */
  COLUMN_6 = 6,
  /** Group 7: Manganese group. */
  COLUMN_7 = 7,
  /** Group 8: Iron group. */
  COLUMN_8 = 8,
  /** Group 9: Cobalt group. */
  COLUMN_9 = 9,
  /** Group 10: Nickel group. */
  COLUMN_10 = 10,
  /** Group 11: Copper group. */
  COLUMN_11 = 11,
  /** Group 12: Zinc group. */
  COLUMN_12 = 12,
  /** Group 13: Boron group. */
  COLUMN_13 = 13,
  /** Group 14: Carbon group. */
  COLUMN_14 = 14,
  /** Group 15: Pnictogens. */
  COLUMN_15 = 15,
  /** Group 16: Chalcogens. */
  COLUMN_16 = 16,
  /** Group 17: Halogens. */
  COLUMN_17 = 17,
  /** Group 18: Noble gases. */
  COLUMN_18 = 18
};

/**
 * The 7 horizontal rows of the periodic table representing electron shells.
 */
export enum PeriodicTablePeriod {
  /** First period: contains Hydrogen and Helium. */
  PERIOD_1 = 1,
  /** Second period: Li through Ne. */
  PERIOD_2 = 2,
  /** Third period: Na through Ar. */
  PERIOD_3 = 3,
  /** Fourth period: K through Kr. */
  PERIOD_4 = 4,
  /** Fifth period: Rb through Xe. */
  PERIOD_5 = 5,
  /** Sixth period: Cs through Rn (including Lanthanoides). */
  PERIOD_6 = 6,
  /** Seventh period: Fr through Og (including Actinoides). */
  PERIOD_7 = 7
};
