

namespace coromendal.ACN {
    export class PercentageForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Percentage';
    }

    export interface PercentageForm {
        Percentagename: Serenity.StringEditor;
    }

    [['Percentageid', () => Serenity.IntegerEditor], ['Percentagename', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(PercentageForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}