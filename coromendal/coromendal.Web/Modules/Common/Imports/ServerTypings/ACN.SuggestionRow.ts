
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

        export namespace Fields {
            export declare const SuggestionId;
            export declare const AuditobservationId;
            export declare const Suggestion;
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

