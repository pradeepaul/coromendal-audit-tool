

namespace coromendal.MasterAcn {
    export class MasterAcnForm extends Serenity.PrefixedContext {
        static formKey = 'MasterAcn.MasterAcn';
    }

    export interface MasterAcnForm {
        Title: Serenity.StringEditor;
    }

    [['Title', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MasterAcnForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}