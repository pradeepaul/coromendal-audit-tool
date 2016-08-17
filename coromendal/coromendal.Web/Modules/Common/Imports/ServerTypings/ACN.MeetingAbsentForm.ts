

namespace coromendal.ACN {
    export class MeetingAbsentForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.MeetingAbsent';
    }

    export interface MeetingAbsentForm {
        MeetingId: Serenity.IntegerEditor;
        AbsentUser: Serenity.StringEditor;
    }

    [['MeetingAbsentId', () => Serenity.IntegerEditor], ['MeetingId', () => Serenity.IntegerEditor], ['AbsentUser', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MeetingAbsentForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}