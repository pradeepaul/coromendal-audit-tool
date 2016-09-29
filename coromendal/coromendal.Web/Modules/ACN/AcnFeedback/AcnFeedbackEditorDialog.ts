
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnFeedbackEditorDialog extends Common.GridEditorDialog<AcnFeedbackRow> {
        protected getFormKey() { return AcnFeedbackForm.formKey; }
                protected getLocalTextPrefix() { return AcnFeedbackRow.localTextPrefix; }
        protected getNameProperty() { return AcnFeedbackRow.nameProperty; }
        protected form = new AcnFeedbackForm(this.idPrefix);
    }
}