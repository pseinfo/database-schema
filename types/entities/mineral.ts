/**
 * Mineral Entity
 * Defines the database entity for minerals and mineraloids.
 */

import type { Collection, Distinct } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { ChemistryCollection } from '../collections/chemistry';
import type { DescriptiveCollection } from '../collections/descriptive';
import type { MetaData } from '../collections/generic';
import type { PhysicsCollection } from '../collections/physics';
import type { SafetyCollection } from '../collections/safety';
import type { MineralClass, MineralProperty, NaturalOccurrence, Phase } from '../utils/const';

/** Mineral collections */

/**
 * MineralClassification
 * Collections for classification properties of minerals.
 * 
 * @param class - Classification of the mineral (e.g., Strunz class)
 * @param group - Optional group classification of the mineral
 * @param radioactive - Whether the mineral is radioactive
 * @param phase - Standard phase at room temperature (usually solid)
 * @param naturalOccurrence - Natural occurrence type
 */
type MineralClassification = Collection< {
    class: Distinct< MineralClass >;
    group?: Distinct< string >;
    radioactive: Distinct< boolean >;
    phase?: Distinct< Phase >;
    naturalOccurrence?: Distinct< NaturalOccurrence >;
} >;

/**
 * MineralComposition
 * Collections for compositional properties of minerals.
 * 
 * @param elements - Distinct list of elementary components in the mineral
 * @param formula - Chemical formula of the mineral
 * @param empiricalFormula - Empirical formula of the mineral
 * @param structuralFormula - Structural formula of the mineral
 * @param inclusions - Optional inclusions often found in the mineral
 */
type MineralComposition = Collection< {
    elements: Distinct< string[] >;
    formula: Distinct< string >;
    empiricalFormula?: Distinct< string >;
    structuralFormula?: Distinct< string >;
    inclusions?: Distinct< string[] >;
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
