
namespace coromendal.ACN {
    export interface AodRow {
        AodId?: number;
        Meetingid?: number;
        Actualcomencementdate?: string;
        Actualcompltedate?: string;
        ProcessOwner?: string;
        Functionalhead?: string;
        Areaofscope?: string;
        Exclusions?: string;
        Reasons?: string;
        Sbu?: string;
        Acnid?: number;
        MeetingidAcnid?: number;
        MeetingidTitle?: string;
        MeetingidAuditscope?: string;
        MeetingidPeriod?: string;
        MeetingidTime?: number;
        MeetingidVenue?: string;
        MeetingidAuditor?: number;
        MeetingidAuditee?: number;
        MeetingidDownload?: number;
        MeetingidUserid?: number;
        MeetingidMomdate?: string;
        MeetingidPlanedcloseddate?: string;
        MeetingidAuditopeningmeetingdate?: string;
        AcnidAcnTilte?: string;
        AcnidPhaseNo?: number;
        AcnidLocation?: string;
        AcnidFromdate?: string;
        AcnidTodate?: string;
        AcnidPeriodfrom?: string;
        AcnidPeriodto?: string;
        AcnidCreationdate?: string;
        AcnidUserid?: number;
    }

    export namespace AodRow {
        export const idProperty = 'AodId';
        export const nameProperty = 'Actualcomencementdate';
        export const localTextPrefix = 'ACN.Aod';

        export namespace Fields {
            export declare const AodId;
            export declare const Meetingid;
            export declare const Actualcomencementdate;
            export declare const Actualcompltedate;
            export declare const ProcessOwner;
            export declare const Functionalhead;
            export declare const Areaofscope;
            export declare const Exclusions;
            export declare const Reasons;
            export declare const Sbu;
            export declare const Acnid;
            export declare const MeetingidAcnid: string;
            export declare const MeetingidTitle: string;
            export declare const MeetingidAuditscope: string;
            export declare const MeetingidPeriod: string;
            export declare const MeetingidTime: string;
            export declare const MeetingidVenue: string;
            export declare const MeetingidAuditor: string;
            export declare const MeetingidAuditee: string;
            export declare const MeetingidDownload: string;
            export declare const MeetingidUserid: string;
            export declare const MeetingidMomdate: string;
            export declare const MeetingidPlanedcloseddate: string;
            export declare const MeetingidAuditopeningmeetingdate: string;
            export declare const AcnidAcnTilte: string;
            export declare const AcnidPhaseNo: string;
            export declare const AcnidLocation: string;
            export declare const AcnidFromdate: string;
            export declare const AcnidTodate: string;
            export declare const AcnidPeriodfrom: string;
            export declare const AcnidPeriodto: string;
            export declare const AcnidCreationdate: string;
            export declare const AcnidUserid: string;
        }

        ['AodId', 'Meetingid', 'Actualcomencementdate', 'Actualcompltedate', 'ProcessOwner', 'Functionalhead', 'Areaofscope', 'Exclusions', 'Reasons', 'Sbu', 'Acnid', 'MeetingidAcnid', 'MeetingidTitle', 'MeetingidAuditscope', 'MeetingidPeriod', 'MeetingidTime', 'MeetingidVenue', 'MeetingidAuditor', 'MeetingidAuditee', 'MeetingidDownload', 'MeetingidUserid', 'MeetingidMomdate', 'MeetingidPlanedcloseddate', 'MeetingidAuditopeningmeetingdate', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate', 'AcnidUserid'].forEach(x => (<any>Fields)[x] = x);
    }
}

