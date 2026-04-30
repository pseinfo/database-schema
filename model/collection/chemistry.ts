/**
 * @file model/collection/chemistry.ts
 * @description Core chemical and thermodynamic properties, including acid-base behavior,
 * redox states, and crystallographic parameters.
 */

import type {
  AcidBaseCharacter, BasicityType, BondType, BronstedCharacter, CleavageQuality,
  CleavageType, CrystalFamily, CrystalHabit, CrystalSystem, FractureType, Goldschmidt,
  HSAB, Hybridization, LewisModel, MolecularShape, OxideCharacter, SolubilityQualifier,
  Tenacity, TwinningMode, TwinningType
} from '../../enum/science/chemistry';
import type { ElementSymbol } from '../../enum/science/element';
import type { DomainType } from '../../enum/system/domain';
import type { Collection, Group, Many, OneOrMany } from '../base/modifier';
import type { NumberProperty, PrimitiveProperty, StructProperty } from '../base/property';
import type { NumberValue } from '../base/value';
import type { CompoundId } from '../domain/compound';
import type { MixtureId } from '../domain/mixture';
import type { NoUnit } from '../registry/unit';

/** Structural model for the concentration of a substance in a solvent at equilibrium. */
export type Solubility = {
  /** The substance in which the solute is dissolved. */
  solvent:
    | { type: DomainType.COMPOUND, id: CompoundId }
    | { type: DomainType.MIXTURE, id: MixtureId }
    | string;
  /** Quantitative concentration (e.g., mol/L) of the solute. */
  value?: NumberValue< 'concentration' >;
  /** The solubility product constant for ionic compounds. */
  ksp?: NumberValue< NoUnit >;
  /** Qualitative description of the degree of solubility. */
  qualifier?: SolubilityQualifier;
};

/** Grouping of fundamental chemical characteristics and structural data. */
export type ChemistryCollection = Collection< {
  /** Mass of one mole of the substance. */
  molarMass?: OneOrMany< NumberProperty< 'molarMass' > >;
  /** Volume occupied by one mole of the substance. */
  molarVolume?: OneOrMany< NumberProperty< 'molarVolume' > >;
  /** Mass of a single molecule or formula unit. */
  molecularMass?: OneOrMany< NumberProperty< 'mass' > >;
  /** Ratio of the average mass per molecule to the atomic mass constant. */
  relativeMolecularMass?: OneOrMany< NumberProperty< NoUnit > >;

  /** Thermodynamic state functions and bonding energies. */
  thermochemistry?: Group< {
    /** Properties defining the thermodynamic state. */
    state?: Group< {
      /** Measure of the system's thermal energy per unit temperature that is unavailable for work. */
      entropy?: OneOrMany< NumberProperty< 'entropy' > >;
      /** Molar entropy of the substance at standard conditions. */
      standardMolarEntropy?: OneOrMany< NumberProperty< 'entropy' > >;
      /** Total heat content of the system. */
      enthalpy?: OneOrMany< NumberProperty< 'energy' > >;
      /** The maximum reversible work that may be performed by the system at constant temperature and pressure. */
      gibbsEnergy?: OneOrMany< NumberProperty< 'energy' > >;
    } >;
    /** Energies associated with the formation of the substance. */
    formation?: Group< {
      /** Heat change during the formation of one mole of the substance. */
      enthalpy?: OneOrMany< NumberProperty< 'energy' > >;
      /** Change in Gibbs free energy during formation. */
      gibbsEnergy?: OneOrMany< NumberProperty< 'energy' > >;
    } >;
    /** Energies associated with chemical bonds. */
    bonding?: Group< {
      /** Total energy of chemical bonding. */
      energy?: OneOrMany< NumberProperty< 'energy' > >;
      /** Energy required to break a specific chemical bond. */
      dissociationEnergy?: OneOrMany< NumberProperty< 'energy' > >;
    } >;
  } >;

  /** Properties related to the relationship between electrical potential and chemical change. */
  electrochemistry?: Group< {
    /** Quantitative measures of electrode potential. */
    potentials?: Group< {
      /** Potential of an electrode under standard conditions. */
      standardPotential?: OneOrMany< NumberProperty< 'electricPotential' > >;
      /** Tendency of a species to be reduced. */
      reductionPotential?: OneOrMany< NumberProperty< 'electricPotential' > >;
      /** Tendency of a species to be oxidized. */
      oxidationPotential?: OneOrMany< NumberProperty< 'electricPotential' > >;
      /** The difference between the theoretically determined and actual reduction potential. */
      overpotential?: OneOrMany< NumberProperty< 'electricPotential' > >;
    } >;
    /** Parameters governing mass transfer in electrochemical reactions. */
    transfer?: Group< {
      /** Mass of a substance altered at an electrode by one coulomb of electricity. */
      electrochemicalEquivalent?: OneOrMany< NumberProperty< 'mass' > >;
    } >;
  } >;

  /** Quantitative and qualitative properties of acidity and basicity. */
  acidBase?: Group< {
    /** The nature of the substance's basicity. */
    basicityType?: OneOrMany< PrimitiveProperty< BasicityType > >;
    /** General classification as an acid or base. */
    character?: OneOrMany< PrimitiveProperty< AcidBaseCharacter > >;
    /** Quantitative constants defining acid-base strength. */
    constants?: Group< {
      /** Negative base-10 logarithm of the acid dissociation constant. */
      pKa?: OneOrMany< NumberProperty< NoUnit > >;
      /** Negative base-10 logarithm of the base dissociation constant. */
      pKb?: OneOrMany< NumberProperty< NoUnit > >;
      /** Measure of the acidity or basicity of an aqueous solution. */
      pH?: OneOrMany< NumberProperty< NoUnit > >;
      /** The pH at which a molecule carries no net electrical charge. */
      isoelectricPoint?: OneOrMany< NumberProperty< NoUnit > >;
    } >;
    /** Characterization according to standard acid-base models. */
    models?: Group< {
      /** Classification according to the Brønsted-Lowry proton transfer model. */
      bronstedCharacter?: OneOrMany< PrimitiveProperty< BronstedCharacter > >;
      /** Acidity according to the Lewis electron-pair model. */
      lewisAcidity?: OneOrMany< PrimitiveProperty< LewisModel > >;
      /** Basicity according to the Lewis electron-pair model. */
      lewisBasicity?: OneOrMany< PrimitiveProperty< LewisModel > >;
    } >;
    /** Advanced classifications like HSAB or Goldschmidt. */
    concepts?: Group< {
      /** Classification according to the Goldschmidt geochemical model. */
      goldschmidt?: OneOrMany< PrimitiveProperty< Goldschmidt > >;
      /** Hard and Soft Acids and Bases (Pearson) classification. */
      hsab?: OneOrMany< PrimitiveProperty< HSAB > >;
    } >;
  } >;

  /** Properties related to reduction-oxidation reactions. */
  redox?: Group< {
    /** Acid-base character of the entity's oxides. */
    oxideCharacter?: OneOrMany< PrimitiveProperty< OxideCharacter > >;
    /** List of documented oxidation states of the entity. */
    oxidationStates?: Many< StructProperty< {
      /** The numerical oxidation state. */
      value: number;
      /** Indicates the most common or stable oxidation state. */
      main?: boolean;
      /** Indicates states that are rare or difficult to stabilize. */
      unstable?: boolean;
    } > >;
  } >;

  /** Parameters governing the distribution and dissolution of the substance. */
  solubility?: Group< {
    /** Relationship between the partial pressure of a gas and its concentration in a liquid. */
    henryConstant?: OneOrMany< NumberProperty< NoUnit > >;
    /** Ratio of concentrations of a solute between two immiscible phases. */
    partitionCoefficient?: OneOrMany< NumberProperty< NoUnit > >;
    /** Detailed solubility measurements in various solvents. */
    solubilities?: Many< StructProperty< Solubility > >;
  } >;

  /** geometric and topological properties of molecules and bonds. */
  structural?: Group< {
    /** Spatial arrangement of atoms. */
    geometry?: Group< {
      /** Geometric arrangement of atoms in a molecule. */
      molecularShape?: OneOrMany< PrimitiveProperty< MolecularShape > >;
      /** Type of atomic orbital hybridization (e.g., sp3). */
      hybridization?: OneOrMany< PrimitiveProperty< Hybridization > >;
    } >;
    /** Connectivity and coordination properties. */
    topology?: Group< {
      /** Total number of atoms and lone pairs surrounding a central atom. */
      stericNumber?: OneOrMany< PrimitiveProperty< number > >;
      /** Number of atoms directly bonded to a central atom. */
      coordinationNumber?: OneOrMany< PrimitiveProperty< number > >;
      /** Number of non-bonding electron pairs in the valence shell. */
      lonePairs?: OneOrMany< PrimitiveProperty< number > >;
    } >;
    /** Detailed parameters of chemical bonding. */
    bonding?: Group< {
      /** The nature of the chemical bond (e.g., Covalent, Metallic). */
      bondType?: OneOrMany< PrimitiveProperty< BondType > >;
      /** Numerical measure of the degree of electronic bonding between atoms. */
      bondOrder?: OneOrMany< PrimitiveProperty< number > >;
      /** Angle between two adjacent chemical bonds. */
      bondAngle?: OneOrMany< NumberProperty< 'angle' > >;
      /** Angle between two planes defined by four atoms (dihedral angle). */
      torsionalAngle?: OneOrMany< NumberProperty< 'angle' > >;
      /** Average distance between the nuclei of two bonded atoms. */
      bondLength?: OneOrMany< NumberProperty< 'length' > >;
    } >;
    /** Electronic distribution within the structure. */
    electronic?: Group< {
      /** Theoretical charge of an atom assuming equal shared electron distribution. */
      formalCharge?: OneOrMany< PrimitiveProperty< number > >;
    } >;
  } >;

  /** Detailed symmetric, lattice, and mechanical properties of crystalline solids. */
  crystallography?: Group< {
    /** Symmetry-based classification of the crystal structure. */
    symmetry?: Group< {
      /** Broadest classification of crystal symmetry. */
      crystalFamily?: OneOrMany< PrimitiveProperty< CrystalFamily > >;
      /** Symmetry classification based on lattice parameters. */
      crystalSystem?: OneOrMany< PrimitiveProperty< CrystalSystem > >;
      /** Alphanumeric shorthand for describing crystal structures. */
      pearsonSymbol?: OneOrMany< PrimitiveProperty< string > >;
      /** Geometric symmetry of the crystal's physical form. */
      pointGroup?: OneOrMany< StructProperty< {
        /** International number of the point group. */
        number: number;
        /** Short name of the group. */
        name: string;
        /** Hermann-Mauguin (International) notation. */
        hermannMauguin?: string;
        /** Schoenflies notation. */
        schoenflies?: string;
      } > >;
      /** Centrosymmetric point group representing the lattice symmetry. */
      laueGroup?: OneOrMany< PrimitiveProperty< string > >;
      /** Full symmetry of the crystal structure including translations. */
      spaceGroup?: OneOrMany< StructProperty< {
        /** International number of the space group. */
        number: number;
        /** Standard symbol of the space group. */
        symbol: string;
      } > >;
    } >;
    /** Mathematical framework of the crystal structure. */
    lattice?: Group< {
      /** Parameters defining the geometry of the unit cell. */
      unitCell?: OneOrMany< StructProperty< {
        /** Length of the 'a' axis. */
        a?: NumberValue< 'length' >;
        /** Length of the 'b' axis. */
        b?: NumberValue< 'length' >;
        /** Length of the 'c' axis. */
        c?: NumberValue< 'length' >;
        /** Angle between 'b' and 'c' axes. */
        alpha?: NumberValue< 'angle' >;
        /** Angle between 'a' and 'c' axes. */
        beta?: NumberValue< 'angle' >;
        /** Angle between 'a' and 'b' axes. */
        gamma?: NumberValue< 'angle' >;
        /** Number of formula units per unit cell. */
        Z?: number;
      } > >;
    } >;
    /** Arrangements of atoms surrounding a central site. */
    coordination?: Group< {
      /** Number and identity of atoms surrounding a central atom. */
      ligancy?: OneOrMany< StructProperty< {
        [ K in ElementSymbol ]?: number;
      } > >;
    } >;
    /** External physical appearance of the crystal. */
    morphology?: Group< {
      /** Characteristic external shape of individual crystals. */
      crystalHabit?: OneOrMany< PrimitiveProperty< CrystalHabit > >;
    } >;
    /** Structural imperfections within the crystal lattice. */
    defects?: Group< {
      /** Intergrowth of two or more crystal grains of the same species. */
      twinning?: OneOrMany< StructProperty< {
        /** Qualitative type of twinning. */
        type?: TwinningType;
        /** Mechanical mode of twin formation. */
        mode?: TwinningMode;
        /** The specific crystallographic twin law. */
        law?: string;
        /** The mathematical symmetry operation defining the twin. */
        operation?: string;
      } > >;
    } >;
    /** Mechanical behavior of the solid under stress. */
    mechanical?: Group< {
      /** Tendency of the crystal to split along specific structural planes. */
      cleavage?: OneOrMany< StructProperty< {
        /** Qualitative type of cleavage. */
        type?: CleavageType;
        /** Measure of how easily and smoothly the crystal splits. */
        quality?: CleavageQuality;
        /** Crystallographic plane (Miller index) of the cleavage. */
        millerIndex?: string;
      } > >;
      /** Nature of the surface produced when the crystal is broken. */
      fracture?: OneOrMany< StructProperty< {
        /** Qualitative type of fracture surface (e.g., Conchoidal). */
        type?: FractureType;
        /** Resistance of the material to crack propagation. */
        toughness?: NumberValue< 'energy' >;
        /** Ability of the material to undergo plastic deformation. */
        tenacity?: Tenacity;
      } > >;
    } >;
  } >;
} >;
