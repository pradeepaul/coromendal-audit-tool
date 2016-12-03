namespace coromendal.ACN {
    export interface AcnAuditorRow {
        AcnAuditorId?: number;
        Name?: string;
    }

    export namespace AcnAuditorRow {
        export const idProperty = 'AcnAuditorId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'ACN.AcnAuditor';
        export const lookupKey = 'ACN.AcnAuditor';

        export function getLookup(): Q.Lookup<AcnAuditorRow> {
            return Q.getLookup<AcnAuditorRow>('ACN.AcnAuditor');
        }

        export namespace Fields {
            export declare const AcnAuditorId: string;
            export declare const Name: string;
        }

        ['AcnAuditorId', 'Name'].forEach(x => (<any>Fields)[x] = x);
    }
}

