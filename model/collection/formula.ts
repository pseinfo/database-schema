import type { FormulaType } from '../../enum/collection/formula';
import type { BlobType } from '../../enum/registry/blob';
import type { Collection, OneOrMany } from '../base/modifier';
import type { StructProperty } from '../base/property';
import type { BlobId } from '../registry/blob';

export type Formula = {
  notation?: string;
  latexNotation?: string;
  images?: BlobId< BlobType.STRUCTURE >[];
};

export type FormulaCollection = Collection< {
  [ K in FormulaType ]?: OneOrMany< StructProperty< Formula > >;
} >;
