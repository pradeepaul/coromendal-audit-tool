namespace coromendal.ACN {
    export interface ScopeRow {
        ScopeId?: number;
        Title?: string;
        AcnId?: number;
        AcnAcnTilte?: string;
        AcnPhaseNo?: number;
        AcnLocation?: string;
        AcnFromdate?: string;
        AcnTodate?: string;
        AcnPeriodfrom?: string;
        AcnPeriodto?: string;
        AcnCreationdate?: string;
    }

    export namespace ScopeRow {
        export const idProperty = 'ScopeId';
        export const nameProperty = 'Title';
        export const localTextPrefix = 'ACN.Scope';

        export namespace Fields {
            export declare const ScopeId: string;
            export declare const Title: string;
            export declare const AcnId: string;
            export declare const AcnAcnTilte: string;
            export declare const AcnPhaseNo: string;
            export declare const AcnLocation: string;
            export declare const AcnFromdate: string;
            export declare const AcnTodate: string;
            export declare const AcnPeriodfrom: string;
            export declare const AcnPeriodto: string;
            export declare const AcnCreationdate: string;
        }

        ['ScopeId', 'Title', 'AcnId', 'AcnAcnTilte', 'AcnPhaseNo', 'AcnLocation', 'AcnFromdate', 'AcnTodate', 'AcnPeriodfrom', 'AcnPeriodto', 'AcnCreationdate'].forEach(x => (<any>Fields)[x] = x);
    }
}

