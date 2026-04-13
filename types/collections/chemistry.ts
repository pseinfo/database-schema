/**
 * Chemistry Collection
 * Defined collection types for chemical properties and data.
 * 
 * @module collections/chemistry
 */

import type { Collection, Group, Single } from '@/abstract/collection';
import type { NumberProperty, PrimitiveProperty, StructProperty } from '@/abstract/property';
import type { AcidBaseCharacter, BondType, HSAB, Hybridization, LewisAcidity, LewisBasicity, OxideCharacter } from '@/enums/chemistry';
import type { CrystalSystem } from '@/enums/generic';


/**
 * Collection for chemical properties of elements.
 * 
 * @param molarMass - Molar mass of the substance
 * @param molarVolume - Molar volume of the substance
 * @param basicity - Acid/base properties group
 * @param electronegativity - Electronegativity values group
 * @param crystal - Crystallographic properties group
 * @param electrochemistry - Electrochemical properties group
 * @param oxidation - Oxidation properties group
 * @param bonding - Bonding properties group
 * @param solubility - Solubility properties group
 * @param thermochemistry - Thermochemical properties group
 * @param reactivity - Reactivity properties group
 * @param stability - Stability properties group
 */
export type ChemistryCollection = Collection< {

    // Fundamental chemical properties
    molarMass?: Single< NumberProperty< 'molarMass' > >;
    molarVolume?: Single< NumberProperty< 'molarVolume' > >;

    // Acid / base properties
    basicity?: Group< {
        character?: Single< PrimitiveProperty< AcidBaseCharacter > >;
        pKa?: Single< PrimitiveProperty< number > >;
        pKb?: Single< PrimitiveProperty< number > >;
        isoelectricPoint?: Single< PrimitiveProperty< number > >;
        lewisAcidity?: Single< PrimitiveProperty< LewisAcidity > >;
        lewisBasicity?: Single< PrimitiveProperty< LewisBasicity > >;
        hsab?: Single< PrimitiveProperty< HSAB > >;
    } >;

    // Electronegativity
    electronegativity?: Group< {
        pauling?: Single< PrimitiveProperty< number > >;
        sanderson?: Single< PrimitiveProperty< number > >;
        allredRochow?: Single< PrimitiveProperty< number > >;
        mulliken?: Single< PrimitiveProperty< number > >;
        allen?: Single< PrimitiveProperty< number > >;
        ghoshGupta?: Single< NumberProperty< 'energy' > >;
        nagle?: Single< PrimitiveProperty< number > >;
        pearson?: Single< NumberProperty< 'energy' > >;
        martynov?: Single< PrimitiveProperty< number > >;
        gordy?: Single< PrimitiveProperty< number > >;
    } >;

    // Crystallographic properties
    crystal?: Group< {
        crystalSystem?: Single< PrimitiveProperty< CrystalSystem > >;
        crystalClass?: Single< PrimitiveProperty< string > >;
        spaceGroup?: Single< StructProperty< {
            number: number;
            symbol: string;
        } > >;
        schoenfliesSymbol?: Single< PrimitiveProperty< string > >;
        pearsonSymbol?: Single< PrimitiveProperty< string > >;
        latticeConstant?: Single< StructProperty< {
            a?: number;
            b?: number;
            c?: number;
            alpha?: number;
            beta?: number;
            gamma?: number;
            Z?: number;
        } > >;
        twinning?: Single< PrimitiveProperty< string > >;
        habit?: Single< PrimitiveProperty< string > >;
        faces?: Single< PrimitiveProperty< string > >;
    } >;

    // Electrochemical properties
    electrochemistry?: Group< {
        standardPotential?: Single< NumberProperty< 'electricPotential' > >;
        standardReductionPotential?: Single< NumberProperty< 'electricPotential' > >;
        standardOxidationPotential?: Single< NumberProperty< 'electricPotential' > >;
        overpotential?: Single< NumberProperty< 'electricPotential' > >;
        electrochemicalEquivalent?: Single< NumberProperty< 'mass' > >;
    } >;

    // Oxidation properties
    oxidation?: Group< {
        oxidationStates?: Single< PrimitiveProperty< string > >;
        oxideCharacter?: Single< PrimitiveProperty< OxideCharacter > >;
    } >;

    // Bonding
    bonding?: Group< {
        bondType?: Single< PrimitiveProperty< BondType > >;
        bondOrder?: Single< PrimitiveProperty< number > >;
        bondLength?: Single< NumberProperty< 'length' > >;
        bondEnergy?: Single< NumberProperty< 'energy' > >;
        bondAngle?: Single< NumberProperty< 'angle' > >;
        hybridization?: Single< PrimitiveProperty< Hybridization > >;
    } >;

    // Solubility
    solubility?: Group< {
        waterSolubility?: Single< NumberProperty< 'concentration' > >;
        solubilityProduct?: Single< PrimitiveProperty< number > >;
        henryConstant?: Single< NumberProperty< 'pressure' > >;
    } >;

    // Thermochemical properties
    thermochemistry?: Group< {
        standardGibbsEnergy?: Single< NumberProperty< 'energy' > >;
        bindingEnergy?: Single< NumberProperty< 'energy' > >;
    } >;

    // Chemical stability and reactivity
    stability?: Group< {
        airSensitive?: Single< PrimitiveProperty< boolean > >;
        hygroscopic?: Single< PrimitiveProperty< boolean > >;
        photosensitive?: Single< PrimitiveProperty< boolean > >;
        deliquescent?: Single< PrimitiveProperty< boolean > >;
        pyrophoric?: Single< PrimitiveProperty< boolean > >;
    } >;

    // Reactivity properties
    reactivity?: Group< {
        corrosive?: Single< PrimitiveProperty< boolean > >;
        explosive?: Single< PrimitiveProperty< boolean > >;
        oxidizing?: Single< PrimitiveProperty< boolean > >;
        flammable?: Single< PrimitiveProperty< boolean > >;
    } >;

} >;
