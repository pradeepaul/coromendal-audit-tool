namespace coromendal.ACN {
    export class NewchangesForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Newchanges';

    }

    export interface NewchangesForm {
        Observation: Serenity.StringEditor;
    }

    [['Observation', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(NewchangesForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

