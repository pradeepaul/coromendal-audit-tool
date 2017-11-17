

namespace coromendal.Administration {
    export class MasterscopeForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Masterscope';
    }

    export interface MasterscopeForm {
        Title: Serenity.StringEditor;
        AcnId: Serenity.IntegerEditor;
        Exclude: Serenity.IntegerEditor;
    }

    [['ScopeId', () => Serenity.IntegerEditor], ['Title', () => Serenity.StringEditor], ['AcnId', () => Serenity.IntegerEditor], ['Exclude', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(MasterscopeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}