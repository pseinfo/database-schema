import type { Expand } from 'devtypes/types/util';
import type { Distinct, Group, Single } from '../abstract/collection';
import type { LangCode } from '../enum/generic';
import type { D3Format, ImageFormat } from '../enum/util';
import type { PrimitiveProperty } from '../abstract/property';

export type MetaData = Distinct< {
  '@metadata': {
    schemaVersion: 1;
    lastModified: string;
    hash: string;
  };
} >;

export type LangGroup< L extends LangCode = LangCode.ENGLISH, T = string > = Group< Expand<
  Required< { [ K in L ]: Distinct< T > } > &
  Partial< { [ K in Exclude< LangCode, L > ]: Distinct< T > } >
> >;

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
