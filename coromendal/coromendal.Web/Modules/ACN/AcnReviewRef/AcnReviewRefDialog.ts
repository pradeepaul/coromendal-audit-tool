
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnReviewRefDialog extends Serenity.EntityDialog<AcnReviewRefRow, any> {
        protected getFormKey() { return AcnReviewRefForm.formKey; }
        protected getIdProperty() { return AcnReviewRefRow.idProperty; }
        protected getLocalTextPrefix() { return AcnReviewRefRow.localTextPrefix; }
        protected getService() { return AcnReviewRefService.baseUrl; }

        protected form = new AcnReviewRefForm(this.idPrefix);
    }
}