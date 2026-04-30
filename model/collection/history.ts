/**
 * @file model/collection/history.ts
 * @description Chronological documentation of the scientific milestones, including discovery,
 * isolation, and naming of a substance.
 */

import type { Brand, Expand } from 'devtypes/types/util';
import type { EventTimeType, EventType } from '../../enum/science/history';
import type { CountryCode } from '../../enum/system/locale';
import type { Collection, Distinct } from '../base/modifier';
import type { IsoDate } from '../base/primitive';
import type { OrgId } from '../registry/organization';
import type { PersonId } from '../registry/person';
import type { RefId } from '../registry/reference';

/**
 * Structural framework for a historical event, integrating temporal data, actors, and locations.
 * 
 * @template E The specific type of historical milestone.
 */
type BaseEvent< E extends EventType > = Brand< {
  /** The precise or approximate temporal point or period of the event. */
  time:
    /** Discrete timestamp of the event. */
    | { type: EventTimeType.DATE, date: IsoDate }
    /** Specific year of the event, optionally approximate. */
    | { type: EventTimeType.YEAR, year: number; approximate?: boolean }
    /** Temporal period defined by start and end years. */
    | { type: EventTimeType.RANGE, fromYear: number; toYear: number }
    /** Qualitative or non-standard temporal description. */
    | { type: EventTimeType.TEXT, text: string };
  /** List of individuals (scientists) primarily involved in the event. */
  actors?: PersonId[];
  /** Research institutions or laboratories where the event took place. */
  organizations?: OrgId[];
  /** Geographic and institutional places associated with the event. */
  locations?: {
    /** Country where the event occurred. */
    country?: CountryCode;
    /** Specific city. */
    place?: string;
  }[];
  /** Qualitative descriptions and historical context of the event. */
  context?: string;
  /** Bibliographic evidence supporting the historical account. */
  references?: RefId[];
}, E, 'type', true >;

/** Shared field for events requiring methodology descriptions. */
type MethodField = {
  /** The experimental or theoretical methodology used for the milestone. */
  method: string;
};

/** Shared fields for nomenclature-related events. */
type NamingFields = {
  /** The proposed or finalized name of the entity. */
  name: string;
  /** Etymological origin of the name. */
  namedAfter?: {
    /** Scientists or historical figures after whom the entity was named. */
    persons?: PersonId[];
    /** Institutions or groups involved in the naming. */
    organizations?: OrgId[];
    /** Literal or celestial origins (e.g., 'Planet Venus'). */
    literal?: string;
  };
};

/** Scientific event marking the initial identification of a new species or phenomenon. */
export type DiscoveryEvent = Expand< BaseEvent< EventType.DISCOVERY > & MethodField >;
/** Initial documented sighting or qualitative measurement of a species. */
export type FirstObservationEvent = Expand< BaseEvent< EventType.FIRST_OBSERVATION > >;
/** Successful physical separation of the species into a pure form. */
export type IsolationEvent = Expand< BaseEvent< EventType.ISOLATION > >;
/** Intentional artificial production of the species through chemical or nuclear processes. */
export type SynthesisEvent = Expand< BaseEvent< EventType.SYNTHESIS > & MethodField >;
/** Formal proposal or international acceptance of the species' nomenclature. */
export type NamingEvent = Expand< BaseEvent< EventType.NAMING > & NamingFields >;
/** Independent verification of a previous discovery or observation. */
export type ConfirmationEvent = Expand< BaseEvent< EventType.CONFIRMATION > >;
/** Comprehensive determination of fundamental physical or chemical properties. */
export type CharacterizationEvent = Expand< BaseEvent< EventType.CHARACTERIZATION > >;
/** Other significant historical milestones not covered by standard categories. */
export type MiscEvent = Expand< BaseEvent< EventType.MISC > & {
  /** Specific context or nature of the miscellaneous event. */
  context: string
} >;

/** Union of all documented scientific historical milestones. */
export type HistoryEvent =
  | DiscoveryEvent
  | FirstObservationEvent
  | IsolationEvent
  | SynthesisEvent
  | NamingEvent
  | ConfirmationEvent
  | CharacterizationEvent
  | MiscEvent;

/** Chronological sequence of historical events defining the entity's scientific journey. */
export type HistoryCollection = Collection< {
  /** List of historical events associated with the entity. */
  events?: Distinct< HistoryEvent >[];
} >;
