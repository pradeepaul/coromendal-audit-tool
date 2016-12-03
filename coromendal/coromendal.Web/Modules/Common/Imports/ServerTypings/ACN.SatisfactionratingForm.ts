namespace coromendal.ACN {
    export class SatisfactionratingForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Satisfactionrating';

    }

    export interface SatisfactionratingForm {
        Documentscore: Serenity.LookupEditor;
        Documentcomments: Serenity.StringEditor;
        Compliancescore: Serenity.LookupEditor;
        Compliancecomment: Serenity.StringEditor;
        Processfincontrollscore: Serenity.LookupEditor;
        Processfincontrollscorecmnts: Serenity.StringEditor;
        Responsescore: Serenity.LookupEditor;
        Responsecmnts: Serenity.StringEditor;
        Preauditscore: Serenity.LookupEditor;
        Preauditcmnts: Serenity.StringEditor;
        Newinitiative: Serenity.LookupEditor;
        Totalscore: Serenity.StringEditor;
    }

    [['Documentscore', () => Serenity.LookupEditor], ['Documentcomments', () => Serenity.StringEditor], ['Compliancescore', () => Serenity.LookupEditor], ['Compliancecomment', () => Serenity.StringEditor], ['Processfincontrollscore', () => Serenity.LookupEditor], ['Processfincontrollscorecmnts', () => Serenity.StringEditor], ['Responsescore', () => Serenity.LookupEditor], ['Responsecmnts', () => Serenity.StringEditor], ['Preauditscore', () => Serenity.LookupEditor], ['Preauditcmnts', () => Serenity.StringEditor], ['Newinitiative', () => Serenity.LookupEditor], ['Totalscore', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SatisfactionratingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

