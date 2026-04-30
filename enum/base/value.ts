export enum ValueType {
  PRIMITIVE = 'primitive',
  STRUCT = 'struct',
  SINGLE = 'single',
  ARRAY = 'array',
  RANGE = 'range',
  COUPLED = 'coupled'
};

export enum ValueOrigin {
  MEASURED = 'measured',
  CALCULATED = 'calculated',
  ESTIMATED = 'estimated',
  EXPERIMENTAL = 'experimental',
  THEORETICAL = 'theoretical'
};
