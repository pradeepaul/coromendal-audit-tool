namespace coromendal.ACN {
    export interface KeyfactsRow {
        KeyfactsId?: number;
        AcnId?: number;
        Particulars?: string;
        Value?: string;
        Reportid?: number;
        AcnAcnTilte?: string;
        AcnPhaseNo?: number;
        AcnLocation?: string;
        AcnFromdate?: string;
        AcnTodate?: string;
        AcnPeriodfrom?: string;
        AcnPeriodto?: string;
        AcnCreationdate?: string;
        AcnUserid?: number;
        ReportidTitle?: string;
        ReportidAcnid?: number;
        ReportidDownload?: number;
        ReportidUserid?: number;
        ReportidStatus?: string;
    }

    export namespace KeyfactsRow {
        export const idProperty = 'KeyfactsId';
        export const nameProperty = 'Particulars';
        export const localTextPrefix = 'ACN.Keyfacts';

        export namespace Fields {
            export declare const KeyfactsId: string;
            export declare const AcnId: string;
            export declare const Particulars: string;
            export declare const Value: string;
            export declare const Reportid: string;
            export declare const AcnAcnTilte: string;
            export declare const AcnPhaseNo: string;
            export declare const AcnLocation: string;
            export declare const AcnFromdate: string;
            export declare const AcnTodate: string;
            export declare const AcnPeriodfrom: string;
            export declare const AcnPeriodto: string;
            export declare const AcnCreationdate: string;
            export declare const AcnUserid: string;
            export declare const ReportidTitle: string;
            export declare const ReportidAcnid: string;
            export declare const ReportidDownload: string;
            export declare const ReportidUserid: string;
            export declare const ReportidStatus: string;
        }

        ['KeyfactsId', 'AcnId', 'Particulars', 'Value', 'Reportid', 'AcnAcnTilte', 'AcnPhaseNo', 'AcnLocation', 'AcnFromdate', 'AcnTodate', 'AcnPeriodfrom', 'AcnPeriodto', 'AcnCreationdate', 'AcnUserid', 'ReportidTitle', 'ReportidAcnid', 'ReportidDownload', 'ReportidUserid', 'ReportidStatus'].forEach(x => (<any>Fields)[x] = x);
    }
}

