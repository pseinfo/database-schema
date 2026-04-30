import type { Collection, Distinct, Group } from '../base/modifier';

export type IUPACName = string;
export type InChI = `InChI=${ string }`;
export type InChIKey = `${ string }-${ string }-${ string }`;
export type CanonicalSMILES = string;
export type IsomericSMILES = string;
export type SMILES = string;
export type SMARTS = string;
export type WLN = string;

export type StructureCollection = Collection< {
  iupacName?: Distinct< IUPACName >;
  inChI?: Distinct< InChI >;
  inChIkey?: Distinct< InChIKey >;
  smiles?: Group< {
    canonical?: Distinct< CanonicalSMILES >;
    isomeric?: Distinct< IsomericSMILES >;
    raw?: Distinct< SMILES >;
  } >;
  smarts?: Distinct< SMARTS >;
  wln?: Distinct< WLN >;
} >;
