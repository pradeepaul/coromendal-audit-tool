

namespace coromendal.Administration {
    export class MasterAcnAuditorRefForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.MasterAcnAuditorRef';
    }

    export interface MasterAcnAuditorRefForm {
        AcnAuditorId: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
    }

    [['AcnAuditorRefId', () => Serenity.IntegerEditor], ['AcnAuditorId', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(MasterAcnAuditorRefForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}