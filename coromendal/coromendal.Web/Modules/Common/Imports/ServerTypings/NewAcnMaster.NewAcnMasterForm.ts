

namespace coromendal.NewAcnMaster {
    export class NewAcnMasterForm extends Serenity.PrefixedContext {
        static formKey = 'NewAcnMaster.NewAcnMaster';
    }

    export interface NewAcnMasterForm {
        AcnTilte: Serenity.StringEditor;
        PhaseNo: Serenity.IntegerEditor;
        Location: Serenity.StringEditor;
        Fromdate: Serenity.StringEditor;
        Todate: Serenity.StringEditor;
        Periodfrom: Serenity.StringEditor;
        Periodto: Serenity.StringEditor;
        Creationdate: Serenity.StringEditor;
        Userid: Serenity.IntegerEditor;
        Preview: Serenity.StringEditor;
        Send: Serenity.StringEditor;
        MId: Serenity.IntegerEditor;
        Status: Serenity.IntegerEditor;
        Statusid: Serenity.IntegerEditor;
    }

    [['Id', () => Serenity.IntegerEditor], ['AcnTilte', () => Serenity.StringEditor], ['PhaseNo', () => Serenity.IntegerEditor], ['Location', () => Serenity.StringEditor], ['Fromdate', () => Serenity.StringEditor], ['Todate', () => Serenity.StringEditor], ['Periodfrom', () => Serenity.StringEditor], ['Periodto', () => Serenity.StringEditor], ['Creationdate', () => Serenity.StringEditor], ['Userid', () => Serenity.IntegerEditor], ['Preview', () => Serenity.StringEditor], ['Send', () => Serenity.StringEditor], ['MId', () => Serenity.IntegerEditor], ['Status', () => Serenity.IntegerEditor], ['Statusid', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(NewAcnMasterForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}