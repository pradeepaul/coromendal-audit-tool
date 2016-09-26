

namespace coromendal.ACN {
    export class AcnreportForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Acnreport';
    }

    export interface AcnreportForm {
        Title: Serenity.StringEditor;
        Acnid: Serenity.IntegerEditor;
        Meetingid: Serenity.IntegerEditor;
        Issueid: Serenity.IntegerEditor;
        Meetingpoints: Serenity.IntegerEditor;
        Meetingabsentid: Serenity.IntegerEditor;
        Auditortabid: Serenity.IntegerEditor;
        Auditorrefid: Serenity.IntegerEditor;
        Auditeetabid: Serenity.IntegerEditor;
        Auditeerefid: Serenity.IntegerEditor;
        Feedbackid: Serenity.IntegerEditor;
    }

    [['ReportId', () => Serenity.IntegerEditor], ['Title', () => Serenity.StringEditor], ['Acnid', () => Serenity.IntegerEditor], ['Meetingid', () => Serenity.IntegerEditor], ['Issueid', () => Serenity.IntegerEditor], ['Meetingpoints', () => Serenity.IntegerEditor], ['Meetingabsentid', () => Serenity.IntegerEditor], ['Auditortabid', () => Serenity.IntegerEditor], ['Auditorrefid', () => Serenity.IntegerEditor], ['Auditeetabid', () => Serenity.IntegerEditor], ['Auditeerefid', () => Serenity.IntegerEditor], ['Feedbackid', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(AcnreportForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}