namespace coromendal.ACN {
    export class AcnFeedbackRetailForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.AcnFeedbackRetail';

    }

    export interface AcnFeedbackRetailForm {
        Acnid: Serenity.LookupEditor;
        Name: Serenity.StringEditor;
        Date: Serenity.StringEditor;
        Dept: Serenity.StringEditor;
        Reviewname: Serenity.StringEditor;
        Location: Serenity.StringEditor;
        Storeno: Serenity.StringEditor;
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
        Comments: Serenity.TextAreaEditor;
    }

    [['Acnid', () => Serenity.LookupEditor], ['Name', () => Serenity.StringEditor], ['Date', () => Serenity.StringEditor], ['Dept', () => Serenity.StringEditor], ['Reviewname', () => Serenity.StringEditor], ['Location', () => Serenity.StringEditor], ['Storeno', () => Serenity.StringEditor], ['Ques1', () => Serenity.LookupEditor], ['Remark1', () => Serenity.StringEditor], ['Ques2', () => Serenity.LookupEditor], ['Remark2', () => Serenity.StringEditor], ['Ques3', () => Serenity.LookupEditor], ['Remark3', () => Serenity.StringEditor], ['Ques4', () => Serenity.LookupEditor], ['Remark4', () => Serenity.StringEditor], ['Ques5', () => Serenity.LookupEditor], ['Remark5', () => Serenity.StringEditor], ['Ques6', () => Serenity.LookupEditor], ['Remark6', () => Serenity.StringEditor], ['Ques7', () => Serenity.LookupEditor], ['Remark7', () => Serenity.StringEditor], ['Ques8', () => Serenity.LookupEditor], ['Remark8', () => Serenity.StringEditor], ['Comments', () => Serenity.TextAreaEditor]].forEach(x => Object.defineProperty(AcnFeedbackRetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

