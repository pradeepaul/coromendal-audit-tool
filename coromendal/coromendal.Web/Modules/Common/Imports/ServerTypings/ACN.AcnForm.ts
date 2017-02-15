namespace coromendal.ACN {
    export class AcnForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Acn';

    }

    export interface AcnForm {
        PhaseNo: Serenity.IntegerEditor;
        AcnTilte: Serenity.StringEditor;
        location: Serenity.StringEditor;
        Fromdate: Serenity.DateEditor;
        Todate: Serenity.DateEditor;
        Periodfrom: Serenity.DateEditor;
        Periodto: Serenity.DateEditor;
        creationdate: Serenity.DateEditor;
        ScopeList: ScopeEditor;
        Auditor: Serenity.LookupEditor;
        Auditee: Serenity.LookupEditor;
    }

    [['PhaseNo', () => Serenity.IntegerEditor], ['AcnTilte', () => Serenity.StringEditor], ['location', () => Serenity.StringEditor], ['Fromdate', () => Serenity.DateEditor], ['Todate', () => Serenity.DateEditor], ['Periodfrom', () => Serenity.DateEditor], ['Periodto', () => Serenity.DateEditor], ['creationdate', () => Serenity.DateEditor], ['ScopeList', () => ScopeEditor], ['Auditor', () => Serenity.LookupEditor], ['Auditee', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(AcnForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

