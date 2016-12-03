namespace coromendal.ACN {
    export class RiskratingForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Riskrating';

    }

    export interface RiskratingForm {
        Riskratingname: Serenity.StringEditor;
    }

    [['Riskratingname', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(RiskratingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

