/**
 * @file crystallography.ts
 * @description Defines properties related to the internal structural arrangement of crystals,
 * their symmetry groups, and physical diagnostic features like cleavage and habit.
 */

import type {
  CleavageQuality, CleavageType, CrystalFamily, CrystalHabit, CrystalSystem,
  FractureType, Tenacity, TwinningMode, TwinningType
} from '../../enum/crystallography';
import type { ElementSymbol } from '../../enum/element';
import type { Collection, Single } from '../abstract/collection';
import type { PrimitiveProperty, StructProperty } from '../abstract/property';
import type { NumberValue } from '../abstract/value';

/**
 * Representation of a crystallographic point group (crystal class).
 */
export type PointGroup = {
  /** The international number of the point group (1-32). */
  number: number;
  /** The standard name of the point group. */
  name: string;
  /** The Hermann-Mauguin notation (International notation) for the group. */
  hermannMauguin?: string;
  /** The Schönflies notation for the point group symmetry. */
  schoenflies?: string;
};

/**
 * Representation of a crystallographic space group.
 */
export type SpaceGroup = {
  /** The sequential number of the space group in the International Tables for Crystallography (1-230). */
  number: number;
  /** The full international symbol representing the symmetry operations and lattice type. */
  symbol: string;
};

/**
 * Parameters defining the geometry and size of a crystal's unit cell.
 */
export type UnitCell = {
  /** Lattice parameter representing the length of the 'a' axis. */
  a?: NumberValue< 'length' >;
  /** Lattice parameter representing the length of the 'b' axis. */
  b?: NumberValue< 'length' >;
  /** Lattice parameter representing the length of the 'c' axis. */
  c?: NumberValue< 'length' >;
  /** Interaxial angle between the 'b' and 'c' axes. */
  alpha?: NumberValue< 'angle' >;
  /** Interaxial angle between the 'a' and 'c' axes. */
  beta?: NumberValue< 'angle' >;
  /** Interaxial angle between the 'a' and 'b' axes. */
  gamma?: NumberValue< 'angle' >;
  /** The number of formula units contained within the volume of the unit cell. */
  Z?: number;
};

/**
 * Registry of coordination numbers grouped by element.
 */
export type Ligancy = {
  /** The number of neighboring atoms of a specific element surrounding a central atom. */
  [ K in ElementSymbol ]?: number;
};

/**
 * Descriptive fields for twinning phenomena in crystals.
 */
export type Twinning = {
  /** The categorization of the twinning mechanism (e.g., contact, penetration). */
  type?: TwinningType;
  /** The specific mode of formation for the twin (e.g., growth, mechanical). */
  mode?: TwinningMode;
  /** The specific Twin Law (e.g., "Albite Law") defining the orientation. */
  law?: string;
  /** The symmetry operation (reflection, rotation) that relates the twin individuals. */
  operation?: string;
};

/**
 * Descriptive fields for the cleavage properties of a crystalline substance.
 */
export type Cleavage = {
  /** The structural nature of the cleavage (e.g., octahedral, prismatic). */
  type?: CleavageType;
  /** The degree of ease and smoothness with which the crystal splits. */
  quality?: CleavageQuality;
  /** The orientation of the cleavage plane expressed as Miller indices {hkl}. */
  millerIndex?: string;
};

/**
 * Descriptive fields for the fracture and mechanical tenacity of a material.
 */
export type Fracture = {
  /** The characteristic appearance of the broken surface (e.g., conchoidal). */
  type?: FractureType;
  /** The resistance of the material to the propagation of cracks. */
  toughness?: NumberValue< 'energy' >;
  /** The behavior of the material under stress (e.g., brittle, malleable). */
  tenacity?: Tenacity;
};

/**
 * Registry of crystallographic and structural properties.
 */
export type CrystallographyCollection = Collection< {
  /** The high-level grouping of crystal systems based on shared cell dimensions. */
  family?: Single< PrimitiveProperty< CrystalFamily > >;
  /** The categorization of crystal symmetry into one of the seven systems (e.g., Cubic). */
  system?: Single< PrimitiveProperty< CrystalSystem > >;
  /** A notation used to describe crystal structures in terms of lattice type and number of atoms. */
  pearsonSymbol?: Single< PrimitiveProperty< string > >;
  /** The specific set of symmetry operations that leave at least one point unmoved. */
  pointGroup?: Single< StructProperty< PointGroup > >;
  /** The symmetry of the diffraction pattern produced by the crystal. */
  laueGroup?: Single< PrimitiveProperty< string > >;
  /** The full symmetry group of the crystal lattice, including translational symmetry. */
  spaceGroup?: Single< StructProperty< SpaceGroup > >;
  /** The geometric dimensions and angles that define the repeating lattice unit. */
  unitCell?: Single< StructProperty< UnitCell > >;
  /** The coordination environment of the constituent atoms. */
  ligancy?: Single< StructProperty< Ligancy > >;
  /** The typical outward appearance and growth form of the individual crystals. */
  crystalHabit?: Single< PrimitiveProperty< CrystalHabit > >;
  /** The phenomenon where two or more crystals share some lattice points in a symmetrical way. */
  twinning?: Single< StructProperty< Twinning > >;
  /** The tendency of the material to split along specific crystallographic planes. */
  cleavage?: Single< StructProperty< Cleavage > >;
  /** The pattern of breakage that occurs when a crystal is broken across non-cleavage planes. */
  fracture?: Single< StructProperty< Fracture > >;
} >;
