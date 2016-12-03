namespace coromendal.ACN {
    export class AcnAuditeeForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.AcnAuditee';

    }

    export interface AcnAuditeeForm {
        Name: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(AcnAuditeeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

