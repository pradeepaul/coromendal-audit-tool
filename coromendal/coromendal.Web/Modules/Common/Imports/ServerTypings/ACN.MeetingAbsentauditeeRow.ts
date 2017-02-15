namespace coromendal.ACN {
    export interface MeetingAbsentauditeeRow {
        MeetingAbsentauditeeId?: number;
        MeetingId?: number;
        AbsentUser?: number;
        Reason?: string;
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

    export namespace MeetingAbsentauditeeRow {
        export const idProperty = 'MeetingAbsentauditeeId';
        export const nameProperty = 'Reason';
        export const localTextPrefix = 'ACN.MeetingAbsentauditee';
        export const lookupKey = 'ACN.MeetingAbsentauditee';

        export function getLookup(): Q.Lookup<MeetingAbsentauditeeRow> {
            return Q.getLookup<MeetingAbsentauditeeRow>('ACN.MeetingAbsentauditee');
        }

        export namespace Fields {
            export declare const MeetingAbsentauditeeId: string;
            export declare const MeetingId: string;
            export declare const AbsentUser: string;
            export declare const Reason: string;
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

        ['MeetingAbsentauditeeId', 'MeetingId', 'AbsentUser', 'Reason', 'MeetingAcnid', 'MeetingTitle', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid', 'MeetingMomdate', 'MeetingPlanedcloseddate', 'MeetingAuditopeningmeetingdate', 'MeetingSend'].forEach(x => (<any>Fields)[x] = x);
    }
}

