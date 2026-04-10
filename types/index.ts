/**
 * Database Schema
 * Defines the root structure of the database schema.
 * 
 * This type describes the main entities contained within the database,
 * including elements, chemical compounds, minerals, nuclides, as well as
 * references, and units.
 */

import type { ReferenceCollection } from './abstract/reference';
import type { UnitCollection } from './abstract/unit';

import type { Compound } from './entities/compound';
import type { Element } from './entities/element';
import type { Mineral } from './entities/mineral';
import type { Nuclide } from './entities/nuclide';

/**
 * Database
 * Root database schema type containing all main entities.
 * 
 * @param elements - Collection of chemical elements
 * @param compounds - Collection of chemical compounds
 * @param minerals - Collection of minerals and mineraloids
 * @param nuclides - Collection of nuclear isotopes
 * @param references - Collection of references
 * @param units - Collection of measurement units
 */
export type Database = {
    elements: Element;
    compounds: Compound;
    minerals: Mineral;
    nuclides: Nuclide;
    references: ReferenceCollection;
    units: UnitCollection;
};
