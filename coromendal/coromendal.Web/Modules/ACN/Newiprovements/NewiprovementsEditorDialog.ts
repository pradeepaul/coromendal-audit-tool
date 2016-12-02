
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class NewiprovementsEditorDialog extends Common.GridEditorDialog<NewiprovementsRow> {
        protected getFormKey() { return NewiprovementsForm.formKey; }
                protected getLocalTextPrefix() { return NewiprovementsRow.localTextPrefix; }
        protected getNameProperty() { return NewiprovementsRow.nameProperty; }
        protected form = new NewiprovementsForm(this.idPrefix);
    }
}