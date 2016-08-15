

namespace coromendal.ACN {
    export class AcnAuditorReferenceForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.AcnAuditorReference';
    }

    export interface AcnAuditorReferenceForm {
        AcnAuditorId: Serenity.IntegerEditor;
        AcnmasterId: Serenity.IntegerEditor;
    }

    [['AcnAuditorReferenceId', () => Serenity.IntegerEditor], ['AcnAuditorId', () => Serenity.IntegerEditor], ['AcnmasterId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(AcnAuditorReferenceForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}