/**
 * Compound Entity
 * Defines the database entity for chemical compounds and substances.
 * 
 * @module entities/compound
 */

import type { Collection, Distinct, Single } from '@/abstract/collection';
import type { FormCollection } from '@/abstract/form';
import type { PrimitiveProperty } from '@/abstract/property';
import type { ChemistryCollection } from '@/collections/chemistry';
import type { CompositionCollection } from '@/collections/composition';
import type { DescriptiveCollection } from '@/collections/descriptive';
import type { MetaData } from '@/collections/generic';
import type { PhysicsCollection } from '@/collections/physics';
import type { SafetyCollection } from '@/collections/safety';
import type { CompoundCategory, CompoundPolarity, CompoundProperty } from '@/enums/compound';
import type { NaturalOccurrence, Phase } from '@/enums/generic';


/** Compound collections */

/**
 * Collections for classification properties of chemical compounds.
 * 
 * @param category - Category of the compound (e.g., organic, inorganic)
 * @param family - Optional family classification of the compound (e.g., alcohols, ketones)
 * @param radioactive - Whether the compound is radioactive
 * @param phase - Standard phase at room temperature
 * @param naturalOccurrence - Natural occurrence type
 */
export type CompoundClassification = Collection< {
    category: Single< PrimitiveProperty< CompoundCategory > >;
    family?: Single< PrimitiveProperty< string > >;
    radioactive: Single< PrimitiveProperty< boolean > >;
    phase?: Single< PrimitiveProperty< Phase > >;
    naturalOccurrence?: Single< PrimitiveProperty< NaturalOccurrence > >;
} >;

/**
 * Collections for compositional properties of chemical compounds.
 * 
 * @param molecularFormula - Molecular formula of the compound
 * @param simplifiedFormula - Simplified formula of the compound
 * @param multiplicity - Multiplicity of the compound (e.g., for radicals)
 * @param aromatic - Whether the compound is aromatic
 * @param polarity - Polarity of the compound (nonpolar, polar, amphipathic)
 * @param stoichiometry - Stoichiometric information for the compound
 * @param repeatUnit - Repeat unit for polymers
 * @param hydration - Number of water molecules in hydrates
 * @param functionalGroups - List of functional groups present in the compound
 */
export type CompoundComposition = Collection< CompositionCollection & {
    molecularFormula?: Single< PrimitiveProperty< string > >;
    simplifiedFormula?: Single< PrimitiveProperty< string > >;
    multiplicity?: Single< PrimitiveProperty< number > >;
    aromatic?: Single< PrimitiveProperty< boolean > >;
    polarity?: Single< PrimitiveProperty< CompoundPolarity > >;
    stoichiometry?: Single< PrimitiveProperty< string > >;
    repeatUnit?: Single< PrimitiveProperty< string > >;
    hydration?: Single< PrimitiveProperty< number > >;
    functionalGroups?: Single< PrimitiveProperty< string > >;
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
 * @param properties - Distinct list of compound properties
 * @param safety - Optional safety properties collection
 */
export type SingleCompound = Collection< {
    descriptive: DescriptiveCollection;
    classification: CompoundClassification;
    composition: CompoundComposition;
    physics?: PhysicsCollection;
    chemistry?: ChemistryCollection;
    properties?: Distinct< CompoundProperty[] >;
    safety?: SafetyCollection;
} >;

/**
 * Entity type for chemical compounds, indexed by a unique identifier.
 * 
 * Each compound entry includes metadata, descriptive content, classification,
 * composition details, chemical and physical properties, safety data, and
 * optional specialized forms such as polymorphs, solvates, or phase variants.
 */
export type Compound = Collection< {
    [ key: string ]: MetaData & SingleCompound & {
        forms?: FormCollection< SingleCompound >;
    };
} >;
