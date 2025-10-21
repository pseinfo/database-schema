/**
 * Abstract Collection Types
 * Utility types for defining collections of properties with various structures.
 */

import { Property } from './property';
import { LiteralUnion } from './utils';

// Utility types
export type Single< T extends Property > = T | T[];
export type Distinct< T = unknown > = T | T[];
export type Group< T extends Record< string, Single< Property > | Distinct< unknown > > > = T;
export type LangGroup< L extends string = 'en' > = Group< {
    [ K in LiteralUnion< L > ]: Distinct< string >;
} >;

// Generic collection mapper
export type Collection< T > = { [ K in keyof T ]:
    T[ K ] extends Single< infer P > ? P :
    T[ K ] extends Group< infer G > ? { [ GK in keyof G ]: Collection< G[ GK ] > } :
    T[ K ] extends Distinct< infer D > ? Distinct< D > :
    T[ K ] extends Property ? T[ K ] :
    never };
