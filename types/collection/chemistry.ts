import type { Collection, Group, Single } from '../abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '../abstract/property';
import type {
  AcidBaseCharacter, BasicityType, BondType, Goldschmidt, HSAB, Hybridization, LewisModel,
  MolecularShape, OxideCharacter, SolubilityQualifier
} from '../enum/chemistry';

export type ChemistryCollection = Collection< {
  molarMass?: Single< NumberProperty< 'mass' > >;
  molarVolume?: Single< NumberProperty< 'length' > >;
  standardMolarEntropy?: Single< NumberProperty< 'entropy' > >;
  formulaMass?: Single< NumberProperty< 'mass' > >;

  basicity?: Group< {
    basicityType?: Single< PrimitiveProperty< BasicityType > >;
    acidBaseCharacter?: Single< PrimitiveProperty< AcidBaseCharacter > >;
    pKa?: Single< PrimitiveProperty< number > >;
    pKb?: Single< PrimitiveProperty< number > >;
    pH?: Single< PrimitiveProperty< number > >;
    isoelectricPoint?: Single< PrimitiveProperty< number > >;
    lewisAcidity?: Single< PrimitiveProperty< LewisModel > >;
    lewisBasicity?: Single< PrimitiveProperty< LewisModel > >;
    goldschmidt?: Single< PrimitiveProperty< Goldschmidt > >;
    hsab?: Single< PrimitiveProperty< HSAB > >;
  } >;

  oxidation?: Group< {
    oxidationStates?: Single< PrimitiveProperty< string > >;
    oxideCharacter?: Single< PrimitiveProperty< OxideCharacter > >;
  } >;

  electrochemistry?: Group< {
    standardPotential?: Single< NumberProperty< 'electricPotential' > >;
    standardReductionPotential?: Single< NumberProperty< 'electricPotential' > >;
    standardOxidationPotential?: Single< NumberProperty< 'electricPotential' > >;
    overpotential?: Single< NumberProperty< 'electricPotential' > >;
    electrochemicalEquivalent?: Single< NumberProperty< 'mass' > >;
  } >;

  thermochemistry?: Group< {
    standardGibbsEnergy?: Single< NumberProperty< 'energy' > >;
    bindingEnergy?: Single< NumberProperty< 'energy' > >;
  } >;

  solubility?: Group< {
    quantifier?: Single< PrimitiveProperty< SolubilityQualifier > >;
    waterSolubility?: Single< NumberProperty< 'concentration' > >;
    solubilityProduct?: Single< PrimitiveProperty< number > >;
    henryConstant?: Single< PrimitiveProperty< number > >;
  } >;

  molecularGeometry?: Group< {
    shape?: Single< PrimitiveProperty< MolecularShape > >;
    hybridization?: Single< PrimitiveProperty< Hybridization > >;
    stericNumber?: Single< PrimitiveProperty< number > >;
    lonePairs?: Single< PrimitiveProperty< number > >;
    coordinationNumber?: Single< PrimitiveProperty< number > >;
    bondLength?: Single< NumberProperty< 'length' > >;
    bondAngle?: Single< NumberProperty< 'angle' > >;
    torsionalAngle?: Single< NumberProperty< 'angle' > >;
    bondType?: Single< PrimitiveProperty< BondType > >;
    bondOrder?: Single< PrimitiveProperty< number > >;
  } >;
} >;
