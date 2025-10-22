/**
 * Nuclides Collection
 * Defines the collection for nuclides (isotopes of elements).
 */

import { Collection } from '../abstract/collection';
import { MetaData } from '../collection/generic';
import { ElementSymbol } from '../element';

// Type for a single nuclide entry (all properties)
type SingleNuclide = Collection< {} >;

// Collection type for all nuclides, indexed by their element symbol
export type NuclideCollection = {
    [ K in ElementSymbol ]?: MetaData & {
        nuclides: Record< string, SingleNuclide >;
    };
};
