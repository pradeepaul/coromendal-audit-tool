namespace coromendal.ACN {
    export class SatisfactionratingForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Satisfactionrating';

    }

    export interface SatisfactionratingForm {
        Documentweigtage: Serenity.StringEditor;
        Documentscore: Serenity.IntegerEditor;
        Documentrating: Serenity.IntegerEditor;
        Documentcomments: Serenity.StringEditor;
        Complianceweightage: Serenity.StringEditor;
        Compliancescore: Serenity.StringEditor;
        Compliancerating: Serenity.StringEditor;
        Compliancecomment: Serenity.StringEditor;
        Processfincontrollweightage: Serenity.StringEditor;
        Processfincontrollscore: Serenity.StringEditor;
        Processfincontrollrating: Serenity.StringEditor;
        Processfincontrollscorecmnts: Serenity.StringEditor;
        Responseweightage: Serenity.StringEditor;
        Responsescore: Serenity.StringEditor;
        Responserating: Serenity.StringEditor;
        Responsecmnts: Serenity.StringEditor;
        Preauditweightage: Serenity.StringEditor;
        Preauditscore: Serenity.StringEditor;
        Preauditrating: Serenity.StringEditor;
        Preauditcmnts: Serenity.StringEditor;
        Newinitiativeweight: Serenity.StringEditor;
        Newinitiativescore: Serenity.StringEditor;
        Newinitiativerating: Serenity.LookupEditor;
        Newinitiativecmnts: Serenity.StringEditor;
        Totalscore: Serenity.StringEditor;
    }

    [['Documentweigtage', () => Serenity.StringEditor], ['Documentscore', () => Serenity.IntegerEditor], ['Documentrating', () => Serenity.IntegerEditor], ['Documentcomments', () => Serenity.StringEditor], ['Complianceweightage', () => Serenity.StringEditor], ['Compliancescore', () => Serenity.StringEditor], ['Compliancerating', () => Serenity.StringEditor], ['Compliancecomment', () => Serenity.StringEditor], ['Processfincontrollweightage', () => Serenity.StringEditor], ['Processfincontrollscore', () => Serenity.StringEditor], ['Processfincontrollrating', () => Serenity.StringEditor], ['Processfincontrollscorecmnts', () => Serenity.StringEditor], ['Responseweightage', () => Serenity.StringEditor], ['Responsescore', () => Serenity.StringEditor], ['Responserating', () => Serenity.StringEditor], ['Responsecmnts', () => Serenity.StringEditor], ['Preauditweightage', () => Serenity.StringEditor], ['Preauditscore', () => Serenity.StringEditor], ['Preauditrating', () => Serenity.StringEditor], ['Preauditcmnts', () => Serenity.StringEditor], ['Newinitiativeweight', () => Serenity.StringEditor], ['Newinitiativescore', () => Serenity.StringEditor], ['Newinitiativerating', () => Serenity.LookupEditor], ['Newinitiativecmnts', () => Serenity.StringEditor], ['Totalscore', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SatisfactionratingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

