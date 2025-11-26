/**
 * Database Schema
 * Defines the root structure of the database schema.
 */

import { ReferenceCollection } from './abstract/reference';
import { UnitCollection } from './abstract/unit';
import { Element } from './entities/element';

export type Database = {
    elements: Element;
    references: ReferenceCollection;
    units: UnitCollection;
};
