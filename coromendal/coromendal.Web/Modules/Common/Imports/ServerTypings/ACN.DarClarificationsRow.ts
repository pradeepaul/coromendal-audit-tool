namespace coromendal.ACN {
    export interface DarClarificationsRow {
        DarClarificationsId?: number;
        ReportId?: number;
        AcnId?: number;
        Status?: number;
        ReportTitle?: string;
        ReportAcnid?: number;
        ReportDownload?: number;
        ReportUserid?: number;
        ReportStatus?: string;
        NoteList?: Northwind.NoteRow[];
    }

    export namespace DarClarificationsRow {
        export const idProperty = 'DarClarificationsId';
        export const localTextPrefix = 'ACN.DarClarifications';

        export namespace Fields {
            export declare const DarClarificationsId: string;
            export declare const ReportId: string;
            export declare const AcnId: string;
            export declare const Status: string;
            export declare const ReportTitle: string;
            export declare const ReportAcnid: string;
            export declare const ReportDownload: string;
            export declare const ReportUserid: string;
            export declare const ReportStatus: string;
            export declare const NoteList: string;
        }

        ['DarClarificationsId', 'ReportId', 'AcnId', 'Status', 'ReportTitle', 'ReportAcnid', 'ReportDownload', 'ReportUserid', 'ReportStatus', 'NoteList'].forEach(x => (<any>Fields)[x] = x);
    }
}

