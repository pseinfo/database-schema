import type { Collection, Single } from '../abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '../abstract/property';
import type { NaturalOccurrence } from '../enum/generic';
import type { PhysicalQuantity } from '../enum/util';

export type AbundanceCollection = Collection< {
  naturalOccurrence?: Single< PrimitiveProperty< NaturalOccurrence > >;

  universeAbundance?: Single< NumberProperty< PhysicalQuantity.QUANTITY > >;
  solarSystemAbundance?: Single< NumberProperty< PhysicalQuantity.QUANTITY > >;
  sunAbundance?: Single< NumberProperty< PhysicalQuantity.QUANTITY > >;
  meteoriteAbundance?: Single< NumberProperty< PhysicalQuantity.QUANTITY > >;

  crustalAbundance?: Single< NumberProperty< PhysicalQuantity.QUANTITY > >;
  oceanAbundance?: Single< NumberProperty< PhysicalQuantity.QUANTITY > >;
  seaAbundance?: Single< NumberProperty< PhysicalQuantity.QUANTITY > >;
  streamAbundance?: Single< NumberProperty< PhysicalQuantity.QUANTITY > >;
  atmosphereAbundance?: Single< NumberProperty< PhysicalQuantity.QUANTITY > >;

  humanAbundance?: Single< NumberProperty< PhysicalQuantity.QUANTITY > >;

  mineralAbundance?: Single< NumberProperty< PhysicalQuantity.QUANTITY > >;
  oreAbundance?: Single< NumberProperty< PhysicalQuantity.QUANTITY > >;
} >;
