namespace coromendal.ACN {
    export class FinalstatusvalueForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Finalstatusvalue';

    }

    export interface FinalstatusvalueForm {
        Value: Serenity.StringEditor;
    }

    [['Value', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(FinalstatusvalueForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

