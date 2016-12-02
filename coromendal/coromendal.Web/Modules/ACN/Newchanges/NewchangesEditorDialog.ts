
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class NewchangesEditorDialog extends Common.GridEditorDialog<NewchangesRow> {
        protected getFormKey() { return NewchangesForm.formKey; }
                protected getLocalTextPrefix() { return NewchangesRow.localTextPrefix; }
        protected getNameProperty() { return NewchangesRow.nameProperty; }
        protected form = new NewchangesForm(this.idPrefix);
    }
}