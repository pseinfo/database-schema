import type { CountryCode } from '../../enum/base/locale';
import type { Gender } from '../../enum/registry/person';
import type { OrgId } from './organization';
import type { RefId } from './reference';

export type Person = {
  name: {
    fullName: string;
    familyName?: string;
    givenName?: string;
    aliases?: string[];
  },
  gender?: Gender;
  nationality?: CountryCode;
  birth?: string;
  death?: string;
  organization?: OrgId[];
  weblinks?: Weblinks;
  references?: RefId[];
};
