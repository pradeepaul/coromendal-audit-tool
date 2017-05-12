﻿

namespace coromendal.ACN {
    export class MeetingAbsentauditorForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.MeetingAbsentauditor';
    }

    export interface MeetingAbsentauditorForm {
        MeetingId: Serenity.IntegerEditor;
        AbsentUser: Serenity.LookupEditor;
        Reason: Serenity.StringEditor;
    }

    [['MeetingAbsentauditorId', () => Serenity.IntegerEditor], ['MeetingId', () => Serenity.IntegerEditor], ['AbsentUser', () => Serenity.LookupEditor], ['Reason', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MeetingAbsentauditorForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}