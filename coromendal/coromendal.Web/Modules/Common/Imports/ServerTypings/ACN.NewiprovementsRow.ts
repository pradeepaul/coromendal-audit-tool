
namespace coromendal.ACN {
    export interface NewiprovementsRow {
        NewiprovementsId?: number;
        MeetingId?: number;
        Observation?: string;
        MeetingAcnid?: number;
        MeetingAuditscope?: string;
        MeetingPeriod?: string;
        MeetingTime?: number;
        MeetingVenue?: string;
        MeetingAuditor?: number;
        MeetingAuditee?: number;
        MeetingDownload?: number;
        MeetingUserid?: number;
    }

    export namespace NewiprovementsRow {
        export const idProperty = 'NewiprovementsId';
        export const nameProperty = 'Observation';
        export const localTextPrefix = 'ACN.Newiprovements';

        export namespace Fields {
            export declare const NewiprovementsId;
            export declare const MeetingId;
            export declare const Observation;
            export declare const MeetingAcnid: string;
            export declare const MeetingAuditscope: string;
            export declare const MeetingPeriod: string;
            export declare const MeetingTime: string;
            export declare const MeetingVenue: string;
            export declare const MeetingAuditor: string;
            export declare const MeetingAuditee: string;
            export declare const MeetingDownload: string;
            export declare const MeetingUserid: string;
        }

        ['NewiprovementsId', 'MeetingId', 'Observation', 'MeetingAcnid', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid'].forEach(x => (<any>Fields)[x] = x);
    }
}

