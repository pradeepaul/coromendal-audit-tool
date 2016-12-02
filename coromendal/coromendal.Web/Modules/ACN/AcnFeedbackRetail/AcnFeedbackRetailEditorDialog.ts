
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnFeedbackRetailEditorDialog extends Common.GridEditorDialog<AcnFeedbackRetailRow> {
        protected getFormKey() { return AcnFeedbackRetailForm.formKey; }
                protected getLocalTextPrefix() { return AcnFeedbackRetailRow.localTextPrefix; }
        protected getNameProperty() { return AcnFeedbackRetailRow.nameProperty; }
        protected form = new AcnFeedbackRetailForm(this.idPrefix);
    }
}