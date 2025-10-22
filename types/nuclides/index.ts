/**
 * Nuclides Collection
 * Defines the collection for nuclides (isotopes of elements).
 */

import { MetaData } from '../collection/generic';

// Collection type for all nuclides, indexed by their unique string identifiers
export type NuclideCollection = {
    [ K in string ]: MetaData & {};
};
