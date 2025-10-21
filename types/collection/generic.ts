/**
 * Generic Collection Types
 * Defined common collection types for various data groups.
 */

import { Distinct, Group, LangGroup, Single } from '../abstract/collection';
import { CrystalStructure } from '../abstract/const';
import { NumberProperty, PrimitiveProperty } from '../abstract/property';

// Meta data / schema version
export type MetaData = Distinct< {
    "@metadata": {
        schemaVersion: 1;
        lastModified: string;
    };
} >;

// Natural abundance data for elements, minerals, isotopes, etc.
export type AbundanceGroup = Group< {

    // Cosmic abundance
    universeAbundance?: Single< NumberProperty< 'quantity' > >;
    solarSystemAbundance?: Single< NumberProperty< 'quantity' > >;
    sunAbundance?: Single< NumberProperty< 'quantity' > >;
    meteoriteAbundance?: Single< NumberProperty< 'quantity' > >;

    // Terrestrial abundance
    crustalAbundance?: Single< NumberProperty< 'quantity' > >;
    oceanAbundance?: Single< NumberProperty< 'quantity' > >;
    seaAbundance?: Single< NumberProperty< 'quantity' > >;
    streamAbundance?: Single< NumberProperty< 'quantity' > >;
    atmosphereAbundance?: Single< NumberProperty< 'quantity' > >;

    // Biological abundance
    humanAbundance?: Single< NumberProperty< 'quantity' > >;

    // Geological abundance
    mineralAbundance?: Single< NumberProperty< 'quantity' > >;
    oreAbundance?: Single< NumberProperty< 'quantity' > >;

} >;

// Discovery information group
export type DiscoveryGroup = Group< {
    year?: Distinct< number >;
    discoverer?: Distinct< string | string[] >;
    country?: Distinct< string >;
    institute?: Distinct< string >;
} >;

// Group for media files associated with an entry
export type MediaGroup = Group< {

    // Images
    images?: Distinct< {
        url: string;
        credits: string;
        license: string;
        author?: string;
        source?: string;
        width?: number;
        height?: number;
        format?: 'jpg' | 'png' | 'svg' | 'webp';
    }[] >;

    // Spectral analyses
    spectrum?: Group< {
        absorption?: PrimitiveProperty< string >;
        emission?: PrimitiveProperty< string >;
        uv?: PrimitiveProperty< string >;
        xray?: PrimitiveProperty< string >;
    } >;

    // 3D structures
    structure3D?: Distinct< {
        format: 'pdb' | 'mol' | 'sdf' | 'xyz' | 'cif';
        data: string;
        url?: string;
    }[] >;

} >;

// Group for web links associated with an entry
export type WeblinksGroup = Group< {
    links?: Distinct< {
        url: string;
        text?: string;
        description?: string;
        archiveUrl?: string;
        accessed?: string;
        language?: string;
    }[] >;
    wiki?: LangGroup;
} >;

// Crystal structure information
export type CrystalSystemGroup = Group< {
    crystalStructure?: Distinct< CrystalStructure >;
    pearsonSymbol?: Distinct< string >;
    spaceGroup?: Distinct< string >;
    spaceGroupNumber?: Distinct< number >;
    latticeConstant?: Group< {
        a?: Distinct< number >;
        b?: Distinct< number >;
        c?: Distinct< number >;
        alpha?: Distinct< number >;
        beta?: Distinct< number >;
        gamma?: Distinct< number >;
    } >;
} >;
