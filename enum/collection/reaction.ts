export enum ReactionTransition {
  FORWARD = 'forward',
  REVERSE = 'reverse',
  EQUILIBRIUM = 'equilibrium',
  STOICHIOMETRIC = 'stoichiometric',
  RESONANCE = 'resonance',
  TERMINATE = 'terminate'
};

export enum ReactionSpecies {
  ELEMENT = 'element',
  COMPOUND = 'compound',
  MINERAL = 'mineral',
  MIXTURE = 'mixture',
  SELF = 'self',
  FORMULA = 'formula'
};

export enum ReactionState {
  AQUEOUS = 'aq',
  SOLID = 's',
  LIQUID = 'l',
  GASEOUS = 'g'
};

export enum ReactionEffect {
  GAS_FORMATION = 'gasFormation',
  PRECIPITATE = 'precipitate'
};

export enum ReactionModifier {
  CATALYST = 'catalyst',
  ENERGY_HEAT = 'heat',
  ENERGY_LIGHT = 'light',
  ACID = 'acid',
  BASE = 'base'
};

export enum ReactionAnnotation {
  ABOVE_ARROW = 'above',
  BELOW_ARROW = 'below'
};
