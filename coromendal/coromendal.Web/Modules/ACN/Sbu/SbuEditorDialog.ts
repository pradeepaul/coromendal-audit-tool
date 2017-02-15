
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SbuEditorDialog extends Common.GridEditorDialog<SbuRow> {
        protected getFormKey() { return SbuForm.formKey; }
                protected getLocalTextPrefix() { return SbuRow.localTextPrefix; }
        protected getNameProperty() { return SbuRow.nameProperty; }
        protected form = new SbuForm(this.idPrefix);
    }
}