/**
 * Utility Types
 * Set of reusable TypeScript utility types for manipulation.
 */

// Primitive types in TypeScript
export type Primitive = string | number | boolean | symbol | null | undefined;

// Create a type that is either T or a literal union of U
export type LiteralUnion< T extends U, U = string > = T | ( U & { _?: never } );

// Pick properties K from T and make them optional
export type ExtractFrom< T, K extends keyof T > = Partial< Pick< T, K > >;

// Pick properties K from T and make them required
export type RequireFrom< T, K extends keyof T > = Required< Pick< T, K > >;

// Pick properties R from T and make them required, pick properties O from T and make them optional
export type StrictSubset< T extends object, R extends keyof T, O extends keyof T > =
    RequireFrom< T, R > & ExtractFrom< T, O >;

// Require exactly one property from A or B (XOR), all other properties remain unchanged
export type RequireExactlyOne< T, K extends keyof T = keyof T > = {
    [ P in K ]: RequireFrom< T, P > & { [ Q in Exclude< K, P > ]?: never } & Omit< T, K >;
}[ K ];

// Require at least one property from K, all other properties remain unchanged
export type RequireAtLeastOne< T extends object, K extends keyof T = keyof T > = {
    [ O in K ]: RequireFrom< T, O > & ExtractFrom< T, Exclude< K, O > >;
}[ K ] & Pick< T, Exclude< keyof T, K > >;

// Recursively make all properties in T optional
export type DeepPartial< T > = {
    [ P in keyof T ]?: T[ P ] extends ( infer U )[] ? DeepPartial< U >[] :
    T[ P ] extends object ? DeepPartial< T[ P ] > : T[ P ];
};

// Recursively make all properties in T required
export type DeepRequired< T > = {
    [ P in keyof T ]: T[ P ] extends ( infer U )[] ? DeepRequired< U >[] :
    T[ P ] extends object ? DeepRequired< T[ P ] > : T[ P ];
};
