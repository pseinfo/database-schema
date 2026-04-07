/**
 * Compound Entity
 * Defines the database entity for chemical compounds and substances.
 */

import { Collection, Distinct, Group, LangGroup } from '../abstract/collection';
import { FormCollection } from '../abstract/form';
import { ChemistryCollection } from '../collections/chemistry';
import { PhysicsCollection } from '../collections/physics';
import { SafetyCollection } from '../collections/safety';
import { RegistryGroup, StructureGroup } from '../collections/registry';
import { DiscoveryGroup, MediaGroup, MetaData, WeblinksGroup } from '../collections/generic';
import { ElementSymbol } from '../utils/const';
import { LiteralUnion } from 'devtypes/types/primitive';

/** Compound collections */

/**
 * Component Role
 * Defines the possible roles of components within a chemical compound.
 */
export type CompoundComponentRole = LiteralUnion< 'cation' | 'anion' | 'neutral' | 'radical' | 'complex' >;

/**
 * Component Component
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
    role?: Distinct< CompoundComponentRole >;
    massFraction?: Distinct< number >;
    atomicFraction?: Distinct< number >;
} >;

/** Main compound entity */

/**
 * Compound
 * Entity type for chemical compounds, indexed by a unique identifier.
 * 
 * Each compound entry includes metadata, descriptive content, classification,
 * composition details, chemical and physical properties, safety data, and
 * optional specialized forms such as polymorphs, solvates, or phase variants.
 */
export type Compound = {};
