

namespace coromendal.ACN {
    export class DaRreleaseForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.DaRrelease';
    }

    export interface DaRreleaseForm {
        ReportId: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
    }

    [['DaRreleaseId', () => Serenity.IntegerEditor], ['ReportId', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(DaRreleaseForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}