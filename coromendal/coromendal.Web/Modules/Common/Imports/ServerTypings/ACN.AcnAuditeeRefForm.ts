namespace coromendal.ACN {
    export class AcnAuditeeRefForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.AcnAuditeeRef';

    }

    export interface AcnAuditeeRefForm {
        AcnAuditeeId: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
    }

    [['AcnAuditeeId', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(AcnAuditeeRefForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

