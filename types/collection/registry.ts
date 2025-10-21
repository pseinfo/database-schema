import { Distinct, Group } from '../abstract/collection';

// 
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

// 
export type RegistryGroup = Group< {

    // Primary identifiers
    cas: Distinct< CASNumber >;
    cid: Distinct< PubChemCID >;

    // International databases
    chemspider?: Distinct< ChemSpiderID >;
    chebi?: Distinct< ChEBIID >;
    chembl?: Distinct< ChEMBLID >;
    kegg?: Distinct< KEGGID >;

    // European registrations
    echa?: Distinct< ECHAInfoCard >;
    ec?: Distinct< ECNumber >;
    einecs?: Distinct< ECNumber >;
    elincs?: Distinct< ECNumber >;

    // US registrations
    rtecs?: Distinct< RTECSNumber >;
    unii?: Distinct< UNII >;
    nsc?: Distinct< NSCNumber >;

    // Pharmaceutical databases
    drugbank?: Distinct< DrugBankID >;

    // Historical / specific indexes
    beilstein?: Distinct< BeilsteinNumber >;
    gmelin?: Distinct< GmelinNumber >;

    // Structural databases
    pdb?: Distinct< PDBID[] >;

    // Additional identifiers
    wikidata?: Distinct< WikidataID >;

} >;
