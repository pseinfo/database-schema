import type { Collection, Group, Single } from '../abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '../abstract/property';
import type {
  AcidBaseCharacter, BasicityType, BondType, Goldschmidt, HSAB, Hybridization,
  LewisModel, OxideCharacter, SolubilityQualifier
} from '../enum/chemistry';
import type { PhysicalQuantity } from '../enum/util';

export type ChemistryCollection = Collection< {
  molarMass?: Single< NumberProperty< PhysicalQuantity.MOLAR_MASS > >;
  molarVolume?: Single< NumberProperty< PhysicalQuantity.MOLAR_VOLUME > >;
  standardMolarEntropy?: Single< NumberProperty< PhysicalQuantity.ENTROPY > >;

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

  bonding?: Group< {
    bondType?: Single< PrimitiveProperty< BondType > >;
    hybridization?: Single< PrimitiveProperty< Hybridization > >;
    order?: Single< PrimitiveProperty< number > >;
    length?: Single< NumberProperty< PhysicalQuantity.LENGTH > >;
    energy?: Single< NumberProperty< PhysicalQuantity.ENERGY > >;
    angle?: Single< NumberProperty< PhysicalQuantity.ANGLE > >;
  } >;
} >;
