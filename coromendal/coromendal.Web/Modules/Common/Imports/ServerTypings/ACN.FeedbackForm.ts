namespace coromendal.ACN {
    export class FeedbackForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Feedback';

    }

    export interface FeedbackForm {
        FeedbackMeetingId: Serenity.LookupEditor;
        FeedbackQuestionId: Serenity.LookupEditor;
        FeedbackRating: Serenity.IntegerEditor;
        FeedbackRemarks: Serenity.StringEditor;
    }

    [['FeedbackMeetingId', () => Serenity.LookupEditor], ['FeedbackQuestionId', () => Serenity.LookupEditor], ['FeedbackRating', () => Serenity.IntegerEditor], ['FeedbackRemarks', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(FeedbackForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

