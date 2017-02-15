namespace coromendal.ACN {
    export class SatisfactionratingForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Satisfactionrating';

    }

    export interface SatisfactionratingForm {
        weightlabel: Serenity.StringEditor;
        scorelabel: Serenity.StringEditor;
        ratinglabel: Serenity.StringEditor;
        comeentslabel: Serenity.StringEditor;
        Documentweigtage: Serenity.StringEditor;
        Documentscore: Serenity.LookupEditor;
        Documentrating: Serenity.LookupEditor;
        Documentcomments: Serenity.StringEditor;
        Complianceweightage: Serenity.StringEditor;
        Compliancescore: Serenity.LookupEditor;
        Compliancerating: Serenity.LookupEditor;
        Compliancecomment: Serenity.StringEditor;
        Processfincontrollweightage: Serenity.StringEditor;
        Processfincontrollscore: Serenity.LookupEditor;
        Processfincontrollrating: Serenity.LookupEditor;
        Processfincontrollscorecmnts: Serenity.StringEditor;
        Responseweightage: Serenity.StringEditor;
        Responsescore: Serenity.LookupEditor;
        Responserating: Serenity.LookupEditor;
        Responsecmnts: Serenity.StringEditor;
        Preauditweightage: Serenity.StringEditor;
        Preauditscore: Serenity.LookupEditor;
        Preauditrating: Serenity.LookupEditor;
        Preauditcmnts: Serenity.StringEditor;
        Newinitiativeweight: Serenity.StringEditor;
        Newinitiativescore: Serenity.LookupEditor;
        Newinitiativerating: Serenity.LookupEditor;
        Newinitiativecmnts: Serenity.StringEditor;
        Totalscore: Serenity.StringEditor;
        totalscore1: Serenity.StringEditor;
        totalscore2: Serenity.StringEditor;
        totalscore3: Serenity.StringEditor;
    }

    [['weightlabel', () => Serenity.StringEditor], ['scorelabel', () => Serenity.StringEditor], ['ratinglabel', () => Serenity.StringEditor], ['comeentslabel', () => Serenity.StringEditor], ['Documentweigtage', () => Serenity.StringEditor], ['Documentscore', () => Serenity.LookupEditor], ['Documentrating', () => Serenity.LookupEditor], ['Documentcomments', () => Serenity.StringEditor], ['Complianceweightage', () => Serenity.StringEditor], ['Compliancescore', () => Serenity.LookupEditor], ['Compliancerating', () => Serenity.LookupEditor], ['Compliancecomment', () => Serenity.StringEditor], ['Processfincontrollweightage', () => Serenity.StringEditor], ['Processfincontrollscore', () => Serenity.LookupEditor], ['Processfincontrollrating', () => Serenity.LookupEditor], ['Processfincontrollscorecmnts', () => Serenity.StringEditor], ['Responseweightage', () => Serenity.StringEditor], ['Responsescore', () => Serenity.LookupEditor], ['Responserating', () => Serenity.LookupEditor], ['Responsecmnts', () => Serenity.StringEditor], ['Preauditweightage', () => Serenity.StringEditor], ['Preauditscore', () => Serenity.LookupEditor], ['Preauditrating', () => Serenity.LookupEditor], ['Preauditcmnts', () => Serenity.StringEditor], ['Newinitiativeweight', () => Serenity.StringEditor], ['Newinitiativescore', () => Serenity.LookupEditor], ['Newinitiativerating', () => Serenity.LookupEditor], ['Newinitiativecmnts', () => Serenity.StringEditor], ['Totalscore', () => Serenity.StringEditor], ['totalscore1', () => Serenity.StringEditor], ['totalscore2', () => Serenity.StringEditor], ['totalscore3', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SatisfactionratingForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

