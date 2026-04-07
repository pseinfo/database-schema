/**
 * Compound Entity
 * Defines the database entity for chemical compounds and substances.
 */

import type { LiteralUnion } from 'devtypes/types/primitive';

import type { Collection, Distinct, Group, LangGroup } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { ChemistryCollection } from '../collections/chemistry';
import type { PhysicsCollection } from '../collections/physics';
import type { SafetyCollection } from '../collections/safety';
import type { RegistryGroup, StructureGroup } from '../collections/registry';
import type { AbundanceGroup, DiscoveryGroup, MediaGroup, MetaData, WeblinksGroup } from '../collections/generic';
import type { CompoundCategory, CompoundProperty, ElementSymbol, Phase } from '../utils/const';

/** Compound collections */

/**
 * ComponentComponent
 * Defines the structure for components of a chemical compound.
 * 
 * @param element - Chemical symbol of the element in the component
 * @param amount - Amount of the element in the compound (e.g., moles, mass)
 * @param role - Optional role of the component in the compound (e.g., cation, anion)
 * @param massFraction - Optional mass fraction of the element in the compound
 * @param atomicFraction - Optional atomic fraction of the element in the compound
 */
type CompoundComponent = Group< {
    element: ElementSymbol;
    amount: Distinct< number >;
    role?: Distinct< LiteralUnion< 'cation' | 'anion' | 'neutral' | 'radical' | 'complex' > >;
    massFraction?: Distinct< number >;
    atomicFraction?: Distinct< number >;
} >;

/**
 * Descriptive
 * Collections for descriptive properties of chemical compounds.
 * 
 * @param registry - Registry information group
 * @param structure - Structural information group
 * @param names - Names in different languages
 * @param description - Descriptions in different languages
 * @param appearance - Appearance descriptions in different languages
 * @param abundance - Natural abundance information group
 * @param discovery - Discovery information group
 * @param properties - List of compound properties
 * @param media - Media information group
 * @param weblinks - Weblinks information group
 */
type Descriptive = Collection< {
    registry: RegistryGroup;
    structure: StructureGroup;
    names: LangGroup< 'en' | 'la' >;
    description?: LangGroup;
    appearance?: LangGroup;
    abundance?: AbundanceGroup;
    discovery?: DiscoveryGroup;
    properties?: Distinct< CompoundProperty[] >;
    media?: MediaGroup;
    weblinks?: WeblinksGroup;
} >;

/**
 * Classification
 * Collections for classification properties of chemical compounds.
 * 
 * @param category - Category of the compound (e.g., organic, inorganic)
 * @param family - Optional family classification of the compound (e.g., alcohols, ketones)
 * @param formula - Chemical formula of the compound
 * @param formulaType - Type of chemical formula (e.g., empirical, molecular)
 * @param phase - Standard phase at room temperature
 */
type Classification = Collection< {
    category?: Distinct< CompoundCategory >;
    family?: Distinct< string >;
    formula: Distinct< string >;
    formulaType?: Distinct<
        'empirical' | 'molecular' | 'structural' | 'condensed' |
        'skeletal' | 'ionic' | 'coordination'
    >;
    phase?: Distinct< Phase >;
} >;

/** Main compound entity */

/**
 * SingleCompound
 * Entity type for a single chemical compound, indexed by a unique identifier.
 * 
 * @param descriptive - Descriptive collections for the compound
 * @param classification - Classification collections for the compound
 */
type SingleCompound = Collection< {
    descriptive: Descriptive;
    classification: Classification;
} >;

/**
 * Compound
 * Entity type for chemical compounds, indexed by a unique identifier.
 * 
 * Each compound entry includes metadata, descriptive content, classification,
 * composition details, chemical and physical properties, safety data, and
 * optional specialized forms such as polymorphs, solvates, or phase variants.
 */
export type Compound = {
    [ key: string ]: MetaData & SingleCompound & {
        forms?: FormCollection< SingleCompound >;
    };
};
