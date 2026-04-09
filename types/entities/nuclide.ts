/**
 * Nuclide Entity
 * Defines the database entity for nuclear isotopes and metastable nuclide states.
 * 
 * Nuclides are grouped by their parent chemical element and then by mass number
 * plus optional metastable state identifiers (e.g. "99", "99m", "99m1").
 */

import { Collection, Distinct } from '../abstract/collection';
import { DescriptiveCollection } from '../collections/descriptive';
import type { MetaData } from '../collections/generic';
import type { ElementSymbol, NuclideStability, NuclideState } from '../utils/const';

/** Valid nuclide identifiers with optional metastable state suffix. */
type NuclideIdentifier = `${number}` | `${number}m` | `${number}m${number}`;

/** Nuclide collections */

/**
 * NuclideClassification
 * Collection for classification properties of nuclides.
 * 
 * @param element - Parent element symbol
 * @param atomicNumber - Atomic number (Z)
 * @param neutronNumber - Neutron number (N)
 * @param massNumber - Mass number (A)
 * @param state - Nuclide state (ground, metastable, etc.)
 * @param stability - Nuclide stability classification
 * @param spinParity - Spin and parity information
 * @param parity - Parity classification
 * @param isomericLevel - Isomeric level information for metastable states
 */
type NuclideClassification = Collection< {
    element: Distinct< ElementSymbol >;
    atomicNumber: Distinct< number >;
    neutronNumber: Distinct< number >;
    massNumber: Distinct< number >;
    state?: Distinct< NuclideState >;
    stability?: Distinct< NuclideStability >;
    spinParity?: Distinct< string >;
    parity?: Distinct< '+' | '-' | 'unknown' >;
    isomericLevel?: Distinct< string >;
} >;

/** Main nuclide entity */

/**
 * SingleNuclide
 * Type for a single nuclide entry (all properties).
 * 
 * @param descriptive - Descriptive properties collection
 * @param classification - Classification properties collection
 */
type SingleNuclide = {
    descriptive: DescriptiveCollection;
    classification: NuclideClassification;
};

/**
 * Nuclide
 * Entity type for nuclear isotopes, indexed by element symbol and nuclide identifier.
 * 
 * Each nuclide will have descriptive, classification, decay, NMR and
 * nuclear properties, as well as metadata.
 */
export type Nuclide = {
    [ K in ElementSymbol ]?: {
        [ A in NuclideIdentifier ]?: MetaData & SingleNuclide;
    };
};
