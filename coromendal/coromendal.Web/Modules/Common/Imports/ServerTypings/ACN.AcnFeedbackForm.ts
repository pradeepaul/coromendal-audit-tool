namespace coromendal.ACN {
    export class AcnFeedbackForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.AcnFeedback';

    }

    export interface AcnFeedbackForm {
        Acnid: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Dept: Serenity.StringEditor;
        Reviewname: Serenity.StringEditor;
        Location: Serenity.StringEditor;
        Ques1: Serenity.LookupEditor;
        Remark1: Serenity.StringEditor;
        Ques2: Serenity.LookupEditor;
        Remark2: Serenity.StringEditor;
        Ques3: Serenity.LookupEditor;
        Remark3: Serenity.StringEditor;
        Ques4: Serenity.LookupEditor;
        Remark4: Serenity.StringEditor;
        Ques5: Serenity.LookupEditor;
        Remark5: Serenity.StringEditor;
        Ques6: Serenity.LookupEditor;
        Remark6: Serenity.StringEditor;
        Ques7: Serenity.LookupEditor;
        Remark7: Serenity.StringEditor;
        Ques8: Serenity.LookupEditor;
        Remark8: Serenity.StringEditor;
        Ques9: Serenity.LookupEditor;
        Remark9: Serenity.StringEditor;
        Ques10: Serenity.LookupEditor;
        Remark10: Serenity.StringEditor;
        Ques11: Serenity.LookupEditor;
        Remark11: Serenity.StringEditor;
        Ques12: Serenity.LookupEditor;
        Remark12: Serenity.StringEditor;
        Ques13: Serenity.LookupEditor;
        Remark13: Serenity.StringEditor;
        Ques14: Serenity.LookupEditor;
        Remark14: Serenity.StringEditor;
        Comments: Serenity.TextAreaEditor;
    }

    [['Acnid', () => Serenity.LookupEditor], ['Name', () => Serenity.StringEditor], ['Dept', () => Serenity.StringEditor], ['Reviewname', () => Serenity.StringEditor], ['Location', () => Serenity.StringEditor], ['Ques1', () => Serenity.LookupEditor], ['Remark1', () => Serenity.StringEditor], ['Ques2', () => Serenity.LookupEditor], ['Remark2', () => Serenity.StringEditor], ['Ques3', () => Serenity.LookupEditor], ['Remark3', () => Serenity.StringEditor], ['Ques4', () => Serenity.LookupEditor], ['Remark4', () => Serenity.StringEditor], ['Ques5', () => Serenity.LookupEditor], ['Remark5', () => Serenity.StringEditor], ['Ques6', () => Serenity.LookupEditor], ['Remark6', () => Serenity.StringEditor], ['Ques7', () => Serenity.LookupEditor], ['Remark7', () => Serenity.StringEditor], ['Ques8', () => Serenity.LookupEditor], ['Remark8', () => Serenity.StringEditor], ['Ques9', () => Serenity.LookupEditor], ['Remark9', () => Serenity.StringEditor], ['Ques10', () => Serenity.LookupEditor], ['Remark10', () => Serenity.StringEditor], ['Ques11', () => Serenity.LookupEditor], ['Remark11', () => Serenity.StringEditor], ['Ques12', () => Serenity.LookupEditor], ['Remark12', () => Serenity.StringEditor], ['Ques13', () => Serenity.LookupEditor], ['Remark13', () => Serenity.StringEditor], ['Ques14', () => Serenity.LookupEditor], ['Remark14', () => Serenity.StringEditor], ['Comments', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(AcnFeedbackForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

