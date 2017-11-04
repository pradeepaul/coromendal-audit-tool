

namespace coromendal.Administration {
    export class PendingAcnForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.PendingAcn';
    }

    export interface PendingAcnForm {
        Title: Serenity.StringEditor;
        Statusid: Serenity.IntegerEditor;
    }

    [['Title', () => Serenity.StringEditor], ['Statusid', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(PendingAcnForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}