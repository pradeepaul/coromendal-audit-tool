
namespace coromendal.ACN {
    export interface AcnAuditorRow {
        AcnAuditorId?: number;
        Name?: string;
    }

    export namespace AcnAuditorRow {
        export const idProperty = 'AcnAuditorId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'ACN.AcnAuditor';
        export function getLookup(): Q.Lookup<AcnAuditorRow> {
            return Q.getLookup<AcnAuditorRow>('ACN.AcnAuditor');
        }
        export namespace Fields {
            export declare const AcnAuditorId;
            export declare const Name;
        }

        ['AcnAuditorId', 'Name'].forEach(x => (<any>Fields)[x] = x);
    }
}

