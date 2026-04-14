import type { Collection, Distinct, Group, Single } from '../abstract/collection';
import type { PrimitiveProperty } from '../abstract/property';
import type { RefId } from '../abstract/reference';
import type { LangGroup } from '../abstract/util';
import type { LangCode } from '../enum/generic';
import type { D3Format, ImageFormat } from '../enum/util';
import type { RegistryGroup, StructureGroup } from './registry';

export type DiscoveryGroup = Group< {
  year?: Distinct< number >;
  discoverer?: Distinct< string | string[] >;
  country?: Distinct< string | string[] >;
  institute?: Distinct< string | string[] >;
  references?: RefId[];
} >;

export type MediaGroup = Group< {
  images?: Distinct< {
    url: string;
    format?: ImageFormat;
    credits: string;
    license: string;
    author?: string;
    source?: string;
    width?: number;
    height?: number;
  }[] >;

  spectrum?: Group< {
    absorption?: Single< PrimitiveProperty< string > >;
    emission?: Single< PrimitiveProperty< string > >;
    uv?: Single< PrimitiveProperty< string > >;
    xray?: Single< PrimitiveProperty< string > >;
  } >;

  structure3D?: Distinct< {
    data: string;
    format: D3Format;
    url?: string;
  }[] >;
} >;

export type WeblinksGroup = Group< {
  links?: Distinct< {
    url: string;
    text?: string;
    description?: string;
    archiveUrl?: string;
    accessed?: string;
    language?: string;
  }[] >;
  wiki?: LangGroup;
} >;

export type DescriptiveCollection = Collection< {
  registry: RegistryGroup;
  structure: StructureGroup;
  names: LangGroup< LangCode.ENGLISH | LangCode.LATIN >;
  description?: LangGroup;
  appearance?: LangGroup;
  odor?: LangGroup;
  discovery?: DiscoveryGroup;
  media?: MediaGroup;
  weblinks?: WeblinksGroup;
} >;
