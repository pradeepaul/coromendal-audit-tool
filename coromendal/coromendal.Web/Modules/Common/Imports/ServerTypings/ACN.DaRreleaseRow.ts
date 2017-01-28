
namespace coromendal.ACN {
    export interface DaRreleaseRow {
        DaRreleaseId?: number;
        ReportId?: number;
        AcnId?: number;
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
            export declare const DaRreleaseId;
            export declare const ReportId;
            export declare const AcnId;
            export declare const ReportTitle: string;
            export declare const ReportAcnid: string;
            export declare const ReportDownload: string;
            export declare const ReportUserid: string;
            export declare const ReportStatus: string;
        }

        ['DaRreleaseId', 'ReportId', 'AcnId', 'ReportTitle', 'ReportAcnid', 'ReportDownload', 'ReportUserid', 'ReportStatus'].forEach(x => (<any>Fields)[x] = x);
    }
}

