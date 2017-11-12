
namespace coromendal.ACN {
    export interface FinalreportRow {
        ReportId?: number;
        Title?: string;
        Acnid?: number;
        Download?: number;
        Userid?: number;
        Status?: string;
        AcnidAcnTilte?: string;
        AcnidPhaseNo?: number;
        AcnidLocation?: string;
        AcnidFromdate?: string;
        AcnidTodate?: string;
        AcnidPeriodfrom?: string;
        AcnidPeriodto?: string;
        AcnidCreationdate?: string;
        AcnidUserid?: number;
        AcnidPreview?: string;
        AcnidSend?: string;
        AcnidMId?: number;
        AcnidStatus?: number;
    }

    export namespace FinalreportRow {
        export const idProperty = 'ReportId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'ACN.Finalreport';

        export namespace Fields {
            export declare const ReportId;
            export declare const Title;
            export declare const Acnid;
            export declare const Download;
            export declare const Userid;
            export declare const Status;
            export declare const AcnidAcnTilte: string;
            export declare const AcnidPhaseNo: string;
            export declare const AcnidLocation: string;
            export declare const AcnidFromdate: string;
            export declare const AcnidTodate: string;
            export declare const AcnidPeriodfrom: string;
            export declare const AcnidPeriodto: string;
            export declare const AcnidCreationdate: string;
            export declare const AcnidUserid: string;
            export declare const AcnidPreview: string;
            export declare const AcnidSend: string;
            export declare const AcnidMId: string;
            export declare const AcnidStatus: string;
        }

        ['ReportId', 'Title', 'Acnid', 'Download', 'Userid', 'Status', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate', 'AcnidUserid', 'AcnidPreview', 'AcnidSend', 'AcnidMId', 'AcnidStatus'].forEach(x => (<any>Fields)[x] = x);
    }
}

