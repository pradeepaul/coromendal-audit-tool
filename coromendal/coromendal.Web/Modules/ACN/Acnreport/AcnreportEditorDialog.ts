
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnreportEditorDialog extends Common.GridEditorDialog<AcnreportRow> {
        protected getFormKey() { return AcnreportForm.formKey; }
                protected getLocalTextPrefix() { return AcnreportRow.localTextPrefix; }
        protected getNameProperty() { return AcnreportRow.nameProperty; }
        protected form = new AcnreportForm(this.idPrefix);
    }
}