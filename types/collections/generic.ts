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
 * 
 * @param schemaVersion - Version of the schema
 * @param lastModified - Timestamp of the last modification
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
 * 
 * @param universeAbundance - Abundance in the universe
 * @param solarSystemAbundance - Abundance in the solar system
 * @param sunAbundance - Abundance in the sun
 * @param meteoriteAbundance - Abundance in meteorites
 * @param crustalAbundance - Abundance in the Earth's crust
 * @param oceanAbundance - Abundance in oceans
 * @param seaAbundance - Abundance in seas
 * @param streamAbundance - Abundance in streams
 * @param atmosphereAbundance - Abundance in the atmosphere
 * @param humanAbundance - Abundance in the human body
 * @param mineralAbundance - Abundance in minerals
 * @param oreAbundance - Abundance in ores
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
 * 
 * @param year - Year of discovery
 * @param discoverer - Name(s) of the discoverer(s)
 * @param country - Country of discovery
 * @param institute - Institute or organization of discovery
 * @param references - References related to the discovery
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
 * 
 * @param images - Image files related to the entry
 * @param spectrum - Spectral analysis data
 * @param structure3D - 3D structure files
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
 * 
 * @param links - List of web links with metadata
 * @param wiki - Wikipedia links in different languages
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
 * 
 * @param crystalStructure - Type of crystal structure
 * @param pearsonSymbol - Pearson symbol notation
 * @param spaceGroup - Space group notation
 * @param spaceGroupNumber - Space group number
 * @param latticeConstant - Lattice constants group
 * @param references - References related to crystallographic data
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
