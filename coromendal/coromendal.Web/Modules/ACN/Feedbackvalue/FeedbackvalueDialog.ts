
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FeedbackvalueDialog extends Serenity.EntityDialog<FeedbackvalueRow, any> {
        protected getFormKey() { return FeedbackvalueForm.formKey; }
        protected getIdProperty() { return FeedbackvalueRow.idProperty; }
        protected getLocalTextPrefix() { return FeedbackvalueRow.localTextPrefix; }
        protected getNameProperty() { return FeedbackvalueRow.nameProperty; }
        protected getService() { return FeedbackvalueService.baseUrl; }

        protected form = new FeedbackvalueForm(this.idPrefix);
    }
}