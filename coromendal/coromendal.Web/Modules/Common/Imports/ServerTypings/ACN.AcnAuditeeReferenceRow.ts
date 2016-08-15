
namespace coromendal.ACN {
    export interface AcnAuditeeReferenceRow {
        AcnAuditeeReferenceId?: number;
        AcnAuditeeId?: number;
        AcnmasterId?: number;
    }

    export namespace AcnAuditeeReferenceRow {
        export const idProperty = 'AcnAuditeeReferenceId';
        export const localTextPrefix = 'ACN.AcnAuditeeReference';

        export namespace Fields {
            export declare const AcnAuditeeReferenceId;
            export declare const AcnAuditeeId;
            export declare const AcnmasterId;
        }

        ['AcnAuditeeReferenceId', 'AcnAuditeeId', 'AcnmasterId'].forEach(x => (<any>Fields)[x] = x);
    }
}

