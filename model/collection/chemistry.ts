import type {
  AcidBaseCharacter, BasicityType, BondType, BronstedCharacter, CleavageQuality,
  CleavageType, CrystalFamily, CrystalHabit, CrystalSystem, FractureType, Goldschmidt,
  HSAB, Hybridization, LewisModel, MolecularShape, OxideCharacter, SolubilityQualifier,
  Tenacity, TwinningMode, TwinningType
} from '../../enum/collection/chemistry';
import type { ElementSymbol } from '../../enum/domain/element';
import type { EntityType } from '../../enum/registry/system';
import type { Collection, Group, Many, OneOrMany } from '../base/modifier';
import type { NumberProperty, PrimitiveProperty, StructProperty } from '../base/property';
import type { NumberValue } from '../base/value';
import type { CompoundId } from '../domain/compound';
import type { MixtureId } from '../domain/mixture';
import type { NoUnit } from '../registry/unit';

export type Solubility = {
  solvent:
    | { type: EntityType.COMPOUND, id: CompoundId }
    | { type: EntityType.MIXTURE, id: MixtureId }
    | string;
  value?: NumberValue< 'concentration' >;
  ksp?: NumberValue< NoUnit >;
  qualifier?: SolubilityQualifier;
};

export type ChemistryCollection = Collection< {
  molarMass?: OneOrMany< NumberProperty< 'molarMass' > >;
  molarVolume?: OneOrMany< NumberProperty< 'molarVolume' > >;
  molecularMass?: OneOrMany< NumberProperty< 'mass' > >;
  relativeMolecularMass?: OneOrMany< NumberProperty< NoUnit > >;

  thermochemistry?: Group< {
    state?: Group< {
      entropy?: OneOrMany< NumberProperty< 'entropy' > >;
      standardMolarEntropy?: OneOrMany< NumberProperty< 'entropy' > >;
      enthalpy?: OneOrMany< NumberProperty< 'energy' > >;
      gibbsEnergy?: OneOrMany< NumberProperty< 'energy' > >;
    } >;
    formation?: Group< {
      enthalpy?: OneOrMany< NumberProperty< 'energy' > >;
      gibbsEnergy?: OneOrMany< NumberProperty< 'energy' > >;
    } >;
    bonding?: Group< {
      energy?: OneOrMany< NumberProperty< 'energy' > >;
      dissociationEnergy?: OneOrMany< NumberProperty< 'energy' > >;
    } >;
  } >;

  electrochemistry?: Group< {
    potentials?: Group< {
      standardPotential?: OneOrMany< NumberProperty< 'electricPotential' > >;
      reductionPotential?: OneOrMany< NumberProperty< 'electricPotential' > >;
      oxidationPotential?: OneOrMany< NumberProperty< 'electricPotential' > >;
      overpotential?: OneOrMany< NumberProperty< 'electricPotential' > >;
    } >;
    transfer?: Group< {
      electrochemicalEquivalent?: OneOrMany< NumberProperty< 'mass' > >;
    } >;
  } >;

  acidBase?: Group< {
    basicityType?: OneOrMany< PrimitiveProperty< BasicityType > >;
    character?: OneOrMany< PrimitiveProperty< AcidBaseCharacter > >;
    constants?: Group< {
      pKa?: OneOrMany< NumberProperty< NoUnit > >;
      pKb?: OneOrMany< NumberProperty< NoUnit > >;
      pH?: OneOrMany< NumberProperty< NoUnit > >;
      isoelectricPoint?: OneOrMany< NumberProperty< NoUnit > >;
    } >;
    models?: Group< {
      bronstedCharacter?: OneOrMany< PrimitiveProperty< BronstedCharacter > >;
      lewisAcidity?: OneOrMany< PrimitiveProperty< LewisModel > >;
      lewisBasicity?: OneOrMany< PrimitiveProperty< LewisModel > >;
    } >;
    concepts?: Group< {
      goldschmidt?: OneOrMany< PrimitiveProperty< Goldschmidt > >;
      hsab?: OneOrMany< PrimitiveProperty< HSAB > >;
    } >;
  } >;

  redox?: Group< {
    oxideCharacter?: OneOrMany< PrimitiveProperty< OxideCharacter > >;
    oxidationStates?: Many< StructProperty< {
      value: number;
      main?: boolean;
      unstable?: boolean;
    } > >;
  } >;

  solubility?: Group< {
    henryConstant?: OneOrMany< NumberProperty< NoUnit > >;
    partitionCoefficient?: OneOrMany< NumberProperty< NoUnit > >;
    solubilities?: Many< StructProperty< Solubility > >;
  } >;

  structural?: Group< {
    geometry?: Group< {
      molecularShape?: OneOrMany< PrimitiveProperty< MolecularShape > >;
      hybridization?: OneOrMany< PrimitiveProperty< Hybridization > >;
    } >;
    topology?: Group< {
      stericNumber?: OneOrMany< PrimitiveProperty< number > >;
      coordinationNumber?: OneOrMany< PrimitiveProperty< number > >;
      lonePairs?: OneOrMany< PrimitiveProperty< number > >;
    } >;
    bonding?: Group< {
      bondType?: OneOrMany< PrimitiveProperty< BondType > >;
      bondOrder?: OneOrMany< PrimitiveProperty< number > >;
      bondAngle?: OneOrMany< NumberProperty< 'angle' > >;
      torsionalAngle?: OneOrMany< NumberProperty< 'angle' > >;
      bondLength?: OneOrMany< NumberProperty< 'length' > >;
    } >;
    electronic?: Group< {
      formalCharge?: OneOrMany< PrimitiveProperty< number > >;
    } >;
  } >;

  crystallography?: Group< {
    symmetry?: Group< {
      crystalFamily?: OneOrMany< PrimitiveProperty< CrystalFamily > >;
      crystalSystem?: OneOrMany< PrimitiveProperty< CrystalSystem > >;
      pearsonSymbol?: OneOrMany< PrimitiveProperty< string > >;
      pointGroup?: OneOrMany< StructProperty< {
        number: number;
        name: string;
        hermannMauguin?: string;
        schoenflies?: string;
      } > >;
      laueGroup?: OneOrMany< PrimitiveProperty< string > >;
      spaceGroup?: OneOrMany< StructProperty< {
        number: number;
        symbol: string;
      } > >;
    } >;
    lattice?: Group< {
      unitCell?: OneOrMany< StructProperty< {
        a?: NumberValue< 'length' >;
        b?: NumberValue< 'length' >;
        c?: NumberValue< 'length' >;
        alpha?: NumberValue< 'angle' >;
        beta?: NumberValue< 'angle' >;
        gamma?: NumberValue< 'angle' >;
        Z?: number;
      } > >;
    } >;
    coordination?: Group< {
      ligancy?: OneOrMany< StructProperty< {
        [ K in ElementSymbol ]?: number;
      } > >;
    } >;
    morphology?: Group< {
      crystalHabit?: OneOrMany< PrimitiveProperty< CrystalHabit > >;
    } >;
    defects?: Group< {
      twinning?: OneOrMany< StructProperty< {
        type?: TwinningType;
        mode?: TwinningMode;
        law?: string;
        operation?: string;
      } > >;
    } >;
    mechanical?: Group< {
      cleavage?: OneOrMany< StructProperty< {
        type?: CleavageType;
        quality?: CleavageQuality;
        millerIndex?: string;
      } > >;
      fracture?: OneOrMany< StructProperty< {
        type?: FractureType;
        toughness?: NumberValue< 'energy' >;
        tenacity?: Tenacity;
      } > >;
    } >;
  } >;
} >;
