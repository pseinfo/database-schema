/**
 * Atomics Collection
 * Collection of atomic properties for chemical elements.
 */

import { Collection, Distinct, Group, Single } from '../abstract/collection';
import { ArrayProperty, NumberProperty, PrimitiveProperty } from '../abstract/property';
import { ShellModel } from '../utils/const';

/**
 * AtomicsCollection
 * Collection for atomic properties of elements.
 * 
 * Includes atomic number, mass number, electron configuration, ionization energy,
 * atomic mass, atomic radius, and nuclear magnetic resonance.
 */
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

    // Nuclear magnetic resonance
    nmr?: Group< {
        spin?: Single< PrimitiveProperty< number > >;
        gyromagneticRatio?: Single< NumberProperty< 'magneticMoment' > >;
        magneticMoment?: Single< NumberProperty< 'magneticMoment' > >;
        larmorPrecession?: Single< NumberProperty< 'frequency' > >;
        sensitivity?: Single< PrimitiveProperty< number > >;
    } >;

} >;
