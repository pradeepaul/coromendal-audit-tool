namespace coromendal.ACN {
    export class FeedbackvalueForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Feedbackvalue';

    }

    export interface FeedbackvalueForm {
        Value: Serenity.StringEditor;
    }

    [['Value', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(FeedbackvalueForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

