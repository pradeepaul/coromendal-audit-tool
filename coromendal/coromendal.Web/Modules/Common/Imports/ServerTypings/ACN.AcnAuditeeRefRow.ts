
namespace coromendal.ACN {
    export interface AcnAuditeeRefRow {
        AcnAuditeeRefId?: number;
        AcnAuditeeId?: number;
        AcnId?: number;
    }

    export namespace AcnAuditeeRefRow {
        export const idProperty = 'AcnAuditeeRefId';
        export const localTextPrefix = 'ACN.AcnAuditeeRef';

        export namespace Fields {
            export declare const AcnAuditeeRefId;
            export declare const AcnAuditeeId;
            export declare const AcnId;
        }

        ['AcnAuditeeRefId', 'AcnAuditeeId', 'AcnId'].forEach(x => (<any>Fields)[x] = x);
    }
}

