

namespace coromendal.ACN {
    export class ExcludeForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Exclude';
    }

    export interface ExcludeForm {
        Scopeid: Serenity.IntegerEditor;
        Aodid: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
    }

    [['ExcludeId', () => Serenity.IntegerEditor], ['Scopeid', () => Serenity.IntegerEditor], ['Aodid', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(ExcludeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}