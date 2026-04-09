/**
 * Nuclide Entity
 * Defines the database entity for nuclear isotopes and metastable nuclide states.
 * 
 * Nuclides are grouped by their parent chemical element and then by mass number
 * plus optional metastable state identifiers (e.g. "99", "99m", "99m1").
 */

import { DescriptiveCollection } from '../collections/descriptive';
import type { MetaData } from '../collections/generic';
import type { ElementSymbol } from '../utils/const';

/** Valid nuclide identifiers with optional metastable state suffix. */
type NuclideIdentifier = `${number}` | `${number}m` | `${number}m${number}`;

/** Nuclide collections */

/** Main nuclide entity */

/**
 * SingleNuclide
 * Type for a single nuclide entry (all properties).
 * 
 * @param descriptive - Descriptive properties collection
 */
type SingleNuclide = {
    descriptive: DescriptiveCollection;
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