namespace coromendal.ACN {
    export interface FeedbackRow {
        FeedbackId?: number;
        FeedbackQuestionId?: number;
        FeedbackMeetingId?: number;
        FeedbackRating?: number;
        FeedbackRemarks?: string;
        Preview?: string;
        FeedbackQuestionQuestiontext?: string;
        FeedbackMeetingAcnid?: number;
        FeedbackMeetingTitle?: string;
        FeedbackMeetingAuditscope?: string;
        FeedbackMeetingPeriod?: string;
        FeedbackMeetingTime?: number;
        FeedbackMeetingVenue?: string;
        FeedbackMeetingAuditor?: number;
        FeedbackMeetingAuditee?: number;
    }

    export namespace FeedbackRow {
        export const idProperty = 'FeedbackId';
        export const nameProperty = 'FeedbackRemarks';
        export const localTextPrefix = 'ACN.Feedback';
        export const lookupKey = 'FeedbackRow';

        export function getLookup(): Q.Lookup<FeedbackRow> {
            return Q.getLookup<FeedbackRow>('FeedbackRow');
        }

        export namespace Fields {
            export declare const FeedbackId: string;
            export declare const FeedbackQuestionId: string;
            export declare const FeedbackMeetingId: string;
            export declare const FeedbackRating: string;
            export declare const FeedbackRemarks: string;
            export declare const Preview: string;
            export declare const FeedbackQuestionQuestiontext: string;
            export declare const FeedbackMeetingAcnid: string;
            export declare const FeedbackMeetingTitle: string;
            export declare const FeedbackMeetingAuditscope: string;
            export declare const FeedbackMeetingPeriod: string;
            export declare const FeedbackMeetingTime: string;
            export declare const FeedbackMeetingVenue: string;
            export declare const FeedbackMeetingAuditor: string;
            export declare const FeedbackMeetingAuditee: string;
        }

        ['FeedbackId', 'FeedbackQuestionId', 'FeedbackMeetingId', 'FeedbackRating', 'FeedbackRemarks', 'Preview', 'FeedbackQuestionQuestiontext', 'FeedbackMeetingAcnid', 'FeedbackMeetingTitle', 'FeedbackMeetingAuditscope', 'FeedbackMeetingPeriod', 'FeedbackMeetingTime', 'FeedbackMeetingVenue', 'FeedbackMeetingAuditor', 'FeedbackMeetingAuditee'].forEach(x => (<any>Fields)[x] = x);
    }
}

