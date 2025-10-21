/**
 * Database Schema
 * Defines the root structure of the database schema.
 */

import { ReferenceCollection } from './abstract/reference';
import { UnitCollection } from './abstract/unit';
import { ElementCollection } from './element';

export type DataBase = {
    elements: ElementCollection;
    references: ReferenceCollection;
    units: UnitCollection;
};
