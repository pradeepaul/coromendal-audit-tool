namespace coromendal.ACN {
    export interface MinutesofmeetingRow {
        Meetingid?: number;
        Acnid?: number;
        MeetingTitle?: string;
        Auditscope?: string;
        Period?: string;
        Time?: number;
        Venue?: string;
        Auditor?: number;
        Auditee?: number;
        Download?: number;
        Userid?: number;
        momdate?: string;
        planeddate?: string;
        auditopeneddate?: string;
        DetailList?: MeetingIssueRow[];
        AbsentList?: MeetingAbsentRow[];
        PointsList?: MeetingPointsRow[];
        PreviousObservationaudit?: ObservationpreviousauditRow[];
        Newchanges?: NewchangesRow[];
        Newimprovements?: NewiprovementsRow[];
        NoteList?: Northwind.NoteRow[];
        AcnidAcnTilte?: string;
        AcnidPhaseNo?: number;
        AcnidLocation?: string;
        AcnidFromdate?: string;
        AcnidTodate?: string;
        AcnidPeriodfrom?: string;
        AcnidPeriodto?: string;
        AcnidCreationdate?: string;
        AcnidUserid?: number;
        AcnidScopeList?: ScopeRow[];
        UseridUsername?: string;
        UseridDisplayName?: string;
        UseridEmail?: string;
        UseridSource?: string;
        UseridPasswordHash?: string;
        UseridPasswordSalt?: string;
        UseridInsertDate?: string;
        UseridInsertUserId?: number;
        UseridUpdateDate?: string;
        UseridUpdateUserId?: number;
        UseridIsActive?: number;
        UseridLastDirectoryUpdate?: string;
    }

    export namespace MinutesofmeetingRow {
        export const idProperty = 'Meetingid';
        export const nameProperty = 'MeetingTitle';
        export const localTextPrefix = 'ACN.Minutesofmeeting';
        export const lookupKey = 'MinutesofmeetingRow';

        export function getLookup(): Q.Lookup<MinutesofmeetingRow> {
            return Q.getLookup<MinutesofmeetingRow>('MinutesofmeetingRow');
        }

        export namespace Fields {
            export declare const Meetingid: string;
            export declare const Acnid: string;
            export declare const MeetingTitle: string;
            export declare const Auditscope: string;
            export declare const Period: string;
            export declare const Time: string;
            export declare const Venue: string;
            export declare const Auditor: string;
            export declare const Auditee: string;
            export declare const Download: string;
            export declare const Userid: string;
            export declare const momdate: string;
            export declare const planeddate: string;
            export declare const auditopeneddate: string;
            export declare const DetailList: string;
            export declare const AbsentList: string;
            export declare const PointsList: string;
            export declare const PreviousObservationaudit: string;
            export declare const Newchanges: string;
            export declare const Newimprovements: string;
            export declare const NoteList: string;
            export declare const AcnidAcnTilte: string;
            export declare const AcnidPhaseNo: string;
            export declare const AcnidLocation: string;
            export declare const AcnidFromdate: string;
            export declare const AcnidTodate: string;
            export declare const AcnidPeriodfrom: string;
            export declare const AcnidPeriodto: string;
            export declare const AcnidCreationdate: string;
            export declare const AcnidUserid: string;
            export declare const AcnidScopeList: string;
            export declare const UseridUsername: string;
            export declare const UseridDisplayName: string;
            export declare const UseridEmail: string;
            export declare const UseridSource: string;
            export declare const UseridPasswordHash: string;
            export declare const UseridPasswordSalt: string;
            export declare const UseridInsertDate: string;
            export declare const UseridInsertUserId: string;
            export declare const UseridUpdateDate: string;
            export declare const UseridUpdateUserId: string;
            export declare const UseridIsActive: string;
            export declare const UseridLastDirectoryUpdate: string;
        }

        ['Meetingid', 'Acnid', 'MeetingTitle', 'Auditscope', 'Period', 'Time', 'Venue', 'Auditor', 'Auditee', 'Download', 'Userid', 'momdate', 'planeddate', 'auditopeneddate', 'DetailList', 'AbsentList', 'PointsList', 'PreviousObservationaudit', 'Newchanges', 'Newimprovements', 'NoteList', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate', 'AcnidUserid', 'AcnidScopeList', 'UseridUsername', 'UseridDisplayName', 'UseridEmail', 'UseridSource', 'UseridPasswordHash', 'UseridPasswordSalt', 'UseridInsertDate', 'UseridInsertUserId', 'UseridUpdateDate', 'UseridUpdateUserId', 'UseridIsActive', 'UseridLastDirectoryUpdate'].forEach(x => (<any>Fields)[x] = x);
    }
}

