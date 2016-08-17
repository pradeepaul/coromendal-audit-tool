

namespace coromendal.ACN {
    export class MeetingIssueForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.MeetingIssue';
    }

    export interface MeetingIssueForm {
        MeetingId: Serenity.IntegerEditor;
        AreaofOperation: Serenity.StringEditor;
        Issue: Serenity.StringEditor;
        Status: Serenity.StringEditor;
        ExpectedDate: Serenity.StringEditor;
    }

    [['MeetingIssueId', () => Serenity.IntegerEditor], ['MeetingId', () => Serenity.IntegerEditor], ['AreaofOperation', () => Serenity.StringEditor], ['Issue', () => Serenity.StringEditor], ['Status', () => Serenity.StringEditor], ['ExpectedDate', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MeetingIssueForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}