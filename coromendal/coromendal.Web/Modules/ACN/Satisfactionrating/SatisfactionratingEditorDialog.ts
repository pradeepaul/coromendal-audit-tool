
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SatisfactionratingEditorDialog extends Common.GridEditorDialog<SatisfactionratingRow> {
        protected getFormKey() { return SatisfactionratingForm.formKey; }
                protected getLocalTextPrefix() { return SatisfactionratingRow.localTextPrefix; }
        protected getNameProperty() { return SatisfactionratingRow.nameProperty; }
        protected form = new SatisfactionratingForm(this.idPrefix);
    }
}