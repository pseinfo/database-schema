/**
 * Generic Collection Types
 * Defined common collection types for various data groups.
 */

import type { Distinct, Group, LangGroup, Single } from '../abstract/collection';
import type { NumberProperty, PrimitiveProperty } from '../abstract/property';
import type { RefId } from '../abstract/reference';
import type { CrystalStructure } from '../utils/const';

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
 * @param crystalClass - Crystal class
 * @param spaceGroup - Space group notation
 * @param spaceGroupNumber - Space group number
 * @param spaceGroupSymbol - Space group symbol
 * @param pearsonSymbol - Pearson symbol notation
 * @param formulaUnitsZ - Formula units per unit cell
 * @param latticeConstant - Lattice constants group
 * @param twinning - Twinning information
 * @param habit - Habit information
 * @param faces - Faces information
 * @param references - References related to crystallographic data
 */
export type CrystalGroup = Group< {
    crystalStructure?: Distinct< CrystalStructure >;
    crystalClass?: Distinct< string >;
    spaceGroup?: Distinct< string >;
    spaceGroupNumber?: Distinct< number >;
    spaceGroupSymbol?: Distinct< string >;
    pearsonSymbol?: Distinct< string >;
    formulaUnitsZ?: Distinct< number >;
    latticeConstant?: Group< {
        a?: Distinct< number >;
        b?: Distinct< number >;
        c?: Distinct< number >;
        alpha?: Distinct< number >;
        beta?: Distinct< number >;
        gamma?: Distinct< number >;
    } >;
    twinning?: Distinct< string | string[] >;
    habit?: Distinct< string | string[] >;
    faces?: Distinct< string[] >;
    references?: RefId[];
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
    chemicalShiftReference?: Distinct< string >;
} >;
