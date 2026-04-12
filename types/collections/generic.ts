/**
 * Generic Collection Types
 * Defined common collection types for various data groups.
 */

import type { LiteralUnion } from 'devtypes/types/primitive';
import type { Distinct, Group, Single } from '@/abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '@/abstract/property';
import type { RefId } from '@/abstract/reference';
import type { D3Format, ImageFormat } from '@/enums/generic';


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
 * Represents a group of properties for different languages.
 * 
 * @template L - The required language codes (default: 'en')
 * @template T - The value type (default: string)
 */
export type LangGroup< L extends string = 'en', T = string > = Group< {
    [ K in LiteralUnion< L > ]: Distinct< T >;
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
 * @param country - Country/Countries of discovery
 * @param institute - Institute(s) or organization(s) of discovery
 * @param references - References related to the discovery
 */
export type DiscoveryGroup = Group< {
    year?: Distinct< number >;
    discoverer?: Distinct< string | string[] >;
    country?: Distinct< string | string[] >;
    institute?: Distinct< string | string[] >;
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
        format?: ImageFormat;
        credits: string;
        license: string;
        author?: string;
        source?: string;
        width?: number;
        height?: number;
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
        data: string;
        format: D3Format;
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
 * NMRGroup
 * Nuclear Magnetic Resonance properties for nuclides.
 * 
 * @param spin - Nuclear spin quantum number
 * @param gyromagneticRatio - Gyromagnetic ratio of the nuclide
 * @param magneticMoment - Magnetic moment of the nuclide
 * @param larmorPrecession - Larmor precession frequency
 * @param sensitivity - Relative sensitivity of the nuclide in NMR
 * @param quadrupoleMoment - Quadrupole moment of the nuclide
 * @param referenceField - Reference magnetic field strength for NMR measurements
 * @param chemicalShiftReference - Chemical shift reference information
 */
export type NMRGroup = Group< {
    spin?: Single< PrimitiveProperty< number > >;
    gyromagneticRatio?: Single< NumberProperty< 'magneticMoment' > >;
    magneticMoment?: Single< NumberProperty< 'magneticMoment' > >;
    larmorPrecession?: Single< NumberProperty< 'frequency' > >;
    sensitivity?: Single< PrimitiveProperty< number > >;
    quadrupoleMoment?: Single< NumberProperty< 'quantity' > >;
    referenceField?: Single< NumberProperty< 'magneticFieldStrength' > >;
    chemicalShiftReference?: Single< PrimitiveProperty< string > >;
} >;
