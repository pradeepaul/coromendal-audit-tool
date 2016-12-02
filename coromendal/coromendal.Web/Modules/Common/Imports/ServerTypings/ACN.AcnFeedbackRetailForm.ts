

namespace coromendal.ACN {
    export class AcnFeedbackRetailForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.AcnFeedbackRetail';
    }

    export interface AcnFeedbackRetailForm {
        Acnid: Serenity.IntegerEditor;
        Ques1: Serenity.IntegerEditor;
        Ques2: Serenity.IntegerEditor;
        Ques3: Serenity.IntegerEditor;
        Ques4: Serenity.IntegerEditor;
        Ques5: Serenity.IntegerEditor;
        Ques6: Serenity.IntegerEditor;
        Ques7: Serenity.IntegerEditor;
        Ques8: Serenity.IntegerEditor;
        Name: Serenity.StringEditor;
        Dept: Serenity.StringEditor;
        Reviewname: Serenity.StringEditor;
        Location: Serenity.StringEditor;
        Remark1: Serenity.StringEditor;
        Remark2: Serenity.StringEditor;
        Remark3: Serenity.StringEditor;
        Remark4: Serenity.StringEditor;
        Remark5: Serenity.StringEditor;
        Remark6: Serenity.StringEditor;
        Remark7: Serenity.StringEditor;
        Remark8: Serenity.StringEditor;
        Date: Serenity.StringEditor;
        Storeno: Serenity.StringEditor;
    }

    [['Acnid', () => Serenity.IntegerEditor], ['Ques1', () => Serenity.IntegerEditor], ['Ques2', () => Serenity.IntegerEditor], ['Ques3', () => Serenity.IntegerEditor], ['Ques4', () => Serenity.IntegerEditor], ['Ques5', () => Serenity.IntegerEditor], ['Ques6', () => Serenity.IntegerEditor], ['Ques7', () => Serenity.IntegerEditor], ['Ques8', () => Serenity.IntegerEditor], ['Name', () => Serenity.StringEditor], ['Dept', () => Serenity.StringEditor], ['Reviewname', () => Serenity.StringEditor], ['Location', () => Serenity.StringEditor], ['Remark1', () => Serenity.StringEditor], ['Remark2', () => Serenity.StringEditor], ['Remark3', () => Serenity.StringEditor], ['Remark4', () => Serenity.StringEditor], ['Remark5', () => Serenity.StringEditor], ['Remark6', () => Serenity.StringEditor], ['Remark7', () => Serenity.StringEditor], ['Remark8', () => Serenity.StringEditor], ['Date', () => Serenity.StringEditor], ['Storeno', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(AcnFeedbackRetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}