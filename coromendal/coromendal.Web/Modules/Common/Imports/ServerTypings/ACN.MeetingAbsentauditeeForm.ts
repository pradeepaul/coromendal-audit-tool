

namespace coromendal.ACN {
    export class MeetingAbsentauditeeForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.MeetingAbsentauditee';
    }

    export interface MeetingAbsentauditeeForm {
        MeetingId: Serenity.IntegerEditor;
        AbsentUser: Serenity.IntegerEditor;
        Reason: Serenity.StringEditor;
    }

    [['MeetingAbsentauditeeId', () => Serenity.IntegerEditor], ['MeetingId', () => Serenity.IntegerEditor], ['AbsentUser', () => Serenity.IntegerEditor], ['Reason', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MeetingAbsentauditeeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}