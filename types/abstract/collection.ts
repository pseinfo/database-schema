import type { Expand } from 'devtypes/types/util';
import type { Property } from './property';

export type Single< T extends Property > = T | T[];

export type Distinct< T = unknown > = T;

export type Group< T extends Record< string, Single< Property > | Distinct< unknown > > > = T;

export type CollectionValue< T > =
  [ T ] extends [ Single< infer P > ] ? P :
  [ T ] extends [ Group< infer G > ] ? { [ GK in keyof G ]: Collection< G[ GK ] > } :
  [ T ] extends [ Property ] ? T :
  [ T ] extends [ Distinct< infer D > ] ? Distinct< D > :
  [ T ] extends [ object ] ? Expand< T > :
  T;

export type Collection< T > = {
  [ K in keyof T ]: CollectionValue< T[ K ] >;
};
