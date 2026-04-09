/**
 * Nuclide Entity
 * Defines the database entity for nuclear isotopes and metastable nuclide states.
 * 
 * Nuclides are grouped by their parent chemical element and then by mass number
 * plus optional metastable state identifiers (e.g. "99", "99m", "99m1").
 */

/**
 * Nuclide
 * Entity type for nuclear isotopes, indexed by element symbol and nuclide identifier.
 */
export type Nuclide = {
    [ K in ElementSymbol ]?: {
        [ A in NuclideIdentifier ]?: MetaData & SingleNuclide;
    };
};