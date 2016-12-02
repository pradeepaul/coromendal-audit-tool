

namespace coromendal.ACN {
    export class SatisfactionratingForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Satisfactionrating';
    }

    export interface SatisfactionratingForm {
        Documentscore: Serenity.IntegerEditor;
        Documentcomments: Serenity.StringEditor;
        Compliancescore: Serenity.StringEditor;
        Compliancecomment: Serenity.StringEditor;
        Processfincontrollscore: Serenity.StringEditor;
        Processfincontrollscorecmnts: Serenity.StringEditor;
        Responsescore: Serenity.StringEditor;
        Responsecmnts: Serenity.StringEditor;
        Preauditscore: Serenity.StringEditor;
        Preauditcmnts: Serenity.StringEditor;
        Newinitiative: Serenity.StringEditor;
        Totalscore: Serenity.StringEditor;
        Aodid: Serenity.IntegerEditor;
    }

    [['SatisfactionratingId', () => Serenity.IntegerEditor], ['Documentscore', () => Serenity.IntegerEditor], ['Documentcomments', () => Serenity.StringEditor], ['Compliancescore', () => Serenity.StringEditor], ['Compliancecomment', () => Serenity.StringEditor], ['Processfincontrollscore', () => Serenity.StringEditor], ['Processfincontrollscorecmnts', () => Serenity.StringEditor], ['Responsescore', () => Serenity.StringEditor], ['Responsecmnts', () => Serenity.StringEditor], ['Preauditscore', () => Serenity.StringEditor], ['Preauditcmnts', () => Serenity.StringEditor], ['Newinitiative', () => Serenity.StringEditor], ['Totalscore', () => Serenity.StringEditor], ['Aodid', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(SatisfactionratingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}