namespace coromendal.ACN {
    export class MeetingAbsentForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.MeetingAbsent';

    }

    export interface MeetingAbsentForm {
        AbsentUser: Serenity.LookupEditor;
        Reason: Serenity.StringEditor;
    }

    [['AbsentUser', () => Serenity.LookupEditor], ['Reason', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MeetingAbsentForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

