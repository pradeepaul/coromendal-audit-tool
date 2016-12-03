namespace coromendal.ACN {
    export class MeetingPointsForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.MeetingPoints';

    }

    export interface MeetingPointsForm {
        Points: Serenity.TextAreaEditor;
    }

    [['Points', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(MeetingPointsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

