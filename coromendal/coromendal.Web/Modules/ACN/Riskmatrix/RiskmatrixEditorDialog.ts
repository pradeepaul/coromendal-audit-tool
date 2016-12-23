
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RiskmatrixEditorDialog extends Common.GridEditorDialog<RiskmatrixRow> {
        protected getFormKey() { return RiskmatrixForm.formKey; }
                protected getLocalTextPrefix() { return RiskmatrixRow.localTextPrefix; }
        protected getNameProperty() { return RiskmatrixRow.nameProperty; }
        protected form = new RiskmatrixForm(this.idPrefix);
    }
}