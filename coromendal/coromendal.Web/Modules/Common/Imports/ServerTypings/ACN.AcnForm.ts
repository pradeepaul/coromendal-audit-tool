namespace coromendal.ACN {
    export class AcnForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Acn';

    }

    export interface AcnForm {
        AcnTilte: Serenity.StringEditor;
        PhaseNo: Serenity.IntegerEditor;
        Auditor: Serenity.LookupEditor;
        Auditee: Serenity.LookupEditor;
        Fromdate: Serenity.DateEditor;
        Todate: Serenity.DateEditor;
        Periodfrom: Serenity.DateEditor;
        Periodto: Serenity.DateEditor;
        location: Serenity.StringEditor;
        creationdate: Serenity.DateEditor;
        ScopeList: ScopeEditor;
    }

    [['AcnTilte', () => Serenity.StringEditor], ['PhaseNo', () => Serenity.IntegerEditor], ['Auditor', () => Serenity.LookupEditor], ['Auditee', () => Serenity.LookupEditor], ['Fromdate', () => Serenity.DateEditor], ['Todate', () => Serenity.DateEditor], ['Periodfrom', () => Serenity.DateEditor], ['Periodto', () => Serenity.DateEditor], ['location', () => Serenity.StringEditor], ['creationdate', () => Serenity.DateEditor], ['ScopeList', () => ScopeEditor]].forEach(x => Object.defineProperty(AcnForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

