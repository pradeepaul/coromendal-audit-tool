namespace coromendal.ACN {
    export class CurrentauditobservationForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Currentauditobservation';

    }

    export interface CurrentauditobservationForm {
        Observation: Serenity.StringEditor;
        Comments: Serenity.StringEditor;
    }

    [['Observation', () => Serenity.StringEditor], ['Comments', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CurrentauditobservationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

