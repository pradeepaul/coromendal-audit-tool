

namespace coromendal.Adminstration {
    export class LocationForm extends Serenity.PrefixedContext {
        static formKey = 'Adminstration.Location';
    }

    export interface LocationForm {
        Locname: Serenity.StringEditor;
    }

    [['Locid', () => Serenity.IntegerEditor], ['Locname', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(LocationForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}