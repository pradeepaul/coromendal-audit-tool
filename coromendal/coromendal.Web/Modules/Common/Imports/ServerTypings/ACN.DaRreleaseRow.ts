namespace coromendal.ACN {
    export interface DaRreleaseRow {
        DaRreleaseId?: number;
        ReportId?: number;
        AcnId?: number;
        Status?: number;
        NoteList?: Northwind.NoteRow[];
        ReportTitle?: string;
        ReportAcnid?: number;
        ReportDownload?: number;
        ReportUserid?: number;
        ReportStatus?: string;
    }

    export namespace DaRreleaseRow {
        export const idProperty = 'DaRreleaseId';
        export const localTextPrefix = 'ACN.DaRrelease';

        export namespace Fields {
            export declare const DaRreleaseId: string;
            export declare const ReportId: string;
            export declare const AcnId: string;
            export declare const Status: string;
            export declare const NoteList: string;
            export declare const ReportTitle: string;
            export declare const ReportAcnid: string;
            export declare const ReportDownload: string;
            export declare const ReportUserid: string;
            export declare const ReportStatus: string;
        }

        ['DaRreleaseId', 'ReportId', 'AcnId', 'Status', 'NoteList', 'ReportTitle', 'ReportAcnid', 'ReportDownload', 'ReportUserid', 'ReportStatus'].forEach(x => (<any>Fields)[x] = x);
    }
}

