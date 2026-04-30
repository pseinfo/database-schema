/**
 * @file enum/science/reaction.ts
 * @description Defines enums for describing chemical reactions, their states, and dynamics.
 */

/**
 * The direction and nature of a chemical transformation.
 */
export enum ReactionTransition {
  /** Direct conversion of reactants to products (left to right). */
  FORWARD = 'forward',
  /** Conversion of products back to original reactants (right to left). */
  REVERSE = 'reverse',
  /** Dynamic state where forward and reverse reaction rates are equal. */
  EQUILIBRIUM = 'equilibrium',
  /** Idealized reaction following exact molar ratios without side reactions. */
  STOICHIOMETRIC = 'stoichiometric',
  /** Delocalization of electrons within a molecule, represented by multiple structures. */
  RESONANCE = 'resonance',
  /** The final step in a chain reaction where reactive intermediates are consumed. */
  TERMINATE = 'terminate'
};

/**
 * Nature of the chemical entities participating in a reaction.
 */
export enum ReactionSpecies {
  /** Pure elemental substance (e.g., O2, Fe). */
  ELEMENT = 'element',
  /** Defined chemical compound with fixed stoichiometry (e.g., H2O, NaCl). */
  COMPOUND = 'compound',
  /** Naturally occurring inorganic solid. */
  MINERAL = 'mineral',
  /** Physical blend of multiple species. */
  MIXTURE = 'mixture',
  /** Indicates a self-reaction or internal rearrangement (e.g., tautomerization). */
  SELF = 'self',
  /** Species defined by a generic or specific chemical formula. */
  FORMULA = 'formula'
};

/**
 * The physical state of a reactant or product under reaction conditions.
 */
export enum ReactionState {
  /** Dissolved in water as the solvent. */
  AQUEOUS = 'aq',
  /** Present in a solid phase, often as a precipitate. */
  SOLID = 's',
  /** Present in a pure liquid phase. */
  LIQUID = 'l',
  /** Present in a gaseous phase, often as an evolved gas. */
  GASEOUS = 'g'
};

/**
 * Observable physical phenomena occurring during a chemical reaction.
 */
export enum ReactionEffect {
  /** Evolution of a gaseous product from a liquid or solid mixture. */
  GAS_FORMATION = 'gasFormation',
  /** Formation of an insoluble solid phase from a solution. */
  PRECIPITATE = 'precipitate'
};

/**
 * External factors or substances that influence reaction rate and pathway.
 */
export enum ReactionModifier {
  /** Substance that increases reaction rate without being consumed. */
  CATALYST = 'catalyst',
  /** Thermal energy required to initiate or sustain the reaction. */
  ENERGY_HEAT = 'heat',
  /** Electromagnetic radiation (photons) used to drive photochemical reactions. */
  ENERGY_LIGHT = 'light',
  /** Acidic environment acting as a promoter or reactant. */
  ACID = 'acid',
  /** Basic environment acting as a promoter or reactant. */
  BASE = 'base'
};

/**
 * Positional metadata for chemical equation documentation.
 */
export enum ReactionAnnotation {
  /** Information placed above the reaction arrow (e.g., temperature). */
  ABOVE_ARROW = 'above',
  /** Information placed below the reaction arrow (e.g., solvent). */
  BELOW_ARROW = 'below'
};
