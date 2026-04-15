import type { Collection, Group, Single } from '../abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '../abstract/property';
import type {
  AcidBaseCharacter, BasicityType, BondType, Goldschmidt, HSAB, Hybridization, LewisModel,
  MolecularShape, OxideCharacter, SolubilityQualifier
} from '../enum/chemistry';
import type { PhysicalQuantity } from '../enum/util';

export type ChemistryCollection = Collection< {
  molarMass?: Single< NumberProperty< PhysicalQuantity.MOLAR_MASS > >;
  molarVolume?: Single< NumberProperty< PhysicalQuantity.MOLAR_VOLUME > >;
  standardMolarEntropy?: Single< NumberProperty< PhysicalQuantity.ENTROPY > >;
  formulaMass?: Single< NumberProperty< PhysicalQuantity.MOLAR_MASS > >;

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
    standardPotential?: Single< NumberProperty< PhysicalQuantity.ELECTRIC_POTENTIAL > >;
    standardReductionPotential?: Single< NumberProperty< PhysicalQuantity.ELECTRIC_POTENTIAL > >;
    standardOxidationPotential?: Single< NumberProperty< PhysicalQuantity.ELECTRIC_POTENTIAL > >;
    overpotential?: Single< NumberProperty< PhysicalQuantity.ELECTRIC_POTENTIAL > >;
    electrochemicalEquivalent?: Single< NumberProperty< PhysicalQuantity.MASS > >;
  } >;

  thermochemistry?: Group< {
    standardGibbsEnergy?: Single< NumberProperty< PhysicalQuantity.ENERGY > >;
    bindingEnergy?: Single< NumberProperty< PhysicalQuantity.ENERGY > >;
  } >;

  solubility?: Group< {
    quantifier?: Single< PrimitiveProperty< SolubilityQualifier > >;
    waterSolubility?: Single< NumberProperty< PhysicalQuantity.CONCENTRATION > >;
    solubilityProduct?: Single< PrimitiveProperty< number > >;
    henryConstant?: Single< PrimitiveProperty< number > >;
  } >;

  molecularGeometry?: Group< {
    shape?: Single< PrimitiveProperty< MolecularShape > >;
    hybridization?: Single< PrimitiveProperty< Hybridization > >;
    stericNumber?: Single< PrimitiveProperty< number > >;
    lonePairs?: Single< PrimitiveProperty< number > >;
    coordinationNumber?: Single< PrimitiveProperty< number > >;
    bondLength?: Single< NumberProperty< PhysicalQuantity.LENGTH > >;
    bondAngle?: Single< NumberProperty< PhysicalQuantity.ANGLE > >;
    torsionalAngle?: Single< NumberProperty< PhysicalQuantity.ANGLE > >;
    bondType?: Single< PrimitiveProperty< BondType > >;
    bondOrder?: Single< PrimitiveProperty< number > >;
  } >;
} >;
