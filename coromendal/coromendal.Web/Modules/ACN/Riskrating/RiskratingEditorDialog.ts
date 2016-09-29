
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RiskratingEditorDialog extends Common.GridEditorDialog<RiskratingRow> {
        protected getFormKey() { return RiskratingForm.formKey; }
                protected getLocalTextPrefix() { return RiskratingRow.localTextPrefix; }
        protected getNameProperty() { return RiskratingRow.nameProperty; }
        protected form = new RiskratingForm(this.idPrefix);
    }
}