
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FinalreportEditorDialog extends Common.GridEditorDialog<FinalreportRow> {
        protected getFormKey() { return FinalreportForm.formKey; }
                protected getLocalTextPrefix() { return FinalreportRow.localTextPrefix; }
        protected getNameProperty() { return FinalreportRow.nameProperty; }
        protected form = new FinalreportForm(this.idPrefix);
    }
}