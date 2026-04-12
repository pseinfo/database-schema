/**
 * Mineral
 * Entity type for minerals, indexed by a unique identifier.
 * 
 * Each mineral entry includes metadata, descriptive content, classification,
 * composition details, chemical and physical properties, safety data, and
 * optional specialized forms.
 * 
 * @module entities/mineral
 */

import type { Collection, Distinct, Group, Single } from '@/abstract/collection';
import type { FormCollection } from '@/abstract/form';
import type { PrimitiveProperty, StructProperty } from '@/abstract/property';
import type { ChemistryCollection } from '@/collections/chemistry';
import type { CompositionCollection } from '@/collections/composition';
import type { DescriptiveCollection } from '@/collections/descriptive';
import type { MetaData } from '@/collections/generic';
import type { PhysicsCollection } from '@/collections/physics';
import type { SafetyCollection } from '@/collections/safety';
import type { NaturalOccurrence, Phase } from '@/enums/generic';
import type { CleavageQuality, FractureType, IMAStatus, MineralClass, MineralProperty, TenacityType } from '@/enums/mineral';


/** Mineral collections */

/**
 * Collections for classification properties of minerals.
 * 
 * @param class - Global mineral class
 * @param group - Mineral group (generic)
 * @param ima - International Mineralogical Association data
 * @param systematics - Classification systems (Strunz, Dana, Lapis)
 * @param similarMinerals - List of similar minerals
 * @param radioactive - Whether the mineral is radioactive
 * @param phase - Standard phase at room temperature
 * @param naturalOccurrence - Natural occurrence type
 */
export type MineralClassification = Collection< {
    class: Single< PrimitiveProperty< MineralClass > >;
    group?: Single< PrimitiveProperty< string > >;
    ima?: Group< {
        symbol?: Single< PrimitiveProperty< string > >;
        status?: Single< PrimitiveProperty< IMAStatus > >;
        year?: Single< PrimitiveProperty< number > >;
        notes?: Single< PrimitiveProperty< string > >;
    } >;
    systematics?: Group< {
        strunz8?: Single< PrimitiveProperty< string > >;
        strunz9?: Single< PrimitiveProperty< string > >;
        dana?: Single< PrimitiveProperty< string > >;
        lapis?: Single< PrimitiveProperty< string > >;
    } >;
    similarMinerals?: Single< PrimitiveProperty< string > >;
    radioactive: Single< PrimitiveProperty< boolean > >;
    phase?: Single< PrimitiveProperty< Phase > >;
    naturalOccurrence?: Single< PrimitiveProperty< NaturalOccurrence > >;
} >;

/**
 * Collections for identification properties of minerals.
 * 
 * @param cleavage - Cleavage properties
 * @param parting - Parting properties
 * @param fracture - Fracture properties
 * @param tenacity - Tenacity properties
 */
export type IdentificationGroup = Group< {
    cleavage?: Single< StructProperty< {
        quality: CleavageQuality;
        direction?: string;
    } > >;
    parting?: Single< PrimitiveProperty< string > >;
    fracture?: Single< PrimitiveProperty< FractureType > >;
    tenacity?: Single< PrimitiveProperty< TenacityType > >;
} >;

/**
 * Collections for compositional properties of minerals.
 * 
 * @param inclusions - Optional inclusions
 * @param varieties - List of major varieties
 * @param alteration - Alteration products or processes
 */
export type MineralComposition = Collection< CompositionCollection & {
    inclusions?: Single< PrimitiveProperty< string > >;
    varieties?: Single< PrimitiveProperty< string > >;
    alteration?: Single< PrimitiveProperty< string > >;
} >;

/** Main mineral entity */

/**
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
export type SingleMineral = Collection< {
    descriptive: DescriptiveCollection;
    classification: MineralClassification;
    composition: MineralComposition;
    physics?: PhysicsCollection & {
        identification?: IdentificationGroup;
    };
    chemistry?: ChemistryCollection;
    properties?: Distinct< MineralProperty[] >;
    safety?: SafetyCollection;
} >;

/**
 * Entity type for minerals, indexed by a unique identifier.
 * 
 * Each mineral entry includes metadata, descriptive content, classification,
 * composition details, chemical and physical properties, safety data, and
 * optional specialized forms.
 */
export type Mineral = Collection< {
    [ key: string ]: MetaData & SingleMineral & {
        forms?: FormCollection< SingleMineral >;
    };
} >;
