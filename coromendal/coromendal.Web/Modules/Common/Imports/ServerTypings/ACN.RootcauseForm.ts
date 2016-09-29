

namespace coromendal.ACN {
    export class RootcauseForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Rootcause';
    }

    export interface RootcauseForm {
        AuditobservationId: Serenity.IntegerEditor;
        Rootcause: Serenity.StringEditor;
        Impact: Serenity.StringEditor;
    }

    [['RootcauseId', () => Serenity.IntegerEditor], ['AuditobservationId', () => Serenity.IntegerEditor], ['Rootcause', () => Serenity.StringEditor], ['Impact', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(RootcauseForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}