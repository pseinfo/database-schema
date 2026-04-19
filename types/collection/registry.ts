/**
 * @file registry.ts
 * @description Defines cross-references to international chemical databases and structural
 * representations used in cheminformatics.
 */

import type { Distinct, Group } from '../abstract/collection';

/** Chemical Abstracts Service (CAS) Registry Number. */
export type CASNumber = `${number}-${number}-${number}`;
/** PubChem Compound Identification (CID). */
export type PubChemCID = `${number}`;
/** ChemSpider Database Identifier. */
export type ChemSpiderID = `${number}`;
/** Chemical Entities of Biological Interest (ChEBI) ID. */
export type ChEBIID = `CHEBI:${number}`;
/** ChEMBL bioactivity database identifier. */
export type ChEMBLID = `CHEMBL${number}`;
/** Kyoto Encyclopedia of Genes and Genomes (KEGG) identifier. */
export type KEGGID = `C${string}` | `D${string}`;
/** European Chemicals Agency (ECHA) InfoCard identifier. */
export type ECHAInfoCard = `100.${number}.${number}`;
/** European Community (EC) Number for substances in the EU. */
export type ECNumber = `${number}-${number}-${number}`;
/** Registry of Toxic Effects of Chemical Substances (RTECS) identifier. */
export type RTECSNumber = `RTECS${string}`;
/** FDA/USP Unique Ingredient Identifier. */
export type UNII = string;
/** National Cancer Institute (NCI) NSC Number. */
export type NSCNumber = `NSC${number}`;
/** DrugBank database identifier. */
export type DrugBankID = `DB${string}`;
/** Anatomical Therapeutic Chemical (ATC) classification code. */
export type ATCCode = string;
/** Beilstein database internal number for organic compounds. */
export type BeilsteinNumber = `${number}`;
/** Gmelin database internal number for inorganic and organometallic compounds. */
export type GmelinNumber = `${number}`;
/** Protein Data Bank (PDB) structure identifier. */
export type PDBID = string;
/** Wikidata unique item identifier. */
export type WikidataID = `Q${number}`;

/**
 * Registry of identifiers for cross-referencing external scientific databases.
 */
export type RegistryGroup = Group< {
  /** The unique numerical identifier assigned by the Chemical Abstracts Service. */
  cas?: Distinct< CASNumber >;
  /** The compound identifier within the PubChem database. */
  cid?: Distinct< PubChemCID >;

  /** The unique numerical identifier for the ChemSpider repository. */
  chemspider?: Distinct< ChemSpiderID >;
  /** The identifier for the Chemical Entities of Biological Interest database. */
  chebi?: Distinct< ChEBIID >;
  /** The identifier for the ChEMBL database of bioactive molecules. */
  chembl?: Distinct< ChEMBLID >;
  /** The compound or drug entry identifier in the KEGG database. */
  kegg?: Distinct< KEGGID >;

  /** The identifier used to access the ECHA InfoCard summary page. */
  echa?: Distinct< ECHAInfoCard >;
  /** The official number for substances in the European Union (EINECS, ELINCS, NLP). */
  ec?: Distinct< ECNumber >;
  /** Specifically the European Inventory of Existing Commercial Chemical Substances number. */
  einecs?: Distinct< ECNumber >;
  /** Specifically the European List of Notified Chemical Substances number. */
  elincs?: Distinct< ECNumber >;

  /** The identifier for the Registry of Toxic Effects of Chemical Substances. */
  rtecs?: Distinct< RTECSNumber >;
  /** The FDA's permanent and unambiguous unique ingredient identifier. */
  unii?: Distinct< UNII >;
  /** The Cancer Chemotherapy National Service Center (NSC) Number. */
  nsc?: Distinct< NSCNumber >;

  /** The unique identifier for the DrugBank database. */
  drugbank?: Distinct< DrugBankID >;
  /** The system of classification for medical drugs according to the organ or system on which they act. */
  atc?: Distinct< ATCCode[] >;

  /** The internal registry number for the Beilstein database. */
  beilstein?: Distinct< BeilsteinNumber >;
  /** The internal registry number for the Gmelin database. */
  gmelin?: Distinct< GmelinNumber >;

  /** The unique identifier for molecular structures in the Protein Data Bank. */
  pdb?: Distinct< PDBID[] >;

  /** The permanent identifier for the corresponding Wikidata item. */
  wikidata?: Distinct< WikidataID >;
} >;

/** IUPAC International Chemical Identifier string. */
export type InChI = `InChI=${string}`;
/** Hashed version of the InChI string for efficient database searching. */
export type InChIKey = `${string}-${string}-${string}`;
/** Simplified Molecular Input Line Entry System string for chemical topology. */
export type SMILES = string;
/** The canonicalized version of a SMILES string to ensure uniqueness. */
export type CanonicalSMILES = string;
/** A SMILES string that includes stereochemical information. */
export type IsomericSMILES = string;
/** SMarts ARbitrary Target Specification string for substructure searching. */
export type SMARTS = string;
/** Wiswesser Line Notation; a predecessor to SMILES. */
export type WLN = string;
/** The systematic chemical name according to IUPAC nomenclature rules. */
export type IUPACName = string;

/**
 * Registry of machine-readable structural representations.
 */
export type StructureGroup = Group< {
  /** The full IUPAC International Chemical Identifier. */
  inChI?: Distinct< InChI >;
  /** The fixed-length condensed digital signature of the InChI identifier. */
  inChIkey?: Distinct< InChIKey >;
  /** The basic SMILES representation of the molecule's connectivity. */
  smiles?: Distinct< SMILES >;
  /** The uniquely defined canonical SMILES string for the molecule. */
  canonicalSmiles?: Distinct< CanonicalSMILES >;
  /** The SMILES string capturing chiral and geometric isomerism. */
  isomericSmiles?: Distinct< IsomericSMILES >;
  /** The SMARTS string for substructure pattern matching. */
  smarts?: Distinct< SMARTS >;
  /** The vintage Wiswesser Line Notation for the substance. */
  wln?: Distinct< WLN >;
  /** The official recognized systematic name of the substance. */
  iupacName?: Distinct< IUPACName >;
} >;
