namespace coromendal.ACN {
    export class NewiprovementsForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Newiprovements';

    }

    export interface NewiprovementsForm {
        MeetingId: Serenity.IntegerEditor;
        Observation: Serenity.StringEditor;
    }

    [['MeetingId', () => Serenity.IntegerEditor], ['Observation', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(NewiprovementsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

