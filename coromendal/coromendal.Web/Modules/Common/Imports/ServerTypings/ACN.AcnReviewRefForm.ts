

namespace coromendal.ACN {
    export class AcnReviewRefForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.AcnReviewRef';
    }

    export interface AcnReviewRefForm {
        AcnReviewId: Serenity.IntegerEditor;
        AcnId: Serenity.IntegerEditor;
    }

    [['AcnReviewRefId', () => Serenity.IntegerEditor], ['AcnReviewId', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(AcnReviewRefForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}