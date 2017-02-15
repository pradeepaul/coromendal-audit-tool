﻿namespace coromendal.ACN {
    export class MeetingAbsentauditeeForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.MeetingAbsentauditee';

    }

    export interface MeetingAbsentauditeeForm {
        AbsentUser: Serenity.LookupEditor;
        Reason: Serenity.StringEditor;
    }

    [['AbsentUser', () => Serenity.LookupEditor], ['Reason', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MeetingAbsentauditeeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

