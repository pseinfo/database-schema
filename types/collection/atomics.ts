/**
 * @file atomics.ts
 * @description Defines atomic-level properties including nuclear structure, electron configuration, and elemental radii.
 * This collection serves as the foundation for elemental classification and atomic behavior.
 */

import type { ShellModel } from '../../enum/element';
import type { Collection, Group, Single } from '../abstract/collection';
import type { ArrayProperty, NumberProperty, PrimitiveProperty, StructProperty } from '../abstract/property';

/**
 * Registry of properties defining the internal structure and behavior of an atom.
 */
export type AtomicsCollection = Collection< {
  /** The total number of protons found in the nucleus of an atom. */
  atomicNumber?: Single< PrimitiveProperty< number > >;
  /** The total count of protons and neutrons within the atomic nucleus. */
  massNumber?: Single< PrimitiveProperty< number > >;

  /** The specific distribution of electrons among the various atomic orbitals (e.g., "[Xe] 4f14 5d10 6s1"). */
  electronConfig?: Single< PrimitiveProperty< string > >;
  /** The number of electrons in the outermost shell that participate in chemical bonding. */
  valenceElectrons?: Single< PrimitiveProperty< number > >;
  /** The count of electrons residing within each principal energy level (K, L, M, etc.). */
  shellModel?: Single< StructProperty< { [ K in ShellModel ]?: number } > >;

  /** The cumulative energy required to remove successive electrons from a neutral atom in the gas phase. */
  ionizationEnergies?: Single< ArrayProperty< 'energy' > >;

  /** Grouping of properties related to the physical mass of the atom or nuclide. */
  mass?: Group< {
    /** The actual mass of a single atom, typically expressed in unified atomic mass units (u). */
    atomicMass?: Single< NumberProperty< 'mass' > >;
    /** The weighted average mass of an element's isotopes relative to 1/12th the mass of carbon-12. */
    standardAtomicWeight?: Single< PrimitiveProperty< number > >;
    /** The ratio of the average atomic mass of a sample to the atomic mass constant. */
    relativeAtomicMass?: Single< PrimitiveProperty< number > >;
    /** The difference between the actual atomic mass and the mass number, expressed in energy units. */
    massExcess?: Single< NumberProperty< 'energy' > >;
  } >;

  /** Grouping of properties defining the spatial extent and radii of the atom. */
  radius?: Group< {
    /** The observed or experimental distance from the nucleus to the outermost electron shell. */
    empiricalRadius?: Single< NumberProperty< 'length' > >;
    /** The theoretically derived size of an atom based on quantum mechanical wave functions. */
    calculatedRadius?: Single< NumberProperty< 'length' > >;
    /** Half the distance between the nuclei of two identical atoms joined by a single covalent bond. */
    covalentRadius?: Single< NumberProperty< 'length' > >;
    /** The Van der Waals radius of an atom (the distance between the nuclei of two non-bonded atoms). */
    vdwRadius?: Single< NumberProperty< 'length' > >;
  } >;

  /** Grouping of properties defining the electrical state and shielding of the nucleus. */
  charge?: Group< {
    /** The net positive charge of the nucleus, determined by the number of protons. */
    nuclearCharge: Single< PrimitiveProperty< number > >;
    /** The net positive charge experienced by a valence electron after accounting for shielding by inner electrons. */
    effectiveCharge: Single< PrimitiveProperty< number > >;
  } >;

  /** Grouping of various scales for measuring an atom's tendency to attract bonding electrons. */
  electronegativity?: Group< {
    /** The original dimensionless scale based on bond-dissociation energies. */
    pauling?: Single< PrimitiveProperty< number > >;
    /** A scale based on the relative stability of atomic volumes. */
    sanderson?: Single< PrimitiveProperty< number > >;
    /** A scale based on the electrostatic force exerted by the nucleus on valence electrons. */
    allredRochow?: Single< PrimitiveProperty< number > >;
    /** The arithmetic mean of the first ionization energy and electron affinity. */
    mulliken?: Single< PrimitiveProperty< number > >;
    /** A scale based on the average one-electron energy of valence shell electrons. */
    allen?: Single< PrimitiveProperty< number > >;
    /** A modern scale incorporating shell-wise screening and orbital energy. */
    ghoshGupta?: Single< NumberProperty< 'energy' > >;
    /** A scale related to the polarizability and valence state of the atom. */
    nagle?: Single< PrimitiveProperty< number > >;
    /** A measure of chemical hardness and absolute electronegativity. */
    pearson?: Single< NumberProperty< 'energy' > >;
    /** A scale based on effective nuclear charge and atomic radii. */
    martynov?: Single< PrimitiveProperty< number > >;
    /** A scale derived from the spectroscopic properties of atoms. */
    gordy?: Single< PrimitiveProperty< number > >;
    /** A scale based on the average binding energy of valence electrons. */
    rahm?: Single< NumberProperty< 'energy' > >;
  } >;
} >;
