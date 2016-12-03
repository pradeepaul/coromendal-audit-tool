namespace coromendal.ACN {
    export interface MeetingIssueRow {
        MeetingIssueId?: number;
        MeetingId?: number;
        AreaofOperation?: string;
        Issue?: string;
        Status?: string;
        ExpectedDate?: string;
        Comments?: string;
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

    export namespace MeetingIssueRow {
        export const idProperty = 'MeetingIssueId';
        export const nameProperty = 'AreaofOperation';
        export const localTextPrefix = 'ACN.MeetingIssue';

        export namespace Fields {
            export declare const MeetingIssueId: string;
            export declare const MeetingId: string;
            export declare const AreaofOperation: string;
            export declare const Issue: string;
            export declare const Status: string;
            export declare const ExpectedDate: string;
            export declare const Comments: string;
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

        ['MeetingIssueId', 'MeetingId', 'AreaofOperation', 'Issue', 'Status', 'ExpectedDate', 'Comments', 'MeetingAcnid', 'MeetingTitle', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid'].forEach(x => (<any>Fields)[x] = x);
    }
}

