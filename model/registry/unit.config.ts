export type DimensionVector = readonly [
  T: number, L: number, M: number, I: number, Θ: number, N: number, J: number
];

export type UnitConfig = Record< string, {
  symbol: string;
  vector: DimensionVector | null;
  units: string[];
  prefixableUnits: string[];
  baseUnit: string;
} >;
