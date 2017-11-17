﻿
namespace coromendal.ACN {
    export interface PreobservationRow {
        PreobservationId?: number;
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
        Name?: string;
        Email?: string;
        Targetdate?: string;
        Consequence?: number;
        Likelihood?: number;
        Status?: number;
        ObservationidAcnId?: number;
        ObservationidScope?: number;
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
        ObservationidSend?: string;
        ObservationidPrimaryImage?: string;
    }

    export namespace PreobservationRow {
        export const idProperty = 'PreobservationId';
        export const nameProperty = 'Observationtitle';
        export const localTextPrefix = 'ACN.Preobservation';

        export namespace Fields {
            export declare const PreobservationId;
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
            export declare const Name;
            export declare const Email;
            export declare const Targetdate;
            export declare const Consequence;
            export declare const Likelihood;
            export declare const Status;
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
            export declare const ObservationidSend: string;
            export declare const ObservationidPrimaryImage: string;
        }

        ['PreobservationId', 'Observationid', 'AcnId', 'Scope', 'Observationtitle', 'Observationsynopsis', 'Detailedobservation', 'Category', 'RiskRating', 'Agreeobservation', 'Justification', 'Name', 'Email', 'Targetdate', 'Consequence', 'Likelihood', 'Status', 'ObservationidAcnId', 'ObservationidScope', 'ObservationidObservationtitle', 'ObservationidObservationsynopsis', 'ObservationidDetailedobservation', 'ObservationidCategory', 'ObservationidRiskRating', 'ObservationidAgreeobservation', 'ObservationidJustification', 'ObservationidSuggestion', 'ObservationidAlternateplan', 'ObservationidName', 'ObservationidEmail', 'ObservationidTargetdate', 'ObservationidConsequence', 'ObservationidLikelihood', 'ObservationidSend', 'ObservationidPrimaryImage'].forEach(x => (<any>Fields)[x] = x);
    }
}

