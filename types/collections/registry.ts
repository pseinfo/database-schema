/**
 * Chemical Registry and Structure Types
 * Property groups for various chemical identifiers and structure representations.
 */

import { Distinct, Group } from '../abstract/collection';

/** Define types for various chemical registry identifiers */
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

/**
 * RegistryGroup
 * Group type for chemical registry identifiers.
 * 
 * Includes CAS, PubChem, ChemSpider, ChEBI, ChEMBL, KEGG, ECHA, EC, RTECS,
 * UNII, NSC, DrugBank, Beilstein, Gmelin, PDB, and Wikidata IDs.
 */
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

/** Define types for various chemical structure representations */
export type InChI = `InChI=${string}`;
export type InChIKey = `${string}-${string}-${string}`;
export type SMILES = string;
export type SMARTS = string;
export type CanonicalSMILES = string;
export type IsomericSMILES = string;
export type WLN = string;
export type IUPACName = string;

/**
 * StructureGroup
 * Group type for chemical structure representations.
 * 
 * Includes InChI, InChIKey, SMILES, SMARTS, Canonical SMILES, Isomeric SMILES,
 * WLN, and IUPAC names.
 */
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
