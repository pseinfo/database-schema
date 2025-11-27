/**
 * Chemistry Collection
 * Defined collection types for chemical properties and data.
 */

import { Collection, Distinct, Group, Single } from '../abstract/collection';
import { NumberProperty, PrimitiveProperty } from '../abstract/property';
import { CrystalGroup } from './generic';

/**
 * ChemistryCollection
 * Collection for chemical properties of elements.
 * 
 * Includes molar mass, molar volume, acid/base properties, electronegativity,
 * crystallographic properties, electrochemical properties, oxidation properties,
 * bonding, solubility, and thermochemical properties.
 */
export type ChemistryCollection = Collection< {

    // Fundamental chemical properties
    molarMass?: Single< NumberProperty< 'molarMass' > >;
    molarVolume?: Single< NumberProperty< 'molarVolume' > >;

    // Acid / base properties
    basicity?: Group< {
        character?: Single< PrimitiveProperty<
            'strongAcidic' | 'acidic' | 'moderateAcidic' | 'weakAcidic' | 'amphoteric' |
            'weakBasic' | 'moderateBasic' | 'basic' | 'strongBasic' | 'neutral'
        > >;
        pKa?: Single< PrimitiveProperty< number > >;
        pKb?: Single< PrimitiveProperty< number > >;
        lewisAcidity?: Single< PrimitiveProperty< 'strong' | 'moderate' | 'weak' | 'none' > >;
        lewisBasicity?: Single< PrimitiveProperty< 'strong' | 'moderate' | 'weak' | 'none' > >;
        hsab?: Single< PrimitiveProperty< 'hard' | 'borderline' | 'soft' > >;
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
    crystal?: CrystalGroup;

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
        oxidationStates?: Distinct< string[] >;
        oxideCharacter?: Single< PrimitiveProperty< 'acidic' | 'amphoteric' | 'basic' > >;
    } >;

    // Bonding
    bonding?: Group< {
        bondType?: Single< PrimitiveProperty< 'ionic' | 'covalent' | 'metallic' | 'vdw' | 'hydrogen' > >;
        bondOrder?: Single< PrimitiveProperty< number > >;
        bondLength?: Single< NumberProperty< 'length' > >;
        bondEnergy?: Single< NumberProperty< 'energy' > >;
        bondAngle?: Single< NumberProperty< 'angle' > >;
        hybridization?: Single< PrimitiveProperty< 'sp' | 'sp2' | 'sp3' | 'sp3d' | 'sp3d2' | 'sp3d3' > >;
    } >;

    // Solubility
    solubility?: Group< {
        waterSolubility?: Single< NumberProperty< 'concentration' > >;
        henryConstant?: Single< NumberProperty< 'pressure' > >;
    } >;

    // Thermochemical properties
    thermochemistry?: Group< {
        standardGibbsEnergy?: Single< NumberProperty< 'energy' > >;
        bindingEnergy?: Single< NumberProperty< 'energy' > >;
    } >;

} >;
