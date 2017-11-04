namespace coromendal.ACN {
    export interface AodRow {
        AodId?: number;
        Meetingid?: number;
        Actualcomencementdate?: string;
        Actualcompltedate?: string;
        ProcessOwner?: string;
        Functionalhead?: string;
        Areaofscope?: ScopeRow[];
        Exclusions?: string;
        Reasons?: string;
        Sbu?: string;
        Acnid?: number;
        Preview?: string;
        Send?: string;
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
        inputfromauditee?: InputfromauditeeRow[];
        Satisfactionrating?: SatisfactionratingRow[];
        Observationpending?: ObservationpendingRow[];
        Currentauditobservation?: CurrentauditobservationRow[];
    }

    export namespace AodRow {
        export const idProperty = 'AodId';
        export const nameProperty = 'Actualcomencementdate';
        export const localTextPrefix = 'ACN.Aod';

        export namespace Fields {
            export declare const AodId: string;
            export declare const Meetingid: string;
            export declare const Actualcomencementdate: string;
            export declare const Actualcompltedate: string;
            export declare const ProcessOwner: string;
            export declare const Functionalhead: string;
            export declare const Areaofscope: string;
            export declare const Exclusions: string;
            export declare const Reasons: string;
            export declare const Sbu: string;
            export declare const Acnid: string;
            export declare const Preview: string;
            export declare const Send: string;
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
            export declare const inputfromauditee: string;
            export declare const Satisfactionrating: string;
            export declare const Observationpending: string;
            export declare const Currentauditobservation: string;
        }

        ['AodId', 'Meetingid', 'Actualcomencementdate', 'Actualcompltedate', 'ProcessOwner', 'Functionalhead', 'Areaofscope', 'Exclusions', 'Reasons', 'Sbu', 'Acnid', 'Preview', 'Send', 'MeetingidAcnid', 'MeetingidTitle', 'MeetingidAuditscope', 'MeetingidPeriod', 'MeetingidTime', 'MeetingidVenue', 'MeetingidAuditor', 'MeetingidAuditee', 'MeetingidDownload', 'MeetingidUserid', 'MeetingidMomdate', 'MeetingidPlanedcloseddate', 'MeetingidAuditopeningmeetingdate', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate', 'AcnidUserid', 'inputfromauditee', 'Satisfactionrating', 'Observationpending', 'Currentauditobservation'].forEach(x => (<any>Fields)[x] = x);
    }
}

