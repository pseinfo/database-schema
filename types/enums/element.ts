/**
 * Element Enumerations
 * This module contains enumerations related to chemical elements.
 * 
 * @module enums/element
 */


/** Enumeration of element symbols. */
export enum ElementSymbol {
    H = 'h', He = 'he', Li = 'li', Be = 'be', B = 'b', C = 'c', N = 'n', O = 'o', F = 'f',
    Ne = 'ne', Na = 'na', Mg = 'mg', Al = 'al', Si = 'si', P = 'p', S = 's', Cl = 'cl',
    Ar = 'ar', K = 'k', Ca = 'ca', Sc = 'sc', Ti = 'ti', V = 'v', Cr = 'cr', Mn = 'mn',
    Fe = 'fe', Co = 'co', Ni = 'ni', Cu = 'cu', Zn = 'zn', Ga = 'ga', Ge = 'ge', As = 'as',
    Se = 'se', Br = 'br', Kr = 'kr', Rb = 'rb', Sr = 'sr', Y = 'y', Zr = 'zr', Nb = 'nb',
    Mo = 'mo', Tc = 'tc', Ru = 'ru', Rh = 'rh', Pd = 'pd', Ag = 'ag', Cd = 'cd', In = 'in',
    Sn = 'sn', Sb = 'sb', Te = 'te', I = 'i', Xe = 'xe', Cs = 'cs', Ba = 'ba', La = 'la',
    Ce = 'ce', Pr = 'pr', Nd = 'nd', Pm = 'pm', Sm = 'sm', Eu = 'eu', Gd = 'gd', Tb = 'tb',
    Dy = 'dy', Ho = 'ho', Er = 'er', Tm = 'tm', Yb = 'yb', Lu = 'lu', Hf = 'hf', Ta = 'ta',
    W = 'w', Re = 're', Os = 'os', Ir = 'ir', Pt = 'pt', Au = 'au', Hg = 'hg', Tl = 'tl',
    Pb = 'pb', Bi = 'bi', Po = 'po', At = 'at', Rn = 'rn', Fr = 'fr', Ra = 'ra', Ac = 'ac',
    Th = 'th', U = 'u', Np = 'np', Pu = 'pu', Am = 'am', Cm = 'cm', Bk = 'bk', Cf = 'cf',
    Es = 'es', Fm = 'fm', Md = 'md', No = 'no', Lr = 'lr', Rf = 'rf', Db = 'db', Sg = 'sg',
    Bh = 'bh', Hs = 'hs', Mt = 'mt', Ds = 'ds', Rg = 'rg', Cn = 'cn', Nh = 'nh', Fl = 'fl',
    Mc = 'mc', Lv = 'lv', Ts = 'ts', Og = 'og'
};

/** Enumeration of electron shell models. */
export enum ShellModel { K = 'k', L = 'l', M = 'm', N = 'n', O = 'o', P = 'p', Q = 'q' };

/** Enumeration of element blocks. */
export enum ElementBlock { S = 's', P = 'p', D = 'd', F = 'f' };

/** Enumeration of element sets. */
export enum ElementSet {
    /** Non-metals */
    NON_METAL = 'nonMetal',
    /** Noble gases */
    NOBLE_GAS = 'nobleGas',
    /** Alkali metals */
    ALKALI_METAL = 'alkaliMetal',
    /** Alkaline earth metals */
    ALKALINE_EARTH_METAL = 'alkalineEarthMetal',
    /** Metalloids */
    METALLOID = 'metalloid',
    /** Halogens */
    HALOGEN = 'halogen',
    /** Metals */
    METAL = 'metal',
    /** Transition metals */
    TRANSITION_METAL = 'transitionMetal',
    /** Lanthanoids */
    LANTHANOIDE = 'lanthanoid',
    /** Actinoids */
    ACTINOIDE = 'actinoide'
};

/** Enumeration of element groups. */
export enum ElementGroup {
    /** Alkali metals */
    ALKALI_METAL = 'alkaliMetal',
    /** Alkaline earth metals */
    ALKALINE_EARTH_METAL = 'alkalineEarthMetal',
    /** Scandium group */
    SCANDIUM_GROUP = 'scandiumGroup',
    /** Titanium group */
    TITANIUM_GROUP = 'titaniumGroup',
    /** Vanadium group */
    VANADIUM_GROUP = 'vanadiumGroup',
    /** Chromium group */
    CHROMIUM_GROUP = 'chromiumGroup',
    /** Manganese group */
    MANGANESE_GROUP = 'manganeseGroup',
    /** Iron group */
    IRON_GROUP = 'ironGroup',
    /** Cobalt group */
    COBALT_GROUP = 'cobaltGroup',
    /** Nickel group */
    NICKEL_GROUP = 'nickelGroup',
    /** Copper group */
    COPPER_GROUP = 'copperGroup',
    /** Zinc group */
    ZINC_GROUP = 'zincGroup',
    /** Boron group */
    BORON_GROUP = 'boronGroup',
    /** Carbon group */
    CARBON_GROUP = 'carbonGroup',
    /** Pnictogens */
    PNICTOGEN = 'pnictogen',
    /** Chalcogens */
    CHALCOGEN = 'chalcogen',
    /** Halogens */
    HALOGEN = 'halogen',
    /** Noble gases */
    NOBLE_GAS = 'nobleGas',
    /** Lanthanoid series */
    LANTHANOID_SERIES = 'lanthanoidSeries',
    /** Actinoid series */
    ACTINOID_SERIES = 'actinoidSeries'
};

/** Enumeration of element properties. */
export enum ElementProperty {
    /** Antiquity */
    ANTIQUITY = 'antiquity',
    /** Artificial */
    ARTIFICIAL = 'artificial',
    /** Heavy metal */
    HEAVY_METAL = 'heavyMetal',
    /** Light metal */
    LIGHT_METAL = 'lightMetal',
    /** Mononuclide */
    MONONUCLEIDE = 'mononuclide',
    /** Native */
    NATIVE = 'native',
    /** Natural */
    NATURAL = 'natural',
    /** Noble */
    NOBLE = 'noble',
    /** Platinum metal */
    PLATINUM_METAL = 'platinumMetal',
    /** Radioactive */
    RADIOACTIVE = 'radioactive',
    /** Rare earths */
    RARE_EARTHS = 'rareEarths',
    /** Refractor metal */
    REFRACTOR_METAL = 'refractorMetal',
    /** Semiconductor */
    SEMICONDUCTOR = 'semiconductor',
    /** Stable */
    STABLE = 'stable',
    /** Synthetic */
    SYNTHETIC = 'synthetic',
    /** Vital */
    VITAL = 'vital'
};
