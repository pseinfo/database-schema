import { Collection, Distinct } from '../abstract/collection';
import { ElementBlock, ElementGroup, ElementSet, Goldschmidt, NaturalOccurrence, Phase, Superconductivity } from '../abstract/const';

export type ElementClassificationCollection = Collection< {
    symbol: Distinct< string >;
    atomicNumber: Distinct< number >;
    block: Distinct< ElementBlock >;
    group: Distinct< ElementGroup >;
    column: Distinct< 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 >;
    period: Distinct< 1 | 2 | 3 | 4 | 5 | 6 | 7 >;
    radioactive: Distinct< boolean >;
    set?: Distinct< ElementSet >;
    phase?: Distinct< Phase >;
    naturalOccurrence?: Distinct< NaturalOccurrence >;
    goldschmidt?: Distinct< Goldschmidt >;
    superconductivity?: Distinct< Superconductivity >;
} >;
