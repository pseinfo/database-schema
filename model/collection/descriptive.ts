/**
 * @file model/collection/descriptive.ts
 * @description Qualitative information, localized nomenclature, and sensory
 * properties of a chemical entity.
 */

import type { SensoryProperty } from '../../enum/science/descriptive';
import type { Collection, Group, Many, Mapping, One } from '../base/modifier';
import type { LangGroup } from '../base/primitive';
import type { PrimitiveProperty } from '../base/property';

/** Grouping of descriptive metadata and qualitative observations. */
export type DescriptiveCollection = Collection< {
  /** The primary scientific name of the entity. */
  name?: LangGroup< One< PrimitiveProperty< string > > >;
  /** Alternative names, symbols, or common identifiers. */
  aliases?: Group< {
    /** Language-independent symbols or systematic names (e.g., IUPAC). */
    global?: Many< PrimitiveProperty< string > >;
    /** Common or trivial names specific to certain languages. */
    localized?: LangGroup< Many< PrimitiveProperty< string > >, never >;
  } >;
  /** Comprehensive qualitative summary of the entity's properties and significance. */
  description?: LangGroup< One< PrimitiveProperty< string > > >;
  /** Localized observations regarding appearance, odor, or other sensory characteristics. */
  sensory?: Mapping< SensoryProperty, LangGroup< One< PrimitiveProperty< string > > > >;
} >;
