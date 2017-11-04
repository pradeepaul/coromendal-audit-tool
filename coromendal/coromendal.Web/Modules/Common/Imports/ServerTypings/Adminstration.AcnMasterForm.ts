

namespace coromendal.Adminstration {
    export class AcnMasterForm extends Serenity.PrefixedContext {
        static formKey = 'Adminstration.AcnMaster';
    }

    export interface AcnMasterForm {
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
    }

    [['AcnId', () => Serenity.IntegerEditor], ['AcnTilte', () => Serenity.StringEditor], ['PhaseNo', () => Serenity.IntegerEditor], ['Location', () => Serenity.StringEditor], ['Fromdate', () => Serenity.StringEditor], ['Todate', () => Serenity.StringEditor], ['Periodfrom', () => Serenity.StringEditor], ['Periodto', () => Serenity.StringEditor], ['Creationdate', () => Serenity.StringEditor], ['Userid', () => Serenity.IntegerEditor], ['Preview', () => Serenity.StringEditor], ['Send', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(AcnMasterForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}