
namespace coromendal.ACN {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AcnAuditorRefDialog extends Serenity.EntityDialog<AcnAuditorRefRow, any> {
        protected getFormKey() { return AcnAuditorRefForm.formKey; }
        protected getIdProperty() { return AcnAuditorRefRow.idProperty; }
        protected getLocalTextPrefix() { return AcnAuditorRefRow.localTextPrefix; }
        protected getService() { return AcnAuditorRefService.baseUrl; }

        protected form = new AcnAuditorRefForm(this.idPrefix);
    }
}