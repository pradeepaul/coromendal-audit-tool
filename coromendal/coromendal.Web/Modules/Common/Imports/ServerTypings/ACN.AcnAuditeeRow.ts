namespace coromendal.ACN {
    export interface AcnAuditeeRow {
        AcnAuditeeId?: number;
        Name?: string;
    }

    export namespace AcnAuditeeRow {
        export const idProperty = 'AcnAuditeeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'ACN.AcnAuditee';
        export const lookupKey = 'ACN.AcnAuditee';

        export function getLookup(): Q.Lookup<AcnAuditeeRow> {
            return Q.getLookup<AcnAuditeeRow>('ACN.AcnAuditee');
        }

        export namespace Fields {
            export declare const AcnAuditeeId: string;
            export declare const Name: string;
        }

        ['AcnAuditeeId', 'Name'].forEach(x => (<any>Fields)[x] = x);
    }
}

