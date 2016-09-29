
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RootcauseEditorDialog extends Common.GridEditorDialog<RootcauseRow> {
        protected getFormKey() { return RootcauseForm.formKey; }
                protected getLocalTextPrefix() { return RootcauseRow.localTextPrefix; }
        protected getNameProperty() { return RootcauseRow.nameProperty; }
        protected form = new RootcauseForm(this.idPrefix);
    }
}