import type { Collection, Group, Single } from '../abstract/collection';
import type { CoupledNumberProperty, NumberProperty, PrimitiveProperty } from '../abstract/property';
import type { Phase } from '../enum/generic';

export type PhysicsCollection = Collection< {
  density?: Single< NumberProperty< 'density' > >;
  phase?: Single< PrimitiveProperty< Phase > >;

  temperature?: Group< {
    meltingPoint?: Single< NumberProperty< 'temperature' > >;
    boilingPoint?: Single< NumberProperty< 'temperature' > >;
    liquidRange?: Single< NumberProperty< 'temperature' > >;
    transitionTemp?: Single< NumberProperty< 'temperature' > >;
    sublimationPoint?: Single< NumberProperty< 'temperature' > >;
    flashPoint?: Single< NumberProperty< 'temperature' > >;
    autoignitionTemp?: Single< NumberProperty< 'temperature' > >;
    criticalPoint?: Single< CoupledNumberProperty< 'temperature' | 'pressure' > >;
    triplePoint?: Single< CoupledNumberProperty< 'temperature' | 'pressure' > >;
    debyeTemp?: Single< NumberProperty< 'temperature' > >;
  } >;
} >;
