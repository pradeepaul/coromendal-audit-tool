
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ScopeexcludeEditorDialog extends Common.GridEditorDialog<ScopeexcludeRow> {
        protected getFormKey() { return ScopeexcludeForm.formKey; }
                protected getLocalTextPrefix() { return ScopeexcludeRow.localTextPrefix; }
        protected form = new ScopeexcludeForm(this.idPrefix);
    }
}