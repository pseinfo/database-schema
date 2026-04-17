/**
 * @file physics.ts
 * @description Defines enums for physical states, properties, and phenomena.
 * This module covers phases of matter, magnetic ordering, and optical properties
 * like lustre and diaphaneity.
 */

/**
 * Fundamental states of matter based on particle arrangement and energy.
 */
export enum Phase {
  /** Rigid state where molecules/atoms are closely packed in a fixed lattice. */
  SOLID = 'solid',
  /** Fluid state with fixed volume but variable shape, allowing molecular flow. */
  LIQUID = 'liquid',
  /** Compressible fluid phase with neither definite shape nor volume. */
  GASEOUS = 'gaseous',
  /** Ionized state of matter where atoms are stripped of their electrons. */
  PLASMA = 'plasma',
  /** Current state is undetermined or scientifically undefined. */
  UNKNOWN = 'unknown'
};

/**
 * States of electrical conductivity where resistance vanishes at low temperatures.
 */
export enum Superconductivity {
  /** Conducts electricity without loss below a critical temperature. */
  NORMAL = 'normal',
  /** Exhibits unusual Cooper pair coupling or non-standard critical mechanics. */
  SPECIAL = 'special',
  /** Material does not exhibit superconducting properties under any known condition. */
  NONE = 'none'
};

/**
 * Classification of materials based on their response to an external magnetic field.
 */
export enum MagneticOrdering {
  /** Repelled by a magnetic field; atoms have no permanent net magnetic moment. */
  DIAMAGNETIC = 'diamagnetic',
  /** Weakly attracted by a magnetic field; magnetic moments align only while field is present. */
  PARAMAGNETIC = 'paramagnetic',
  /** Strong attraction with spontaneous magnetization below a Curie temperature. */
  FERROMAGNETIC = 'ferromagnetic',
  /** Adjacent magnetic moments point in opposite directions, resulting in no net magnetization. */
  ANTIFERROMAGNETIC = 'antiferromagnetic',
  /** Opposing magnetic moments are unequal, leading to a net spontaneous magnetization. */
  FERRIMAGNETIC = 'ferrimagnetic',
  /** Occurs in small ferromagnetic or ferrimagnetic nanoparticles with single-domain behavior. */
  SUPERPARAMAGNETIC = 'superparamagnetic'
};

/**
 * Qualitative description of the surface reflective properties of a substance.
 */
export enum Gloss {
  /** High reflectivity and opacity typical of polished metals. */
  METALLIC = 'metallic',
  /** Brilliant, high-index reflectivity similar to a cut diamond. */
  DIAMOND = 'diamond',
  /** Surface appears to be coated with a thin layer of oil or fat. */
  GREASY = 'greasy',
  /** Smooth, vitreous reflection typical of glass. */
  GLASSY = 'glassy',
  /** Iridescent, multi-layered reflection like the interior of a mollusk shell. */
  PEARLY = 'pearly',
  /** Parallel, fibrous arrangement reflecting light in thread-like patterns. */
  SILKY = 'silky',
  /** Dull, plastic-like reflection typical of amber or resin. */
  RESINOUS = 'resinous',
  /** Soft, matte reflection typical of candle wax or paraffin. */
  WAXY = 'waxy',
  /** Non-reflective surface indicating high light absorption or scattering. */
  DULL = 'dull'
};

/**
 * Detailed mineralogical classification of how light interacts with a surface.
 */
export enum Lustre {
  /** Hardest, most brilliant lustre seen in minerals with high refractive indices. */
  ADAMANTINE = 'adamantine',
  /** Lacks any noticeable reflection, appearing earthy or granular. */
  DULL = 'dull',
  /** Feels and looks oily, often seen in minerals with surface weathering. */
  GREASY = 'greasy',
  /** Opaque, shiny surface characteristic of metals and some sulfides. */
  METALLIC = 'metallic',
  /** Sheen caused by light interference in thin surface layers (e.g., muscovite). */
  PEARLY = 'pearly',
  /** Characteristic of resins like amber, often with medium refractive indices. */
  RESINOUS = 'resinous',
  /** Radiating, fibrous lustre seen in minerals like gypsum or tiger's eye. */
  SILKY = 'silky',
  /** Intermediate between metallic and vitreous, often seen in oxides with high density. */
  SUBMETALLIC = 'submetallic',
  /** Standard glass-like lustre, typical of 70% of all minerals. */
  VITREOUS = 'vitreous',
  /** Soft, translucent sheen reminiscent of beeswax. */
  WAXY = 'waxy'
};

/**
 * Degrees of light transmission through a material.
 */
export enum Diaphaneity {
  /** Blocks all visible light transmission, even in thin sections. */
  OPAQUE = 'opaque',
  /** Allows light to pass through but scatters it, preventing clear vision. */
  TRANSLUCENT = 'translucent',
  /** Light passes through with minimal scattering, allowing clear images. */
  TRANSPARENT = 'transparent'
};
