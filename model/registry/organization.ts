import { CountryCode } from '../../enum/base/locale';
import { OrganizationType } from '../../enum/registry/organization';
import { RefId } from './reference';

export type Organization = {
  name: string;
  shortName?: string;
  country?: CountryCode;
  type?: OrganizationType;
  weblinks?: Weblinks;
  references?: RefId[];
};
