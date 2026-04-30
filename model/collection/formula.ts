import type { FormulaType } from '../../enum/science/formula';
import type { BlobType } from '../../enum/system/blob';
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
