namespace coromendal.ACN {
    export class AuditobservationForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Auditobservation';

    }

    export interface AuditobservationForm {
        AcnId: Serenity.LookupEditor;
        Observationtitle: Serenity.StringEditor;
        Observationsynopsis: Serenity.TextAreaEditor;
        Detailedobservation: Serenity.TextAreaEditor;
        rootList: RootcauseEditor;
        SuggestionList: SuggestionEditor;
        Category: Serenity.LookupEditor;
        Consequence: Serenity.LookupEditor;
        Likelihood: Serenity.LookupEditor;
        RiskRating: Serenity.StringEditor;
        Agreeobservation: Serenity.LookupEditor;
        Justification: Serenity.TextAreaEditor;
        Suggestion: Serenity.LookupEditor;
        Alternateplan: Serenity.TextAreaEditor;
        Name: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Targetdate: Serenity.DateEditor;
    }

    [['AcnId', () => Serenity.LookupEditor], ['Observationtitle', () => Serenity.StringEditor], ['Observationsynopsis', () => Serenity.TextAreaEditor], ['Detailedobservation', () => Serenity.TextAreaEditor], ['rootList', () => RootcauseEditor], ['SuggestionList', () => SuggestionEditor], ['Category', () => Serenity.LookupEditor], ['Consequence', () => Serenity.LookupEditor], ['Likelihood', () => Serenity.LookupEditor], ['RiskRating', () => Serenity.StringEditor], ['Agreeobservation', () => Serenity.LookupEditor], ['Justification', () => Serenity.TextAreaEditor], ['Suggestion', () => Serenity.LookupEditor], ['Alternateplan', () => Serenity.TextAreaEditor], ['Name', () => Serenity.StringEditor], ['Email', () => Serenity.StringEditor], ['Targetdate', () => Serenity.DateEditor]].forEach(x => Object.defineProperty(AuditobservationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

