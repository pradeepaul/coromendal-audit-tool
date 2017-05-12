
namespace coromendal.ACN {
    export interface AcnAuditeeabsRefRow {
        AcnAuditeeabsRefId?: number;
        AcnAuditeeId?: number;
        MeetingAbsentauditeeId?: number;
    }

    export namespace AcnAuditeeabsRefRow {
        export const idProperty = 'AcnAuditeeabsRefId';
        export const localTextPrefix = 'ACN.AcnAuditeeabsRef';

        export namespace Fields {
            export declare const AcnAuditeeabsRefId;
            export declare const AcnAuditeeId;
            export declare const MeetingAbsentauditeeId;
        }

        ['AcnAuditeeabsRefId', 'AcnAuditeeId', 'MeetingAbsentauditeeId'].forEach(x => (<any>Fields)[x] = x);
    }
}

