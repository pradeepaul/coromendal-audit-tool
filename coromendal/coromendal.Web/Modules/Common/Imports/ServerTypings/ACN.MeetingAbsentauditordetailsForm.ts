

namespace coromendal.ACN {
    export class MeetingAbsentauditordetailsForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.MeetingAbsentauditordetails';
    }

    export interface MeetingAbsentauditordetailsForm {
        MeetingId: Serenity.IntegerEditor;
        AbsentUser: Serenity.IntegerEditor;
        Reason: Serenity.StringEditor;
        Name: Serenity.StringEditor;
    }

    [['MeetingAbsentauditorId', () => Serenity.IntegerEditor], ['MeetingId', () => Serenity.IntegerEditor], ['AbsentUser', () => Serenity.IntegerEditor], ['Reason', () => Serenity.StringEditor], ['Name', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MeetingAbsentauditordetailsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}