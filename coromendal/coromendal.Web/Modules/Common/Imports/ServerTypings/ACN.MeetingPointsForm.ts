

namespace coromendal.ACN {
    export class MeetingPointsForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.MeetingPoints';
    }

    export interface MeetingPointsForm {
        MeetingId: Serenity.IntegerEditor;
        Points: Serenity.StringEditor;
    }

    [['MeetingPointsId', () => Serenity.IntegerEditor], ['MeetingId', () => Serenity.IntegerEditor], ['Points', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MeetingPointsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}