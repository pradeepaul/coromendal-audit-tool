namespace coromendal.ACN {
    export interface SuggestionRow {
        SuggestionId?: number;
        AuditobservationId?: number;
        Suggestion?: string;
        AuditobservationAcnId?: number;
        AuditobservationObservationtitle?: string;
        AuditobservationObservationsynopsis?: string;
        AuditobservationDetailedobservation?: string;
        AuditobservationCategory?: number;
        AuditobservationRiskRating?: number;
        AuditobservationAgreeobservation?: string;
        AuditobservationJustification?: number;
        AuditobservationSuggestion?: string;
        AuditobservationAlternateplan?: string;
        AuditobservationName?: string;
        AuditobservationEmail?: string;
        AuditobservationTargetdate?: string;
    }

    export namespace SuggestionRow {
        export const idProperty = 'SuggestionId';
        export const nameProperty = 'Suggestion';
        export const localTextPrefix = 'ACN.Suggestion';
        export const lookupKey = 'ACN.SuggestionRow';

        export function getLookup(): Q.Lookup<SuggestionRow> {
            return Q.getLookup<SuggestionRow>('ACN.SuggestionRow');
        }

        export namespace Fields {
            export declare const SuggestionId: string;
            export declare const AuditobservationId: string;
            export declare const Suggestion: string;
            export declare const AuditobservationAcnId: string;
            export declare const AuditobservationObservationtitle: string;
            export declare const AuditobservationObservationsynopsis: string;
            export declare const AuditobservationDetailedobservation: string;
            export declare const AuditobservationCategory: string;
            export declare const AuditobservationRiskRating: string;
            export declare const AuditobservationAgreeobservation: string;
            export declare const AuditobservationJustification: string;
            export declare const AuditobservationSuggestion: string;
            export declare const AuditobservationAlternateplan: string;
            export declare const AuditobservationName: string;
            export declare const AuditobservationEmail: string;
            export declare const AuditobservationTargetdate: string;
        }

        ['SuggestionId', 'AuditobservationId', 'Suggestion', 'AuditobservationAcnId', 'AuditobservationObservationtitle', 'AuditobservationObservationsynopsis', 'AuditobservationDetailedobservation', 'AuditobservationCategory', 'AuditobservationRiskRating', 'AuditobservationAgreeobservation', 'AuditobservationJustification', 'AuditobservationSuggestion', 'AuditobservationAlternateplan', 'AuditobservationName', 'AuditobservationEmail', 'AuditobservationTargetdate'].forEach(x => (<any>Fields)[x] = x);
    }
}

