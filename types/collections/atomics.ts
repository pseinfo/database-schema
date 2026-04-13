/**
 * Atomics Collection
 * Collection of atomic properties for chemical elements.
 * 
 * @module collections/atomics
 */

import type { Collection, Group, Single } from '../abstract/collection';
import type { ArrayProperty, NumberProperty, PrimitiveProperty, StructProperty } from '../abstract/property';
import type { ShellModel } from '../enums/element';
import type { NMRGroup } from './nuclear';


/**
 * Collection for atomic properties of chemical elements.
 * 
 * @param atomicNumber - Atomic number of the element
 * @param massNumber - Mass number of the element
 * @param electronConfig - Electron configuration string
 * @param shellModel - Electron shell model distribution
 * @param ionizationEnergies - List of ionization energies
 * @param mass - Group of atomic mass properties
 * @param radius - Group of atomic radius properties
 * @param nmr - Group of nuclear magnetic resonance properties
 */
export type AtomicsCollection = Collection< {

    // Basic atomic properties
    atomicNumber?: Single< PrimitiveProperty< number > >;
    massNumber?: Single< PrimitiveProperty< number > >;

    // Electron configuration
    electronConfig?: Single< PrimitiveProperty< string > >;
    shellModel?: Single< StructProperty< {
        [ K in ShellModel ]: number;
    } > >;

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
    nmr?: NMRGroup;

} >;
