

namespace coromendal.ACN {
    export class AuditobservationForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Auditobservation';
    }

    export interface AuditobservationForm {
        AcnId: Serenity.IntegerEditor;
        Observationtitle: Serenity.StringEditor;
        Observationsynopsis: Serenity.StringEditor;
        Detailedobservation: Serenity.StringEditor;
        Category: Serenity.IntegerEditor;
        RiskRating: Serenity.IntegerEditor;
        Agreeobservation: Serenity.StringEditor;
        Justification: Serenity.IntegerEditor;
        Suggestion: Serenity.StringEditor;
        Alternateplan: Serenity.StringEditor;
        Name: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Targetdate: Serenity.StringEditor;
    }

    [['AuditobservationId', () => Serenity.IntegerEditor], ['AcnId', () => Serenity.IntegerEditor], ['Observationtitle', () => Serenity.StringEditor], ['Observationsynopsis', () => Serenity.StringEditor], ['Detailedobservation', () => Serenity.StringEditor], ['Category', () => Serenity.IntegerEditor], ['RiskRating', () => Serenity.IntegerEditor], ['Agreeobservation', () => Serenity.StringEditor], ['Justification', () => Serenity.IntegerEditor], ['Suggestion', () => Serenity.StringEditor], ['Alternateplan', () => Serenity.StringEditor], ['Name', () => Serenity.StringEditor], ['Email', () => Serenity.StringEditor], ['Targetdate', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(AuditobservationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}