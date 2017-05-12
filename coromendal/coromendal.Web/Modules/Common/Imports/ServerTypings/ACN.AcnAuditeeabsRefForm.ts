

namespace coromendal.ACN {
    export class AcnAuditeeabsRefForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.AcnAuditeeabsRef';
    }

    export interface AcnAuditeeabsRefForm {
        AcnAuditeeId: Serenity.IntegerEditor;
        MeetingAbsentauditeeId: Serenity.IntegerEditor;
    }

    [['AcnAuditeeabsRefId', () => Serenity.IntegerEditor], ['AcnAuditeeId', () => Serenity.IntegerEditor], ['MeetingAbsentauditeeId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(AcnAuditeeabsRefForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}