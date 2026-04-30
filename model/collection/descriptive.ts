import type { SensoryProperty } from '../../enum/collection/descriptive';
import type { Collection, Group, Many, Mapping, One } from '../base/modifier';
import type { LangGroup } from '../base/primitives';
import type { PrimitiveProperty } from '../base/property';

export type DescriptiveCollection = Collection< {
  name?: LangGroup< One< PrimitiveProperty< string > > >;
  aliases?: Group< {
    global?: Many< PrimitiveProperty< string > >;
    localized?: LangGroup< Many< PrimitiveProperty< string > >, never >;
  } >;
  description?: LangGroup< One< PrimitiveProperty< string > > >;
  sensory?: Mapping< SensoryProperty, LangGroup< One< PrimitiveProperty< string > > > >;
} >;
