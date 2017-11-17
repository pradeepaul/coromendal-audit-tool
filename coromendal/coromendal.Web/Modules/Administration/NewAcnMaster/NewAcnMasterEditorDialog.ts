
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class NewAcnMasterEditorDialog extends Common.GridEditorDialog<NewAcnMasterRow> {
        protected getFormKey() { return NewAcnMasterForm.formKey; }
                protected getLocalTextPrefix() { return NewAcnMasterRow.localTextPrefix; }
        protected getNameProperty() { return NewAcnMasterRow.nameProperty; }
        protected form = new NewAcnMasterForm(this.idPrefix);
    }
}