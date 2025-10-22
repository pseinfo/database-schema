/**
 * Nuclides Collection
 * 
 */

import { MetaData } from '../collection/generic';

// Collection type for 
export type NuclideCollection = {
    [ K in string ]: MetaData & {};
};
