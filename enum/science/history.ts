/**
 * @file enum/science/history.ts
 * @description Defines enums for tracking the historical development and
 * discovery of elements and substances.
 */

/**
 * Milestones in the scientific history of a chemical species or phenomenon.
 */
export enum EventType {
  /** The first recognition of a new substance, even if its nature is not fully understood. */
  DISCOVERY = 'discovery',
  /** The first recorded sighting or experimental detection of a species. */
  FIRST_OBSERVATION = 'firstObservation',
  /** The successful separation of a substance in its pure form from a mixture or ore. */
  ISOLATION = 'isolation',
  /** The artificial production of a substance via chemical or nuclear reactions. */
  SYNTHESIS = 'synthesis',
  /** The official designation of a formal name, often following IUPAC conventions. */
  NAMING = 'naming',
  /** The independent verification of a discovery by other scientific groups. */
  CONFIRMATION = 'confirmation',
  /** The first comprehensive measurement of physical and chemical properties. */
  CHARACTERIZATION = 'characterization',
  /** Miscellaneous historical milestones not covered by other categories. */
  MISC = 'misc'
};

/**
 * Temporal precision formats for historical events.
 */
export enum EventTimeType {
  /** A specific calendar day (ISO 8601). */
  DATE = 'date',
  /** A specific calendar year. */
  YEAR = 'year',
  /** An uncertain or extended interval between two points in time. */
  RANGE = 'range',
  /** A descriptive temporal reference (e.g., "Antiquity", "Middle Ages"). */
  TEXT = 'text'
};
