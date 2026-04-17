/**
 * @file mineral.ts
 * @description Defines enums for mineral classification and physical diagnostic properties.
 * This module covers IMA mineral categories, chemical classes, and physical identifiers.
 */

/**
 * High-level chemical classification of minerals based on their dominant redundant anions.
 */
export enum MineralCategory {
  /** Pure elements occurring in nature (e.g., Diamond, Gold). */
  ELEMENTS = 'elements',
  /** Compounds of sulfur with a metal or semi-metal (e.g., Pyrite). */
  SULFIDES = 'sulfides',
  /** Salts containing a halogen as the dominant anion (e.g., Halite). */
  HALIDES = 'halides',
  /** Oxygen-bearing compounds, typically with a metal (e.g., Hematite). */
  OXIDES = 'oxides',
  /** Minerals containing the carbonate ion (CO3)2- (e.g., Calcite). */
  CARBONATES = 'carbonates',
  /** Boron-oxygen bearing minerals (e.g., Borax). */
  BORATES = 'borates',
  /** Minerals containing the sulfate ion (SO4)2- (e.g., Gypsum). */
  SULFATES = 'sulfates',
  /** Minerals containing the phosphate ion (PO4)3- (e.g., Apatite). */
  PHOSPHATES = 'phosphates',
  /** The largest group, containing silicon and oxygen (e.g., Quartz, Feldspar). */
  SILICATES = 'silicates',
  /** Naturally occurring organic chemical compounds (e.g., Whewellite). */
  ORGANIC = 'organic',
  /** Mineral species whose chemical classification is currently unconfirmed. */
  UNKNOWN = 'unknown'
};

/**
 * Detailed Strunz or Dana mineralogical classes based on chemical composition.
 */
export enum MineralClass {
  /** Native elements and alloys. */
  ELEMENTS = 'elements',
  /** Sulfides and sulfosalts. */
  SULFIDES = 'sulfides',
  /** Complex sulfur-arsenic/antimony compounds. */
  SULFOSALTS = 'sulfosalts',
  /** Natural halogen salts. */
  HALIDES = 'halides',
  /** Metal oxides and hydroxides. */
  OXIDES = 'oxides',
  /** Hydroxyl-bearing metal oxides. */
  HYDROXIDES = 'hydroxides',
  /** Minerals containing trivalent arsenic (AsO3)3-. */
  ARSENITES = 'arsenites',
  /** Carbonate minerals. */
  CARBONATES = 'carbonates',
  /** Minerals containing the nitrate ion (NO3)-. */
  NITRATES = 'nitrates',
  /** Borate minerals. */
  BORATES = 'borates',
  /** Sulfate minerals. */
  SULFATES = 'sulfates',
  /** Chromium-oxygen bearing minerals. */
  CHROMATES = 'chromates',
  /** Molybdenum-oxygen bearing minerals. */
  MOLYBDATES = 'molybdates',
  /** Phosphate minerals. */
  PHOSPHATES = 'phosphates',
  /** Arsenic-oxygen bearing minerals in the +5 oxidation state. */
  ARSENATES = 'arsenates',
  /** Organic mineral species. */
  ORGANIC = 'organic',
  /** Silicate framework and sheet minerals. */
  SILICATES = 'silicates',
  /** Unspecified class. */
  UNKNOWN = 'unknown'
};

/**
 * Physical diagnostic traits used for the identification of mineral specimens.
 */
export enum MineralProperty {
  /** Exhibit a distinct hue (idiochromatic or allochromatic). */
  COLORED = 'colored',
  /** Lacking any intrinsic or external coloration. */
  COLORLESS = 'colorless',
  /** Light passes through but objects cannot be clearly seen. */
  TRANSLUCENT = 'translucent',
  /** Completely blocks light transmission. */
  OPAQUE = 'opaque',
  /** Completely clear, allowing light and images to pass through. */
  TRANSPARENT = 'transparent',
  /** Responsive to external magnetic fields or exhibiting permanent magnetism. */
  MAGNETIC = 'magnetic',
  /** Emits light after excitation by an energy source. */
  LUMINESCENT = 'luminescent',
  /** Emits light immediately after UV or X-ray excitation. */
  FLUORESCENT = 'fluorescent',
  /** Continues to emit light after the excitation source is removed. */
  PHOSPHORESCENT = 'phosphorescent',
  /** Emits ionizing radiation due to unstable isotopes. */
  RADIOACTIVE = 'radioactive',
  /** Susceptible to nuclear fission. */
  FISSIONABLE = 'fissionable',
  /** Fractures or powders easily under pressure without deformation. */
  BRITTLE = 'brittle',
  /** Reflective or lustrous surface. */
  SHINY = 'shiny',
  /** Lacks reflective lustre; earthy or matte appearance. */
  DULL = 'dull',
  /** Surface sheen typical of metals or sulfides. */
  METALLIC = 'metallic',
  /** Generates an electric charge in response to mechanical stress. */
  PIEZOELECTRIC = 'piezoelectric',
  /** Generates an electric charge in response to temperature changes. */
  PYROELECTRIC = 'pyroelectric',
  /** Allows the flow of electric current. */
  CONDUCTIVE = 'conductive',
  /** Exhibits electrical conductivity between a conductor and an insulator. */
  SEMICONDUCTIVE = 'semiconductive',
  /** Highly resistant to the flow of electric current. */
  INSULATIVE = 'insulative',
  /** Specimen created in a laboratory rather than by geologic processes. */
  SYNTHETIC = 'synthetic'
};
