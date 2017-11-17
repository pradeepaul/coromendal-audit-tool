

namespace coromendal.Administration {
    export class MasterAcnAuditeeRefForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.MasterAcnAuditeeRef';
    }

    export interface MasterAcnAuditeeRefForm {
        AcnAuditeeId: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
    }

    [['AcnAuditeeRefId', () => Serenity.IntegerEditor], ['AcnAuditeeId', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(MasterAcnAuditeeRefForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}