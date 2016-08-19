
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FeedbackEditorDialog extends Common.GridEditorDialog<FeedbackRow> {
        protected getFormKey() { return FeedbackForm.formKey; }
                protected getLocalTextPrefix() { return FeedbackRow.localTextPrefix; }
        protected getNameProperty() { return FeedbackRow.nameProperty; }
        protected form = new FeedbackForm(this.idPrefix);
    }
}