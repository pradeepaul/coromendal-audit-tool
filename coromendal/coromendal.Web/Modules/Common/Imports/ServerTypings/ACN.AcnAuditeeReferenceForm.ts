

namespace coromendal.ACN {
    export class AcnAuditeeReferenceForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.AcnAuditeeReference';
    }

    export interface AcnAuditeeReferenceForm {
        AcnAuditeeId: Serenity.IntegerEditor;
        AcnmasterId: Serenity.IntegerEditor;
    }

    [['AcnAuditeeReferenceId', () => Serenity.IntegerEditor], ['AcnAuditeeId', () => Serenity.IntegerEditor], ['AcnmasterId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(AcnAuditeeReferenceForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}