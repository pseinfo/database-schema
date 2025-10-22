/**
 * Database Schema
 * Defines the root structure of the database schema.
 */

import { ReferenceCollection } from './abstract/reference';
import { UnitCollection } from './abstract/unit';
import { CompoundCollection } from './compound';
import { ElementCollection } from './element';
import { NuclideCollection } from './nuclide';

export type DataBase = {
    elements: ElementCollection;
    nuclides: NuclideCollection;
    compounds: CompoundCollection;
    references: ReferenceCollection;
    units: UnitCollection;
};
