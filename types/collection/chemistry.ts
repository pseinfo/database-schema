/**
 * @file chemistry.ts
 * @description Defines macroscopic and molecular chemical properties, including thermodynamics,
 * electrochemistry, solubility, and molecular geometry.
 */

import type {
  AcidBaseCharacter, BasicityType, BondType, Goldschmidt, HSAB, Hybridization, LewisModel,
  MolecularShape, OxideCharacter, SolubilityQualifier
} from '../../enum/chemistry';
import type { Collection, Group, Single } from '../abstract/collection';
import type { NumberProperty, PrimitiveProperty, StructProperty } from '../abstract/property';

/**
 * Registry of chemical properties describing the reactivity, structure, and energetics of substances.
 */
export type ChemistryCollection = Collection< {
  /** The mass of one mole of the substance, typically in g/mol. */
  molarMass?: Single< NumberProperty< 'molarMass' > >;
  /** The volume occupied by one mole of the substance under specific conditions. */
  molarVolume?: Single< NumberProperty< 'molarVolume' > >;
  /** The entropy of one mole of a pure substance at a standard state of 1 bar. */
  standardMolarEntropy?: Single< NumberProperty< 'entropy' > >;
  /** The sum of the atomic weights of all atoms in a molecule's formula (also named formula mass). */
  molecularMass?: Single< NumberProperty< 'mass' > >;
  /** The ratio of the average mass of molecules of a substance to one-twelfth the mass of an atom of carbon-12. */
  relativeMolecularMass?: Single< NumberProperty< never > >;

  /** Grouping of properties related to the proton-donor or acceptor behavior. */
  basicity?: Group< {
    /** The classification of a substance's ability to accept protons. */
    basicityType?: Single< PrimitiveProperty< BasicityType > >;
    /** The overall nature of a substance in acid-base reactions (acidic, basic, amphoteric). */
    acidBaseCharacter?: Single< PrimitiveProperty< AcidBaseCharacter > >;
    /** The negative logarithm of the acid dissociation constant. */
    pKa?: Single< NumberProperty< never > >;
    /** The negative logarithm of the base dissociation constant. */
    pKb?: Single< NumberProperty< never > >;
    /** The measure of acidity or basicity of an aqueous solution. */
    pH?: Single< NumberProperty< never > >;
    /** The pH at which a particular molecule carries no net electrical charge. */
    isoelectricPoint?: Single< NumberProperty< never > >;
    /** The classification based on the ability to accept or donate electron pairs. */
    lewisAcidity?: Single< PrimitiveProperty< LewisModel > >;
    /** The classification based on the ability to donate electron pairs. */
    lewisBasicity?: Single< PrimitiveProperty< LewisModel > >;
    /** The classification of elements based on their preferred natural host phases. */
    goldschmidt?: Single< PrimitiveProperty< Goldschmidt > >;
    /** The Hard and Soft Acids and Bases classification of chemical species. */
    hsab?: Single< PrimitiveProperty< HSAB > >;
  } >;

  /** Grouping of properties related to the loss or gain of electrons. */
  oxidation?: Group< {
    /** The acidic or basic behavior of an element's oxide. */
    oxideCharacter?: Single< PrimitiveProperty< OxideCharacter > >;
    /** The formal charge an atom would have if all bonds were ionic. */
    oxidationStates?: Single< StructProperty< {
      /** The numeric value of the formal charge. */
      value: number;
      /** Indicates if this is a primary or most common oxidation state. */
      main?: boolean;
      /** Indicates if the state is unstable, rare or only occurs in specific complexes. */
      unstable?: boolean;
      /** Specific chemical context or remarks regarding this oxidation state. */
      context?: string;
    } > >;
  } >;

  /** Grouping of properties related to the relationship between electricity and chemical change. */
  electrochemistry?: Group< {
    /** The electromotive force of a cell under standard conditions. */
    standardPotential?: Single< NumberProperty< 'electricPotential' > >;
    /** The potential of a reduction half-reaction under standard conditions. */
    standardReductionPotential?: Single< NumberProperty< 'electricPotential' > >;
    /** The potential of an oxidation half-reaction under standard conditions. */
    standardOxidationPotential?: Single< NumberProperty< 'electricPotential' > >;
    /** The potential difference between a redox event's equilibrium potential and the actual applied potential. */
    overpotential?: Single< NumberProperty< 'electricPotential' > >;
    /** The mass of a substance altered by one ampere-second of electric current. */
    electrochemicalEquivalent?: Single< NumberProperty< 'mass' > >;
  } >;

  /** Grouping of thermodynamic energy state functions. */
  thermochemistry?: Group< {
    /** The maximum amount of non-expansion work that can be extracted from a closed system. */
    standardGibbsEnergy?: Single< NumberProperty< 'energy' > >;
    /** The energy required to break a molecule into its constituent atoms. */
    bindingEnergy?: Single< NumberProperty< 'energy' > >;
  } >;

  /** Grouping of properties describing the ability of a substance to dissolve in a solvent. */
  solubility?: Group< {
    /** A qualitative descriptor of a substance's capacity to dissolve. */
    quantifier?: Single< PrimitiveProperty< SolubilityQualifier > >;
    /** The maximum amount of the substance that will dissolve in water at equilibrium. */
    waterSolubility?: Single< NumberProperty< 'concentration' > >;
    /** The equilibrium constant for the dissolution of an ionic compound in water. */
    solubilityProduct?: Single< NumberProperty< never > >;
    /** The ratio of the concentration of a gas in a solution to its partial pressure in the gas phase. */
    henryConstant?: Single< NumberProperty< never > >;
  } >;

  /** Grouping of properties describing the three-dimensional arrangement of atoms in a molecule. */
  molecularStructure?: Group< {
    /** The spatial arrangement of atoms in a molecule and the chemical bonds that hold them together. */
    shape?: Single< PrimitiveProperty< MolecularShape > >;
    /** The concept of mixing atomic orbitals to form new hybrid orbitals suitable for bonding. */
    hybridization?: Single< PrimitiveProperty< Hybridization > >;
    /** The number of atoms, groups, or lone pairs surrounding a central atom. */
    stericNumber?: Single< PrimitiveProperty< number > >;
    /** A pair of valence electrons that are not shared with another atom in a covalent bond. */
    lonePairs?: Single< PrimitiveProperty< number > >;
    /** The number of atoms or ions immediately surrounding a central atom in a complex or crystal. */
    coordinationNumber?: Single< PrimitiveProperty< number > >;
    /** The average distance between the nuclei of two bonded atoms. */
    bondLength?: Single< NumberProperty< 'length' > >;
    /** The angle formed between two adjacent bonds on the same atom. */
    bondAngle?: Single< NumberProperty< 'angle' > >;
    /** The angle between two planes defined by two sets of three atoms. */
    torsionalAngle?: Single< NumberProperty< 'angle' > >;
    /** The classification of the chemical connection between atoms (e.g., ionic, covalent). */
    bondType?: Single< PrimitiveProperty< BondType > >;
    /** A measure of the number of chemical bonds between a pair of atoms. */
    bondOrder?: Single< PrimitiveProperty< number > >;
  } >;
} >;
