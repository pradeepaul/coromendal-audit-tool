
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class DaRreleaseDialog extends Serenity.EntityDialog<DaRreleaseRow, any> {
        protected getFormKey() { return DaRreleaseForm.formKey; }
        protected getIdProperty() { return DaRreleaseRow.idProperty; }
        protected getLocalTextPrefix() { return DaRreleaseRow.localTextPrefix; }
        protected getService() { return DaRreleaseService.baseUrl; }

        protected form = new DaRreleaseForm(this.idPrefix);
    }
}