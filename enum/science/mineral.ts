/**
 * @file enum/science/mineral.ts
 * @description Defines enums for the classification and properties of naturally occurring minerals.
 */

/**
 * High-level classification of minerals based on their chemical composition and Dana/Strunz systems.
 */
export enum MineralClass {
  /** Minerals composed of a single element in its native state (e.g., Diamond, Gold). */
  NATIVE_ELEMENTS = 'nativeElements',
  /** Compounds of sulfur with metals or semi-metals (e.g., Pyrite, Galena). */
  SULFIDES = 'sulfides',
  /** Compounds containing a halogen element as the main anion (e.g., Halite, Fluorite). */
  HALIDES = 'halides',
  /** Compounds of oxygen with one or more metals (e.g., Hematite, Corundum). */
  OXIDES = 'oxides',
  /** Minerals containing the carbonate ion (CO3)2- (e.g., Calcite, Malachite). */
  CARBONATES = 'carbonates',
  /** Minerals containing borate anion groups (e.g., Borax). */
  BORATES = 'borates',
  /** Minerals containing the sulfate ion (SO4)2- (e.g., Gypsum, Baryte). */
  SULFATES = 'sulfates',
  /** Minerals containing the phosphate ion (PO4)3- (e.g., Apatite, Turquoise). */
  PHOSPHATES = 'phosphates',
  /** The largest class, containing silicate tetrahedra (SiO4)4- (e.g., Quartz, Feldspar). */
  SILICATES = 'silicates',
  /** Rare minerals formed through biological or organic processes (e.g., Whewellite). */
  ORGANIC = 'organic'
};

/**
 * Detailed sub-classification of mineral groups based on structural and chemical nuances.
 */
export enum MineralSubClass {
  /** Simple binary sulfides without additional complex anions. */
  SIMPLE_SULFIDE = 'simpleSulfide',
  /** Sulfides where a semi-metal replaces some sulfur (e.g., Tetrahedrite). */
  SULFOSALT = 'sulfosalt',
  /** Simple salts of hydrohalic acids. */
  SIMPLE_HALIDE = 'simpleHalide',
  /** Simple metal-oxygen compounds. */
  SIMPLE_OXIDE = 'simpleOxide',
  /** Compounds containing the hydroxyl (OH-) group. */
  HYDROXIDE = 'hydroxide',
  /** Standard metal carbonates. */
  SIMPLE_CARBONATE = 'simpleCarbonate',
  /** Minerals containing the nitrate (NO3)- group. */
  NITRATE = 'nitrate',
  /** Standard metal sulfates. */
  SIMPLE_SULFATE = 'sulfate',
  /** Minerals containing the chromate (CrO4)2- group. */
  CHROMATE = 'chromate',
  /** Minerals containing the molybdate (MoO4)2- group. */
  MOLYBDATE = 'molybdate',
  /** Minerals containing the tungstate (WO4)2- group. */
  TUNGSTATE = 'tungstate',
  /** Minerals containing the arsenate (AsO4)3- group. */
  ARSENATE = 'arsenate',
  /** Minerals containing the vanadate (VO4)3- group. */
  VANADATE = 'vanadate',
  /** Isolated silicate tetrahedra linked by cations. */
  NESOSILICATE = 'nesosilicate',
  /** Single or double chains of silicate tetrahedra. */
  INOSILICATE = 'inosilicate',
  /** Two-dimensional sheets of silicate tetrahedra. */
  PHYLLOSILICATE = 'phyllosilicate',
  /** Three-dimensional framework of silicate tetrahedra. */
  TECTOSILICATE = 'tectosilicate',
  /** Rings of silicate tetrahedra. */
  CYCLOSILICATE = 'cyclosilicate',
  /** Double tetrahedra (groups of two). */
  SOROSILICATE = 'sorosilicate'
};

/**
 * Classification of the internal ordering and atomic arrangement of minerals.
 */
export enum MineralStructure {
  /** Minerals with a highly ordered, repeating 3D lattice structure. */
  CRYSTALLINE = 'crystalline',
  /** Solids lacking a long-range periodic atomic arrangement (e.g., Opal). */
  AMORPHOUS = 'amorphous',
  /** Formerly crystalline minerals whose structure was destroyed by internal radiation (e.g., Zircon). */
  METAMICT = 'metamict'
};

/**
 * Physical and chemical properties specific to mineral species.
 */
export enum MineralProperty {
  /** Interaction with magnetic fields, common in iron-bearing minerals. */
  MAGNETIC = 'magnetic',
  /** Emission of light not caused by heat (general term). */
  LUMINESCENT = 'luminescent',
  /** Instantaneous emission of light upon excitation by UV radiation. */
  FLUORESCENT = 'fluorescent',
  /** Delayed emission of light after the excitation source is removed. */
  PHOSPHORESCENT = 'phosphorescent',
  /** Generation of electric charge in response to applied mechanical stress. */
  PIEZOELECTRIC = 'piezoelectric',
  /** Generation of electric charge in response to temperature changes. */
  PYROELECTRIC = 'pyroelectric',
  /** Capability of undergoing nuclear fission (e.g., Uraninite). */
  FISSIONABLE = 'fissionable'
};
