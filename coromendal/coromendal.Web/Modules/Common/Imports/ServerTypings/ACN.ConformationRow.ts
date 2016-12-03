namespace coromendal.ACN {
    export interface ConformationRow {
        ConformationId?: number;
        Conformationname?: string;
    }

    export namespace ConformationRow {
        export const idProperty = 'ConformationId';
        export const nameProperty = 'Conformationname';
        export const localTextPrefix = 'ACN.Conformation';
        export const lookupKey = 'ACN.ConformationRow';

        export function getLookup(): Q.Lookup<ConformationRow> {
            return Q.getLookup<ConformationRow>('ACN.ConformationRow');
        }

        export namespace Fields {
            export declare const ConformationId: string;
            export declare const Conformationname: string;
        }

        ['ConformationId', 'Conformationname'].forEach(x => (<any>Fields)[x] = x);
    }
}

