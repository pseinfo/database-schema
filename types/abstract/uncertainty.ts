/**
 * Uncertainty System
 * Physical and measurement uncertainty representations.
 */

import { RequireFrom } from './utils';

// Uncertainty types
export const UncertaintyType = [ 'absolute', 'relative', 'asymmetrical' ] as const;
export type UncertaintyType = ( typeof UncertaintyType )[ number ];

// Field definitions for uncertainty types
interface BaseFields< T extends UncertaintyType > {
    readonly __type__: T;
    confidence?: number;
    note?: string;
}

interface UncertaintyFields {
    absolute?: number;
    relative?: number;
    plus?: number;
    minus?: number;
}

// Specific uncertainty type definitions
export type AbsoluteUncertainty =
    BaseFields< 'absolute' > &
    RequireFrom< UncertaintyFields, 'absolute' >;

export type RelativeUncertainty =
    BaseFields< 'relative' > &
    RequireFrom< UncertaintyFields, 'relative' >;

export type AsymmetricalUncertainty =
    BaseFields< 'asymmetrical' > &
    RequireFrom< UncertaintyFields, 'plus' | 'minus' >;

// Union type for all uncertainty types
export type Uncertainty =
    | AbsoluteUncertainty
    | RelativeUncertainty
    | AsymmetricalUncertainty;
