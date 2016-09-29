
namespace coromendal.ACN {
    export interface AuditobservationRow {
        AuditobservationId?: number;
        AcnId?: number;
        Observationtitle?: string;
        Observationsynopsis?: string;
        Detailedobservation?: string;
        Category?: number;
        RiskRating?: number;
        Agreeobservation?: string;
        Justification?: number;
        Suggestion?: string;
        Alternateplan?: string;
        Name?: string;
        Email?: string;
        Targetdate?: string;
        AcnAcnTilte?: string;
        AcnPhaseNo?: number;
        AcnLocation?: string;
        AcnFromdate?: string;
        AcnTodate?: string;
        AcnPeriodfrom?: string;
        AcnPeriodto?: string;
        AcnCreationdate?: string;
    }

    export namespace AuditobservationRow {
        export const idProperty = 'AuditobservationId';
        export const nameProperty = 'Observationtitle';
        export const localTextPrefix = 'ACN.Auditobservation';

        export namespace Fields {
            export declare const AuditobservationId;
            export declare const AcnId;
            export declare const Observationtitle;
            export declare const Observationsynopsis;
            export declare const Detailedobservation;
            export declare const Category;
            export declare const RiskRating;
            export declare const Agreeobservation;
            export declare const Justification;
            export declare const Suggestion;
            export declare const Alternateplan;
            export declare const Name;
            export declare const Email;
            export declare const Targetdate;
            export declare const AcnAcnTilte: string;
            export declare const AcnPhaseNo: string;
            export declare const AcnLocation: string;
            export declare const AcnFromdate: string;
            export declare const AcnTodate: string;
            export declare const AcnPeriodfrom: string;
            export declare const AcnPeriodto: string;
            export declare const AcnCreationdate: string;
        }

        ['AuditobservationId', 'AcnId', 'Observationtitle', 'Observationsynopsis', 'Detailedobservation', 'Category', 'RiskRating', 'Agreeobservation', 'Justification', 'Suggestion', 'Alternateplan', 'Name', 'Email', 'Targetdate', 'AcnAcnTilte', 'AcnPhaseNo', 'AcnLocation', 'AcnFromdate', 'AcnTodate', 'AcnPeriodfrom', 'AcnPeriodto', 'AcnCreationdate'].forEach(x => (<any>Fields)[x] = x);
    }
}

