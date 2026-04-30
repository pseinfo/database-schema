import type { Brand } from 'devtypes/types/util';
import type { RegistryType } from '../../enum/system/domain';
import type { CountryCode } from '../../enum/system/locale';
import type { Gender } from '../../enum/system/person';
import type { Factory } from '../base/factory';
import type { Collection, Distinct } from '../base/modifier';
import type { Weblinks } from '../utility/weblinks';
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

export type PersonId = Brand< string, 'personId' >;

export type PersonRegistry = Collection< {
  [ K in PersonId ]: Distinct< Person >;
} >;

export type PersonFactory = Factory< RegistryType.PERSON, Person, {
  personId: PersonId;
} >;
