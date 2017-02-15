namespace coromendal.ACN {
    export interface AcnreportRow {
        ReportId?: number;
        Title?: string;
        Acnid?: number;
        Download?: number;
        userid?: number;
        status?: string;
        Qc?: number[];
        AcnidAcnTilte?: string;
        AcnidPhaseNo?: number;
        AcnidLocation?: string;
        AcnidFromdate?: string;
        AcnidTodate?: string;
        AcnidPeriodfrom?: string;
        AcnidPeriodto?: string;
        AcnidCreationdate?: string;
        Keyfacts?: KeyfactsRow[];
    }

    export namespace AcnreportRow {
        export const idProperty = 'ReportId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'ACN.Acnreport';
        export const lookupKey = 'AcnreportRow';

        export function getLookup(): Q.Lookup<AcnreportRow> {
            return Q.getLookup<AcnreportRow>('AcnreportRow');
        }

        export namespace Fields {
            export declare const ReportId: string;
            export declare const Title: string;
            export declare const Acnid: string;
            export declare const Download: string;
            export declare const userid: string;
            export declare const status: string;
            export declare const Qc: string;
            export declare const AcnidAcnTilte: string;
            export declare const AcnidPhaseNo: string;
            export declare const AcnidLocation: string;
            export declare const AcnidFromdate: string;
            export declare const AcnidTodate: string;
            export declare const AcnidPeriodfrom: string;
            export declare const AcnidPeriodto: string;
            export declare const AcnidCreationdate: string;
            export declare const Keyfacts: string;
        }

        ['ReportId', 'Title', 'Acnid', 'Download', 'userid', 'status', 'Qc', 'AcnidAcnTilte', 'AcnidPhaseNo', 'AcnidLocation', 'AcnidFromdate', 'AcnidTodate', 'AcnidPeriodfrom', 'AcnidPeriodto', 'AcnidCreationdate', 'Keyfacts'].forEach(x => (<any>Fields)[x] = x);
    }
}

