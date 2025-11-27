/**
 * Database Schema
 * Defines the root structure of the database schema.
 * 
 * This type describes the main entities contained within the database,
 * including elements, chemical compounds, minerals, nuclides, as well as
 * references, and units.
 */

import { ReferenceCollection } from './abstract/reference';
import { UnitCollection } from './abstract/unit';
import { Element } from './entities/element';

/**
 * Database
 * Root database schema type containing all main entities.
 * 
 * @param elements - Collection of chemical elements
 * @param references - Collection of references
 * @param units - Collection of measurement units
 */
export type Database = {
    elements: Element;
    references: ReferenceCollection;
    units: UnitCollection;
};
