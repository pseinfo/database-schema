/**
 * @file model/collection/atomic.ts
 * @description Models the fundamental properties of an atom, including its nuclear structure,
 * electronic configuration, and resulting physical attributes.
 */

import type { ElementSymbol, PaulingSpin, ShellModel, Subshell } from '../../enum/science/element';
import type { Collection, Group, One, OneOrMany } from '../base/modifier';
import type { ArrayProperty, NumberProperty, PrimitiveProperty, StructProperty } from '../base/property';
import type { NoUnit } from '../registry/unit';

/** Structural model for the arrangement of electrons in shells and subshells. */
export type ElectronConfig = {
  /** Optional noble gas core used for abbreviated notation. */
  baseElement?: ElementSymbol;
  /** List of specific electron placements in the quantum shell model. */
  terms: Array< {
    /** The principal quantum shell (e.g., K, L, M). */
    shell: ShellModel;
    /** The azimuthal quantum subshell (s, p, d, f). */
    subshell: Subshell;
    /** The number of electrons occupying this subshell. */
    value: number;
  } >;
};

/** Representation of an orbital box in the Pauling notation. */
type Box = PaulingSpin | null;

/** Visualization of electron spins using the Pauling box model. */
export type PaulingNotation = {
  /** Optional noble gas core used for abbreviated notation. */
  baseElement?: ElementSymbol;
  /** Mapping of shells to their subshell spin states. */
  shells: {
    [ K in ShellModel ]?: {
      /** Spin states for the s-orbital. */
      s: [ Box ];
      /** Spin states for the three p-orbitals. */
      p: [ Box, Box, Box ];
      /** Spin states for the five d-orbitals. */
      d: [ Box, Box, Box, Box, Box ];
      /** Spin states for the seven f-orbitals. */
      f: [ Box, Box, Box, Box, Box, Box, Box ];
    };
  };
};

/** Comprehensive collection of properties defining an atom's identity and fundamental behavior. */
export type AtomicCollection = Collection< {
  /** The number of protons in the atomic nucleus. */
  atomicNumber?: One< PrimitiveProperty< number > >;
  /** The total number of nucleons (protons and neutrons) in the nucleus. */
  massNumber?: One< PrimitiveProperty< number > >;
  /** The net positive charge experienced by an electron in a multi-electron atom. */
  effectiveNuclearCharge?: OneOrMany< PrimitiveProperty< number > >;

  /** Grouping of properties related to the electronic structure. */
  electrons?: Group< {
    /** The number of electrons in the outermost shell involved in bonding. */
    valenceElectrons?: One< PrimitiveProperty< number > >;
    /** Total number of electrons per principal quantum shell. */
    shellModel?: One< StructProperty< { [ K in ShellModel ]?: number } > >;
    /** Detailed quantum mechanical arrangement of electrons. */
    electronConfig?: OneOrMany< StructProperty< ElectronConfig > >;
    /** Spin-based representation of electron arrangement. */
    paulingNotation?: OneOrMany< StructProperty< PaulingNotation > >;
  } >;

  /** Fundamental energy levels associated with the atom. */
  energy?: Group< {
    /** Energies required to remove electrons sequentially from the atom. */
    ionizationEnergies?: One< ArrayProperty< 'energy' > >;
    /** The difference between the actual atomic mass and the mass number in energy units. */
    massExcess?: OneOrMany< NumberProperty< 'energy' > >;
  } >;

  /** Quantitative mass properties of the atom. */
  mass?: Group< {
    /** The actual mass of a single atom. */
    atomicMass?: OneOrMany< NumberProperty< 'mass' > >;
    /** The weighted average of atomic masses of naturally occurring isotopes. */
    standardAtomicWeight?: OneOrMany< NumberProperty< NoUnit > >;
    /** The ratio of the average mass per atom to the atomic mass constant. */
    relativeAtomicMass?: OneOrMany< NumberProperty< NoUnit > >;
  } >;

  /** Physical dimensions of the atom across different measurement models. */
  radius?: Group< {
    /** Experimentally determined atomic radius. */
    empirical?: OneOrMany< NumberProperty< 'length' > >;
    /** Theoretically derived atomic radius based on wave functions. */
    calculated?: OneOrMany< NumberProperty< 'length' > >;
    /** Half the distance between two identical atoms in a covalent bond. */
    covalent?: OneOrMany< NumberProperty< 'length' > >;
    /** Half the distance between the nuclei of two non-bonded, adjacent atoms. */
    vdw?: OneOrMany< NumberProperty< 'length' > >;
  } >;

  /** The tendency of an atom to attract a shared pair of electrons, according to various scientific scales. */
  electronegativity?: Group< {
    /** Allen electronegativity scale based on average electron energy. */
    allen?: OneOrMany< NumberProperty< NoUnit > >;
    /** Allred-Rochow scale based on electrostatic force. */
    allredRochow?: OneOrMany< NumberProperty< NoUnit > >;
    /** Ghosh-Gupta scale based on the valence-shell potential. */
    ghoshGupta?: OneOrMany< NumberProperty< 'energy' > >;
    /** Gordy electronegativity scale. */
    gordy?: OneOrMany< NumberProperty< NoUnit > >;
    /** Martynov-Batsanov scale based on ionization potential. */
    martynov?: OneOrMany< NumberProperty< NoUnit > >;
    /** Mulliken scale based on the average of ionization energy and electron affinity. */
    mulliken?: OneOrMany< NumberProperty< NoUnit > >;
    /** Nagle electronegativity scale based on atomic polarizability. */
    nagle?: OneOrMany< NumberProperty< NoUnit > >;
    /** Pauling scale, the most common measure of electronegativity. */
    pauling?: OneOrMany< NumberProperty< NoUnit > >;
    /** Pearson absolute electronegativity. */
    pearson?: OneOrMany< NumberProperty< 'energy' > >;
    /** Rahm electronegativity scale based on atomic volume. */
    rahm?: OneOrMany< NumberProperty< 'energy' > >;
    /** Sanderson scale based on electron density. */
    sanderson?: OneOrMany< NumberProperty< NoUnit > >;
  } >;
} >;
