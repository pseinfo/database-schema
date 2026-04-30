/**
 * @file model/collection/structure.ts
 * @description Mathematical and string-based representations of chemical structure and nomenclature.
 */

import type { Collection, Distinct, Group } from '../base/modifier';

/** Systematically generated name according to the IUPAC nomenclature rules. */
export type IUPACName = string;
/** International Chemical Identifier for unambiguous structural representation. */
export type InChI = `InChI=${ string }`;
/** Fixed-length hashed version of the InChI for database indexing. */
export type InChIKey = `${ string }-${ string }-${ string }`;
/** Simplified Molecular-Input Line-Entry System (SMILES) notation in canonical form. */
export type CanonicalSMILES = string;
/** SMILES notation including stereochemical information. */
export type IsomericSMILES = string;
/** Generic line-entry notation for chemical structures. */
export type SMILES = string;
/** SMiles ARbitrary Target Specification for molecular pattern matching. */
export type SMARTS = string;
/** Wiswesser Line Notation, a historical line-entry system for chemical structures. */
export type WLN = string;

/**
 * Collection of diverse structural notations and systematic nomenclature.
 */
export type StructureCollection = Collection< {
  /** Systematic IUPAC name of the entity. */
  iupacName?: Distinct< IUPACName >;
  /** Standardized IUPAC InChI string. */
  inChI?: Distinct< InChI >;
  /** Hashed InChIKey for rapid searching. */
  inChIkey?: Distinct< InChIKey >;
  /** SMILES notations representing the molecular graph. */
  smiles?: Group< {
    /** Unique, canonical representation of the structure. */
    canonical?: Distinct< CanonicalSMILES >;
    /** Representation including absolute or relative stereochemistry. */
    isomeric?: Distinct< IsomericSMILES >;
    /** Non-canonicalized or original SMILES string. */
    raw?: Distinct< SMILES >;
  } >;
  /** Molecular pattern matching language string. */
  smarts?: Distinct< SMARTS >;
  /** Historical structural notation (Wiswesser). */
  wln?: Distinct< WLN >;
} >;
