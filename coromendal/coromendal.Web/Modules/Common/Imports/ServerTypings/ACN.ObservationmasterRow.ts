
namespace coromendal.ACN {
    export interface ObservationmasterRow {
        ObservationmasterId?: number;
        Observationid?: number;
        AcnId?: number;
        Scope?: number;
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
        ObservationidAcnId?: number;
        ObservationidScope?: string;
        ObservationidObservationtitle?: string;
        ObservationidObservationsynopsis?: string;
        ObservationidDetailedobservation?: string;
        ObservationidCategory?: number;
        ObservationidRiskRating?: string;
        ObservationidAgreeobservation?: number;
        ObservationidJustification?: string;
        ObservationidSuggestion?: number;
        ObservationidAlternateplan?: string;
        ObservationidName?: string;
        ObservationidEmail?: string;
        ObservationidTargetdate?: string;
        ObservationidConsequence?: number;
        ObservationidLikelihood?: number;
    }

    export namespace ObservationmasterRow {
        export const idProperty = 'ObservationmasterId';
        export const nameProperty = 'Scope';
        export const localTextPrefix = 'ACN.Observationmaster';

        export namespace Fields {
            export declare const ObservationmasterId;
            export declare const Observationid;
            export declare const AcnId;
            export declare const Scope;
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
            export declare const Consequence;
            export declare const Likelihood;
            export declare const ObservationidAcnId: string;
            export declare const ObservationidScope: string;
            export declare const ObservationidObservationtitle: string;
            export declare const ObservationidObservationsynopsis: string;
            export declare const ObservationidDetailedobservation: string;
            export declare const ObservationidCategory: string;
            export declare const ObservationidRiskRating: string;
            export declare const ObservationidAgreeobservation: string;
            export declare const ObservationidJustification: string;
            export declare const ObservationidSuggestion: string;
            export declare const ObservationidAlternateplan: string;
            export declare const ObservationidName: string;
            export declare const ObservationidEmail: string;
            export declare const ObservationidTargetdate: string;
            export declare const ObservationidConsequence: string;
            export declare const ObservationidLikelihood: string;
        }

        ['ObservationmasterId', 'Observationid', 'AcnId', 'Scope', 'Observationtitle', 'Observationsynopsis', 'Detailedobservation', 'Category', 'RiskRating', 'Agreeobservation', 'Justification', 'Suggestion', 'Alternateplan', 'Name', 'Email', 'Targetdate', 'Consequence', 'Likelihood', 'ObservationidAcnId', 'ObservationidScope', 'ObservationidObservationtitle', 'ObservationidObservationsynopsis', 'ObservationidDetailedobservation', 'ObservationidCategory', 'ObservationidRiskRating', 'ObservationidAgreeobservation', 'ObservationidJustification', 'ObservationidSuggestion', 'ObservationidAlternateplan', 'ObservationidName', 'ObservationidEmail', 'ObservationidTargetdate', 'ObservationidConsequence', 'ObservationidLikelihood'].forEach(x => (<any>Fields)[x] = x);
    }
}

