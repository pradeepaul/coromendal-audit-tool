
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ConformationEditorDialog extends Common.GridEditorDialog<ConformationRow> {
        protected getFormKey() { return ConformationForm.formKey; }
                protected getLocalTextPrefix() { return ConformationRow.localTextPrefix; }
        protected getNameProperty() { return ConformationRow.nameProperty; }
        protected form = new ConformationForm(this.idPrefix);
    }
}