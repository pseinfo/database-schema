/**
 * @file model/collection/identification.ts
 * @description Standardized identifiers and database keys for ensuring unambiguous
 * chemical entity recognition across global scientific platforms.
 */

import type { Collection, Distinct, Group } from '../base/modifier';

/** Unique numerical identifier assigned by the Chemical Abstracts Service. */
export type CASNumber = `${ number }-${ number }-${ number }`;
/** Numerical identifier for substances within the European Union (EINECS, ELINCS, or NLP). */
export type ECNumber = `${ number }-${ number }-${ number }`;
/** Unique compound identifier within the PubChem database. */
export type PubChemCID = `${ number }`;
/** Unique identifier within the ChemSpider chemical database. */
export type ChemSpiderID = `${ number }`;
/** Unique identifier within the Chemical Entities of Biological Interest (ChEBI) database. */
export type ChEBIID = `CHEBI:${ number }`;
/** Unique identifier within the ChEMBL bioactivity database. */
export type ChEMBLID = `CHEMBL${ number }`;
/** Unique identifier within the Kyoto Encyclopedia of Genes and Genomes. */
export type KEGGID = `C${ string }` | `D${ string }`;
/** Unique identifier within the DrugBank database for pharmacological data. */
export type DrugBankID = `DB${ string }`;
/** Link to the European Chemicals Agency (ECHA) information page. */
export type ECHAInfoCard = `100.${ number }.${ number }`;
/** Unique identifier within the Registry of Toxic Effects of Chemical Substances. */
export type RTECSNumber = `RTECS${ string }`;
/** Unique Ingredient Identifier assigned by the FDA for substance tracking. */
export type UNII = string;
/** Anatomical Therapeutic Chemical (ATC) classification system code. */
export type ATCCode = string;
/** Unique identifier within the Beilstein database for organic chemistry. */
export type BeilsteinNumber = `${ number }`;
/** Unique identifier within the Gmelin database for inorganic chemistry. */
export type GmelinNumber = `${ number }`;
/** Unique identifier assigned by the National Cancer Institute (NSC). */
export type NSCNumber = `NSC${ number }`;
/** Unique identifier for macromolecular structures in the Protein Data Bank. */
export type PDBID = string;
/** Unique identifier within the Wikidata knowledge base. */
export type WikidataID = `Q${ number }`;

/** Grouping of diverse international identifiers categorized by their scientific or regulatory context. */
export type IdentificationCollection = Collection< {
  /** Common regulatory identifiers like CAS and EC numbers. */
  general?: Group< {
    /** Chemical Abstracts Service registry number. */
    cas?: Distinct< CASNumber >;
    /** European Community number. */
    ec?: Distinct< ECNumber >;
    /** European Inventory of Existing Commercial Chemical Substances. */
    einecs?: Distinct< ECNumber >;
    /** European List of Notified Chemical Substances. */
    elincs?: Distinct< ECNumber >;
  } >;
  /** Identifiers from major chemical and biological databases. */
  databases?: Group< {
    /** PubChem Compound ID. */
    pubchem?: Distinct< PubChemCID >;
    /** ChemSpider Identifier. */
    chemspider?: Distinct< ChemSpiderID >;
    /** ChEBI Registry ID. */
    chebi?: Distinct< ChEBIID >;
    /** ChEMBL Identifier. */
    chembl?: Distinct< ChEMBLID >;
    /** KEGG Compound or Drug ID. */
    kegg?: Distinct< KEGGID >;
    /** DrugBank Identifier. */
    drugbank?: Distinct< DrugBankID >;
  } >;
  /** Identifiers related to chemical safety and toxicological registry. */
  safety?: Group< {
    /** ECHA Information Card number. */
    echa?: Distinct< ECHAInfoCard >;
    /** Registry of Toxic Effects of Chemical Substances number. */
    rtecs?: Distinct< RTECSNumber >;
    /** FDA Unique Ingredient Identifier. */
    unii?: Distinct< UNII >;
  } >;
  /** Pharmacological and therapeutic classification codes. */
  classification?: Group< {
    /** WHO Anatomical Therapeutic Chemical codes. */
    atc?: Distinct< ATCCode >[];
  } >;
  /** Historical identifiers from the Beilstein and Gmelin registries. */
  legacy?: Group< {
    /** Beilstein Registry Number. */
    beilstein?: Distinct< BeilsteinNumber >;
    /** Gmelin Registry Number. */
    gmelin?: Distinct< GmelinNumber >;
    /** National Service Center number. */
    nsc?: Distinct< NSCNumber >;
  } >;
  /** Identifiers for structural data repositories. */
  structure?: Group< {
    /** Protein Data Bank identifiers. */
    pdb?: Distinct< PDBID >[];
  } >;
  /** Identifiers from general knowledge graphs and collaborative databases. */
  external?: Group< {
    /** Wikidata item identifier. */
    wikidata?: Distinct< WikidataID >;
  } >;
} >;
