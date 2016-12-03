namespace coromendal.ACN {
    export class ObservationpreviousauditForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Observationpreviousaudit';

    }

    export interface ObservationpreviousauditForm {
        Observation: Serenity.StringEditor;
    }

    [['Observation', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ObservationpreviousauditForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

