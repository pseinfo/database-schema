import type { Brand, Expand } from 'devtypes/types/util';
import type { CountryCode } from '../../enum/system/locale';
import type { EventTimeType, EventType } from '../../enum/science/history';
import type { Collection, Distinct } from '../base/modifier';
import type { IsoDate } from '../base/primitive';
import type { OrgId } from '../registry/organization';
import type { PersonId } from '../registry/person';
import type { RefId } from '../registry/reference';

type BaseEvent< E extends EventType > = Brand< {
  time:
    | { type: EventTimeType.DATE, date: IsoDate }
    | { type: EventTimeType.YEAR, year: number; approximate?: boolean }
    | { type: EventTimeType.RANGE, fromYear: number; toYear: number }
    | { type: EventTimeType.TEXT, text: string };
  actors?: PersonId[];
  organizations?: OrgId[];
  locations?: {
    country?: CountryCode;
    place?: string;
  }[];
  notes?: string;
  references?: RefId[];
}, E, 'type', true >;

type MethodField = {
  method: string;
};

type NamingFields = {
  name: string;
  namedAfter?: {
    persons?: PersonId[];
    organizations?: OrgId[];
    literal?: string;
  };
};

export type DiscoveryEvent = Expand< BaseEvent< EventType.DISCOVERY > & MethodField >;
export type FirstObservationEvent = Expand< BaseEvent< EventType.FIRST_OBSERVATION > >;
export type IsolationEvent = Expand< BaseEvent< EventType.ISOLATION > >;
export type SynthesisEvent = Expand< BaseEvent< EventType.SYNTHESIS > & MethodField >;
export type NamingEvent = Expand< BaseEvent< EventType.NAMING > & NamingFields >;
export type ConfirmationEvent = Expand< BaseEvent< EventType.CONFIRMATION > >;
export type CharacterizationEvent = Expand< BaseEvent< EventType.CHARACTERIZATION > >;
export type OtherEvent = Expand< BaseEvent< EventType.OTHER > & { context: string } >;

export type HistoryEvent =
  | DiscoveryEvent
  | FirstObservationEvent
  | IsolationEvent
  | SynthesisEvent
  | NamingEvent
  | ConfirmationEvent
  | CharacterizationEvent
  | OtherEvent;

export type HistoryCollection = Collection< {
  events?: Distinct< HistoryEvent >[];
} >;
