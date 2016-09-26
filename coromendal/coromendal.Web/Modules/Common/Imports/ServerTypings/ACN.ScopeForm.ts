

namespace coromendal.ACN {
    export class ScopeForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Scope';
    }

    export interface ScopeForm {
        Title: Serenity.StringEditor;
        AcnId: Serenity.IntegerEditor;
    }

    [['ScopeId', () => Serenity.IntegerEditor], ['Title', () => Serenity.StringEditor], ['AcnId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ScopeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}