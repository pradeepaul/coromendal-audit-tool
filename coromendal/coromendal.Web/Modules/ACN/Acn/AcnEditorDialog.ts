
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnEditorDialog extends Common.GridEditorDialog<AcnRow> {
        protected getFormKey() { return AcnForm.formKey; }
                protected getLocalTextPrefix() { return AcnRow.localTextPrefix; }
        protected getNameProperty() { return AcnRow.nameProperty; }
        protected form = new AcnForm(this.idPrefix);
    }
}