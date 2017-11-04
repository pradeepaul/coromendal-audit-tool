

namespace coromendal.ACN {
    export class ObservationmasterForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Observationmaster';
    }

    export interface ObservationmasterForm {
        Observationid: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
        Scope: Serenity.StringEditor;
        Observationtitle: Serenity.StringEditor;
        Observationsynopsis: Serenity.StringEditor;
        Detailedobservation: Serenity.StringEditor;
        Category: Serenity.IntegerEditor;
        RiskRating: Serenity.StringEditor;
        Agreeobservation: Serenity.IntegerEditor;
        Justification: Serenity.StringEditor;
        Suggestion: Serenity.IntegerEditor;
        Alternateplan: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Targetdate: Serenity.StringEditor;
        Consequence: Serenity.IntegerEditor;
        Likelihood: Serenity.IntegerEditor;
        rootList: RootcauseEditor;
        SuggestionList: SuggestionEditor;
    }

    [['ObservationmasterId', () => Serenity.IntegerEditor], ['Observationid', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor], ['Scope', () => Serenity.StringEditor], ['Observationtitle', () => Serenity.StringEditor], ['Observationsynopsis', () => Serenity.StringEditor], ['Detailedobservation', () => Serenity.StringEditor], ['Category', () => Serenity.IntegerEditor], ['RiskRating', () => Serenity.StringEditor], ['Agreeobservation', () => Serenity.IntegerEditor], ['Justification', () => Serenity.StringEditor], ['Suggestion', () => Serenity.IntegerEditor], ['Alternateplan', () => Serenity.StringEditor], ['Name', () => Serenity.StringEditor], ['Email', () => Serenity.StringEditor], ['Targetdate', () => Serenity.StringEditor], ['Consequence', () => Serenity.IntegerEditor], ['Likelihood', () => Serenity.IntegerEditor], ['rootList', () => RootcauseEditor], ['SuggestionList', () => SuggestionEditor]].forEach(x => Object.defineProperty(ObservationmasterForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}