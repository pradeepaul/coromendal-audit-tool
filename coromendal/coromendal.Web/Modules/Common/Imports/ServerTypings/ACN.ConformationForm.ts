

namespace coromendal.ACN {
    export class ConformationForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Conformation';
    }

    export interface ConformationForm {
        Conformationname: Serenity.StringEditor;
    }

    [['ConformationId', () => Serenity.IntegerEditor], ['Conformationname', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ConformationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}