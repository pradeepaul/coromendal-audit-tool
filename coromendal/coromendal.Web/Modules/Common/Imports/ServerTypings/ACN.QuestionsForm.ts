

namespace coromendal.ACN {
    export class QuestionsForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Questions';
    }

    export interface QuestionsForm {
        Questiontext: Serenity.StringEditor;
    }

    [['Questiontext', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(QuestionsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}