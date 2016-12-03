namespace coromendal.ACN {
    export class InputfromauditeeForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Inputfromauditee';

    }

    export interface InputfromauditeeForm {
        Additionalareacovered: Serenity.StringEditor;
        Issues: Serenity.StringEditor;
        Newimprovements: Serenity.StringEditor;
    }

    [['Additionalareacovered', () => Serenity.StringEditor], ['Issues', () => Serenity.StringEditor], ['Newimprovements', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(InputfromauditeeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

