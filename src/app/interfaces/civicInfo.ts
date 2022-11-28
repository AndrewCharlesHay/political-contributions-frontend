import { Office, Official } from './offices';

export const instanceOfCivicInfo = (object: any): object is CivicInfo => {
    return 'officials' in object;
}

export interface CivicInfo {
    normalizedInput: NormalizedInput;
    kind: string;
    divisions: Divisions;
    offices: Office[];
    officials: Official[];
}

interface Divisions {
    [key: string]: Division;
}

interface Division {
    name: string;
    officeIndices: number[];
}

interface NormalizedInput {
    line1: string;
    city: string;
    state: string;
    zip: string;
}