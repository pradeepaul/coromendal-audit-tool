
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AodEditorDialog extends Common.GridEditorDialog<AodRow> {
        protected getFormKey() { return AodForm.formKey; }
                protected getLocalTextPrefix() { return AodRow.localTextPrefix; }
        protected getNameProperty() { return AodRow.nameProperty; }
        protected form = new AodForm(this.idPrefix);

       
    }
}