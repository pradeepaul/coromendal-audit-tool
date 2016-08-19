
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class FeedbackDialog extends Serenity.EntityDialog<FeedbackRow, any> {
        protected getFormKey() { return FeedbackForm.formKey; }
        protected getIdProperty() { return FeedbackRow.idProperty; }
        protected getLocalTextPrefix() { return FeedbackRow.localTextPrefix; }
        protected getNameProperty() { return FeedbackRow.nameProperty; }
        protected getService() { return FeedbackService.baseUrl; }

        protected form = new FeedbackForm(this.idPrefix);
    }
}