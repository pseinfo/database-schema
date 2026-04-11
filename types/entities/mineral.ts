/**
 * Mineral
 * Entity type for minerals, indexed by a unique identifier.
 * 
 * Each mineral entry includes metadata, descriptive content, classification,
 * composition details, chemical and physical properties, safety data, and
 * optional specialized forms.
 */

import type { Collection, Distinct, Group } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { ChemistryCollection } from '../collections/chemistry';
import type { CompositionCollection } from '../collections/composition';
import type { DescriptiveCollection } from '../collections/descriptive';
import type { MetaData } from '../collections/generic';
import type { PhysicsCollection } from '../collections/physics';
import type { SafetyCollection } from '../collections/safety';
import type { IMAStatus, MineralClass, MineralProperty, NaturalOccurrence, Phase } from '../utils/const';

/** Mineral collections */

/**
 * MineralClassification
 * Collections for classification properties of minerals.
 * 
 * @param class - Global mineral class
 * @param group - Mineral group (generic)
 * @param ima - International Mineralogical Association data
 * @param systematics - Classification systems (Strunz, Dana, Lapis)
 * @param similarMinerals - List of similar minerals
 * @param radioactive - Whether the mineral is radioactive
 * @param naturalOccurrence - Natural occurrence type
 */
type MineralClassification = Collection< {
    class: Distinct< MineralClass >;
    group?: Distinct< string >;
    ima?: Group< {
        symbol?: Distinct< string >;
        status?: Distinct< IMAStatus >;
        year?: Distinct< number >;
        notes?: Distinct< string >;
    } >;
    systematics?: Group< {
        strunz8?: Distinct< string >;
        strunz9?: Distinct< string >;
        dana?: Distinct< string >;
        lapis?: Distinct< string >;
    } >;
    similarMinerals?: Distinct< string[] >;
    radioactive: Distinct< boolean >;
    phase?: Distinct< Phase >;
    naturalOccurrence?: Distinct< NaturalOccurrence >;
} >;

/**
 * MineralComposition
 * Collections for compositional properties of minerals.
 * 
 * @param inclusions - Optional inclusions
 * @param varieties - List of major varieties
 * @param alteration - Alteration products or processes
 */
type MineralComposition = Collection< CompositionCollection & {
    inclusions?: Distinct< string[] >;
    varieties?: Distinct< string[] >;
    alteration?: Distinct< string | string[] >;
} >;

/** Main mineral entity */

/**
 * SingleMineral
 * Entity type for a single mineral, indexed by a unique identifier.
 * 
 * @param descriptive - Descriptive collections for the mineral
 * @param classification - Classification collections for the mineral
 * @param composition - Compositional collections for the mineral
 * @param physics - Optional physics properties collection
 * @param chemistry - Optional chemistry properties collection
 * @param properties - Distinct list of mineral properties
 * @param safety - Optional safety properties collection
 */
type SingleMineral = Collection< {
    descriptive: DescriptiveCollection;
    classification: MineralClassification;
    composition: MineralComposition;
    physics?: PhysicsCollection;
    chemistry?: ChemistryCollection;
    properties?: Distinct< MineralProperty[] >;
    safety?: SafetyCollection;
} >;

/**
 * Mineral
 * Entity type for minerals, indexed by a unique identifier.
 * 
 * Each mineral entry includes metadata, descriptive content, classification,
 * composition details, chemical and physical properties, safety data, and
 * optional specialized forms.
 */
export type Mineral = {
    [ key: string ]: MetaData & SingleMineral & {
        forms?: FormCollection< SingleMineral >;
    };
};
