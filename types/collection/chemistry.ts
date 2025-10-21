import { Collection, Group, Single } from '../abstract/collection';
import { BasicityCharacter, LewisModule } from '../abstract/const';
import { NumberProperty, PrimitiveProperty } from '../abstract/property';
import { CrystalSystemGroup } from './generic';

export type ChemistryCollection = Collection< {

    // Fundamental chemical properties
    molarMass?: Single< NumberProperty< 'molarMass' > >;
    molarVolume?: Single< NumberProperty< 'molarVolume' > >;

    // Acid / base properties
    basicity?: Group< {
        character?: Single< PrimitiveProperty< BasicityCharacter > >;
        pKa?: Single< PrimitiveProperty< number > >;
        pKb?: Single< PrimitiveProperty< number > >;
        lewisAcidity?: Single< PrimitiveProperty< LewisModule > >;
        lewisBasicity?: Single< PrimitiveProperty< LewisModule > >;
        hsab?: Single< PrimitiveProperty< 'hard' | 'borderline' | 'soft' > >;
    }>;

} >;
