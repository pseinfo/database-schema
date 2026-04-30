/**
 * @file model/registry/person.ts
 * @description Registry of scientists, researchers, and contributors associated with the data.
 */

import type { Brand } from 'devtypes/types/util';
import type { RegistryType } from '../../enum/system/domain';
import type { CountryCode } from '../../enum/system/locale';
import type { Gender } from '../../enum/system/person';
import type { Factory } from '../base/factory';
import type { Collection, Distinct } from '../base/modifier';
import type { Weblinks } from '../utility/weblinks';
import type { OrgId } from './organization';
import type { RefId } from './reference';

/** Structural model for representing an individual researcher or contributor. */
export type Person = {
  /** Full nomenclature of the individual. */
  name: {
    /** The complete name as it appears in scientific publications. */
    fullName: string;
    /** The hereditary name or surname. */
    familyName?: string;
    /** The individual name or first name. */
    givenName?: string;
    /** Alternative names used in literature. */
    aliases?: string[];
  };
  /** Administrative gender metadata for demographic classification. */
  gender?: Gender;
  /** Geographic origin or primary citizenship of the individual. */
  nationality?: CountryCode;
  /** Year of birth. */
  birthYear?: number;
  /** Year of death. */
  deathYear?: number;
  /** List of institutions with which the individual is or was affiliated. */
  organization?: OrgId[];
  /** Digital resources and professional profiles. */
  weblinks?: Weblinks;
  /** Bibliographic citations for this person. */
  references?: RefId[];
};

/** Unique identifier for a person within the registry. */
export type PersonId = Brand< string, 'personId' >;

/** System-wide collection of individuals indexed by their unique IDs. */
export type PersonRegistry = Collection< {
  [ K in PersonId ]: Distinct< Person >;
} >;

/** Helper type for generating type-safe person entries for the database. */
export type PersonFactory = Factory< RegistryType.PERSON, Person, {
  /** Unique registry identifier of the person. */
  personId: PersonId;
} >;
