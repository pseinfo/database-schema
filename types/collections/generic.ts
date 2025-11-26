import { Distinct } from '../abstract/collection';

export type MetaData = Distinct< {
    "@metadata": {
        schemaVersion: 1;
        lastModified: string;
    };
} >;
