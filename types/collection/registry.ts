import type { Distinct, Group } from '../abstract/collection';

export type CASNumber = `${number}-${number}-${number}`;
export type PubChemCID = `${number}`;
export type ChemSpiderID = `${number}`;
export type ChEBIID = `CHEBI:${number}`;
export type ChEMBLID = `CHEMBL${number}`;
export type KEGGID = `C${string}` | `D${string}`;
export type ECHAInfoCard = `100.${number}.${number}`;
export type ECNumber = `${number}-${number}-${number}`;
export type RTECSNumber = `RTECS${string}`;
export type UNII = string;
export type NSCNumber = `NSC${number}`;
export type DrugBankID = `DB${string}`;
export type BeilsteinNumber = `${number}`;
export type GmelinNumber = `${number}`;
export type PDBID = string;
export type WikidataID = `Q${number}`;

export type RegistryGroup = Group< {
    cas: Distinct< CASNumber >;
    cid: Distinct< PubChemCID >;

    chemspider?: Distinct< ChemSpiderID >;
    chebi?: Distinct< ChEBIID >;
    chembl?: Distinct< ChEMBLID >;
    kegg?: Distinct< KEGGID >;

    echa?: Distinct< ECHAInfoCard >;
    ec?: Distinct< ECNumber >;
    einecs?: Distinct< ECNumber >;
    elincs?: Distinct< ECNumber >;

    rtecs?: Distinct< RTECSNumber >;
    unii?: Distinct< UNII >;
    nsc?: Distinct< NSCNumber >;

    drugbank?: Distinct< DrugBankID >;

    beilstein?: Distinct< BeilsteinNumber >;
    gmelin?: Distinct< GmelinNumber >;

    pdb?: Distinct< PDBID[] >;

    wikidata?: Distinct< WikidataID >;

} >;

export type InChI = `InChI=${string}`;
export type InChIKey = `${string}-${string}-${string}`;
export type SMILES = string;
export type SMARTS = string;
export type CanonicalSMILES = string;
export type IsomericSMILES = string;
export type WLN = string;
export type IUPACName = string;

export type StructureGroup = Group< {
    inChI: Distinct< InChI >;
    inChIkey: Distinct< InChIKey >;
    smiles?: Distinct< SMILES >;
    smarts?: Distinct< SMARTS >;
    canonicalSmiles?: Distinct< CanonicalSMILES >;
    isomericSmiles?: Distinct< IsomericSMILES >;
    wln?: Distinct< WLN >;
    iupacName?: Distinct< IUPACName >;
} >;
