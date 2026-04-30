/**
 * @file enum/science/physics.ts
 * @description Defines enums for physical states, magnetic properties, and optical characteristics of materials.
 */

/**
 * The primary states of matter as defined by thermodynamic conditions of temperature and pressure.
 */
export enum Phase {
  /** Rigid state where atoms are closely packed in a fixed structure. */
  SOLID = 'solid',
  /** Fluid state with definite volume but no fixed shape, allowing flow. */
  LIQUID = 'liquid',
  /** Compressible fluid state that expands to fill the shape and volume of its container. */
  GASEOUS = 'gaseous',
  /** Ionized gas consisting of free electrons and positive ions, highly conductive. */
  PLASMA = 'plasma',
  /** Phase state not yet determined or characterized. */
  UNKNOWN = 'unknown'
};

/**
 * Material behavior regarding zero electrical resistance at low temperatures.
 */
export enum Superconductivity {
  /** Exhibits standard BCS-theory or high-Tc superconductivity under specific conditions. */
  NORMAL = 'normal',
  /** Exhibits exotic or unconventional superconducting mechanisms. */
  SPECIAL = 'special',
  /** Does not exhibit superconductivity under any known conditions. */
  NONE = 'none'
};

/**
 * Alignment of atomic magnetic moments within a crystal lattice.
 */
export enum MagneticOrdering {
  /** Adjacent magnetic moments point in opposite directions, resulting in zero net magnetization. */
  ANTIFERROMAGNETIC = 'antiferromagnetic',
  /** Intrinsic property of materials to create an opposing magnetic field, causing repulsion. */
  DIAMAGNETIC = 'diamagnetic',
  /** Opposing moments of unequal magnitude, resulting in a net spontaneous magnetization. */
  FERRIMAGNETIC = 'ferrimagnetic',
  /** Parallel alignment of moments, resulting in strong spontaneous magnetization (e.g., Iron). */
  FERROMAGNETIC = 'ferromagnetic',
  /** Moments align only in the presence of an external magnetic field, showing weak attraction. */
  PARAMAGNETIC = 'paramagnetic',
  /** Small ferromagnetic particles showing paramagnetic-like behavior due to thermal fluctuations. */
  SUPERPARAMAGNETIC = 'superparamagnetic'
};

/**
 * The quality and intensity of light reflected from the surface of a material.
 */
export enum Gloss {
  /** High reflectivity characteristic of polished metal surfaces. */
  METALLIC = 'metallic',
  /** Exceptional brilliance and fire, typical of high-refractive-index crystals. */
  DIAMOND = 'diamond',
  /** Surface appearing oily or greasy to the touch or eye. */
  GREASY = 'greasy',
  /** Smooth, highly reflective surface resembling glass. */
  GLASSY = 'glassy',
  /** Iridescent, multi-layered reflection resembling mother-of-pearl. */
  PEARLY = 'pearly',
  /** Parallel fibrous structure reflecting light like silk. */
  SILKY = 'silky',
  /** Appearance similar to resin or amber. */
  RESINOUS = 'resinous',
  /** Dull, matte surface resembling wax. */
  WAXY = 'waxy',
  /** Lacking any significant gloss or reflectivity. */
  DULL = 'dull'
};

/**
 * The interaction of light with the surface of a mineral, describing its appearance.
 */
export enum Lustre {
  /** The highest level of lustre, seen in minerals with high refractive index (e.g., Diamond). */
  ADAMANTINE = 'adamantine',
  /** Non-reflective, matte appearance. */
  DULL = 'dull',
  /** Appearance of being covered in a thin film of oil. */
  GREASY = 'greasy',
  /** Opaque and highly reflective appearance of metals. */
  METALLIC = 'metallic',
  /** Soft, iridescent sheen seen in minerals with perfect cleavage. */
  PEARLY = 'pearly',
  /** Medium-refractive-index lustre resembling resin. */
  RESINOUS = 'resinous',
  /** Fine, parallel fibrous reflection. */
  SILKY = 'silky',
  /** Intermediate between metallic and non-metallic (e.g., Hematite). */
  SUBMETALLIC = 'submetallic',
  /** The most common lustre, resembling broken glass (e.g., Quartz). */
  VITREOUS = 'vitreous',
  /** Soft, low-reflectivity appearance of wax or candles. */
  WAXY = 'waxy'
};

/**
 * The ability of a material to transmit light.
 */
export enum Diaphaneity {
  /** Light cannot pass through the material even in thin sections. */
  OPAQUE = 'opaque',
  /** Light passes through but objects cannot be clearly seen (diffuse transmission). */
  TRANSLUCENT = 'translucent',
  /** Light passes through and objects can be seen clearly (undistorted transmission). */
  TRANSPARENT = 'transparent'
};
