
namespace coromendal.Administration {
    export interface MasterAcnAuditeeRefRow {
        AcnAuditeeRefId?: number;
        AcnAuditeeId?: number;
        AcnId?: number;
    }

    export namespace MasterAcnAuditeeRefRow {
        export const idProperty = 'AcnAuditeeRefId';
        export const localTextPrefix = 'Administration.MasterAcnAuditeeRef';

        export namespace Fields {
            export declare const AcnAuditeeRefId;
            export declare const AcnAuditeeId;
            export declare const AcnId;
        }

        ['AcnAuditeeRefId', 'AcnAuditeeId', 'AcnId'].forEach(x => (<any>Fields)[x] = x);
    }
}

