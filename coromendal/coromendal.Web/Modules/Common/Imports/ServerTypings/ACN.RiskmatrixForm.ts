

namespace coromendal.ACN {
    export class RiskmatrixForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Riskmatrix';
    }

    export interface RiskmatrixForm {
        Likelihood: Serenity.IntegerEditor;
        Consequence: Serenity.IntegerEditor;
        Value: Serenity.StringEditor;
    }

    [['Riskmatrixid', () => Serenity.IntegerEditor], ['Likelihood', () => Serenity.IntegerEditor], ['Consequence', () => Serenity.IntegerEditor], ['Value', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(RiskmatrixForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}