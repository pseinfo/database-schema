import type { NaturalOccurrence } from '../../enum/generic';
import type { Collection, Single } from '../abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '../abstract/property';

export type AbundanceCollection = Collection< {
  naturalOccurrence?: Single< PrimitiveProperty< NaturalOccurrence > >;

  universeAbundance?: Single< NumberProperty< 'quantity' > >;
  solarSystemAbundance?: Single< NumberProperty< 'quantity' > >;
  sunAbundance?: Single< NumberProperty< 'quantity' > >;
  meteoriteAbundance?: Single< NumberProperty< 'quantity' > >;

  crustalAbundance?: Single< NumberProperty< 'quantity' > >;
  oceanAbundance?: Single< NumberProperty< 'quantity' > >;
  seaAbundance?: Single< NumberProperty< 'quantity' > >;
  streamAbundance?: Single< NumberProperty< 'quantity' > >;
  atmosphereAbundance?: Single< NumberProperty< 'quantity' > >;

  humanAbundance?: Single< NumberProperty< 'quantity' > >;

  mineralAbundance?: Single< NumberProperty< 'quantity' > >;
  oreAbundance?: Single< NumberProperty< 'quantity' > >;
} >;
