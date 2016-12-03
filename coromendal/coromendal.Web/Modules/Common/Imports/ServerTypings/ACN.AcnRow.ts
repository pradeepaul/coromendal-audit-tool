namespace coromendal.ACN {
    export interface AcnRow {
        AcnId?: number;
        AcnTilte?: string;
        Auditor?: number[];
        Auditee?: number[];
        PhaseNo?: number;
        location?: string;
        Fromdate?: string;
        Todate?: string;
        Periodfrom?: string;
        Periodto?: string;
        creationdate?: string;
        ScopeList?: ScopeRow[];
    }

    export namespace AcnRow {
        export const idProperty = 'AcnId';
        export const nameProperty = 'AcnTilte';
        export const localTextPrefix = 'ACN.Acn';
        export const lookupKey = 'ACN.Acn';

        export function getLookup(): Q.Lookup<AcnRow> {
            return Q.getLookup<AcnRow>('ACN.Acn');
        }

        export namespace Fields {
            export declare const AcnId: string;
            export declare const AcnTilte: string;
            export declare const Auditor: string;
            export declare const Auditee: string;
            export declare const PhaseNo: string;
            export declare const location: string;
            export declare const Fromdate: string;
            export declare const Todate: string;
            export declare const Periodfrom: string;
            export declare const Periodto: string;
            export declare const creationdate: string;
            export declare const ScopeList: string;
        }

        ['AcnId', 'AcnTilte', 'Auditor', 'Auditee', 'PhaseNo', 'location', 'Fromdate', 'Todate', 'Periodfrom', 'Periodto', 'creationdate', 'ScopeList'].forEach(x => (<any>Fields)[x] = x);
    }
}

