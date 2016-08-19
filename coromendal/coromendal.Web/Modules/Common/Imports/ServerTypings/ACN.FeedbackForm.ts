

namespace coromendal.ACN {
    export class FeedbackForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Feedback';
    }

    export interface FeedbackForm {
        FeedbackQuestionId: Serenity.IntegerEditor;
        FeedbackMeetingId: Serenity.IntegerEditor;
        FeedbackRating: Serenity.IntegerEditor;
        FeedbackRemarks: Serenity.StringEditor;
    }

    [['FeedbackQuestionId', () => Serenity.IntegerEditor], ['FeedbackMeetingId', () => Serenity.IntegerEditor], ['FeedbackRating', () => Serenity.IntegerEditor], ['FeedbackRemarks', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(FeedbackForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}