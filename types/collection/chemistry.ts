import type { Collection, Group, Single } from '../abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '../abstract/property';
import type {
  AcidBaseCharacter, BasicityType, BondType, Goldschmidt, HSAB, Hybridization, LewisModel,
  OxideCharacter, SolubilityQualifier
} from '../enum/chemistry';

export type ChemistryCollection = Collection< {
  molarMass?: Single< NumberProperty< 'molarMass' > >;
  molarVolume?: Single< NumberProperty< 'molarVolume' > >;

  basicity?: Group< {
    type?: Single< PrimitiveProperty< BasicityType > >;
    character?: Single< PrimitiveProperty< AcidBaseCharacter > >;
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
    states?: Single< PrimitiveProperty< string > >;
    character?: Single< PrimitiveProperty< OxideCharacter > >;
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

  bonding?: Group< {
    type?: Single< PrimitiveProperty< BondType > >;
    hybridization?: Single< PrimitiveProperty< Hybridization > >;
    order?: Single< PrimitiveProperty< number > >;
    length?: Single< NumberProperty< 'length' > >;
    energy?: Single< NumberProperty< 'energy' > >;
    angle?: Single< NumberProperty< 'angle' > >;
  } >;
} >;
