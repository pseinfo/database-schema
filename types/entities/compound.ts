/**
 * Compound Entity
 * Defines the database entity for chemical compounds and substances.
 */

import type { LiteralUnion } from 'devtypes/types/primitive';

import type { Collection, Distinct } from '../abstract/collection';
import type { FormCollection } from '../abstract/form';
import type { ChemistryCollection } from '../collections/chemistry';
import type { DescriptiveCollection } from '../collections/descriptive';
import type { MetaData } from '../collections/generic';
import type { PhysicsCollection } from '../collections/physics';
import type { SafetyCollection } from '../collections/safety';
import type { CompoundCategory, CompoundProperty, ElementSymbol, NaturalOccurrence, Phase } from '../utils/const';

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
 * @param charge - Optional charge of the component in the compound
 */
type CompoundComponent = Distinct< {
    element: ElementSymbol;
    amount: Distinct< number >;
    role?: Distinct< LiteralUnion< 'cation' | 'anion' | 'neutral' | 'radical' | 'complex' > >;
    massFraction?: Distinct< number >;
    atomicFraction?: Distinct< number >;
    charge?: Distinct< number >;
} >;

/**
 * Classification
 * Collections for classification properties of chemical compounds.
 * 
 * @param category - Category of the compound (e.g., organic, inorganic)
 * @param family - Optional family classification of the compound (e.g., alcohols, ketones)
 * @param radioactive - Whether the compound is radioactive
 * @param phase - Standard phase at room temperature
 * @param naturalOccurrence - Natural occurrence type
 */
type Classification = Collection< {
    category: Distinct< CompoundCategory >;
    family?: Distinct< string >;
    radioactive: Distinct< boolean >;
    phase?: Distinct< Phase >;
    naturalOccurrence?: Distinct< NaturalOccurrence >;
} >;

/**
 * Composition
 * Collections for compositional properties of chemical compounds.
 * 
 * @param components - List of components that make up the compound
 * @param formula - Chemical formula of the compound
 * @param empiricalFormula - Empirical formula of the compound
 * @param molecularFormula - Molecular formula of the compound
 * @param structuralFormula - Structural formula of the compound
 * @param simplifiedFormula - Simplified formula of the compound
 * @param charge - Overall charge of the compound
 * @param multiplicity - Multiplicity of the compound (e.g., for radicals)
 * @param aromatic - Whether the compound is aromatic
 * @param polarity - Polarity of the compound (nonpolar, polar, amphipathic)
 * @param stoichiometry - Stoichiometric information for the compound
 * @param repeatUnit - Repeat unit for polymers
 * @param hydration - Number of water molecules in hydrates
 * @param functionalGroups - List of functional groups present in the compound
 */
type Composition = Collection< {
    components: Distinct< CompoundComponent[] >;
    formula: Distinct< string >;
    empiricalFormula?: Distinct< string >;
    molecularFormula?: Distinct< string >;
    structuralFormula?: Distinct< string >;
    simplifiedFormula?: Distinct< string >;
    charge?: Distinct< number >;
    multiplicity?: Distinct< number >;
    aromatic?: Distinct< boolean >;
    polarity?: Distinct< 'nonpolar' | 'polar' | 'amphipathic' >;
    stoichiometry?: Distinct< string >;
    repeatUnit?: Distinct< string >;
    hydration?: Distinct< number >;
    functionalGroups?: Distinct< string[] >;
} >;

/** Main compound entity */

/**
 * SingleCompound
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
type SingleCompound = Collection< {
    descriptive: DescriptiveCollection;
    classification: Classification;
    composition: Composition;
    physics?: PhysicsCollection;
    chemistry?: ChemistryCollection;
    properties?: Distinct< CompoundProperty[] >;
    safety?: SafetyCollection;
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
