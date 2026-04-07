/**
 * Compound Entity
 * Defines the database entity for chemical compounds and substances.
 */

import { Collection, Distinct, LangGroup } from '../abstract/collection';
import { FormCollection } from '../abstract/form';
import { ChemistryCollection } from '../collections/chemistry';
import { PhysicsCollection } from '../collections/physics';
import { SafetyCollection } from '../collections/safety';
import { RegistryGroup, StructureGroup } from '../collections/registry';
import { DiscoveryGroup, MediaGroup, MetaData, WeblinksGroup } from '../collections/generic';
import { ElementSymbol } from '../utils/const';

/** Compound collections */

/**
 * Compound
 * Entity type for chemical compounds, indexed by a unique identifier.
 * 
 * Each compound entry includes metadata, descriptive content, classification,
 * composition details, chemical and physical properties, safety data, and
 * optional specialized forms such as polymorphs, solvates, or phase variants.
 */
export type Compound = {};
