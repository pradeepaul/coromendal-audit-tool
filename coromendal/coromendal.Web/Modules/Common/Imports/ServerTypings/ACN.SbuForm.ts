

namespace coromendal.ACN {
    export class SbuForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Sbu';
    }

    export interface SbuForm {
        Sbuname: Serenity.StringEditor;
    }

    [['Sbuid', () => Serenity.IntegerEditor], ['Sbuname', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SbuForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}