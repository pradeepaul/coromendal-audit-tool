
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FeedbackvalueEditorDialog extends Common.GridEditorDialog<FeedbackvalueRow> {
        protected getFormKey() { return FeedbackvalueForm.formKey; }
                protected getLocalTextPrefix() { return FeedbackvalueRow.localTextPrefix; }
        protected getNameProperty() { return FeedbackvalueRow.nameProperty; }
        protected form = new FeedbackvalueForm(this.idPrefix);
    }
}