/**
 * Chem. Compounds Collection
 * Defines the collection for chemical compounds.
 */

import { MetaData } from '../collection/generic';

// Collection type for all chemical compounds, indexed by their unique identifier
export type CompoundCollection = {
    [ K in string ]?: MetaData & {};
};
