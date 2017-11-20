

namespace coromendal.ACN {
    export class FinalobservationForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Finalobservation';
    }

    export interface FinalobservationForm {
        Observationid: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
        Scope: Serenity.IntegerEditor;
        Observationtitle: Serenity.StringEditor;
        Observationsynopsis: Serenity.StringEditor;
        Detailedobservation: Serenity.StringEditor;
        Category: Serenity.IntegerEditor;
        RiskRating: Serenity.StringEditor;
        Agreeobservation: Serenity.IntegerEditor;
        Justification: transfusetextarea;
        Suggestion: Serenity.IntegerEditor;
        Alternateplan: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Targetdate: Serenity.StringEditor;
        Consequence: Serenity.IntegerEditor;
        Likelihood: Serenity.IntegerEditor;
        rootList: RootcauseEditor;
        SuggestionList: SuggestionEditor;
        Detailedobservation1: Northwind.NotesEditor;
    }

    [['FinalobservationId', () => Serenity.IntegerEditor], ['Observationid', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor], ['Scope', () => Serenity.IntegerEditor], ['Observationtitle', () => Serenity.StringEditor], ['Observationsynopsis', () => Serenity.StringEditor], ['Detailedobservation', () => Serenity.StringEditor], ['Category', () => Serenity.IntegerEditor], ['RiskRating', () => Serenity.StringEditor], ['Agreeobservation', () => Serenity.IntegerEditor], ['Justification', () => transfusetextarea], ['Suggestion', () => Serenity.IntegerEditor], ['Alternateplan', () => Serenity.StringEditor], ['Name', () => Serenity.StringEditor], ['Email', () => Serenity.StringEditor], ['Targetdate', () => Serenity.StringEditor], ['Consequence', () => Serenity.IntegerEditor], ['Likelihood', () => Serenity.IntegerEditor], ['rootList', () => RootcauseEditor], ['SuggestionList', () => SuggestionEditor], ['Detailedobservation1', () => Northwind.NotesEditor]].forEach(x => Object.defineProperty(FinalobservationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}