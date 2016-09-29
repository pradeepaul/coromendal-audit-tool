

namespace coromendal.ACN {
    export class CategoryForm extends Serenity.PrefixedContext {
        static formKey = 'ACN.Category';
    }

    export interface CategoryForm {
        Categoryname: Serenity.StringEditor;
    }

    [['Categoryid', () => Serenity.IntegerEditor], ['Categoryname', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(CategoryForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}