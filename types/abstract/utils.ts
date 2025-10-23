/**
 * @module types/abstract/utils
 * 
 * Utility Types
 * Set of reusable TypeScript utility types for manipulation.
 */

/**
 * @typedef Primitive
 * Primitive types in TypeScript
 */
export type Primitive = string | number | boolean | symbol | null | undefined;

/**
 * @typedef LiteralUnion
 * Union of T and a literal-like extension of U.
 * Useful for string literal unions with autocomplete hints.
 * Example: LiteralUnion< 'red' | 'blue', string >
 */
export type LiteralUnion< T extends U, U = string > = T | ( U & Record< never, never > );

/**
 * @typedef ExtractFrom
 * Pick properties K from T and make them optional.
 */
export type ExtractFrom< T, K extends keyof T > = Partial< Pick< T, K > >;

/**
 * @typedef RequireFrom
 * Pick properties K from T and make them required.
 */
export type RequireFrom< T, K extends keyof T > = Required< Pick< T, K > >;

/**
 * @typedef RequireExactlyOne
 * Require exactly one of the specified keys (XOR),
 * all other properties remain as in T.
 */
export type RequireExactlyOne< T, K extends keyof T = keyof T > = {
    [ P in K ]: 
        Required< Pick< T, P > > &
        Partial< Record< Exclude< K, P >, never > > &
        Omit< T, K >;
}[ K ];

/**
 * @typedef RequireAtLeastOne
 * Require at least one of the specified keys.
 * Other properties remain unchanged.
 */
export type RequireAtLeastOne< T, K extends keyof T = keyof T > = Pick< T, Exclude< keyof T, K > > & {
    [ P in K ]: Required< Pick< T, P > > & Partial< Pick< T, Exclude< K, P > > >;
}[ K ];

/**
 * @typedef StrictSubset
 * Combine required and optional subsets from T.
 */
export type StrictSubset<
    T extends object, R extends keyof T, O extends keyof T
> = RequireFrom< T, R > & ExtractFrom< T, O >;

/**
 * @typedef DeepPartial
 * Recursively make all properties optional (deep partial).
 */
export type DeepPartial< T > = {
    [ P in keyof T ]?: T[ P ] extends Array< infer U >
        ? DeepPartial< U >[]
        : T[ P ] extends ReadonlyArray< infer U >
        ? ReadonlyArray< DeepPartial< U > >
        : T[ P ] extends object
            ? DeepPartial< T[ P ] >
            : T[ P ];
};

/**
 * @typedef DeepRequired
 * Recursively make all properties required (deep required).
 */
export type DeepRequired< T > = {
    [ P in keyof T ]-?: T[ P ] extends Array< infer U >
        ? DeepRequired< U >[]
        : T[ P ] extends ReadonlyArray< infer U >
        ? ReadonlyArray< DeepRequired< U > >
        : T[ P ] extends object
            ? DeepRequired< T[ P ] >
            : T[ P ];
};
