
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.Administration {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AdminstatusvalueEditorDialog extends Common.GridEditorDialog<AdminstatusvalueRow> {
        protected getFormKey() { return AdminstatusvalueForm.formKey; }
                protected getLocalTextPrefix() { return AdminstatusvalueRow.localTextPrefix; }
        protected getNameProperty() { return AdminstatusvalueRow.nameProperty; }
        protected form = new AdminstatusvalueForm(this.idPrefix);
    }
}