import type { Collection, Single } from '../abstract/collection';
import type { PrimitiveProperty, StructProperty } from '../abstract/property';
import type { ComponentRole } from '../enum/chemistry';
import type { ElementSymbol } from '../enum/element';

export type Component = {
  element: ElementSymbol;
  quantity: number;
  type?: ComponentRole;
  charge?: number;
};

export type CompositionCollection = Collection< {
  components: Single< StructProperty< Component > >;
  formula: Single< PrimitiveProperty< string > >;
  empiricalFormula?: Single< PrimitiveProperty< string > >;
  condensedFormula?: Single< PrimitiveProperty< string > >;
  charge?: Single< PrimitiveProperty< number > >;
} >;
