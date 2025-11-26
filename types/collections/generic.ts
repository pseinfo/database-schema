/**
 * Generic Collection Types
 * Defined common collection types for various data groups.
 */

import { Distinct } from '../abstract/collection';

/**
 * MetaData Type
 * Represents metadata information for collections.
 */
export type MetaData = Distinct< {
    "@metadata": {
        schemaVersion: 1;
        lastModified: string;
    };
} >;
