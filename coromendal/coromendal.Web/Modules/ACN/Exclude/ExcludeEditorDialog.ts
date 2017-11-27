
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ExcludeEditorDialog extends Common.GridEditorDialog<ExcludeRow> {
        protected getFormKey() { return ExcludeForm.formKey; }
                protected getLocalTextPrefix() { return ExcludeRow.localTextPrefix; }
        protected form = new ExcludeForm(this.idPrefix);
    }
}