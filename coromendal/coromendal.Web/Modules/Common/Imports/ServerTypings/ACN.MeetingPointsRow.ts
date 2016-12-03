namespace coromendal.ACN {
    export interface MeetingPointsRow {
        MeetingPointsId?: number;
        MeetingId?: number;
        Points?: string;
        MeetingAcnid?: number;
        MeetingTitle?: string;
        MeetingAuditscope?: string;
        MeetingPeriod?: string;
        MeetingTime?: number;
        MeetingVenue?: string;
        MeetingAuditor?: number;
        MeetingAuditee?: number;
        MeetingDownload?: number;
        MeetingUserid?: number;
    }

    export namespace MeetingPointsRow {
        export const idProperty = 'MeetingPointsId';
        export const nameProperty = 'Points';
        export const localTextPrefix = 'ACN.MeetingPoints';

        export namespace Fields {
            export declare const MeetingPointsId: string;
            export declare const MeetingId: string;
            export declare const Points: string;
            export declare const MeetingAcnid: string;
            export declare const MeetingTitle: string;
            export declare const MeetingAuditscope: string;
            export declare const MeetingPeriod: string;
            export declare const MeetingTime: string;
            export declare const MeetingVenue: string;
            export declare const MeetingAuditor: string;
            export declare const MeetingAuditee: string;
            export declare const MeetingDownload: string;
            export declare const MeetingUserid: string;
        }

        ['MeetingPointsId', 'MeetingId', 'Points', 'MeetingAcnid', 'MeetingTitle', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid'].forEach(x => (<any>Fields)[x] = x);
    }
}

