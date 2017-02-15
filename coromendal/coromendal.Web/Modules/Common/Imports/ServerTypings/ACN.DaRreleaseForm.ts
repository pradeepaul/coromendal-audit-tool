namespace coromendal.ACN {
    export class DaRreleaseForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.DaRrelease';

    }

    export interface DaRreleaseForm {
        ReportId: Serenity.LookupEditor;
        AcnId: Serenity.LookupEditor;
        Status: Serenity.LookupEditor;
        NoteList: Northwind.NotesEditor;
    }

    [['ReportId', () => Serenity.LookupEditor], ['AcnId', () => Serenity.LookupEditor], ['Status', () => Serenity.LookupEditor], ['NoteList', () => Northwind.NotesEditor]].forEach(x => Object.defineProperty(DaRreleaseForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

