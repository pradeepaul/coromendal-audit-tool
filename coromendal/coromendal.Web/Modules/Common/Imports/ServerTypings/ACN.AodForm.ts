

namespace coromendal.ACN {
    export class AodForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Aod';
    }

    export interface AodForm {
        Meetingid: Serenity.IntegerEditor;
        Actualcomencementdate: Serenity.StringEditor;
        Actualcompltedate: Serenity.StringEditor;
        ProcessOwner: Serenity.StringEditor;
        Functionalhead: Serenity.StringEditor;
        Areaofscope: Serenity.StringEditor;
        Exclusions: Serenity.StringEditor;
        Reasons: Serenity.StringEditor;
        Sbu: Serenity.StringEditor;
        Acnid: Serenity.IntegerEditor;
    }

    [['AodId', () => Serenity.IntegerEditor], ['Meetingid', () => Serenity.IntegerEditor], ['Actualcomencementdate', () => Serenity.StringEditor], ['Actualcompltedate', () => Serenity.StringEditor], ['ProcessOwner', () => Serenity.StringEditor], ['Functionalhead', () => Serenity.StringEditor], ['Areaofscope', () => Serenity.StringEditor], ['Exclusions', () => Serenity.StringEditor], ['Reasons', () => Serenity.StringEditor], ['Sbu', () => Serenity.StringEditor], ['Acnid', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(AodForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}