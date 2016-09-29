

namespace coromendal.ACN {
    export class SuggestionForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Suggestion';
    }

    export interface SuggestionForm {
        AuditobservationId: Serenity.IntegerEditor;
        Suggestion: Serenity.StringEditor;
    }

    [['SuggestionId', () => Serenity.IntegerEditor], ['AuditobservationId', () => Serenity.IntegerEditor], ['Suggestion', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SuggestionForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}