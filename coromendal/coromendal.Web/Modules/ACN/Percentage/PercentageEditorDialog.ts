
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PercentageEditorDialog extends Common.GridEditorDialog<PercentageRow> {
        protected getFormKey() { return PercentageForm.formKey; }
                protected getLocalTextPrefix() { return PercentageRow.localTextPrefix; }
        protected getNameProperty() { return PercentageRow.nameProperty; }
        protected form = new PercentageForm(this.idPrefix);
    }
}