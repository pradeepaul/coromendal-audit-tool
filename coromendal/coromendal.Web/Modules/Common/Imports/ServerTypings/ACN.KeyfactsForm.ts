namespace coromendal.ACN {
    export class KeyfactsForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Keyfacts';

    }

    export interface KeyfactsForm {
        Particulars: Serenity.StringEditor;
        Value: Serenity.StringEditor;
    }

    [['Particulars', () => Serenity.StringEditor], ['Value', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(KeyfactsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

