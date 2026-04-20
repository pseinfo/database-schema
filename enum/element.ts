/**
 * @file element.ts
 * @description Defines enums related to chemical elements and their periodic classification.
 * This module covers elemental symbols, periodic table structure, blocks, chemical sets,
 * and specific elemental properties.
 */

/**
 * Unique chemical symbols for all known elements in the periodic table.
 * These symbols follow IUPAC nomenclature and represent elements from Hydrogen to Oganesson.
 */
export enum ElementSymbol {
  /** Hydrogen */ H = 'h',
  /** Helium */ He = 'he',
  /** Lithium */ Li = 'li',
  /** Beryllium */ Be = 'be',
  /** Boron */ B = 'b',
  /** Carbon */ C = 'c',
  /** Nitrogen */ N = 'n',
  /** Oxygen */ O = 'o',
  /** Fluorine */ F = 'f',
  /** Neon */ Ne = 'ne',
  /** Sodium */ Na = 'na',
  /** Magnesium */ Mg = 'mg',
  /** Aluminium */ Al = 'al',
  /** Silicon */ Si = 'si',
  /** Phosphorus */ P = 'p',
  /** Sulfur */ S = 's',
  /** Chlorine */ Cl = 'cl',
  /** Argon */ Ar = 'ar',
  /** Potassium */ K = 'k',
  /** Calcium */ Ca = 'ca',
  /** Scandium */ Sc = 'sc',
  /** Titanium */ Ti = 'ti',
  /** Vanadium */ V = 'v',
  /** Chromium */ Cr = 'cr',
  /** Manganese */ Mn = 'mn',
  /** Iron */ Fe = 'fe',
  /** Cobalt */ Co = 'co',
  /** Nickel */ Ni = 'ni',
  /** Copper */ Cu = 'cu',
  /** Zinc */ Zn = 'zn',
  /** Gallium */ Ga = 'ga',
  /** Germanium */ Ge = 'ge',
  /** Arsenic */ As = 'as',
  /** Selenium */ Se = 'se',
  /** Bromine */ Br = 'br',
  /** Krypton */ Kr = 'kr',
  /** Rubidium */ Rb = 'rb',
  /** Strontium */ Sr = 'sr',
  /** Yttrium */ Y = 'y',
  /** Zirconium */ Zr = 'zr',
  /** Niobium */ Nb = 'nb',
  /** Molybdenum */ Mo = 'mo',
  /** Technetium */ Tc = 'tc',
  /** Ruthenium */ Ru = 'ru',
  /** Rhodium */ Rh = 'rh',
  /** Palladium */ Pd = 'pd',
  /** Silver */ Ag = 'ag',
  /** Cadmium */ Cd = 'cd',
  /** Indium */ In = 'in',
  /** Tin */ Sn = 'sn',
  /** Antimony */ Sb = 'sb',
  /** Tellurium */ Te = 'te',
  /** Iodine */ I = 'i',
  /** Xenon */ Xe = 'xe',
  /** Caesium */ Cs = 'cs',
  /** Barium */ Ba = 'ba',
  /** Lanthanum */ La = 'la',
  /** Cerium */ Ce = 'ce',
  /** Praseodymium */ Pr = 'pr',
  /** Neodymium */ Nd = 'nd',
  /** Promethium */ Pm = 'pm',
  /** Samarium */ Sm = 'sm',
  /** Europium */ Eu = 'eu',
  /** Gadolinium */ Gd = 'gd',
  /** Terbium */ Tb = 'tb',
  /** Dysprosium */ Dy = 'dy',
  /** Holmium */ Ho = 'ho',
  /** Erbium */ Er = 'er',
  /** Thulium */ Tm = 'tm',
  /** Ytterbium */ Yb = 'yb',
  /** Lutetium */ Lu = 'lu',
  /** Hafnium */ Hf = 'hf',
  /** Tantalum */ Ta = 'ta',
  /** Tungsten */ W = 'w',
  /** Rhenium */ Re = 're',
  /** Osmium */ Os = 'os',
  /** Iridium */ Ir = 'ir',
  /** Platinum */ Pt = 'pt',
  /** Gold */ Au = 'au',
  /** Mercury */ Hg = 'hg',
  /** Thallium */ Tl = 'tl',
  /** Lead */ Pb = 'pb',
  /** Bismuth */ Bi = 'bi',
  /** Polonium */ Po = 'po',
  /** Astatine */ At = 'at',
  /** Radon */ Rn = 'rn',
  /** Francium */ Fr = 'fr',
  /** Radium */ Ra = 'ra',
  /** Actinium */ Ac = 'ac',
  /** Thorium */ Th = 'th',
  /** Uranium */ U = 'u',
  /** Neptunium */ Np = 'np',
  /** Plutonium */ Pu = 'pu',
  /** Americium */ Am = 'am',
  /** Curium */ Cm = 'cm',
  /** Berkelium */ Bk = 'bk',
  /** Californium */ Cf = 'cf',
  /** Einsteinium */ Es = 'es',
  /** Fermium */ Fm = 'fm',
  /** Mendelevium */ Md = 'md',
  /** Nobelium */ No = 'no',
  /** Lawrencium */ Lr = 'lr',
  /** Rutherfordium */ Rf = 'rf',
  /** Dubnium */ Db = 'db',
  /** Seaborgium */ Sg = 'sg',
  /** Bohrium */ Bh = 'bh',
  /** Hassium */ Hs = 'hs',
  /** Meitnerium */ Mt = 'mt',
  /** Darmstadtium */ Ds = 'ds',
  /** Roentgenium */ Rg = 'rg',
  /** Copernicium */ Cn = 'cn',
  /** Nihonium */ Nh = 'nh',
  /** Flerovium */ Fl = 'fl',
  /** Moscovium */ Mc = 'mc',
  /** Livermorium */ Lv = 'lv',
  /** Tennessine */ Ts = 'ts',
  /** Oganesson */ Og = 'og'
};

/**
 * Periodic table blocks based on the orbital subshell being filled by the valence electrons.
 */
export enum ElementBlock {
  /** Sharp orbital block containing groups 1 and 2, plus helium. */ S = 's',
  /** Principal orbital block containing groups 13 to 18 (excluding helium). */ P = 'p',
  /** Diffuse orbital block containing the transition metals (groups 3 to 12). */ D = 'd',
  /** Fundamental orbital block containing lanthanoids and actinoids. */ F = 'f'
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
  /** Elements known to and used by ancient civilizations (e.g., Gold, Copper). */
  ANTIQUITY = 'antiquity',
  /** Produced primarily through human activity or nuclear synthesis. */
  ARTIFICIAL = 'artificial',
  /** Metals with high density, atomic weight, or atomic number, often toxic. */
  HEAVY_METAL = 'heavyMetal',
  /** Metals with relatively low density (typically less than 5 g/cm³). */
  LIGHT_METAL = 'lightMetal',
  /** Elements occurring in nature as a single stable isotope. */
  MONONUCLEIDE = 'mononuclide',
  /** Found in nature in its metallic form, either pure or as an alloy. */
  NATIVE = 'native',
  /** Formed through natural processes without human intervention. */
  NATURAL = 'natural',
  /** Elements that are resistant to corrosion and oxidation in moist air. */
  NOBLE = 'noble',
  /** Six transition metal elements (Ru, Rh, Pd, Os, Ir, Pt) clustered together in the d-block. */
  PLATINUM_METAL = 'platinumMetal',
  /** Emitting radiation as a result of nuclear decay. */
  RADIOACTIVE = 'radioactive',
  /** Set of seventeen elements including the lanthanoids plus scandium and yttrium. */
  RARE_EARTHS = 'rareEarths',
  /** Metals that are extraordinarily resistant to heat and wear. */
  REFRACTOR_METAL = 'refractorMetal',
  /** Material with electrical conductivity between that of a conductor and an insulator. */
  SEMICONDUCTOR = 'semiconductor',
  /** Having at least one isotope that does not undergo radioactive decay. */
  STABLE = 'stable',
  /** Specifically created in laboratory or nuclear reactors, not found naturally on Earth. */
  SYNTHETIC = 'synthetic',
  /** Essential or strictly associated with biological life processes. */
  VITAL = 'vital'
};

/**
 * The 18 vertical columns of the periodic table representing groups of elements.
 */
export enum PTColumn {
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
export enum PTPeriod {
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

/**
 * Letter designations for the principal electron shells of an atom.
 */
export enum ShellModel {
  /** The innermost electron shell (n=1). */
  K = 'k',
  /** The second electron shell (n=2). */
  L = 'l',
  /** The third electron shell (n=3). */
  M = 'm',
  /** The fourth electron shell (n=4). */
  N = 'n',
  /** The fifth electron shell (n=5). */
  O = 'o',
  /** The sixth electron shell (n=6). */
  P = 'p',
  /** The seventh electron shell (n=7). */
  Q = 'q'
};

/**
 * Classification of elements based on their origin and existence on Earth.
 */
export enum NaturalOccurrence {
  /** Existed in its current form since the formation of the Earth. */
  PRIMORDIAL = 'primordial',
  /** Produced through the radioactive decay of a heavier parent isotope. */
  DECAY_PRODUCT = 'decayProduct',
  /** Created artificially through nuclear transmutation, not naturally occuring. */
  SYNTHETIC = 'synthetic'
};
