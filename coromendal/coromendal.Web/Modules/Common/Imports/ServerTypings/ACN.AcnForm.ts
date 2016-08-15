

namespace coromendal.ACN {
    export class AcnForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Acn';
    }

    export interface AcnForm {
        AcnTilte: Serenity.StringEditor;
    }

    [['AcnId', () => Serenity.IntegerEditor], ['AcnTilte', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(AcnForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}