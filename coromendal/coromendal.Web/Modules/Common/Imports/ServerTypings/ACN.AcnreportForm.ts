namespace coromendal.ACN {
    export class AcnreportForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Acnreport';

    }

    export interface AcnreportForm {
        Title: Serenity.StringEditor;
        Acnid: Serenity.LookupEditor;
        userid: Serenity.IntegerEditor;
        status: Serenity.StringEditor;
        Qc: Serenity.LookupEditor;
        Keyfacts: KeyfactsEditor;
    }

    [['Title', () => Serenity.StringEditor], ['Acnid', () => Serenity.LookupEditor], ['userid', () => Serenity.IntegerEditor], ['status', () => Serenity.StringEditor], ['Qc', () => Serenity.LookupEditor], ['Keyfacts', () => KeyfactsEditor]].forEach(x => Object.defineProperty(AcnreportForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

