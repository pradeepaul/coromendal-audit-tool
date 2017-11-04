

namespace coromendal.ACN {
    export class ScopeexcludeForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Scopeexclude';
    }

    export interface ScopeexcludeForm {
        Scopeid: Serenity.IntegerEditor;
        Aodid: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
    }

    [['ExcludeId', () => Serenity.IntegerEditor], ['Scopeid', () => Serenity.IntegerEditor], ['Aodid', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ScopeexcludeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}