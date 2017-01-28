
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FinalstatusvalueEditorDialog extends Common.GridEditorDialog<FinalstatusvalueRow> {
        protected getFormKey() { return FinalstatusvalueForm.formKey; }
                protected getLocalTextPrefix() { return FinalstatusvalueRow.localTextPrefix; }
        protected getNameProperty() { return FinalstatusvalueRow.nameProperty; }
        protected form = new FinalstatusvalueForm(this.idPrefix);
    }
}