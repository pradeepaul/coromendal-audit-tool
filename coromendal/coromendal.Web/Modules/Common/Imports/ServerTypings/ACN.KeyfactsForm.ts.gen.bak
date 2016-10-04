

namespace coromendal.ACN {
    export class KeyfactsForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Keyfacts';
    }

    export interface KeyfactsForm {
        AcnId: Serenity.IntegerEditor;
        Particulars: Serenity.StringEditor;
        Value: Serenity.StringEditor;
        Reportid: Serenity.IntegerEditor;
    }

    [['KeyfactsId', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor], ['Particulars', () => Serenity.StringEditor], ['Value', () => Serenity.StringEditor], ['Reportid', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(KeyfactsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}