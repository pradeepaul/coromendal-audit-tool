
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnFeedbackRetailDialog extends Serenity.EntityDialog<AcnFeedbackRetailRow, any> {
        protected getFormKey() { return AcnFeedbackRetailForm.formKey; }
        protected getIdProperty() { return AcnFeedbackRetailRow.idProperty; }
        protected getLocalTextPrefix() { return AcnFeedbackRetailRow.localTextPrefix; }
        protected getNameProperty() { return AcnFeedbackRetailRow.nameProperty; }
        protected getService() { return AcnFeedbackRetailService.baseUrl; }

        protected form = new AcnFeedbackRetailForm(this.idPrefix);
    }
}