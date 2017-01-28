
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class DaRreleaseEditorDialog extends Common.GridEditorDialog<DaRreleaseRow> {
        protected getFormKey() { return DaRreleaseForm.formKey; }
                protected getLocalTextPrefix() { return DaRreleaseRow.localTextPrefix; }
        protected form = new DaRreleaseForm(this.idPrefix);
    }
}