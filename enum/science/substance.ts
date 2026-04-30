/**
 * @file enum/science/substance.ts
 * @description Defines enums for general chemical substances and their cross-disciplinary properties.
 */

/**
 * Properties describing the origin, behavior, and physiological impact of chemical substances.
 */
export enum SubstanceProperty {
  /** Occurring in the natural world without human intervention. */
  NATURAL = 'natural',
  /** Man-made or produced via industrial chemical synthesis. */
  SYNTHETIC = 'synthetic',
  /** Material with electrical conductivity between that of a conductor and an insulator. */
  SEMICONDUCTOR = 'semiconductor',
  /** Spontaneously emitting ionizing radiation due to nuclear instability. */
  RADIOACTIVE = 'radioactive',
  /** Poses a physical or health risk to humans or the environment. */
  HAZARDOUS = 'hazardous',
  /** Capable of causing injury or death through chemical action. */
  TOXIC = 'toxic',
  /** Lethal even in extremely small quantities. */
  HIGHLY_TOXIC = 'highlyToxic',
  /** Easily ignited and capable of burning rapidly. */
  FLAMMABLE = 'flammable',
  /** Causes visible destruction or irreversible damage to living tissue or metals. */
  CORROSIVE = 'corrosive',
  /** Capable of sudden, violent energy release through chemical reaction. */
  EXPLOSIVE = 'explosive',
  /** Biological agent that poses a threat to the health of living organisms. */
  BIOHAZARD = 'biohazard',
  /** Substance directly involved in causing cancer. */
  CARCINOGENIC = 'carcinogenic',
  /** Of or relating to biology or living organisms. */
  BIOLOGICAL = 'biological',
  /** Required by organisms for normal physiological function. */
  ESSENTIAL = 'essential'
};
