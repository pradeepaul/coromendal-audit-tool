

namespace coromendal.ACN {
    export class AcnFeedbackForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.AcnFeedback';
    }

    export interface AcnFeedbackForm {
        Acnid: Serenity.IntegerEditor;
        Ques1: Serenity.IntegerEditor;
        Ques2: Serenity.IntegerEditor;
        Ques3: Serenity.IntegerEditor;
        Ques4: Serenity.IntegerEditor;
        Ques5: Serenity.IntegerEditor;
        Ques6: Serenity.IntegerEditor;
        Ques7: Serenity.IntegerEditor;
        Ques8: Serenity.IntegerEditor;
        Ques9: Serenity.IntegerEditor;
        Ques10: Serenity.IntegerEditor;
        Ques11: Serenity.IntegerEditor;
        Ques12: Serenity.IntegerEditor;
        Ques13: Serenity.IntegerEditor;
        Ques14: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Dept: Serenity.StringEditor;
        Reviewname: Serenity.StringEditor;
        Location: Serenity.StringEditor;
    }

    [['Acnid', () => Serenity.IntegerEditor], ['Ques1', () => Serenity.IntegerEditor], ['Ques2', () => Serenity.IntegerEditor], ['Ques3', () => Serenity.IntegerEditor], ['Ques4', () => Serenity.IntegerEditor], ['Ques5', () => Serenity.IntegerEditor], ['Ques6', () => Serenity.IntegerEditor], ['Ques7', () => Serenity.IntegerEditor], ['Ques8', () => Serenity.IntegerEditor], ['Ques9', () => Serenity.IntegerEditor], ['Ques10', () => Serenity.IntegerEditor], ['Ques11', () => Serenity.IntegerEditor], ['Ques12', () => Serenity.IntegerEditor], ['Ques13', () => Serenity.IntegerEditor], ['Ques14', () => Serenity.IntegerEditor], ['Name', () => Serenity.StringEditor], ['Dept', () => Serenity.StringEditor], ['Reviewname', () => Serenity.StringEditor], ['Location', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(AcnFeedbackForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}