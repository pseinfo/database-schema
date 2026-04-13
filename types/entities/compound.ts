/**
 * Compound Entity
 * Defines the database entity for chemical compounds and substances.
 * 
 * @module entities/compound
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { Collection, Distinct } from '@/abstract/collection';
import type { FormCollection } from '@/abstract/form';
import type { ChemistryCollection } from '@/collections/chemistry';
import type { CompositionCollection } from '@/collections/composition';
import type { DescriptiveCollection } from '@/collections/descriptive';
import type { MetaData } from '@/collections/generic';
import type { PhysicsCollection } from '@/collections/physics';
import type { SafetyCollection } from '@/collections/safety';
import type { CompoundCategory, CompoundProperty } from '@/enums/compound';
import type { Phase } from '@/enums/generic';


/** Compound collections */

/**
 * Collections for classification properties of chemical compounds.
 * 
 * @param category - Category of the compound (e.g., organic, inorganic)
 * @param family - Optional family classification of the compound (e.g., alcohols, ketones)
 * @param phase - Standard phase at room temperature
 * @param radioactive - Whether the compound is radioactive
 * @param properties - List of compound properties
 */
export type CompoundClassification = Collection< {
    category: Distinct< CompoundCategory >;
    family?: Distinct< string >;
    phase: Distinct< Phase >;
    radioactive: Distinct< boolean >;
    properties: Distinct< CompoundProperty[] >;
} >;

/** Main compound entity */

/**
 * Entity type for a single chemical compound, indexed by a unique identifier.
 * 
 * @param descriptive - Descriptive collections for the compound
 * @param classification - Classification collections for the compound
 * @param composition - Compositional collections for the compound
 * @param physics - Optional physics properties collection
 * @param chemistry - Optional chemistry properties collection
 * @param safety - Optional safety properties collection
 */
export type SingleCompound = Collection< {
    descriptive: DescriptiveCollection;
    classification: CompoundClassification;
    composition: CompositionCollection;
    physics?: PhysicsCollection;
    chemistry?: ChemistryCollection;
    safety?: SafetyCollection;
} >;

/** Type description for a single compound entity. */
export type Compound = Expand< MetaData & SingleCompound & {
    forms?: FormCollection< SingleCompound >; 
} >;

/** Branded unique identifier for indexing compounds */
export type CompoundID = Brand< string, 'compoundID' >;

/**
 * Collection of chemical compounds, indexed by a unique identifier.
 * 
 * Each compound entry includes metadata, descriptive content, classification,
 * composition details, chemical and physical properties, safety data, and
 * optional specialized forms such as polymorphs, solvates, or phase variants.
 */
export type CompoundCollection = Collection< {
    [ key: CompoundID ]: Compound;
} >;
