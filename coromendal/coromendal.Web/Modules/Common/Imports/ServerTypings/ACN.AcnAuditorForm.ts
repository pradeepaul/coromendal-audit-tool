namespace coromendal.ACN {
    export class AcnAuditorForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.AcnAuditor';

    }

    export interface AcnAuditorForm {
        Name: Serenity.StringEditor;
    }

    [['Name', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(AcnAuditorForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

