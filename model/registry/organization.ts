import type { Brand } from 'devtypes/types/util';
import type { RegistryType } from '../../enum/system/domain';
import type { CountryCode } from '../../enum/system/locale';
import type { OrganizationType } from '../../enum/system/organization';
import type { Factory } from '../base/factory';
import type { Collection, Distinct } from '../base/modifier';
import type { Weblinks } from '../utility/weblinks';
import type { RefId } from './reference';

export type Organization = {
  name: string;
  shortName?: string;
  country?: CountryCode;
  type?: OrganizationType;
  weblinks?: Weblinks;
  references?: RefId[];
};

export type OrgId = Brand< string, 'orgId' >;

export type OrganizationRegistry = Collection< {
  [ K in OrgId ]: Distinct< Organization >;
} >;

export type OrganizationFactory = Factory< RegistryType.ORGANIZATION, Organization, {
  orgId: OrgId;
} >;
