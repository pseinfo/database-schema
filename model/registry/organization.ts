/**
 * @file model/registry/organization.ts
 * @description Registry of scientific institutions, laboratories, and organizations
 * contributing to research and data.
 */

import type { Brand } from 'devtypes/types/util';
import type { RegistryType } from '../../enum/system/domain';
import type { CountryCode } from '../../enum/system/locale';
import type { OrganizationType } from '../../enum/system/organization';
import type { Factory } from '../base/factory';
import type { Collection, Distinct } from '../base/modifier';
import type { Weblinks } from '../utility/weblinks';
import type { RefId } from './reference';

/** Structural model for representing a scientific institution or group. */
export type Organization = {
  /** Full official name of the organization. */
  name: string;
  /** Commonly used abbreviation or acronym (e.g., 'CERN'). */
  shortName?: string;
  /** The primary geographic location of the organization's headquarters. */
  country?: CountryCode;
  /** Classification of the organization (e.g., University, Laboratory). */
  type?: OrganizationType;
  /** Digital resources and official web presence of the organization. */
  weblinks?: Weblinks;
  /** Bibliographic citations for this entry. */
  references?: RefId[];
};

/** Unique identifier for an organization within the registry. */
export type OrgId = Brand< string, 'orgId' >;

/** System-wide collection of scientific organizations indexed by their unique IDs. */
export type OrganizationRegistry = Collection< {
  [ K in OrgId ]: Distinct< Organization >;
} >;

/** Helper type for generating type-safe organization entries for the database. */
export type OrganizationFactory = Factory< RegistryType.ORGANIZATION, Organization, {
  /** Unique registry identifier of the organization. */
  orgId: OrgId;
} >;
