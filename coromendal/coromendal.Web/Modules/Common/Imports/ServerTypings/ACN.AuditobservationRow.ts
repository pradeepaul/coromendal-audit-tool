namespace coromendal.ACN {
    export interface AuditobservationRow {
        AuditobservationId?: number;
        AcnId?: number;
        Observationtitle?: string;
        Observationsynopsis?: string;
        Detailedobservation?: string;
        Category?: number;
        RiskRating?: string;
        Agreeobservation?: number;
        Justification?: string;
        Suggestion?: number;
        Alternateplan?: string;
        Name?: string;
        Email?: string;
        Targetdate?: string;
        Consequence?: number;
        Likelihood?: number;
        AcnAcnTilte?: string;
        AcnPhaseNo?: number;
        AcnLocation?: string;
        AcnFromdate?: string;
        AcnTodate?: string;
        AcnPeriodfrom?: string;
        AcnPeriodto?: string;
        AcnCreationdate?: string;
        rootList?: RootcauseRow[];
        SuggestionList?: SuggestionRow[];
    }

    export namespace AuditobservationRow {
        export const idProperty = 'AuditobservationId';
        export const nameProperty = 'Observationtitle';
        export const localTextPrefix = 'ACN.Auditobservation';
        export const lookupKey = 'ACN.AuditobservationRow';

        export function getLookup(): Q.Lookup<AuditobservationRow> {
            return Q.getLookup<AuditobservationRow>('ACN.AuditobservationRow');
        }

        export namespace Fields {
            export declare const AuditobservationId: string;
            export declare const AcnId: string;
            export declare const Observationtitle: string;
            export declare const Observationsynopsis: string;
            export declare const Detailedobservation: string;
            export declare const Category: string;
            export declare const RiskRating: string;
            export declare const Agreeobservation: string;
            export declare const Justification: string;
            export declare const Suggestion: string;
            export declare const Alternateplan: string;
            export declare const Name: string;
            export declare const Email: string;
            export declare const Targetdate: string;
            export declare const Consequence: string;
            export declare const Likelihood: string;
            export declare const AcnAcnTilte: string;
            export declare const AcnPhaseNo: string;
            export declare const AcnLocation: string;
            export declare const AcnFromdate: string;
            export declare const AcnTodate: string;
            export declare const AcnPeriodfrom: string;
            export declare const AcnPeriodto: string;
            export declare const AcnCreationdate: string;
            export declare const rootList: string;
            export declare const SuggestionList: string;
        }

        ['AuditobservationId', 'AcnId', 'Observationtitle', 'Observationsynopsis', 'Detailedobservation', 'Category', 'RiskRating', 'Agreeobservation', 'Justification', 'Suggestion', 'Alternateplan', 'Name', 'Email', 'Targetdate', 'Consequence', 'Likelihood', 'AcnAcnTilte', 'AcnPhaseNo', 'AcnLocation', 'AcnFromdate', 'AcnTodate', 'AcnPeriodfrom', 'AcnPeriodto', 'AcnCreationdate', 'rootList', 'SuggestionList'].forEach(x => (<any>Fields)[x] = x);
    }
}

