
namespace coromendal.ACN {
    export interface RootcauseRow {
        RootcauseId?: number;
        AuditobservationId?: number;
        Rootcause?: string;
        Impact?: string;
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

    export namespace RootcauseRow {
        export const idProperty = 'RootcauseId';
        export const nameProperty = 'Rootcause';
        export const localTextPrefix = 'ACN.Rootcause';

        export namespace Fields {
            export declare const RootcauseId;
            export declare const AuditobservationId;
            export declare const Rootcause;
            export declare const Impact;
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

        ['RootcauseId', 'AuditobservationId', 'Rootcause', 'Impact', 'AuditobservationAcnId', 'AuditobservationObservationtitle', 'AuditobservationObservationsynopsis', 'AuditobservationDetailedobservation', 'AuditobservationCategory', 'AuditobservationRiskRating', 'AuditobservationAgreeobservation', 'AuditobservationJustification', 'AuditobservationSuggestion', 'AuditobservationAlternateplan', 'AuditobservationName', 'AuditobservationEmail', 'AuditobservationTargetdate'].forEach(x => (<any>Fields)[x] = x);
    }
}

