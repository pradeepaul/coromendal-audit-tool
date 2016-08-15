
namespace coromendal.ACN {
    export interface AcnAuditeeRow {
        AcnAuditeeId?: number;
        Name?: string;
    }

    export namespace AcnAuditeeRow {
        export const idProperty = 'AcnAuditeeId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'ACN.AcnAuditee';

        export namespace Fields {
            export declare const AcnAuditeeId;
            export declare const Name;
        }

        ['AcnAuditeeId', 'Name'].forEach(x => (<any>Fields)[x] = x);
    }
}

