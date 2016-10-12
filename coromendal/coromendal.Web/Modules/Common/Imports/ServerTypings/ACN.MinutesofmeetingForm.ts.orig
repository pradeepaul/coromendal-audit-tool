

namespace coromendal.ACN {
    export class MinutesofmeetingForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Minutesofmeeting';
    }

    export interface MinutesofmeetingForm {
        Acnid: Serenity.IntegerEditor;
        Title: Serenity.StringEditor;
        Auditscope: Serenity.StringEditor;
        Period: Serenity.StringEditor;
        Time: Serenity.IntegerEditor;
        Venue: Serenity.StringEditor;
        Auditor: Serenity.IntegerEditor;
        Auditee: Serenity.IntegerEditor;
    }

    [['Meetingid', () => Serenity.IntegerEditor], ['Acnid', () => Serenity.IntegerEditor], ['Title', () => Serenity.StringEditor], ['Auditscope', () => Serenity.StringEditor], ['Period', () => Serenity.StringEditor], ['Time', () => Serenity.IntegerEditor], ['Venue', () => Serenity.StringEditor], ['Auditor', () => Serenity.IntegerEditor], ['Auditee', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(MinutesofmeetingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}