import type { AbundanceType, NaturalOccurrence } from '../../enum/science/abundance';
import type { Collection, Mapping, One, OneOrMany } from '../base/modifier';
import type { NumberProperty, PrimitiveProperty } from '../base/property';

export type AbundanceCollection = Collection< {
  naturalOccurrence?: One< PrimitiveProperty< NaturalOccurrence > >;
  abundances?: Mapping< AbundanceType, OneOrMany< NumberProperty< 'massFraction' > > >;
} >;
