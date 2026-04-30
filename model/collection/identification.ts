import type { Collection, Distinct, Group } from '../base/modifier';

export type CASNumber = `${ number }-${ number }-${ number }`;
export type ECNumber = `${ number }-${ number }-${ number }`;
export type PubChemCID = `${ number }`;
export type ChemSpiderID = `${ number }`;
export type ChEBIID = `CHEBI:${ number }`;
export type ChEMBLID = `CHEMBL${ number }`;
export type KEGGID = `C${ string }` | `D${ string }`;
export type DrugBankID = `DB${ string }`;
export type ECHAInfoCard = `100.${ number }.${ number }`;
export type RTECSNumber = `RTECS${ string }`;
export type UNII = string;
export type ATCCode = string;
export type BeilsteinNumber = `${ number }`;
export type GmelinNumber = `${ number }`;
export type NSCNumber = `NSC${ number }`;
export type PDBID = string;
export type WikidataID = `Q${ number }`;

export type IdentificationCollection = Collection< {
  general?: Group< {
    cas?: Distinct< CASNumber >;
    ec?: Distinct< ECNumber >;
    einecs?: Distinct< ECNumber >;
    elincs?: Distinct< ECNumber >;
  } >;
  databases?: Group< {
    pubchem?: Distinct< PubChemCID >;
    chemspider?: Distinct< ChemSpiderID >;
    chebi?: Distinct< ChEBIID >;
    chembl?: Distinct< ChEMBLID >;
    kegg?: Distinct< KEGGID >;
    drugbank?: Distinct< DrugBankID >;
  } >;
  safety?: Group< {
    echa?: Distinct< ECHAInfoCard >;
    rtecs?: Distinct< RTECSNumber >;
    unii?: Distinct< UNII >;
  } >;
  classification?: Group< {
    atc?: Distinct< ATCCode >[];
  } >;
  legacy?: Group< {
    beilstein?: Distinct< BeilsteinNumber >;
    gmelin?: Distinct< GmelinNumber >;
    nsc?: Distinct< NSCNumber >;
  } >;
  structure?: Group< {
    pdb?: Distinct< PDBID >[];
  } >;
  external?: Group< {
    wikidata?: Distinct< WikidataID >;
  } >;
} >;
