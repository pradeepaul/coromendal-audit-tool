

namespace coromendal.ACN {
    export class FinalreportForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Finalreport';
    }

    export interface FinalreportForm {
        Title: Serenity.StringEditor;
        Acnid: Serenity.IntegerEditor;
        Download: Serenity.IntegerEditor;
        Userid: Serenity.IntegerEditor;
        Status: Serenity.StringEditor;
    }

    [['ReportId', () => Serenity.IntegerEditor], ['Title', () => Serenity.StringEditor], ['Acnid', () => Serenity.IntegerEditor], ['Download', () => Serenity.IntegerEditor], ['Userid', () => Serenity.IntegerEditor], ['Status', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(FinalreportForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}