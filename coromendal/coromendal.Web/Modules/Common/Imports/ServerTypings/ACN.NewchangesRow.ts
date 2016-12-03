namespace coromendal.ACN {
    export interface NewchangesRow {
        NewchangesId?: number;
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

    export namespace NewchangesRow {
        export const idProperty = 'NewchangesId';
        export const nameProperty = 'Observation';
        export const localTextPrefix = 'ACN.Newchanges';

        export namespace Fields {
            export declare const NewchangesId: string;
            export declare const MeetingId: string;
            export declare const Observation: string;
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

        ['NewchangesId', 'MeetingId', 'Observation', 'MeetingAcnid', 'MeetingAuditscope', 'MeetingPeriod', 'MeetingTime', 'MeetingVenue', 'MeetingAuditor', 'MeetingAuditee', 'MeetingDownload', 'MeetingUserid'].forEach(x => (<any>Fields)[x] = x);
    }
}

