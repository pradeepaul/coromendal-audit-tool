

namespace coromendal.ACN {
    export class InputfromauditeeForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Inputfromauditee';
    }

    export interface InputfromauditeeForm {
        Aodid: Serenity.IntegerEditor;
        Additionalareacovered: Serenity.StringEditor;
        Issues: Serenity.StringEditor;
        Newimprovements: Serenity.StringEditor;
    }

    [['InputauditId', () => Serenity.IntegerEditor], ['Aodid', () => Serenity.IntegerEditor], ['Additionalareacovered', () => Serenity.StringEditor], ['Issues', () => Serenity.StringEditor], ['Newimprovements', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(InputfromauditeeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}