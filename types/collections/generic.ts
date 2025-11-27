/**
 * Generic Collection Types
 * Defined common collection types for various data groups.
 */

import { Distinct, Group, LangGroup, Single } from '../abstract/collection';
import { NumberProperty, PrimitiveProperty } from '../abstract/property';
import { RefId } from '../abstract/reference';

/**
 * MetaData
 * Represents metadata information for collections.
 */
export type MetaData = Distinct< {
    "@metadata": {
        schemaVersion: 1;
        lastModified: string;
    };
} >;

/**
 * AbundanceGroup
 * Natural abundance data for elements, minerals, isotopes, etc.
 * Includes cosmic, terrestrial, biological, and geological types.
 */
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

/**
 * DiscoveryGroup
 * Information about the discovery of elements, isotopes, or compounds.
 * Includes year, discoverer, country, and institute details.
 */
export type DiscoveryGroup = Group< {
    year?: Distinct< number >;
    discoverer?: Distinct< string | string[] >;
    country?: Distinct< string >;
    institute?: Distinct< string >;
    references?: RefId[];
} >;

/**
 * MediaGroup
 * Group for media files associated with an entry.
 * Includes images, spectral analyses, and 3D structures.
 */
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

/**
 * WeblinksGroup
 * Group for web links associated with an entry.
 * Includes generic weblinks and Wikipedia entries.
 */
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

/**
 * CrystalGroup
 * Crystallographic properties for elements and compounds.
 * Includes crystal structure, Pearson symbol, space group, and lattice constants.
 */
export type CrystalGroup = Group< {
    crystalStructure?: Distinct<
        'hexagonal' | 'hexagonalClosePacked' | 'bodyCenteredCubic' | 'rhombohedral' |
        'simpleCubic' | 'faceCenteredCubic' | 'diamondCubic' | 'orthorhombic' | 'tetragonal' |
        'doubleHexagonalClosePacked' | 'monoclinic' | 'triclinic'
    >;
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
    references?: RefId[];
} >;
