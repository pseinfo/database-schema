/**
 * Atomics Collection
 * Collection of atomic properties for chemical elements.
 */

import { Collection, Distinct, Group, Single } from '../abstract/collection';
import { ShellModel } from '../abstract/const';
import { ArrayProperty, NumberProperty, PrimitiveProperty } from '../abstract/property';

export type AtomicsCollection = Collection< {

    // Basic atomic properties
    atomicNumber?: Distinct< number >;
    massNumber?: Distinct< number >;

    // Electron configuration
    electronConfig?: Single< PrimitiveProperty< string > >;
    shellModel?: Distinct< { [ K in ShellModel ]?: number } >;

    // Ionization energy
    ionizationEnergies?: Single< ArrayProperty< 'energy' > >;

    // Atomic mass
    mass?: Group< {
        atomicMass?: Single< NumberProperty< 'mass' > >;
        standardAtomicWeight?: Single< PrimitiveProperty< number > >;
        relativeAtomicMass?: Single< PrimitiveProperty< number > >;
        massExcess?: Single< NumberProperty< 'energy' > >;
    } >;

    // Atomic radius
    radius?: Group< {
        empiricalRadius?: Single< NumberProperty< 'length' > >;
        calculatedRadius?: Single< NumberProperty< 'length' > >;
        covalentRadius?: Single< NumberProperty< 'length' > >;
        vdwRadius?: Single< NumberProperty< 'length' > >;
    } >;

} >;
