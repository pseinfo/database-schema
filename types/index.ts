/**
 * Database Schema
 * Defines the root structure of the database schema.
 */

import { ReferenceCollection } from './abstract/reference';
import { UnitCollection } from './abstract/unit';
import { ElementEntity } from './entities/element';

export type Database = {
    elements: ElementEntity;
    references: ReferenceCollection;
    units: UnitCollection;
};
