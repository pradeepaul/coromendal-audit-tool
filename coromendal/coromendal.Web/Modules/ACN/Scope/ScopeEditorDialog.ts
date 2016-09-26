
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ScopeEditorDialog extends Common.GridEditorDialog<ScopeRow> {
        protected getFormKey() { return ScopeForm.formKey; }
                protected getLocalTextPrefix() { return ScopeRow.localTextPrefix; }
        protected getNameProperty() { return ScopeRow.nameProperty; }
        protected form = new ScopeForm(this.idPrefix);
    }
}