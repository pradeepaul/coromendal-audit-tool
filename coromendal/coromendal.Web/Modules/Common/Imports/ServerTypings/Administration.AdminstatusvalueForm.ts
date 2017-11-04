

namespace coromendal.Administration {
    export class AdminstatusvalueForm extends Serenity.PrefixedContext {
        static formKey = 'Administration.Adminstatusvalue';
    }

    export interface AdminstatusvalueForm {
        Value: Serenity.StringEditor;
    }

    [['Adminstatusvalueid', () => Serenity.IntegerEditor], ['Value', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(AdminstatusvalueForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}