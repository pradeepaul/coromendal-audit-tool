
namespace coromendal.ACN {
    export interface DarClarificationsRow {
        DarClarificationsId?: number;
        ReportId?: number;
        AcnId?: number;
        ReportTitle?: string;
        ReportAcnid?: number;
        ReportDownload?: number;
        ReportUserid?: number;
        ReportStatus?: string;
    }

    export namespace DarClarificationsRow {
        export const idProperty = 'DarClarificationsId';
        export const localTextPrefix = 'ACN.DarClarifications';

        export namespace Fields {
            export declare const DarClarificationsId;
            export declare const ReportId;
            export declare const AcnId;
            export declare const ReportTitle: string;
            export declare const ReportAcnid: string;
            export declare const ReportDownload: string;
            export declare const ReportUserid: string;
            export declare const ReportStatus: string;
        }

        ['DarClarificationsId', 'ReportId', 'AcnId', 'ReportTitle', 'ReportAcnid', 'ReportDownload', 'ReportUserid', 'ReportStatus'].forEach(x => (<any>Fields)[x] = x);
    }
}

