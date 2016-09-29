
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnFeedbackDialog extends Serenity.EntityDialog<AcnFeedbackRow, any> {
        protected getFormKey() { return AcnFeedbackForm.formKey; }
        protected getIdProperty() { return AcnFeedbackRow.idProperty; }
        protected getLocalTextPrefix() { return AcnFeedbackRow.localTextPrefix; }
        protected getNameProperty() { return AcnFeedbackRow.nameProperty; }
        protected getService() { return AcnFeedbackService.baseUrl; }

        protected form = new AcnFeedbackForm(this.idPrefix);
    }
}