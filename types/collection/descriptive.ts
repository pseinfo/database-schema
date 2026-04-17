/**
 * @file descriptive.ts
 * @description Defines qualitative, historical, and multi-media properties that provide a human-readable
 * and historical context for chemical substances.
 */

import type { D3Format, ImageFormat, LangCode } from '../../enum/util';
import type { Collection, Distinct, Group, Single } from '../abstract/collection';
import type { PrimitiveProperty } from '../abstract/property';
import type { RefId } from '../abstract/reference';
import type { LangGroup } from '../abstract/util';
import type { RegistryGroup, StructureGroup } from './registry';

/**
 * Historical metadata concerning the first identification of a substance.
 */
export type DiscoveryGroup = Group< {
  /** The year the substance was officially identified or discovered. */
  year?: Distinct< number >;
  /** The name of the individuals primarily credited with the discovery. */
  discoverer?: Distinct< string | string[] >;
  /** The country or region where the discovery took place. */
  country?: Distinct< string | string[] >;
  /** The university or organization where the research was conducted. */
  institute?: Distinct< string | string[] >;
  /** Additional scientific or regulatory remarks concerning the discovery. */
  notes?: Distinct< string >;
  /** References to the original discovery papers or announcements. */
  references?: RefId[];
} >;

/**
 * Visual and spectral data representing the physical appearance of the substance.
 */
export type MediaGroup = Group< {
  /** Photographic or diagrammatic images of the substance. */
  images?: Distinct< {
    /** The absolute URL or path to the image file. */
    url: string;
    /** The file format of the image (e.g., PNG, JPEG). */
    format?: ImageFormat;
    /** Information regarding the attribution or ownership of the image. */
    credits: string;
    /** The legal license governing the use of the image. */
    license: string;
    /** The creator or photographer of the media. */
    author?: string;
    /** The originating website or publication. */
    source?: string;
    /** Physical width of the original image in pixels. */
    width?: number;
    /** Physical height of the original image in pixels. */
    height?: number;
  }[] >;

  /** Characteristic fingerprint data from various spectroscopic techniques. */
  spectrum?: Group< {
    /** Base64 encoded data for the absorption spectrum. */
    absorption?: Single< PrimitiveProperty< string > >;
    /** Base64 encoded data for the emission spectrum. */
    emission?: Single< PrimitiveProperty< string > >;
    /** Base64 encoded data for ultraviolet-visible spectroscopy data. */
    uv?: Single< PrimitiveProperty< string > >;
    /** Base64 encoded data for X-ray diffraction or spectroscopy. */
    xray?: Single< PrimitiveProperty< string > >;
  } >;

  /** Data files for rendering three-dimensional molecular or crystal structures. */
  structure3D?: Distinct< {
    /** The raw Base64 encoded structural data (e.g., CIF, XYZ, PDB). */
    data: string;
    /** The chemical data format used for the 3D representation. */
    format: D3Format;
    /** External URL for a specialized 3D viewer or repository. */
    url?: string;
  }[] >;
} >;

/**
 * External links and digital pointers for further research.
 */
export type WeblinksGroup = Group< {
  /** A collection of relevant scientific or educational web resources. */
  links?: Distinct< {
    /** The destination URL of the link. */
    url: string;
    /** The display text for the hyperlink. */
    text?: string;
    /** A short summary of the content found at the link. */
    description?: string;
    /** Link to a permanent archive version (e.g., Wayback Machine). */
    archiveUrl?: string;
    /** The date the link was last verified for content. */
    accessed?: string;
    /** The language of the linked page. */
    language?: LangCode;
  }[] >;
  /** Localized links to corresponding Wikipedia articles. */
  wiki?: LangGroup;
} >;

/**
 * Registry of properties providing descriptive, historical, and multi-media metadata.
 */
export type DescriptiveCollection = Collection< {
  /** External database identifiers and regulatory registry numbers. */
  registry: RegistryGroup;
  /** Encoded structural strings for computational chemistry (SMILES, InChI). */
  structure: StructureGroup;
  /** The standardized scientific and common name(s) of the substance. */
  names: LangGroup< LangCode.ENGLISH | LangCode.LATIN, string[] >;
  /** A concise scientific overview of the substance's nature and significance. */
  description?: LangGroup;
  /** Qualitative description of the substance's physical form and color. */
  appearance?: LangGroup;
  /** The characteristic odor profile of the substance. */
  odor?: LangGroup;
  /** The historical context of the substance's discovery. */
  discovery?: DiscoveryGroup;
  /** Visual and spectral representations of the substance. */
  media?: MediaGroup;
  /** External digital resources and citations. */
  weblinks?: WeblinksGroup;
} >;
