

namespace coromendal.ACN {
    export class DarClarificationsForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.DarClarifications';
    }

    export interface DarClarificationsForm {
        ReportId: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
    }

    [['DarClarificationsId', () => Serenity.IntegerEditor], ['ReportId', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(DarClarificationsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}