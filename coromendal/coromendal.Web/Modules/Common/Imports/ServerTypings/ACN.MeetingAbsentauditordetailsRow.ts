
namespace coromendal.ACN {
    export interface MeetingAbsentauditordetailsRow {
        MeetingAbsentauditorId?: number;
        MeetingId?: number;
        AbsentUser?: number;
        Reason?: string;
        Name?: string;
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
        MeetingMomdate?: string;
        MeetingPlanedcloseddate?: string;
        MeetingAuditopeningmeetingdate?: string;
        MeetingSend?: number;
    }

    export namespace MeetingAbsentauditordetailsRow {
        export const idProperty = 'MeetingAbsentauditorId';
        export const nameProperty = 'Reason';
        export const localTextPrefix = 'ACN.MeetingAbsentauditordetails';

        export namespace Fields {
            export declare const MeetingAbsentauditorId;
            export declare const MeetingId;
            export declare const AbsentUser;
            export declare const Reason;
            export declare const Name;
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
            export declare const MeetingMomdate: string;
            export declare const MeetingPlanedcloseddate: string;
            export declare const MeetingAuditopeningmeetingdate: string;
            export declare const MeetingSend: string;
        }

        ['MeetingAbsentauditorId', 'MeetingId', 'AbsentUser', 'Reason', 'Name', 'MeetingAcnid', 'MeetingTitle', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid', 'MeetingMomdate', 'MeetingPlanedcloseddate', 'MeetingAuditopeningmeetingdate', 'MeetingSend'].forEach(x => (<any>Fields)[x] = x);
    }
}

