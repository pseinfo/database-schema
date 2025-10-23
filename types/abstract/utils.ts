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
