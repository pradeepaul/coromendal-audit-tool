
namespace coromendal.ACN {
    export interface AcnreportRow {
        ReportId?: number;
        Title?: string;
        Acnid?: number;
        Meetingid?: number;
        Feedbackid?: number;
        Download?: number;
        AcnidAcnTilte?: string;
        AcnidPhaseNo?: number;
        AcnidLocation?: string;
        AcnidFromdate?: string;
        AcnidTodate?: string;
        AcnidPeriodfrom?: string;
        AcnidPeriodto?: string;
        AcnidCreationdate?: string;
        MeetingidAcnid?: number;
        MeetingidTitle?: string;
        MeetingidAuditscope?: string;
        MeetingidPeriod?: string;
        MeetingidTime?: number;
        MeetingidVenue?: string;
        MeetingidAuditor?: number;
        MeetingidAuditee?: number;
        MeetingidDownload?: number;
        FeedbackidFeedbackQuestionId?: number;
        FeedbackidFeedbackMeetingId?: number;
        FeedbackidFeedbackRating?: number;
        FeedbackidFeedbackRemarks?: string;
    }

    export namespace AcnreportRow {
        export const idProperty = 'ReportId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'ACN.Acnreport';

        export namespace Fields {
            export declare const ReportId;
            export declare const Title;
            export declare const Acnid;
            export declare const Meetingid;
            export declare const Feedbackid;
            export declare const Download;
            export declare const AcnidAcnTilte: string;
            export declare const AcnidPhaseNo: string;
            export declare const AcnidLocation: string;
            export declare const AcnidFromdate: string;
            export declare const AcnidTodate: string;
            export declare const AcnidPeriodfrom: string;
            export declare const AcnidPeriodto: string;
            export declare const AcnidCreationdate: string;
            export declare const MeetingidAcnid: string;
            export declare const MeetingidTitle: string;
            export declare const MeetingidAuditscope: string;
            export declare const MeetingidPeriod: string;
            export declare const MeetingidTime: string;
            export declare const MeetingidVenue: string;
            export declare const MeetingidAuditor: string;
            export declare const MeetingidAuditee: string;
            export declare const MeetingidDownload: string;
            export declare const FeedbackidFeedbackQuestionId: string;
            export declare const FeedbackidFeedbackMeetingId: string;
            export declare const FeedbackidFeedbackRating: string;
            export declare const FeedbackidFeedbackRemarks: string;
        }

        ['ReportId', 'Title', 'Acnid', 'Meetingid', 'Feedbackid', 'Download', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate', 'MeetingidAcnid', 'MeetingidTitle', 'MeetingidAuditscope', 'MeetingidPeriod', 'MeetingidTime', 'MeetingidVenue', 'MeetingidAuditor', 'MeetingidAuditee', 'MeetingidDownload', 'FeedbackidFeedbackQuestionId', 'FeedbackidFeedbackMeetingId', 'FeedbackidFeedbackRating', 'FeedbackidFeedbackRemarks'].forEach(x => (<any>Fields)[x] = x);
    }
}

