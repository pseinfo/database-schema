/**
 * Safety Collection
 * Defines the structure for safety-related information in the database schema.
 */

import { Collection } from '../abstract/collection';
import { Toxicity } from './generic';
import { Hazard } from './hazard';

export type SafetyCollection = Collection< {
    hazard?: Hazard;
    toxicity?: Toxicity;
} >;
