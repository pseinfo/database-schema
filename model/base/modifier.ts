import type { Expand } from 'devtypes/types/util';
import type { PropertyWrapper } from './property';

export type Distinct< T = unknown > = T;

export type OneOrMany< T extends PropertyWrapper > = T | T[];
export type One< T extends PropertyWrapper > = T;
export type Many< T extends PropertyWrapper > = T[];

export type Group< T extends Record< string, OneOrMany< PropertyWrapper > | Distinct< unknown > > > = T;
export type Mapping< L extends string, T = unknown > = Group< { [ K in L ]?: T } >;

type CollectionValue< T > =
  [ T ] extends [ OneOrMany< infer P > ] ? P | P[] :
  [ T ] extends [ Group< infer G > ] ? { [ GK in keyof G ]: Collection< G[ GK ] > } :
  [ T ] extends [ PropertyWrapper ] ? Expand< T > :
  [ T ] extends [ Distinct< infer D > ] ? Distinct< D > :
  [ T ] extends [ object ] ? Expand< T > :
  T;

export type Collection< T > = {
  [ K in keyof T ]: CollectionValue< T[ K ] >;
};

export type DeepOptional< T > =
  T extends PropertyWrapper ? T :
  T extends ( infer U )[] ? DeepOptional< U >[] :
  T extends object ? { [ K in keyof T ]?: DeepOptional< T[ K ] > } :
  T;
