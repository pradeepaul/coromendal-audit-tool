

namespace coromendal.ACN {
    export class PreobservationForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Preobservation';
    }

    export interface PreobservationForm {
        Observationid: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
        Scope: Serenity.IntegerEditor;
        Observationtitle: Serenity.StringEditor;
        Observationsynopsis: Serenity.StringEditor;
        Detailedobservation: Serenity.StringEditor;
        Category: Serenity.IntegerEditor;
        RiskRating: Serenity.StringEditor;
        Agreeobservation: Serenity.IntegerEditor;
        Justification: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Targetdate: Serenity.StringEditor;
        Consequence: Serenity.IntegerEditor;
        Likelihood: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        rootList: RootcauseEditor;
        SuggestionList: SuggestionEditor;
        Detailedobservation1: Northwind.NotesEditor;
    }

    [['PreobservationId', () => Serenity.IntegerEditor], ['Observationid', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor], ['Scope', () => Serenity.IntegerEditor], ['Observationtitle', () => Serenity.StringEditor], ['Observationsynopsis', () => Serenity.StringEditor], ['Detailedobservation', () => Serenity.StringEditor], ['Category', () => Serenity.IntegerEditor], ['RiskRating', () => Serenity.StringEditor], ['Agreeobservation', () => Serenity.IntegerEditor], ['Justification', () => Serenity.StringEditor], ['Name', () => Serenity.StringEditor], ['Email', () => Serenity.StringEditor], ['Targetdate', () => Serenity.StringEditor], ['Consequence', () => Serenity.IntegerEditor], ['Likelihood', () => Serenity.IntegerEditor], ['Status', () => Serenity.IntegerEditor], ['rootList', () => RootcauseEditor], ['SuggestionList', () => SuggestionEditor], ['Detailedobservation1', () => Northwind.NotesEditor]].forEach(x => Object.defineProperty(PreobservationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}