

namespace coromendal.ACN {
    export class AcnAuditorRefForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.AcnAuditorRef';
    }

    export interface AcnAuditorRefForm {
        AcnAuditorId: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
    }

    [['AcnAuditorRefId', () => Serenity.IntegerEditor], ['AcnAuditorId', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(AcnAuditorRefForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}