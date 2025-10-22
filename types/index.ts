/**
 * Database Schema
 * Defines the root structure of the database schema.
 */

import { ReferenceCollection } from './abstract/reference';
import { UnitCollection } from './abstract/unit';
import { ElementCollection } from './element';
import { NuclideCollection } from './nuclides';

export type DataBase = {
    elements: ElementCollection;
    nuclides: NuclideCollection;
    references: ReferenceCollection;
    units: UnitCollection;
};
