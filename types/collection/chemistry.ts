import type { Collection, Group, Single } from '../abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '../abstract/property';
import type { AcidBaseCharacter, BasicityType, Goldschmidt, HSAB, LewisModel, OxideCharacter } from '../enum/chemistry';

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
} >;
